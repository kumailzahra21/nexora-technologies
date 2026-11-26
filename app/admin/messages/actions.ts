
"use server";

import { createClient } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";

export async function updateMessageStatus(formData: FormData) {
    const id = String(formData.get("message_id") || "");
    const status = String(formData.get("status") || "");

    const allowedStatuses = ["unread", "read", "replied", "archived"];

    if (!id || !allowedStatuses.includes(status)) {
        throw new Error("Invalid message update request.");
    }

    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("Please sign in.");
    }

    const { data: isAdmin, error: adminError } =
        await supabase.rpc("is_admin");

    if (adminError || isAdmin !== true) {
        throw new Error("You are not authorized.");
    }

    const { error } = await supabase
        .from("contact_messages")
        .update({ status })
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    const { error: auditError } = await supabase
        .from("admin_audit_logs")
        .insert({
            actor_id: user.id,
            action: `contact_message_${status}`,
            target_table: "contact_messages",
            target_id: id,
            details: { new_status: status },
        });

    if (auditError) {
        throw new Error(
            "Message status updated, but audit logging failed: " + auditError.message
        );
    }

    revalidatePath("/admin/messages");
    revalidatePath("/admin");
}
