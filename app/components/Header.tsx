
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Internships", href: "/internships" },
    { name: "Learning", href: "/learning" },
    { name: "Partnerships", href: "/partnerships" },
];

const exploreLinks = [
    { name: "Rewards & Recognition", href: "/rewards" },
    { name: "Client Reviews", href: "/reviews" },
    { name: "Certificate Verification", href: "/verify-certificate" },
    { name: "Contact Us", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-cyan-400/15 bg-[#07111f]/95 text-white shadow-[0_8px_35px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="mx-auto flex max-w-[1450px] items-center justify-between px-5 py-4 lg:px-10">

                {/* BRAND LOGO */}
                <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center gap-3"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/40 bg-gradient-to-br from-cyan-400 to-blue-600 text-2xl font-black text-[#07111f] shadow-[0_0_22px_rgba(34,211,238,0.25)] transition group-hover:scale-105">
                        N
                    </div>

                    <div>
                        <span className="block text-lg font-extrabold tracking-wide">
                            NEXORA<span className="text-cyan-400">.</span>
                        </span>
                        <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                            Technologies
                        </span>
                    </div>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden items-center gap-1 xl:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative rounded-lg px-3 py-3 text-[13px] font-medium transition duration-300 ${isActive(item.href)
                                    ? "bg-cyan-400/10 text-cyan-300"
                                    : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                                }`}
                        >
                            {item.name}
                            {isActive(item.href) && (
                                <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-cyan-400" />
                            )}
                        </Link>
                    ))}

                    {/* EXPLORE DROPDOWN */}
                    <div
                        className="relative"
                        onMouseEnter={() => setExploreOpen(true)}
                        onMouseLeave={() => setExploreOpen(false)}
                    >
                        <button
                            type="button"
                            onClick={() => setExploreOpen(!exploreOpen)}
                            className="flex items-center gap-2 rounded-lg px-3 py-3 text-[13px] font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                        >
                            Explore
                            <span className={`transition ${exploreOpen ? "rotate-180" : ""}`}>
                                ▾
                            </span>
                        </button>

                        {exploreOpen && (
                            <div className="absolute right-0 top-full w-64 pt-3">
                                <div className="rounded-2xl border border-cyan-400/20 bg-[#0b192a] p-2 shadow-2xl">
                                    {exploreLinks.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setExploreOpen(false)}
                                            className={`block rounded-xl px-4 py-3 text-sm transition ${isActive(item.href)
                                                    ? "bg-cyan-400/10 text-cyan-300"
                                                    : "text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                {/* APPLY BUTTON */}
                <div className="hidden xl:block">
                    <Link
                        href="/apply"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-bold text-[#06111f] shadow-[0_0_25px_rgba(34,211,238,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]"
                    >
                        Apply Now <span>↗</span>
                    </Link>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-white/5 text-2xl text-cyan-300 xl:hidden"
                >
                    {mobileOpen ? "×" : "☰"}
                </button>
            </div>

            {/* MOBILE NAVIGATION */}
            {mobileOpen && (
                <div className="border-t border-cyan-400/15 bg-[#091626] px-5 pb-6 pt-3 xl:hidden">
                    <nav className="mx-auto flex max-w-[1450px] flex-col gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${isActive(item.href)
                                        ? "bg-cyan-400/10 text-cyan-300"
                                        : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="my-2 border-t border-white/10 pt-3">
                            <p className="px-4 pb-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                                Explore More
                            </p>

                            {exploreLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <Link
                            href="/apply"
                            onClick={() => setMobileOpen(false)}
                            className="mt-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-center text-sm font-bold text-[#06111f]"
                        >
                            Apply Now ↗
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
