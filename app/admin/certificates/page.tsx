
import Link from "next/link";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { updateCertificateStatus, addCertificate } from "./actions";

export const instant = false;

type Certificate = {
    id: string;
    certificate_number: string;
    recipient_name: string;
    internship_field: string;
    issue_date: string | null;
    expiry_date: string | null;
    status: "pending" | "issued" | "revoked";
    created_at: string;
    approved_at: string | null;
};

function statusStyle(status: Certificate["status"]) {
    if (status === "issued") {
        return "border-emerald-400/30 bg-emerald-400/10 text-emerald-300";
    }

    if (status === "revoked") {
        return "border-rose-400/30 bg-rose-400/10 text-rose-300";
    }

    return "border-amber-400/30 bg-amber-400/10 text-amber-300";
}

export default async function CertificatesPage() {
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

    const { data: certificates, error } = await supabase
        .from("certificates")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <main className="min-h-screen bg-slate-950 p-6 text-white">
                <div className="mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold">Certificates</h1>
                    <p className="mt-4 text-rose-400">
                        Could not load certificates: {error.message}
                    </p>
                    <Link href="/admin" className="mt-6 inline-block text-cyan-400">
                        Back to Dashboard
                    </Link>
                </div>
            </main>
        );
    }

    const allCertificates = (certificates ?? []) as Certificate[];

    const pending = allCertificates.filter(
        (item) => item.status === "pending"
    ).length;

    const issued = allCertificates.filter(
        (item) => item.status === "issued"
    ).length;

    const revoked = allCertificates.filter(
        (item) => item.status === "revoked"
    ).length;

    return (
        <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6">
            <div className="mx-auto max-w-6xl">
                <Link
                    href="/admin"
                    className="text-sm text-cyan-400 hover:text-cyan-300"
                >
                    ← Back to Dashboard
                </Link>

                <div className="mt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Nexora Technologies
                    </p>
                    <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                        Certificate Management
                    </h1>
                    <p className="mt-2 text-slate-400">
                        Create, issue, and manage internship certificates.
                    </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                        { label: "Pending", count: pending, color: "text-amber-400" },
                        { label: "Issued", count: issued, color: "text-emerald-400" },
                        { label: "Revoked", count: revoked, color: "text-rose-400" },
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

                <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
                    <h2 className="text-xl font-bold">Add New Certificate</h2>
                    <p className="mt-1 text-sm text-slate-400">
                        New certificates are created with Pending status.
                    </p>

                    <form action={addCertificate} className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Recipient Name
                            </label>
                            <input
                                name="recipient_name"
                                required
                                minLength={2}
                                maxLength={120}
                                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                                placeholder="Full name"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Certificate Number
                            </label>
                            <input
                                name="certificate_number"
                                required
                                maxLength={100}
                                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                                placeholder="NEX-2026-001"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Internship Field
                            </label>
                            <input
                                name="internship_field"
                                required
                                maxLength={150}
                                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                                placeholder="Web Development"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Issue Date
                            </label>
                            <input
                                name="issue_date"
                                type="date"
                                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Expiry Date
                            </label>
                            <input
                                name="expiry_date"
                                type="date"
                                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                            />
                        </div>

                        <div className="flex items-end">
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                            >
                                Add Certificate
                            </button>
                        </div>
                    </form>
                </section>

                <section className="mt-10">
                    <h2 className="text-2xl font-bold">All Certificates</h2>

                    <div className="mt-5 space-y-4">
                        {allCertificates.length === 0 ? (
                            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
                                <p className="text-slate-300">No certificates found.</p>
                            </div>
                        ) : (
                            allCertificates.map((certificate) => (
                                <article
                                    key={certificate.id}
                                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                                >
                                    <div className="flex flex-col justify-between gap-4 sm:flex-row">
                                        <div>
                                            <h3 className="text-lg font-bold">
                                                {certificate.recipient_name}
                                            </h3>
                                            <p className="mt-1 text-sm text-cyan-400">
                                                {certificate.certificate_number}
                                            </p>
                                            <p className="mt-2 text-sm text-slate-400">
                                                {certificate.internship_field}
                                            </p>
                                        </div>

                                        <div>
                                            <span
                                                className={`inline-block rounded-full border px-3 py-1 text-xs capitalize ${statusStyle(
                                                    certificate.status
                                                )}`}
                                            >
                                                {certificate.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-5 grid gap-3 text-sm text-slate-400 sm:grid-cols-3">
                                        <p>
                                            Issue date: {certificate.issue_date || "Not set"}
                                        </p>
                                        <p>
                                            Expiry date: {certificate.expiry_date || "Not set"}
                                        </p>
                                        <p>
                                            Created:{" "}
                                            {new Date(certificate.created_at).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-3">
                                        {(["pending", "issued", "revoked"] as const).map(
                                            (status) => (
                                                <form key={status} action={updateCertificateStatus}>
                                                    <input
                                                        type="hidden"
                                                        name="certificate_id"
                                                        value={certificate.id}
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="status"
                                                        value={status}
                                                    />
                                                    <button
                                                        type="submit"
                                                        disabled={certificate.status === status}
                                                        className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold capitalize transition hover:border-cyan-400 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
                                                    >
                                                        {status === "issued"
                                                            ? "Issue Certificate"
                                                            : status === "revoked"
                                                                ? "Revoke Certificate"
                                                                : "Mark Pending"}
                                                    </button>
                                                </form>
                                            )
                                        )}
                                    </div>
                                </article>
                            ))
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}
