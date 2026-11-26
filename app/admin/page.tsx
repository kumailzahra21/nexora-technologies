
import { connection } from "next/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";

export default async function AdminDashboard() {
    await connection();

    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
        redirect("/admin/login");
    }

    const { data: isAdmin, error: adminError } =
        await supabase.rpc("is_admin");

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

    const stats = [
        {
            title: "Applications",
            count: applicationsResult.count ?? 0,
            href: "/admin/applications",
            description: "Review and manage internship applications",
        },
        {
            title: "Messages",
            count: messagesResult.count ?? 0,
            href: "/admin/messages",
            description: "View and manage contact inquiries",
        },
        {
            title: "Reviews",
            count: reviewsResult.count ?? 0,
            href: "/admin/reviews",
            description: "Approve or manage client reviews",
        },
        {
            title: "Certificates",
            count: certificatesResult.count ?? 0,
            href: "/admin/certificates",
            description: "Issue and verify certificates",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
            <div className="max-w-6xl mx-auto space-y-8">
                <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                            Nexora Technologies
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight mt-2">
                            Admin Dashboard
                        </h1>
                        <p className="text-sm text-slate-400 mt-2">
                            Signed in as {user.email}
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="text-sm px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 transition"
                    >
                        View Website →
                    </Link>
                </header>

                <section>
                    <h2 className="text-xl font-semibold mb-5">
                        Management Overview
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400/60 hover:-translate-y-1 transition-all flex flex-col justify-between min-h-44"
                            >
                                <div>
                                    <p className="text-sm font-medium text-slate-400">
                                        {item.title}
                                    </p>
                                    <p className="text-4xl font-bold text-white mt-3">
                                        {item.count}
                                    </p>
                                </div>

                                <p className="text-xs text-slate-500 group-hover:text-cyan-300 transition mt-5">
                                    {item.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
