
import { connection } from "next/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase-server";
import { updateApplicationStatus } from "./actions";

export const instant = false;

type ApplicationStatus = "pending" | "approved" | "rejected";

interface Application {
    id: string;
    full_name: string;
    email: string;
    phone: string;
    internship_field: string;
    education: string;
    institution: string | null;
    portfolio_url: string | null;
    motivation: string;
    status: ApplicationStatus;
    created_at: string;
}

const filters = ["all", "pending", "approved", "rejected"] as const;

function statusStyle(status: ApplicationStatus) {
    const styles: Record<ApplicationStatus, string> = {
        pending: "bg-amber-400/10 text-amber-300 border-amber-400/30",
        approved: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
        rejected: "bg-red-400/10 text-red-300 border-red-400/30",
    };

    return styles[status];
}

export default async function ApplicationsPage({
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
        .from("internship_applications")
        .select("*")
        .order("created_at", { ascending: false });

    if (selectedStatus !== "all") {
        query = query.eq("status", selectedStatus);
    }

    const { data, error } = await query;

    const applications = (data ?? []) as Application[];

    const [
        { count: totalCount },
        { count: pendingCount },
        { count: approvedCount },
        { count: rejectedCount },
    ] = await Promise.all([
        supabase
            .from("internship_applications")
            .select("*", { count: "exact", head: true }),
        supabase
            .from("internship_applications")
            .select("*", { count: "exact", head: true })
            .eq("status", "pending"),
        supabase
            .from("internship_applications")
            .select("*", { count: "exact", head: true })
            .eq("status", "approved"),
        supabase
            .from("internship_applications")
            .select("*", { count: "exact", head: true })
            .eq("status", "rejected"),
    ]);

    const stats = [
        { label: "Total Applications", value: totalCount ?? 0 },
        { label: "Pending", value: pendingCount ?? 0 },
        { label: "Approved", value: approvedCount ?? 0 },
        { label: "Rejected", value: rejectedCount ?? 0 },
    ];

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8 md:px-10">
            <div className="max-w-7xl mx-auto space-y-8">

                <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-b border-slate-800 pb-7">
                    <div>
                        <Link
                            href="/admin"
                            className="text-sm text-cyan-400 hover:text-cyan-300"
                        >
                            ← Back to Dashboard
                        </Link>

                        <p className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mt-5">
                            Nexora Technologies
                        </p>

                        <h1 className="text-3xl md:text-4xl font-bold mt-2">
                            Internship Applications
                        </h1>

                        <p className="text-slate-400 text-sm mt-2">
                            Review and manage submitted internship applications.
                        </p>
                    </div>

                    <div className="text-sm text-slate-400">
                        Signed in as <span className="text-cyan-300">{user.email}</span>
                    </div>
                </header>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                        >
                            <p className="text-sm text-slate-400">{item.label}</p>
                            <p className="text-3xl font-bold text-white mt-3">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </section>

                <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <h2 className="text-lg font-semibold">
                            Submitted Applications
                        </h2>

                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter) => (
                                <Link
                                    key={filter}
                                    href={
                                        filter === "all"
                                            ? "/admin/applications"
                                            : `/admin/applications?status=${filter}`
                                    }
                                    className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize border transition ${selectedStatus === filter
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
                            Could not load applications: {error.message}
                        </div>
                    ) : applications.length === 0 ? (
                        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-10 text-center">
                            <p className="text-slate-300 font-medium">
                                No applications found.
                            </p>
                            <p className="text-sm text-slate-500 mt-2">
                                New submissions will appear here.
                            </p>
                        </div>
                    ) : (
                        <div className="mt-6 space-y-5">
                            {applications.map((application) => (
                                <article
                                    key={application.id}
                                    className="rounded-2xl border border-slate-800 bg-slate-950 p-5 md:p-6"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                                        <div className="space-y-3">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <h3 className="text-xl font-semibold text-white">
                                                    {application.full_name}
                                                </h3>

                                                <span
                                                    className={`text-xs px-3 py-1 rounded-full border capitalize ${statusStyle(
                                                        application.status
                                                    )}`}
                                                >
                                                    {application.status}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-400">
                                                <p>Email: {application.email}</p>
                                                <p>Phone: {application.phone}</p>
                                                <p>Track: {application.internship_field}</p>
                                                <p>Education: {application.education}</p>
                                                <p>Institution: {application.institution || "Not provided"}</p>
                                                <p>
                                                    Submitted:{" "}
                                                    {new Date(application.created_at).toLocaleDateString(
                                                        "en-GB"
                                                    )}
                                                </p>
                                            </div>

                                            {application.portfolio_url && (
                                                <a
                                                    href={application.portfolio_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block text-sm text-cyan-400 hover:underline"
                                                >
                                                    View Portfolio →
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-5 border-t border-slate-800 pt-5">
                                        <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                                            Applicant Motivation
                                        </p>

                                        <p className="text-sm text-slate-300 leading-7 mt-2 whitespace-pre-wrap">
                                            {application.motivation}
                                        </p>
                                    </div>

                                    {application.status === "pending" && (
                                        <div className="flex flex-wrap gap-3 mt-6">
                                            <form action={updateApplicationStatus}>
                                                <input
                                                    type="hidden"
                                                    name="applicationId"
                                                    value={application.id}
                                                />
                                                <input
                                                    type="hidden"
                                                    name="status"
                                                    value="approved"
                                                />
                                                <button
                                                    type="submit"
                                                    className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400 transition"
                                                >
                                                    Approve
                                                </button>
                                            </form>

                                            <form action={updateApplicationStatus}>
                                                <input
                                                    type="hidden"
                                                    name="applicationId"
                                                    value={application.id}
                                                />
                                                <input
                                                    type="hidden"
                                                    name="status"
                                                    value="rejected"
                                                />
                                                <button
                                                    type="submit"
                                                    className="rounded-lg bg-red-500/10 border border-red-500/30 px-5 py-2.5 text-sm font-semibold text-red-300 hover:bg-red-500/20 transition"
                                                >
                                                    Reject
                                                </button>
                                            </form>
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
