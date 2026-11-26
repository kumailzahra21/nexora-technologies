
"use server";

import { createClient } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";

export async function updateReviewStatus(formData: FormData) {
    const id = String(formData.get("review_id") || "");
    const status = String(formData.get("status") || "");

    const allowedStatuses = ["pending", "approved", "rejected"];

    if (!id || !allowedStatuses.includes(status)) {
        throw new Error("Invalid review update request.");
    }

    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Please sign in to continue.");
    }

    const { data: isAdmin, error: adminError } =
        await supabase.rpc("is_admin");

    if (adminError || isAdmin !== true) {
        throw new Error("You are not authorized to manage reviews.");
    }

    const { error: updateError } = await supabase
        .from("client_reviews")
        .update({
            status,
            reviewed_at: new Date().toISOString(),
            reviewed_by: user.id,
        })
        .eq("id", id);

    if (updateError) {
        throw new Error(updateError.message);
    }

    const { error: auditError } = await supabase
        .from("admin_audit_logs")
        .insert({
            actor_id: user.id,
            action: `client_review_${status}`,
            target_table: "client_reviews",
            target_id: id,
            details: { new_status: status },
        });

    if (auditError) {
        throw new Error(
            "Review updated, but audit logging failed: " + auditError.message
        );
    }

    revalidatePath("/admin/reviews");
    revalidatePath("/admin");
}
