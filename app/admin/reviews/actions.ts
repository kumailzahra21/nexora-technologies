
"use server";

import { createClient } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";

type ReviewStatus = "pending" | "approved" | "rejected";

export async function updateReviewStatus(formData: FormData) {
    const id = String(
        formData.get("review_id") || formData.get("reviewId") || ""
    ).trim();

    const requestedStatus = String(formData.get("status") || "");

    const allowedStatuses: ReviewStatus[] = [
        "pending",
        "approved",
        "rejected",
    ];

    if (
        !id ||
        !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) ||
        !allowedStatuses.includes(requestedStatus as ReviewStatus)
    ) {
        throw new Error("Invalid review update request.");
    }

    const status = requestedStatus as ReviewStatus;
    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
        throw new Error("Please sign in to continue.");
    }

    const { data: isAdmin, error: adminError } =
        await supabase.rpc("is_admin");

    if (adminError || isAdmin !== true) {
        throw new Error("You are not authorized to perform this action.");
    }

    const updateValues = {
        status,
        reviewed_at:
            status === "pending" ? null : new Date().toISOString(),
        reviewed_by: status === "pending" ? null : user.id,
    };

    const { data, error: updateError } = await supabase
        .from("client_reviews")
        .update(updateValues)
        .eq("id", id)
        .select("id")
        .maybeSingle();

    if (updateError) {
        throw new Error(updateError.message);
    }

    if (!data) {
        throw new Error("Review not found or update not permitted.");
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

    revalidatePath("/admin/reviews");
    revalidatePath("/admin");

    if (auditError) {
        throw new Error(
            "Review updated, but audit logging failed: " + auditError.message
        );
    }
}
