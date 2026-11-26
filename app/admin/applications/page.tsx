
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { updateApplicationStatus } from "./actions";

export default async function ApplicationsPage() {
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

    const { data: applications, error } = await supabase
        .from("internship_applications")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <main className="min-h-screen bg-[#07111f] p-8 text-white">
                <h1 className="text-2xl font-bold">Internship Applications</h1>
                <p className="mt-4 text-red-400">
                    Could not load applications: {error.message}
                </p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#07111f] px-5 py-10 text-white">
            <div className="mx-auto max-w-6xl">
                <a href="/admin" className="text-cyan-400">
                    ← Back to Dashboard
                </a>

                <h1 className="mt-6 text-3xl font-bold">
                    Internship Applications
                </h1>

                <p className="mt-2 text-slate-400">
                    Review applications and make your own decision.
                </p>

                <div className="mt-8 space-y-6">
                    {applications?.length ? (
                        applications.map((app) => (
                            <article
                                key={app.id}
                                className="rounded-2xl border border-cyan-400/20 bg-[#101d30] p-6"
                            >
                                <h2 className="text-xl font-bold">{app.full_name}</h2>
                                <p className="mt-1 text-cyan-400">{app.internship_field}</p>

                                <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                                    <p>Email: {app.email}</p>
                                    <p>Phone: {app.phone}</p>
                                    <p>Education: {app.education}</p>
                                    <p>Institution: {app.institution || "Not provided"}</p>
                                    <p>Status: {app.status}</p>
                                </div>

                                <h3 className="mt-5 font-semibold text-cyan-400">
                                    Motivation
                                </h3>
                                <p className="mt-2 whitespace-pre-wrap text-sm text-slate-300">
                                    {app.motivation}
                                </p>

                                {app.status === "pending" && (
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <form action={updateApplicationStatus}>
                                            <input type="hidden" name="id" value={app.id} />
                                            <input type="hidden" name="status" value="approved" />
                                            <button className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold">
                                                Approve
                                            </button>
                                        </form>

                                        <form action={updateApplicationStatus}>
                                            <input type="hidden" name="id" value={app.id} />
                                            <input type="hidden" name="status" value="rejected" />
                                            <button className="rounded-xl bg-red-600 px-5 py-3 font-semibold">
                                                Reject
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </article>
                        ))
                    ) : (
                        <div className="rounded-2xl border border-slate-700 bg-[#101d30] p-10 text-center">
                            <h2 className="text-xl font-semibold">No Applications Yet</h2>
                            <p className="mt-2 text-slate-400">
                                New applications will appear here.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
