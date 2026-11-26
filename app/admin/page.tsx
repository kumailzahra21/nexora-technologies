
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";

export default async function AdminDashboard() {
    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
        redirect("/admin/login");
    }

    const { data: isAdmin, error: adminError } = await supabase.rpc("is_admin");

    if (adminError || isAdmin !== true) {
        redirect("/admin/login");
    }

    const [
        applicationsResult,
        messagesResult,
        reviewsResult,
        certificatesResult,
    ] = await Promise.all([
        supabase
            .from("internship_applications")
            .select("*", { count: "exact", head: true }),
        supabase
            .from("contact_messages")
            .select("*", { count: "exact", head: true }),
        supabase
            .from("client_reviews")
            .select("*", { count: "exact", head: true }),
        supabase
            .from("certificates")
            .select("*", { count: "exact", head: true }),
    ]);

    const cards = [
        {
            title: "Internship Applications",
            count: applicationsResult.count ?? 0,
            description: "Review and manage internship applicants.",
            href: "/admin/applications",
            icon: "✦",
        },
        {
            title: "Contact Messages",
            count: messagesResult.count ?? 0,
            description: "View messages received from website visitors.",
            href: "/admin/messages",
            icon: "✉",
        },
        {
            title: "Client Reviews",
            count: reviewsResult.count ?? 0,
            description: "Review and manage submitted testimonials.",
            href: "/admin/reviews",
            icon: "★",
        },
        {
            title: "Certificates",
            count: certificatesResult.count ?? 0,
            description: "Manage certificate verification records.",
            href: "/admin/certificates",
            icon: "▤",
        },
    ];

    return (
        <main className="min-h-screen bg-[#071426] px-4 py-10 text-white sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">

                <header className="mb-12 flex flex-wrap items-center justify-between gap-5">
                    <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                            Nexora Technologies
                        </p>

                        <h1 className="text-3xl font-black sm:text-5xl">
                            Admin Dashboard
                        </h1>

                        <p className="mt-3 text-sm text-slate-400">
                            Welcome back. Manage your website activities from one place.
                        </p>
                    </div>

                    <Link
                        href="/admin/applications"
                        className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-300 transition hover:bg-cyan-400/20"
                    >
                        View Applications →
                    </Link>
                </header>

                <section className="mb-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-transparent p-6 sm:p-9">
                    <p className="text-sm font-semibold tracking-widest text-cyan-300">
                        CONTROL CENTER
                    </p>

                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                        Everything in one place.
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                        Manage applications, messages, client feedback and certificates
                        through your private administration area.
                    </p>
                </section>

                <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group rounded-3xl border border-white/10 bg-[#10243d] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-[#142d4a]"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
                                {card.icon}
                            </div>

                            <p className="mt-7 text-sm text-slate-400">
                                {card.title}
                            </p>

                            <p className="mt-2 text-4xl font-black text-white">
                                {card.count}
                            </p>

                            <p className="mt-4 text-sm leading-6 text-slate-400">
                                {card.description}
                            </p>

                            <p className="mt-6 text-sm font-bold text-cyan-300 transition group-hover:text-white">
                                Open section →
                            </p>
                        </Link>
                    ))}
                </section>

                <section className="mt-10 rounded-2xl border border-white/10 bg-[#10243d]/70 p-5">
                    <p className="text-sm text-slate-400">
                        Signed in as
                    </p>

                    <p className="mt-1 break-all font-semibold text-white">
                        {user.email}
                    </p>

                    <p className="mt-3 text-xs text-slate-500">
                        Keep your administrator login credentials private and secure.
                    </p>
                </section>

                <footer className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
                    © 2026 Nexora Technologies. All rights reserved.
                </footer>

            </div>
        </main>
    );
}
