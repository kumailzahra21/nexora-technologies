
"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase-server";

type ApplicationStatus = "approved" | "rejected";

export async function updateApplicationStatus(formData: FormData) {
    const id = String(
        formData.get("applicationId") || formData.get("id") || ""
    ).trim();

    const requestedStatus = String(formData.get("status") || "");

    const allowedStatuses: ApplicationStatus[] = ["approved", "rejected"];

    if (
        !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
    ) {
        throw new Error("Invalid application ID.");
    }

    if (!allowedStatuses.includes(requestedStatus as ApplicationStatus)) {
        throw new Error("Invalid application status.");
    }

    const status = requestedStatus as ApplicationStatus;
    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
        throw new Error("Please log in.");
    }

    const { data: isAdmin, error: adminError } =
        await supabase.rpc("is_admin");

    if (adminError || isAdmin !== true) {
        throw new Error("You are not authorized.");
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

    if (error) {
        throw new Error(error.message);
    }

    if (!data) {
        throw new Error("Application not found or already reviewed.");
    }

    const { error: auditError } = await supabase
        .from("admin_audit_logs")
        .insert({
            actor_id: user.id,
            action:
                status === "approved"
                    ? "application_approved"
                    : "application_rejected",
            target_table: "internship_applications",
            target_id: id,
            details: { new_status: status },
        });

    revalidatePath("/admin/applications");
    revalidatePath("/admin");

    if (auditError) {
        throw new Error(
            "Application updated, but audit logging failed: " + auditError.message
        );
    }
}
