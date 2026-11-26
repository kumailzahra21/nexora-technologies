
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { updateReviewStatus } from "./actions";

type Review = {
    id: string;
    full_name: string;
    email: string | null;
    role: string | null;
    review: string;
    rating: number;
    status: "pending" | "approved" | "rejected";
    created_at: string;
};

const filters = ["all", "pending", "approved", "rejected"] as const;

function dateLabel(value: string) {
    return new Date(value).toLocaleString("en", {
        dateStyle: "medium",
        timeStyle: "short",
    });
}

function statusStyle(status: Review["status"]) {
    if (status === "approved")
        return "border-emerald-400/30 bg-emerald-400/10 text-emerald-300";

    if (status === "rejected")
        return "border-rose-400/30 bg-rose-400/10 text-rose-300";

    return "border-amber-400/30 bg-amber-400/10 text-amber-300";
}

export default async function ReviewsAdminPage({
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
        .from("client_reviews")
        .select("id, full_name, email, role, review, rating, status, created_at")
        .order("created_at", { ascending: false });

    if (selectedStatus !== "all") {
        query = query.eq("status", selectedStatus);
    }

    const { data, error } = await query;

    const { count: total } = await supabase
        .from("client_reviews")
        .select("*", { count: "exact", head: true });

    const { count: pending } = await supabase
        .from("client_reviews")
        .select("*", { count: "exact", head: true })
        .eq("status", "pending");

    const { count: approved } = await supabase
        .from("client_reviews")
        .select("*", { count: "exact", head: true })
        .eq("status", "approved");

    const { count: rejected } = await supabase
        .from("client_reviews")
        .select("*", { count: "exact", head: true })
        .eq("status", "rejected");

    const stats = [
        { label: "Total Reviews", count: total ?? 0 },
        { label: "Pending", count: pending ?? 0 },
        { label: "Approved", count: approved ?? 0 },
        { label: "Rejected", count: rejected ?? 0 },
    ];

    return (
        <main className="min-h-screen bg-[#071426] px-4 py-10 text-white sm:px-8">
            <div className="mx-auto max-w-7xl">
                <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                            Nexora Technologies · Administration
                        </p>
                        <h1 className="mt-3 text-3xl font-black sm:text-4xl">
                            Client Reviews
                        </h1>
                        <p className="mt-2 text-sm text-slate-400">
                            Review and manage customer feedback before publication.
                        </p>
                    </div>

                    <Link
                        href="/admin"
                        className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-400/40"
                    >
                        ← Dashboard
                    </Link>
                </header>

                <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
                                    ? "/admin/reviews"
                                    : `/admin/reviews?status=${filter}`
                            }
                            className={`rounded-full border px-4 py-2 text-sm font-semibold capitalize ${selectedStatus === filter
                                    ? "border-cyan-400 bg-cyan-400/15 text-cyan-300"
                                    : "border-white/10 bg-white/5 text-slate-400 hover:text-white"
                                }`}
                        >
                            {filter}
                        </Link>
                    ))}
                </nav>

                {error && (
                    <div className="mb-6 rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-rose-200">
                        Could not load reviews: {error.message}
                    </div>
                )}

                {!error && (!data || data.length === 0) && (
                    <div className="rounded-3xl border border-dashed border-white/15 bg-[#10243d] p-14 text-center">
                        <div className="text-4xl text-cyan-300">★</div>
                        <h2 className="mt-4 text-xl font-bold">No reviews found</h2>
                        <p className="mt-2 text-sm text-slate-400">
                            Submitted reviews will appear here for your approval.
                        </p>
                    </div>
                )}

                <section className="space-y-5">
                    {(data as Review[] | null)?.map((item) => (
                        <article
                            key={item.id}
                            className="overflow-hidden rounded-3xl border border-white/10 bg-[#10243d]"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
                                <div>
                                    <h2 className="text-xl font-bold">{item.full_name}</h2>
                                    {item.role && (
                                        <p className="mt-1 text-sm text-cyan-300">{item.role}</p>
                                    )}
                                    {item.email && (
                                        <p className="mt-1 text-sm text-slate-400">{item.email}</p>
                                    )}
                                    <p className="mt-2 text-xs text-slate-500">
                                        Submitted: {dateLabel(item.created_at)}
                                    </p>
                                </div>

                                <span
                                    className={`rounded-full border px-3 py-1.5 text-xs font-bold capitalize ${statusStyle(item.status)}`}
                                >
                                    {item.status}
                                </span>
                            </div>

                            <div className="p-5 sm:p-6">
                                <p className="text-xl tracking-widest text-amber-300">
                                    {"★".repeat(item.rating)}
                                    <span className="text-slate-600">
                                        {"★".repeat(5 - item.rating)}
                                    </span>
                                </p>

                                <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-300">
                                    {item.review}
                                </p>
                            </div>

                            {item.status === "pending" && (
                                <div className="flex flex-wrap gap-3 border-t border-white/10 bg-[#0b1c31] p-5">
                                    <form action={updateReviewStatus}>
                                        <input type="hidden" name="review_id" value={item.id} />
                                        <input type="hidden" name="status" value="approved" />
                                        <button className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-400">
                                            ✓ Approve Review
                                        </button>
                                    </form>

                                    <form action={updateReviewStatus}>
                                        <input type="hidden" name="review_id" value={item.id} />
                                        <input type="hidden" name="status" value="rejected" />
                                        <button className="rounded-xl border border-rose-400/40 bg-rose-400/10 px-5 py-2.5 text-sm font-bold text-rose-200 hover:bg-rose-400/20">
                                            ✕ Reject Review
                                        </button>
                                    </form>
                                </div>
                            )}

                            {item.status === "approved" && (
                                <div className="border-t border-white/10 bg-[#0b1c31] p-5">
                                    <form action={updateReviewStatus}>
                                        <input type="hidden" name="review_id" value={item.id} />
                                        <input type="hidden" name="status" value="pending" />
                                        <button className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2.5 text-sm font-bold text-amber-300">
                                            Move Back to Pending
                                        </button>
                                    </form>
                                </div>
                            )}

                            {item.status === "rejected" && (
                                <div className="border-t border-white/10 bg-[#0b1c31] p-5">
                                    <form action={updateReviewStatus}>
                                        <input type="hidden" name="review_id" value={item.id} />
                                        <input type="hidden" name="status" value="pending" />
                                        <button className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2.5 text-sm font-bold text-amber-300">
                                            Reconsider Review
                                        </button>
                                    </form>
                                </div>
                            )}
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}
