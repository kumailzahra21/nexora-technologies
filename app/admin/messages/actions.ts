
"use server";

import { createClient } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";

type MessageStatus = "unread" | "read" | "replied" | "archived";

export async function updateMessageStatus(formData: FormData) {
    const id = String(
        formData.get("messageId") || formData.get("message_id") || ""
    ).trim();

    const requestedStatus = String(formData.get("status") || "");

    const allowedStatuses: MessageStatus[] = [
        "unread",
        "read",
        "replied",
        "archived",
    ];

    if (
        !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) ||
        !allowedStatuses.includes(requestedStatus as MessageStatus)
    ) {
        throw new Error("Invalid message update request.");
    }

    const status = requestedStatus as MessageStatus;
    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
        throw new Error("Please sign in.");
    }

    const { data: isAdmin, error: adminError } =
        await supabase.rpc("is_admin");

    if (adminError || isAdmin !== true) {
        throw new Error("You are not authorized.");
    }

    const { data, error } = await supabase
        .from("contact_messages")
        .update({ status })
        .eq("id", id)
        .select("id")
        .maybeSingle();

    if (error) {
        throw new Error(error.message);
    }

    if (!data) {
        throw new Error("Message not found or update not permitted.");
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

    revalidatePath("/admin/messages");
    revalidatePath("/admin");

    if (auditError) {
        throw new Error(
            "Message updated, but audit logging failed: " + auditError.message
        );
    }
}
