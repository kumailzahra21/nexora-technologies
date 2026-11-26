
import Link from "next/link";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Internships", href: "/internships" },
    { name: "Online Learning", href: "/learning" },
    { name: "Partnerships", href: "/partnerships" },
];

const services = [
    "Web Development",
    "Software Solutions",
    "AI & Automation",
    "Cloud Technologies",
];

const contacts = [
    { number: "03128905236", phone: "+923128905236", whatsapp: "923128905236" },
    { number: "+92 336 5443687", phone: "+923365443687", whatsapp: "923365443687" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-blue-400/15 bg-[#06152D] text-white">
            <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-8 lg:px-10">

                <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="inline-block">
                            <h2 className="text-2xl font-extrabold tracking-tight">
                                Nexora<span className="text-cyan-400"> Technologies</span>
                            </h2>
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
                            Empowering businesses and emerging talent through innovative
                            technology, digital solutions and future-focused learning.
                        </p>

                        <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-cyan-300">
                            INNOVATE • BUILD • GROW
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-400 transition hover:translate-x-1 hover:text-cyan-300 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                            Our Expertise
                        </h3>

                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-sm text-slate-400">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                            Get In Touch
                        </h3>

                        <p className="mb-5 text-sm leading-6 text-slate-400">
                            Have a project, question or opportunity? We'd love to hear from you.
                        </p>

                        <div className="space-y-4">
                            {contacts.map((contact) => (
                                <div key={contact.number}>
                                    <a
                                        href={`tel:${contact.phone}`}
                                        className="text-sm font-semibold text-slate-200 transition hover:text-cyan-300"
                                    >
                                        {contact.number}
                                    </a>

                                    <div className="mt-2 flex gap-4">
                                        <a
                                            href={`tel:${contact.phone}`}
                                            className="text-xs text-cyan-300 hover:text-white"
                                        >
                                            Call Us
                                        </a>

                                        <a
                                            href={`https://wa.me/${contact.whatsapp}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-emerald-400 hover:text-white"
                                        >
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 px-4 py-2.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                        >
                            Contact Our Team
                            <span>↗</span>
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center sm:flex-row sm:text-left">
                    <p className="text-xs text-slate-500">
                        © 2026 Nexora Technologies. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-5 text-xs text-slate-500">
                        <Link href="/privacy-policy" className="transition hover:text-cyan-300">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="transition hover:text-cyan-300">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
