
"use server";

import { createClient } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";

export async function addCertificate(formData: FormData) {
    const recipientName = String(formData.get("recipient_name") || "").trim();
    const certificateNumber = String(formData.get("certificate_number") || "").trim();
    const internshipField = String(formData.get("internship_field") || "").trim();
    const issueDate = String(formData.get("issue_date") || "").trim();
    const expiryDate = String(formData.get("expiry_date") || "").trim();

    if (
        recipientName.length < 2 ||
        recipientName.length > 120 ||
        !certificateNumber ||
        certificateNumber.length > 100 ||
        !internshipField ||
        internshipField.length > 150
    ) {
        throw new Error("Please provide valid certificate details.");
    }

    if (issueDate && expiryDate && expiryDate < issueDate) {
        throw new Error("Expiry date cannot be before issue date.");
    }

    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("Please sign in.");

    const { data: isAdmin, error: adminError } = await supabase.rpc("is_admin");

    if (adminError || isAdmin !== true) {
        throw new Error("You are not authorized.");
    }

    const { data, error } = await supabase
        .from("certificates")
        .insert({
            recipient_name: recipientName,
            certificate_number: certificateNumber,
            internship_field: internshipField,
            issue_date: issueDate || null,
            expiry_date: expiryDate || null,
            status: "pending",
        })
        .select("id")
        .single();

    if (error) throw new Error(error.message);

    const { error: auditError } = await supabase
        .from("admin_audit_logs")
        .insert({
            actor_id: user.id,
            action: "certificate_created",
            target_table: "certificates",
            target_id: data.id,
            details: { certificate_number: certificateNumber },
        });

    if (auditError) {
        throw new Error("Certificate created, but audit logging failed: " + auditError.message);
    }

    revalidatePath("/admin/certificates");
    revalidatePath("/admin");
}

export async function updateCertificateStatus(formData: FormData) {
    const id = String(formData.get("certificate_id") || "");
    const status = String(formData.get("status") || "");

    const allowedStatuses = ["pending", "issued", "revoked"];

    if (!id || !allowedStatuses.includes(status)) {
        throw new Error("Invalid certificate update request.");
    }

    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("Please sign in.");

    const { data: isAdmin, error: adminError } = await supabase.rpc("is_admin");

    if (adminError || isAdmin !== true) {
        throw new Error("You are not authorized.");
    }

    const updateValues: {
        status: string;
        approved_by?: string | null;
        approved_at?: string | null;
    } = { status };

    if (status === "issued") {
        updateValues.approved_by = user.id;
        updateValues.approved_at = new Date().toISOString();
    }

    if (status === "pending") {
        updateValues.approved_by = null;
        updateValues.approved_at = null;
    }

    const { error } = await supabase
        .from("certificates")
        .update(updateValues)
        .eq("id", id);

    if (error) throw new Error(error.message);

    const { error: auditError } = await supabase
        .from("admin_audit_logs")
        .insert({
            actor_id: user.id,
            action: `certificate_${status}`,
            target_table: "certificates",
            target_id: id,
            details: { new_status: status },
        });

    if (auditError) {
        throw new Error("Certificate updated, but audit logging failed: " + auditError.message);
    }

    revalidatePath("/admin/certificates");
    revalidatePath("/admin");
}
