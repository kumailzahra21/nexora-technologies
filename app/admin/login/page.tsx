
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setLoading(true);

        const supabase = createClient();

        const { error: loginError } =
            await supabase.auth.signInWithPassword({
                email,
                password,
            });

        if (loginError) {
            setError("Invalid email or password. Please try again.");
            setLoading(false);
            return;
        }

        const { data, error: adminError } =
            await supabase.rpc("is_admin");

        if (adminError || data !== true) {
            await supabase.auth.signOut();
            setError("You are not authorized to access the admin panel.");
            setLoading(false);
            return;
        }

        router.push("/admin");
        router.refresh();
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#07111f] px-5 py-12">
            <div className="w-full max-w-md rounded-3xl border border-cyan-400/20 bg-[#101d30] p-8 shadow-2xl">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl text-cyan-400">
                        N
                    </div>

                    <h1 className="text-3xl font-bold text-white">
                        Admin Portal
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                        Nexora Technologies
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="mb-2 block text-sm text-slate-300">
                            Admin Email
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your admin email"
                            className="w-full rounded-xl border border-slate-700 bg-[#091525] px-4 py-3 text-white outline-none focus:border-cyan-400"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-slate-300">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full rounded-xl border border-slate-700 bg-[#091525] px-4 py-3 text-white outline-none focus:border-cyan-400"
                        />
                    </div>

                    {error && (
                        <p className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-cyan-400 px-4 py-3 font-bold text-[#07111f] transition hover:bg-cyan-300 disabled:opacity-50"
                    >
                        {loading ? "Signing in..." : "Secure Admin Login"}
                    </button>
                </form>

                <p className="mt-7 text-center text-xs text-slate-500">
                    Authorized access only • Nexora Technologies
                </p>
            </div>
        </main>
    );
}
