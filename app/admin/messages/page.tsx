
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { updateMessageStatus } from "./actions";

type Message = {
    id: string;
    full_name: string;
    email: string;
    subject: string;
    message: string;
    status: "unread" | "read" | "replied" | "archived";
    created_at: string;
};

const filters = ["all", "unread", "read", "replied", "archived"] as const;

function formatDate(value: string) {
    return new Date(value).toLocaleString("en", {
        dateStyle: "medium",
        timeStyle: "short",
    });
}

function statusStyle(status: Message["status"]) {
    const styles = {
        unread: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
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

    const { data: isAdmin } = await supabase.rpc("is_admin");

    if (isAdmin !== true) redirect("/admin/login");

    let query = supabase
        .from("contact_messages")
        .select("id, full_name, email, subject, message, status, created_at")
        .order("created_at", { ascending: false });

    if (selectedStatus !== "all") {
        query = query.eq("status", selectedStatus);
    }

    const { data, error } = await query;

    const { count: total } = await supabase
        .from("contact_messages")
        .select("*", { count: "exact", head: true });

    const { count: unread } = await supabase
        .from("contact_messages")
        .select("*", { count: "exact", head: true })
        .eq("status", "unread");

    const { count: replied } = await supabase
        .from("contact_messages")
        .select("*", { count: "exact", head: true })
        .eq("status", "replied");

    const stats = [
        { label: "Total Messages", count: total ?? 0 },
        { label: "Unread", count: unread ?? 0 },
        { label: "Replied", count: replied ?? 0 },
    ];

    return (
        <main className="min-h-screen bg-[#071426] px-4 py-10 text-white sm:px-8">
            <div className="mx-auto max-w-7xl">

                <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                            Nexora Technologies
                        </p>
                        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
                            Contact Messages
                        </h1>
                        <p className="mt-2 text-sm text-slate-400">
                            Manage messages received from your website.
                        </p>
                    </div>

                    <Link
                        href="/admin"
                        className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-400/40"
                    >
                        ← Dashboard
                    </Link>
                </header>

                <section className="mb-8 grid gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-2xl border border-white/10 bg-[#10243d] p-5"
                        >
                            <p className="text-sm text-slate-400">{stat.label}</p>
                            <p className="mt-3 text-3xl font-black text-cyan-300">
                                {stat.count}
                            </p>
                        </div>
                    ))}
                </section>

                <nav className="mb-6 flex flex-wrap gap-2">
                    {filters.map((filter) => (
                        <Link
                            key={filter}
                            href={
                                filter === "all"
                                    ? "/admin/messages"
                                    : `/admin/messages?status=${filter}`
                            }
                            className={`rounded-full border px-4 py-2 text-sm font-semibold capitalize transition ${selectedStatus === filter
                                    ? "border-cyan-400 bg-cyan-400/15 text-cyan-300"
                                    : "border-white/10 bg-white/5 text-slate-400 hover:text-white"
                                }`}
                        >
                            {filter}
                        </Link>
                    ))}
                </nav>

                {error && (
                    <div className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-rose-200">
                        Could not load messages: {error.message}
                    </div>
                )}

                {!error && (!data || data.length === 0) && (
                    <div className="rounded-3xl border border-dashed border-white/15 bg-[#10243d] p-14 text-center">
                        <div className="text-4xl text-cyan-300">✉</div>
                        <h2 className="mt-4 text-xl font-bold">No messages found</h2>
                        <p className="mt-2 text-sm text-slate-400">
                            New contact messages will appear here.
                        </p>
                    </div>
                )}

                <section className="space-y-5">
                    {(data as Message[] | null)?.map((item) => (
                        <article
                            key={item.id}
                            className="overflow-hidden rounded-3xl border border-white/10 bg-[#10243d]"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
                                <div>
                                    <h2 className="text-xl font-bold">{item.subject}</h2>
                                    <p className="mt-2 text-sm text-slate-300">
                                        {item.full_name}
                                    </p>
                                    <a
                                        href={`mailto:${item.email}`}
                                        className="mt-1 block text-sm text-cyan-300 hover:underline"
                                    >
                                        {item.email}
                                    </a>
                                    <p className="mt-2 text-xs text-slate-500">
                                        {formatDate(item.created_at)}
                                    </p>
                                </div>

                                <span
                                    className={`rounded-full border px-3 py-1.5 text-xs font-bold capitalize ${statusStyle(item.status)}`}
                                >
                                    {item.status}
                                </span>
                            </div>

                            <div className="p-5 sm:p-6">
                                <p className="whitespace-pre-wrap text-sm leading-7 text-slate-300">
                                    {item.message}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 border-t border-white/10 bg-[#0b1c31] p-5">
                                {item.status !== "read" && item.status !== "archived" && (
                                    <form action={updateMessageStatus}>
                                        <input type="hidden" name="message_id" value={item.id} />
                                        <input type="hidden" name="status" value="read" />
                                        <button className="rounded-xl border border-blue-400/30 bg-blue-400/10 px-4 py-2.5 text-sm font-bold text-blue-300 hover:bg-blue-400/20">
                                            Mark as Read
                                        </button>
                                    </form>
                                )}

                                {item.status !== "replied" && item.status !== "archived" && (
                                    <form action={updateMessageStatus}>
                                        <input type="hidden" name="message_id" value={item.id} />
                                        <input type="hidden" name="status" value="replied" />
                                        <button className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-400">
                                            Mark as Replied
                                        </button>
                                    </form>
                                )}

                                {item.status !== "archived" && (
                                    <form action={updateMessageStatus}>
                                        <input type="hidden" name="message_id" value={item.id} />
                                        <input type="hidden" name="status" value="archived" />
                                        <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-slate-300 hover:bg-white/10">
                                            Archive
                                        </button>
                                    </form>
                                )}

                                {item.status === "archived" && (
                                    <form action={updateMessageStatus}>
                                        <input type="hidden" name="message_id" value={item.id} />
                                        <input type="hidden" name="status" value="unread" />
                                        <button className="rounded-xl border border-cyan-400/30 px-4 py-2.5 text-sm font-bold text-cyan-300">
                                            Restore
                                        </button>
                                    </form>
                                )}
                            </div>
                        </article>
                    ))}
                </section>

            </div>
        </main>
    );
}
