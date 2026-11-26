
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { updateCertificateStatus, addCertificate } from "./actions";

type Certificate = {
    id: string;
    certificate_number: string;
    recipient_name: string;
    internship_field: string;
    issue_date: string | null;
    expiry_date: string | null;
    status: "pending" | "issued" | "revoked";
    created_at: string;
};

const filters = ["all", "pending", "issued", "revoked"] as const;

function statusStyle(status: Certificate["status"]) {
    if (status === "issued")
        return "border-emerald-400/30 bg-emerald-400/10 text-emerald-300";

    if (status === "revoked")
        return "border-rose-400/30 bg-rose-400/10 text-rose-300";

    return "border-amber-400/30 bg-amber-400/10 text-amber-300";
}

function dateLabel(value: string | null) {
    if (!value) return "Not set";
    return new Date(`${value}T00:00:00`).toLocaleDateString("en", {
        dateStyle: "medium",
    });
}

export default async function CertificatesAdminPage({
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
        .from("certificates")
        .select(
            "id, certificate_number, recipient_name, internship_field, issue_date, expiry_date, status, created_at"
        )
        .order("created_at", { ascending: false });

    if (selectedStatus !== "all") {
        query = query.eq("status", selectedStatus);
    }

    const { data, error } = await query;

    const [total, pending, issued, revoked] = await Promise.all([
        supabase.from("certificates").select("*", { count: "exact", head: true }),
        supabase.from("certificates").select("*", { count: "exact", head: true }).eq("status", "pending"),
        supabase.from("certificates").select("*", { count: "exact", head: true }).eq("status", "issued"),
        supabase.from("certificates").select("*", { count: "exact", head: true }).eq("status", "revoked"),
    ]);

    const stats = [
        { label: "Total Certificates", count: total.count ?? 0 },
        { label: "Pending", count: pending.count ?? 0 },
        { label: "Issued", count: issued.count ?? 0 },
        { label: "Revoked", count: revoked.count ?? 0 },
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
                            Certificate Management
                        </h1>
                        <p className="mt-2 text-sm text-slate-400">
                            Create, issue and manage official certificate records.
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
                        <div key={stat.label} className="rounded-2xl border border-white/10 bg-[#10243d] p-5">
                            <p className="text-sm text-slate-400">{stat.label}</p>
                            <p className="mt-3 text-3xl font-black text-cyan-300">{stat.count}</p>
                        </div>
                    ))}
                </section>

                <section className="mb-8 rounded-3xl border border-cyan-400/20 bg-[#10243d] p-5 sm:p-7">
                    <h2 className="text-xl font-bold">Create Certificate Record</h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Add a recipient and certificate number. New records start as pending.
                    </p>

                    <form action={addCertificate} className="mt-6 grid gap-4 sm:grid-cols-2">
                        <input
                            name="recipient_name"
                            required
                            minLength={2}
                            maxLength={120}
                            placeholder="Recipient full name"
                            className="rounded-xl border border-white/10 bg-[#071426] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
                        />

                        <input
                            name="certificate_number"
                            required
                            maxLength={100}
                            placeholder="Certificate number (e.g. NEX-2026-001)"
                            className="rounded-xl border border-white/10 bg-[#071426] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
                        />

                        <input
                            name="internship_field"
                            required
                            maxLength={150}
                            placeholder="Internship field"
                            className="rounded-xl border border-white/10 bg-[#071426] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
                        />

                        <label className="text-sm text-slate-400">
                            Issue date
                            <input
                                name="issue_date"
                                type="date"
                                className="mt-2 w-full rounded-xl border border-white/10 bg-[#071426] px-4 py-3 text-white"
                            />
                        </label>

                        <label className="text-sm text-slate-400">
                            Expiry date (optional)
                            <input
                                name="expiry_date"
                                type="date"
                                className="mt-2 w-full rounded-xl border border-white/10 bg-[#071426] px-4 py-3 text-white"
                            />
                        </label>

                        <div className="flex items-end">
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-bold text-white transition hover:brightness-110"
                            >
                                + Create Pending Record
                            </button>
                        </div>
                    </form>
                </section>

                <nav className="mb-6 flex flex-wrap gap-2">
                    {filters.map((filter) => (
                        <Link
                            key={filter}
                            href={filter === "all" ? "/admin/certificates" : `/admin/certificates?status=${filter}`}
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
                        Could not load certificates: {error.message}
                    </div>
                )}

                {!error && (!data || data.length === 0) && (
                    <div className="rounded-3xl border border-dashed border-white/15 bg-[#10243d] p-14 text-center">
                        <div className="text-4xl text-cyan-300">▤</div>
                        <h2 className="mt-4 text-xl font-bold">No certificates found</h2>
                        <p className="mt-2 text-sm text-slate-400">
                            Create a pending record using the form above.
                        </p>
                    </div>
                )}

                <section className="space-y-5">
                    {(data as Certificate[] | null)?.map((item) => (
                        <article key={item.id} className="overflow-hidden rounded-3xl border border-white/10 bg-[#10243d]">
                            <div className="flex flex-wrap items-start justify-between gap-4 p-5 sm:p-6">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                                        {item.certificate_number}
                                    </p>
                                    <h2 className="mt-2 text-xl font-bold">{item.recipient_name}</h2>
                                    <p className="mt-1 text-sm text-slate-400">{item.internship_field}</p>
                                    <p className="mt-3 text-xs text-slate-500">
                                        Issue date: {dateLabel(item.issue_date)}
                                        {" · "}
                                        Expiry: {dateLabel(item.expiry_date)}
                                    </p>
                                </div>

                                <span className={`rounded-full border px-3 py-1.5 text-xs font-bold capitalize ${statusStyle(item.status)}`}>
                                    {item.status}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-3 border-t border-white/10 bg-[#0b1c31] p-5">
                                {item.status !== "issued" && (
                                    <form action={updateCertificateStatus}>
                                        <input type="hidden" name="certificate_id" value={item.id} />
                                        <input type="hidden" name="status" value="issued" />
                                        <button className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-400">
                                            ✓ Issue Certificate
                                        </button>
                                    </form>
                                )}

                                {item.status !== "revoked" && (
                                    <form action={updateCertificateStatus}>
                                        <input type="hidden" name="certificate_id" value={item.id} />
                                        <input type="hidden" name="status" value="revoked" />
                                        <button className="rounded-xl border border-rose-400/40 bg-rose-400/10 px-5 py-2.5 text-sm font-bold text-rose-200 hover:bg-rose-400/20">
                                            Revoke Certificate
                                        </button>
                                    </form>
                                )}

                                {item.status === "revoked" && (
                                    <form action={updateCertificateStatus}>
                                        <input type="hidden" name="certificate_id" value={item.id} />
                                        <input type="hidden" name="status" value="pending" />
                                        <button className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-bold text-amber-300">
                                            Restore to Pending
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
