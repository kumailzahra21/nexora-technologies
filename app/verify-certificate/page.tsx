
"use client";

import React, { useState } from "react";
import { createClient } from "@/lib/supabase";

type Certificate = {
    certificate_number: string;
    recipient_name: string;
    internship_field: string;
    issue_date: string | null;
    expiry_date: string | null;
    status: "pending" | "issued" | "revoked" | string;
};

const supabase = createClient();

function formatDate(date: string | null) {
    if (!date) return "Not specified";

    return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

function getCertificateStatus(certificate: Certificate) {
    if (certificate.status === "revoked") {
        return {
            title: "Certificate Revoked",
            description: "This certificate has been revoked and is not valid.",
            color: "red",
            icon: "×",
        };
    }

    if (certificate.status === "pending") {
        return {
            title: "Verification Pending",
            description: "This certificate is not yet officially issued.",
            color: "amber",
            icon: "…",
        };
    }

    if (certificate.status === "issued") {
        const today = new Date().toISOString().slice(0, 10);

        if (certificate.expiry_date && certificate.expiry_date < today) {
            return {
                title: "Certificate Expired",
                description: "This certificate has passed its expiry date.",
                color: "amber",
                icon: "!",
            };
        }

        return {
            title: "Certificate Verified",
            description: "This certificate is officially issued by Nexora Technologies.",
            color: "green",
            icon: "✓",
        };
    }

    return {
        title: "Status Unavailable",
        description: "The certificate status could not be confirmed.",
        color: "slate",
        icon: "?",
    };
}

export default function VerifyCertificatePage() {
    const [certificateNumber, setCertificateNumber] = useState("");
    const [certificate, setCertificate] = useState<Certificate | null>(null);
    const [searched, setSearched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleVerify(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const cleanNumber = certificateNumber.trim();

        if (!cleanNumber) {
            setError("Please enter your certificate number.");
            setCertificate(null);
            setSearched(false);
            return;
        }

        setLoading(true);
        setError("");
        setCertificate(null);
        setSearched(false);

        try {
            const { data, error: verificationError } = await supabase.rpc(
                "verify_certificate",
                { p_certificate_number: cleanNumber }
            );

            if (verificationError) throw verificationError;

            if (!data || data.length === 0) {
                setSearched(true);
                setCertificate(null);
            } else {
                setCertificate(data[0] as Certificate);
                setSearched(true);
            }
        } catch {
            setError(
                "We could not complete verification right now. Please try again later."
            );
        } finally {
            setLoading(false);
        }
    }

    const status = certificate ? getCertificateStatus(certificate) : null;

    const statusStyles: Record<string, string> = {
        green: "border-emerald-200 bg-emerald-50 text-emerald-800",
        red: "border-red-200 bg-red-50 text-red-800",
        amber: "border-amber-200 bg-amber-50 text-amber-800",
        slate: "border-slate-200 bg-slate-50 text-slate-700",
    };

    const steps = [
        {
            number: "01",
            icon: "⌕",
            title: "Enter Your Number",
            description:
                "Find your unique certificate number and enter it in the verification portal.",
            image:
                "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=85",
        },
        {
            number: "02",
            icon: "↗",
            title: "Check the Record",
            description:
                "Our portal checks the submitted number against available official certificate records.",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
        },
        {
            number: "03",
            icon: "✓",
            title: "View the Result",
            description:
                "Review the available certificate details and its current verification status.",
            image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=85",
        },
    ];

    return (
        <main className="cert-body min-h-screen overflow-hidden bg-[#f4f8fd] text-[#10213d]">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

        .cert-body { font-family: 'DM Sans', sans-serif; }
        .cert-heading { font-family: 'Manrope', sans-serif; }

        .cert-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px);
          background-size: 42px 42px;
        }

        .cert-glow {
          box-shadow: 0 25px 80px rgba(0,75,160,.13);
        }

        .cert-input {
          width: 100%;
          border: 1px solid #dbe5f1;
          border-radius: 13px;
          padding: 16px 18px;
          outline: none;
          color: #10213d;
          background: #f8fbff;
          transition: border-color .2s ease, box-shadow .2s ease;
        }

        .cert-input:focus {
          border-color: #1684d8;
          box-shadow: 0 0 0 4px rgba(22,132,216,.10);
        }

        .cert-input::placeholder { color: #94a3b8; }

        .cert-photo img {
          transition: transform .7s ease;
        }

        .cert-photo:hover img {
          transform: scale(1.06);
        }

        .cert-card {
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .cert-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 45px rgba(15,55,100,.12);
        }
      `}</style>

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#07162e] text-white">
                <div className="cert-grid absolute inset-0 opacity-70" />
                <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-[120px]" />
                <div className="absolute -bottom-48 left-0 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[110px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-28">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold tracking-[.18em] text-cyan-200">
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                            OFFICIAL CERTIFICATE PORTAL
                        </div>

                        <h1 className="cert-heading text-5xl font-extrabold leading-[1.13] sm:text-6xl lg:text-[70px]">
                            Verify With
                            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
                                Confidence.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                            Verify certificates issued by Nexora Technologies through
                            our official verification portal. Enter your unique
                            certificate number to check its authenticity and current status.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="#verify"
                                className="rounded-xl bg-cyan-400 px-7 py-4 text-sm font-bold text-[#07162e] shadow-lg shadow-cyan-500/20 transition hover:bg-white"
                            >
                                Verify Certificate ↓
                            </a>

                            <a
                                href="/contact"
                                className="rounded-xl border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:border-cyan-300 hover:bg-white/10"
                            >
                                Need Assistance?
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-7 border-t border-white/15 pt-7">
                            <div>
                                <p className="text-sm font-bold text-white">Official Records</p>
                                <p className="mt-1 text-xs text-slate-400">
                                    Database-based verification
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Secure Lookup</p>
                                <p className="mt-1 text-xs text-slate-400">
                                    Limited certificate information
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CERTIFICATE PHOTO VISUAL */}
                    <div className="relative mx-auto w-full max-w-xl py-8">
                        <div className="absolute -right-8 top-0 h-36 w-36 rounded-full border border-cyan-300/20" />
                        <div className="absolute -bottom-3 left-0 h-32 w-32 rounded-full border border-blue-300/20" />

                        <div className="relative overflow-hidden rounded-[28px] border border-cyan-300/20 bg-[#102d55] p-3 shadow-2xl shadow-blue-950/40">
                            <div className="cert-photo relative h-[430px] overflow-hidden rounded-[22px]">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85"
                                    alt="Professional certificate documentation workspace"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#06162e] via-[#071b36]/65 to-[#071b36]/10" />

                                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-extrabold tracking-[.22em] text-cyan-200">
                                            NEXORA TECHNOLOGIES
                                        </p>
                                        <p className="mt-1 text-[9px] tracking-widest text-white/70">
                                            INNOVATE • BUILD • GROW
                                        </p>
                                    </div>
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/30 bg-[#071b36]/70 text-2xl text-cyan-300 backdrop-blur">
                                        ✦
                                    </div>
                                </div>

                                <div className="absolute bottom-7 left-6 right-6">
                                    <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-[10px] font-bold tracking-[.18em] text-cyan-200 backdrop-blur">
                                        OFFICIAL CERTIFICATE PORTAL
                                    </span>

                                    <h2 className="cert-heading mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                                        Every Achievement
                                        <span className="block text-cyan-300">
                                            Deserves Recognition.
                                        </span>
                                    </h2>

                                    <p className="mt-4 max-w-sm text-sm leading-7 text-slate-200">
                                        Check certificate authenticity through the official
                                        Nexora Technologies verification system.
                                    </p>

                                    <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/15 bg-[#071b36]/75 p-4 backdrop-blur">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-xl text-cyan-300">
                                            ✓
                                        </span>
                                        <div>
                                            <p className="text-xs font-bold text-white">
                                                Secure Certificate Lookup
                                            </p>
                                            <p className="mt-1 text-[10px] text-slate-300">
                                                Official record verification
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-2 -right-1 rounded-2xl border border-cyan-300/20 bg-[#12345f]/95 px-5 py-4 shadow-xl backdrop-blur">
                            <div className="flex items-center gap-3">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-lg text-cyan-300">
                                    ✓
                                </span>
                                <div>
                                    <p className="text-xs font-bold text-white">
                                        Official Verification
                                    </p>
                                    <p className="mt-1 text-[10px] text-slate-300">
                                        Check certificate records
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST STRIP */}
            <section className="bg-gradient-to-r from-[#0753a6] via-[#0878bd] to-[#0796ba] px-6 py-5 text-white">
                <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-12 gap-y-4 text-center">
                    {[
                        "OFFICIAL RECORDS",
                        "CERTIFICATE STATUS",
                        "SECURE LOOKUP",
                        "INSTANT SEARCH",
                    ].map((item) => (
                        <span key={item} className="text-[10px] font-bold tracking-[.2em] sm:text-xs">
                            ✧ {item}
                        </span>
                    ))}
                </div>
            </section>

            {/* VERIFICATION FORM */}
            <section id="verify" className="relative px-6 py-24 lg:px-10">
                <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-[100px]" />

                <div className="relative mx-auto max-w-5xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs font-bold tracking-[.25em] text-blue-700">
                            CERTIFICATE AUTHENTICATION
                        </p>
                        <h2 className="cert-heading mt-5 text-4xl font-extrabold sm:text-5xl">
                            Check Your Certificate
                        </h2>
                        <p className="mt-5 leading-7 text-slate-500">
                            Enter the certificate number exactly as printed on your
                            certificate to retrieve its official record.
                        </p>
                    </div>

                    <div className="cert-glow mt-12 rounded-[28px] border border-blue-100 bg-white p-7 sm:p-10">
                        <div className="mx-auto max-w-2xl">
                            <div className="mb-7 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-700">
                                    ⌕
                                </div>
                                <div>
                                    <h3 className="cert-heading text-lg font-extrabold">
                                        Enter Certificate Details
                                    </h3>
                                    <p className="mt-1 text-xs text-slate-500">
                                        One certificate number is required
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleVerify}>
                                <label htmlFor="certificate-number" className="mb-3 block text-sm font-bold text-[#10213d]">
                                    Certificate Number
                                </label>

                                <input
                                    id="certificate-number"
                                    value={certificateNumber}
                                    onChange={(e) => setCertificateNumber(e.target.value)}
                                    placeholder="e.g. NEX-2026-00001"
                                    maxLength={100}
                                    autoComplete="off"
                                    className="cert-input"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-5 w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:from-[#07162e] hover:to-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? "Checking Certificate..." : "Verify Certificate →"}
                                </button>
                            </form>

                            {error && (
                                <div role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                                    {error}
                                </div>
                            )}

                            {searched && !certificate && !error && (
                                <div role="status" className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                                    <div className="flex items-start gap-4">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl text-amber-700">
                                            !
                                        </span>
                                        <div>
                                            <h4 className="cert-heading font-extrabold text-amber-900">
                                                Certificate Not Found
                                            </h4>
                                            <p className="mt-2 text-sm leading-6 text-amber-800">
                                                No matching certificate record was found. Please check
                                                the number and try again. If you need help, contact our team.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {certificate && status && (
                                <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
                                    <div className={`border-b p-6 ${statusStyles[status.color]}`}>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-current/20 bg-white/60 text-2xl font-bold">
                                                {status.icon}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[.18em] opacity-70">
                                                    VERIFICATION RESULT
                                                </p>
                                                <h3 className="cert-heading mt-1 text-xl font-extrabold">
                                                    {status.title}
                                                </h3>
                                                <p className="mt-1 text-sm">{status.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 sm:p-8">
                                        <div className="mb-6 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                                            <div>
                                                <p className="text-[10px] font-bold tracking-[.18em] text-blue-700">
                                                    NEXORA TECHNOLOGIES
                                                </p>
                                                <h4 className="cert-heading mt-2 text-xl font-extrabold">
                                                    Certificate Record
                                                </h4>
                                            </div>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                                                ✦
                                            </div>
                                        </div>

                                        <div className="grid gap-6 sm:grid-cols-2">
                                            {[
                                                ["CERTIFICATE NUMBER", certificate.certificate_number],
                                                ["RECIPIENT NAME", certificate.recipient_name],
                                                ["INTERNSHIP / PROGRAM", certificate.internship_field],
                                                ["ISSUE DATE", formatDate(certificate.issue_date)],
                                                ["EXPIRY DATE", formatDate(certificate.expiry_date)],
                                            ].map(([label, value]) => (
                                                <div key={label}>
                                                    <p className="text-xs font-semibold text-slate-400">{label}</p>
                                                    <p className="mt-2 break-words text-sm font-bold text-[#10213d]">
                                                        {value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-7 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                                            <p className="text-xs leading-6 text-slate-600">
                                                This result reflects the certificate record available
                                                in the Nexora Technologies verification system at the
                                                time of lookup.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <p className="mt-7 text-center text-xs leading-6 text-slate-500">
                        Please enter the certificate number accurately. If your certificate
                        cannot be found, contact Nexora Technologies for assistance.
                    </p>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white px-6 py-24 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-xs font-bold tracking-[.25em] text-blue-700">
                            SIMPLE VERIFICATION PROCESS
                        </p>
                        <h2 className="cert-heading mt-5 text-4xl font-extrabold sm:text-5xl">
                            How It Works
                        </h2>
                        <p className="mt-5 leading-7 text-slate-500">
                            Follow three simple steps to check your certificate record.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-7 md:grid-cols-3">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="cert-card overflow-hidden rounded-2xl border border-slate-100 bg-[#f7faff]"
                            >
                                <div className="cert-photo relative h-48 overflow-hidden">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#07162e]/75 to-transparent" />
                                    <span className="absolute bottom-4 left-5 text-sm font-extrabold tracking-widest text-white">
                                        STEP {step.number}
                                    </span>
                                </div>

                                <div className="p-7">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-extrabold text-blue-600">
                                            {step.number}
                                        </span>
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                                            {step.icon}
                                        </span>
                                    </div>

                                    <h3 className="cert-heading mt-5 text-xl font-extrabold">
                                        {step.title}
                                    </h3>
                                    <p className="mt-4 text-sm leading-7 text-slate-500">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECURITY FEATURE */}
            <section className="relative overflow-hidden bg-[#0a1d3a] px-6 py-24 text-white lg:px-10">
                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[110px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.8fr]">
                    <div>
                        <p className="text-xs font-bold tracking-[.25em] text-cyan-300">
                            TRUST THROUGH TRANSPARENCY
                        </p>

                        <h2 className="cert-heading mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                            Verification built around reliable records.
                        </h2>

                        <p className="mt-6 max-w-xl leading-8 text-slate-300">
                            Our verification portal helps recipients, organizations,
                            and other interested parties check the status of certificate
                            records issued by Nexora Technologies.
                        </p>

                        <a
                            href="/contact"
                            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-4 text-sm font-bold text-[#07162e] transition hover:bg-white"
                        >
                            Contact Our Team ↗
                        </a>
                    </div>

                    <div className="cert-photo group relative min-h-[390px] overflow-hidden rounded-[26px] border border-cyan-300/20 bg-[#102d55]">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=85"
                            alt="Digital security and technology infrastructure"
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#06162e] via-[#071b36]/75 to-[#071b36]/10" />

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/15 text-3xl text-cyan-300 backdrop-blur">
                                ◈
                            </div>

                            <h3 className="cert-heading mt-6 text-2xl font-extrabold">
                                Authenticity Matters
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-200">
                                A certificate should be checked against its official record.
                                This portal provides the available record status rather than
                                relying on an uploaded image or document alone.
                            </p>

                            <div className="mt-6 border-t border-white/20 pt-5">
                                <p className="text-xs font-bold tracking-widest text-cyan-300">
                                    NEXORA TECHNOLOGIES
                                </p>
                                <p className="mt-2 text-xs text-slate-300">
                                    Innovate • Build • Grow
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative overflow-hidden bg-gradient-to-r from-[#0753a6] via-[#0878bd] to-[#0796ba] px-6 py-20 text-center text-white">
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/15 blur-[90px]" />
                <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-blue-950/20 blur-[90px]" />

                <div className="relative mx-auto max-w-3xl">
                    <p className="text-xs font-bold tracking-[.25em] text-cyan-100">
                        NEED HELP?
                    </p>

                    <h2 className="cert-heading mt-5 text-3xl font-extrabold sm:text-4xl">
                        We are here to assist you.
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-blue-100">
                        If you have questions about a certificate or its verification
                        result, our team is ready to help.
                    </p>

                    <a
                        href="/contact"
                        className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 text-sm font-bold text-blue-800 transition hover:bg-[#07162e] hover:text-white"
                    >
                        Contact Nexora →
                    </a>
                </div>
            </section>
        </main>
    );
}
