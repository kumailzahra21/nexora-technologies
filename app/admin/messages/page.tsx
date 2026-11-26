
import { connection } from "next/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase-server";
import { updateMessageStatus } from "./actions";

export const instant = false;

type MessageStatus = "unread" | "read" | "replied" | "archived";

interface ContactMessage {
    id: string;
    full_name: string;
    email: string;
    subject: string;
    message: string;
    status: MessageStatus;
    created_at: string;
}

const filters = ["all", "unread", "read", "replied", "archived"] as const;

function statusStyle(status: MessageStatus) {
    const styles: Record<MessageStatus, string> = {
        unread: "bg-amber-400/10 text-amber-300 border-amber-400/30",
        read: "bg-blue-400/10 text-blue-300 border-blue-400/30",
        replied: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
        archived: "bg-slate-400/10 text-slate-300 border-slate-400/30",
    };

    return styles[status];
}

export default async function MessagesPage({
    searchParams,
}: {
    searchParams: Promise<{ status?: string }>;
}) {
    await connection();

    const params = await searchParams;

    const selectedStatus = filters.includes(
        params.status as (typeof filters)[number]
    )
        ? (params.status as (typeof filters)[number])
        : "all";

    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) redirect("/admin/login");

    const { data: isAdmin, error: adminError } =
        await supabase.rpc("is_admin");

    if (adminError || isAdmin !== true) {
        redirect("/admin/login");
    }

    let query = supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

    if (selectedStatus !== "all") {
        query = query.eq("status", selectedStatus);
    }

    const { data, error } = await query;
    const messages = (data ?? []) as ContactMessage[];

    const [
        { count: totalCount },
        { count: unreadCount },
        { count: readCount },
        { count: repliedCount },
        { count: archivedCount },
    ] = await Promise.all([
        supabase.from("contact_messages").select("*", { count: "exact", head: true }),
        supabase.from("contact_messages").select("*", { count: "exact", head: true }).eq("status", "unread"),
        supabase.from("contact_messages").select("*", { count: "exact", head: true }).eq("status", "read"),
        supabase.from("contact_messages").select("*", { count: "exact", head: true }).eq("status", "replied"),
        supabase.from("contact_messages").select("*", { count: "exact", head: true }).eq("status", "archived"),
    ]);

    const stats = [
        { label: "Total Messages", value: totalCount ?? 0 },
        { label: "Unread", value: unreadCount ?? 0 },
        { label: "Read", value: readCount ?? 0 },
        { label: "Replied", value: repliedCount ?? 0 },
        { label: "Archived", value: archivedCount ?? 0 },
    ];

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8 md:px-10">
            <div className="max-w-7xl mx-auto space-y-8">
                <header className="border-b border-slate-800 pb-7">
                    <Link href="/admin" className="text-sm text-cyan-400 hover:text-cyan-300">
                        ← Back to Dashboard
                    </Link>

                    <p className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mt-5">
                        Nexora Technologies
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold mt-2">
                        Contact Messages
                    </h1>

                    <p className="text-slate-400 text-sm mt-2">
                        Review and manage inquiries submitted through your website.
                    </p>
                    <p className="text-xs text-slate-500 mt-3">
                        Signed in as {user.email}
                    </p>
                </header>

                <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {stats.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                            <p className="text-sm text-slate-400">{item.label}</p>
                            <p className="text-3xl font-bold text-white mt-3">{item.value}</p>
                        </div>
                    ))}
                </section>

                <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <h2 className="text-lg font-semibold">Website Inquiries</h2>

                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => (
                                <Link
                                    key={filter}
                                    href={filter === "all" ? "/admin/messages" : `/admin/messages?status=${filter}`}
                                    className={`px-3 py-2 rounded-lg text-xs font-semibold capitalize border transition ${selectedStatus === filter
                                            ? "bg-cyan-400 text-slate-950 border-cyan-400"
                                            : "bg-slate-950 text-slate-300 border-slate-700 hover:border-cyan-400"
                                        }`}
                                >
                                    {filter}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {error ? (
                        <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-5 text-red-300">
                            Could not load messages: {error.message}
                        </div>
                    ) : messages.length === 0 ? (
                        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-10 text-center text-slate-400">
                            No messages found.
                        </div>
                    ) : (
                        <div className="mt-6 space-y-5">
                            {messages.map((item) => (
                                <article key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 md:p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {item.full_name}
                                            </h3>
                                            <a href={`mailto:${item.email}`} className="text-sm text-cyan-400 hover:underline">
                                                {item.email}
                                            </a>
                                        </div>

                                        <span className={`text-xs px-3 py-1 rounded-full border capitalize self-start ${statusStyle(item.status)}`}>
                                            {item.status}
                                        </span>
                                    </div>

                                    <p className="text-sm font-semibold text-slate-200 mt-5">
                                        {item.subject}
                                    </p>

                                    <p className="text-sm text-slate-400 leading-7 mt-2 whitespace-pre-wrap">
                                        {item.message}
                                    </p>

                                    <p className="text-xs text-slate-600 mt-5">
                                        Received: {new Date(item.created_at).toLocaleString("en-GB")}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-5">
                                        <a
                                            href={`mailto:${item.email}?subject=${encodeURIComponent(`Re: ${item.subject}`)}`}
                                            className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition"
                                        >
                                            Reply by Email
                                        </a>

                                        {(["unread", "read", "replied", "archived"] as const)
                                            .filter((status) => status !== item.status)
                                            .map((status) => (
                                                <form key={status} action={updateMessageStatus}>
                                                    <input type="hidden" name="messageId" value={item.id} />
                                                    <input type="hidden" name="status" value={status} />
                                                    <button
                                                        type="submit"
                                                        className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold capitalize text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition"
                                                    >
                                                        Mark {status}
                                                    </button>
                                                </form>
                                            ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
