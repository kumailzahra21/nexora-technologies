
import { connection } from "next/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase-server";
import { updateReviewStatus } from "./actions";

export const instant = false;

type ReviewStatus = "pending" | "approved" | "rejected";

export default async function ReviewsPage() {
    await connection();

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

    const { data: reviews, error } = await supabase
        .from("client_reviews")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
                <div className="mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold">Client Reviews</h1>
                    <p className="mt-4 text-red-400">
                        Reviews load nahi ho sakein: {error.message}
                    </p>
                    <Link href="/admin" className="mt-6 inline-block text-cyan-400">
                        Back to Dashboard
                    </Link>
                </div>
            </main>
        );
    }

    const allReviews = reviews ?? [];

    const pending = allReviews.filter((r) => r.status === "pending").length;
    const approved = allReviews.filter((r) => r.status === "approved").length;
    const rejected = allReviews.filter((r) => r.status === "rejected").length;

    return (
        <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6">
            <div className="mx-auto max-w-6xl">
                <Link
                    href="/admin"
                    className="text-sm text-cyan-400 hover:text-cyan-300"
                >
                    ← Back to Dashboard
                </Link>

                <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                            Nexora Technologies
                        </p>
                        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                            Client Reviews
                        </h1>
                        <p className="mt-2 text-slate-400">
                            Review and manage customer testimonials.
                        </p>
                    </div>
                    <div className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3">
                        <p className="text-sm text-slate-400">Total Reviews</p>
                        <p className="text-2xl font-bold">{allReviews.length}</p>
                    </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                        { label: "Pending", count: pending, color: "text-amber-400" },
                        { label: "Approved", count: approved, color: "text-emerald-400" },
                        { label: "Rejected", count: rejected, color: "text-red-400" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                        >
                            <p className="text-sm text-slate-400">{item.label}</p>
                            <p className={`mt-2 text-3xl font-bold ${item.color}`}>
                                {item.count}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 space-y-5">
                    {allReviews.length === 0 ? (
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
                            <h2 className="text-xl font-semibold">No reviews yet</h2>
                            <p className="mt-2 text-slate-400">
                                Customer reviews will appear here when submitted.
                            </p>
                        </div>
                    ) : (
                        allReviews.map((review) => (
                            <article
                                key={review.id}
                                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                            >
                                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                                    <div>
                                        <h2 className="text-lg font-bold">{review.full_name}</h2>
                                        <p className="mt-1 text-sm text-slate-400">
                                            {review.email}
                                        </p>
                                        {review.role && (
                                            <p className="mt-1 text-sm text-cyan-400">
                                                {review.role}
                                            </p>
                                        )}
                                    </div>

                                    <div className="sm:text-right">
                                        <p className="text-amber-400">
                                            {"★".repeat(Math.max(0, Math.min(5, review.rating ?? 0)))}
                                            <span className="text-slate-600">
                                                {"★".repeat(
                                                    5 - Math.max(0, Math.min(5, review.rating ?? 0))
                                                )}
                                            </span>
                                        </p>
                                        <span className="mt-2 inline-block rounded-full border border-slate-700 px-3 py-1 text-xs capitalize text-slate-300">
                                            {review.status}
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-5 whitespace-pre-wrap leading-7 text-slate-300">
                                    {review.review}
                                </p>

                                <p className="mt-4 text-xs text-slate-500">
                                    Submitted:{" "}
                                    {new Date(review.created_at).toLocaleString()}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    {(["approved", "rejected", "pending"] as ReviewStatus[]).map(
                                        (status) => (
                                            <form key={status} action={updateReviewStatus}>
                                                <input type="hidden" name="reviewId" value={review.id} />
                                                <input type="hidden" name="status" value={status} />
                                                <button
                                                    type="submit"
                                                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${status === "approved"
                                                            ? "bg-emerald-600 hover:bg-emerald-500"
                                                            : status === "rejected"
                                                                ? "bg-red-600 hover:bg-red-500"
                                                                : "bg-slate-700 hover:bg-slate-600"
                                                        }`}
                                                >
                                                    {status === "pending"
                                                        ? "Mark Pending"
                                                        : status === "approved"
                                                            ? "Approve"
                                                            : "Reject"}
                                                </button>
                                            </form>
                                        )
                                    )}
                                </div>
                            </article>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
}
