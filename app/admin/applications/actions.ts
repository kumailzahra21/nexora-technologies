
"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase-server";

export async function updateApplicationStatus(formData: FormData) {
    const id = String(formData.get("id") || "");
    const status = String(formData.get("status") || "");

    if (!/^[0-9a-f-]{36}$/i.test(id)) {
        throw new Error("Invalid application ID.");
    }

    if (!["approved", "rejected"].includes(status)) {
        throw new Error("Invalid application status.");
    }

    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("Please log in.");

    const { data: isAdmin, error: adminError } =
        await supabase.rpc("is_admin");

    if (adminError || isAdmin !== true) {
        throw new Error("Admin access required.");
    }

    const { data, error } = await supabase
        .from("internship_applications")
        .update({
            status,
            reviewed_at: new Date().toISOString(),
            reviewed_by: user.id,
        })
        .eq("id", id)
        .eq("status", "pending")
        .select("id")
        .maybeSingle();

    if (error) throw new Error(error.message);
    if (!data) throw new Error("Application not found or already reviewed.");

    const { error: auditError } = await supabase
        .from("admin_audit_logs")
        .insert({
            actor_id: user.id,
            action: status === "approved"
                ? "application_approved"
                : "application_rejected",
            target_table: "internship_applications",
            target_id: id,
        });

    if (auditError) {
        throw new Error("Status updated, but audit log could not be saved.");
    }

    revalidatePath("/admin/applications");
    revalidatePath("/admin");
}
