
"use client";

import { useState } from "react";

const contacts = [
    {
        number: "03128905236",
        whatsapp: "923128905236",
        phone: "+923128905236",
    },
    {
        number: "+92 336 5443687",
        whatsapp: "923365443687",
        phone: "+923365443687",
    },
];

export default function QuickActions() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3">

            {isOpen && (
                <div className="w-[300px] max-w-[calc(100vw-40px)] overflow-hidden rounded-2xl border border-blue-300/20 bg-[#071A35]/95 shadow-2xl shadow-black/40 backdrop-blur-xl">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-900 to-[#0B2547] p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg font-bold text-white">
                                    Let's Connect
                                </p>
                                <p className="mt-1 text-xs text-blue-200">
                                    We're here to help you grow.
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Contact Numbers */}
                    <div className="space-y-4 p-5">
                        <div>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                                Direct Contact
                            </p>

                            {contacts.map((contact) => (
                                <div
                                    key={contact.number}
                                    className="mb-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 last:mb-0"
                                >
                                    <p className="mb-3 text-sm font-semibold text-white">
                                        {contact.number}
                                    </p>

                                    <div className="flex gap-2">
                                        <a
                                            href={`tel:${contact.phone}`}
                                            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-blue-400/30 bg-blue-500/10 px-3 py-2 text-xs font-semibold text-blue-200 transition hover:bg-blue-500/25"
                                        >
                                            <span>☎</span> Call
                                        </a>

                                        <a
                                            href={`https://wa.me/${contact.whatsapp}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-500"
                                        >
                                            <span>↗</span> WhatsApp
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Nexora Branding and Simple Numbers */}
                        <div className="border-t border-white/10 pt-4 text-center">
                            <p className="text-sm font-bold tracking-wide text-white">
                                Nexora Technologies
                            </p>

                            <p className="mt-2 text-xs leading-6 text-slate-300">
                                03128905236
                            </p>

                            <p className="text-xs leading-6 text-slate-300">
                                +92 336 5443687
                            </p>

                            <p className="mt-2 text-[10px] tracking-wider text-cyan-300">
                                INNOVATE • BUILD • GROW
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Buttons */}
            <div className="flex items-center gap-3">

                {/* Admin Shortcut */}
                <a
                    href="/admin"
                    title="Admin Dashboard"
                    aria-label="Admin Dashboard"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-300/20 bg-[#071A35] text-blue-200 shadow-lg transition duration-300 hover:scale-110 hover:border-cyan-300/50 hover:text-cyan-300"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                        <path d="m9 12 2 2 4-4" />
                    </svg>
                </a>

                {/* Contact Toggle */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close contact panel" : "Open contact panel"}
                    aria-expanded={isOpen}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-900/40 transition duration-300 hover:scale-110 hover:shadow-cyan-500/20"
                >
                    {isOpen ? (
                        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m18 6-12 12M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}
