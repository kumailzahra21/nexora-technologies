
"use client";

import { useMemo, useState, type FormEvent } from "react";

type Persona =
    | "all"
    | "startup"
    | "university"
    | "enterprise"
    | "agency"
    | "community";

const partnershipTypes = [
    {
        number: "01",
        title: "Business Partnerships",
        category: "GROW TOGETHER",
        icon: "◈",
        image:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=85",
        description:
            "Build meaningful business relationships, explore new opportunities, and work together on technology-driven initiatives.",
        tags: ["Business Growth", "Collaboration", "Innovation"],
        benefits: [
            "Explore joint business opportunities",
            "Exchange expertise and resources",
            "Develop shared growth strategies",
        ],
        audiences: ["startup", "agency", "enterprise"],
    },
    {
        number: "02",
        title: "Technology Partnerships",
        category: "BUILD THE FUTURE",
        icon: "⌘",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=85",
        description:
            "Connect through technology, exchange expertise, and explore innovative solutions that create lasting value.",
        tags: ["Technology", "Digital Solutions", "Research"],
        benefits: [
            "Explore co-engineering opportunities",
            "Discuss tools and platform integrations",
            "Explore joint research and development",
        ],
        audiences: ["startup", "agency", "enterprise"],
    },
    {
        number: "03",
        title: "Educational Partnerships",
        category: "EMPOWER KNOWLEDGE",
        icon: "▤",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85",
        description:
            "Collaborate with educational institutions and learning communities to encourage technical knowledge and skill development.",
        tags: ["Education", "Knowledge Sharing", "Learning"],
        benefits: [
            "Explore guest workshops and sessions",
            "Share technical learning resources",
            "Discuss curriculum and project activities",
        ],
        audiences: ["university", "community"],
    },
    {
        number: "04",
        title: "Project Partnerships",
        category: "TURN IDEAS INTO ACTION",
        icon: "✳",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=85",
        description:
            "Work together on creative projects, digital initiatives, and practical solutions that address real-world challenges.",
        tags: ["Joint Projects", "Development", "Creativity"],
        benefits: [
            "Explore joint project development",
            "Combine complementary expertise",
            "Plan shared project milestones",
        ],
        audiences: ["startup", "agency", "enterprise", "community"],
    },
    {
        number: "05",
        title: "Talent & Internship Partnerships",
        category: "DEVELOP FUTURE TALENT",
        icon: "⌬",
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=85",
        description:
            "Create opportunities for aspiring professionals through talent development, mentorship, and collaborative learning.",
        tags: ["Internships", "Talent", "Mentorship"],
        benefits: [
            "Explore internship referral pathways",
            "Discuss mentored capstone projects",
            "Support practical skill development",
        ],
        audiences: ["university", "agency", "community"],
    },
    {
        number: "06",
        title: "Community Partnerships",
        category: "MAKE AN IMPACT",
        icon: "◎",
        image:
            "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=85",
        description:
            "Connect with technology communities and organizations to encourage participation, shared ideas, and positive digital impact.",
        tags: ["Community", "Networking", "Impact"],
        benefits: [
            "Explore community-led initiatives",
            "Organize knowledge-sharing activities",
            "Connect with technology enthusiasts",
        ],
        audiences: ["university", "community", "startup"],
    },
];

const personas: { id: Persona; label: string; icon: string }[] = [
    { id: "all", label: "Everyone", icon: "✧" },
    { id: "startup", label: "Startups", icon: "↗" },
    { id: "university", label: "Universities", icon: "▤" },
    { id: "enterprise", label: "Enterprise Teams", icon: "◈" },
    { id: "agency", label: "Agencies", icon: "⌘" },
    { id: "community", label: "Communities", icon: "◎" },
];

const advantages = [
    {
        number: "01",
        title: "Shared Vision",
        description:
            "Bring ideas and expertise together around common goals and meaningful opportunities.",
        icon: "✧",
    },
    {
        number: "02",
        title: "Innovation Focus",
        description:
            "Explore fresh perspectives and creative approaches to modern technology challenges.",
        icon: "⌘",
    },
    {
        number: "03",
        title: "Mutual Growth",
        description:
            "Build relationships that encourage learning, development, and long-term progress.",
        icon: "↗",
    },
    {
        number: "04",
        title: "Collaborative Mindset",
        description:
            "Exchange knowledge, work as a team, and turn promising ideas into practical outcomes.",
        icon: "◇",
    },
];

const process = [
    {
        number: "01",
        title: "Connect",
        description:
            "Introduce your organization, share your vision, and tell us what kind of collaboration you have in mind.",
    },
    {
        number: "02",
        title: "Explore",
        description:
            "We review your proposal and explore shared interests, objectives, and possible opportunities.",
    },
    {
        number: "03",
        title: "Plan",
        description:
            "Discuss the collaboration scope, responsibilities, expectations, and potential next steps.",
    },
    {
        number: "04",
        title: "Collaborate",
        description:
            "Move forward with an agreed plan and work together toward meaningful outcomes.",
    },
];

const focusAreas = [
    {
        number: "01",
        title: "AI & Automation",
        description:
            "Intelligent workflows and emerging AI-powered solutions.",
        icon: "✳",
    },
    {
        number: "02",
        title: "Cloud Infrastructure",
        description:
            "Modern digital infrastructure, scalability, and cloud solutions.",
        icon: "☁",
    },
    {
        number: "03",
        title: "EdTech Initiatives",
        description:
            "Technology-enabled learning and practical skill development.",
        icon: "▤",
    },
];

export default function PartnershipsPage() {
    const [selectedPersona, setSelectedPersona] =
        useState<Persona>("all");
    const [quickPitchOpen, setQuickPitchOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const filteredPartnerships = useMemo(() => {
        if (selectedPersona === "all") return partnershipTypes;

        return partnershipTypes.filter((item) =>
            item.audiences.includes(selectedPersona)
        );
    }, [selectedPersona]);

    function openPitch() {
        setSubmitted(false);
        setQuickPitchOpen(true);
    }

    function handlePitchSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const name = String(form.get("name") || "");
        const organization = String(form.get("organization") || "");
        const type = String(form.get("type") || "");
        const idea = String(form.get("idea") || "");

        const subject = encodeURIComponent(
            "Nexora Partnership Inquiry"
        );

        const body = encodeURIComponent(
            `Name: ${name}\nOrganization: ${organization}\nPartnership Type: ${type}\n\nPartnership Idea:\n${idea}`
        );

        window.location.href =
            `mailto:careers@nexoratechnologies.com?subject=${subject}&body=${body}`;

        setSubmitted(true);
    }

    return (
        <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1900&q=85"
                        alt="Professionals collaborating around laptops"
                        className="h-full w-full object-cover object-center brightness-90 contrast-105 opacity-55"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/80 to-[#07111f]/55" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/20" />
                </div>

                <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-400/15 blur-[110px]" />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[110px]" />

                <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-[#07111f]/60 px-5 py-3 text-[10px] font-bold tracking-[0.22em] text-cyan-300 backdrop-blur-md">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                            NEXORA PARTNERSHIP NETWORK
                        </div>

                        <p className="mb-5 text-xs font-bold tracking-[0.3em] text-slate-300">
                            CONNECTION • COLLABORATION • GROWTH
                        </p>

                        <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                            Better Together.
                            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                                Stronger Through Innovation.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-8 text-slate-300">
                            Great possibilities begin with great connections.
                            At Nexora Technologies, we believe in building
                            meaningful partnerships that bring people, ideas,
                            and technology together.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="#partnership-types"
                                className="rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-white"
                            >
                                Explore Partnerships ↓
                            </a>

                            <button
                                type="button"
                                onClick={openPitch}
                                className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition hover:border-cyan-300 hover:text-cyan-300"
                            >
                                Submit a Quick Pitch ↗
                            </button>
                        </div>

                        <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-white/15 pt-7">
                            <div>
                                <p className="text-2xl font-extrabold text-cyan-300">
                                    06
                                </p>
                                <p className="mt-2 text-[9px] font-bold tracking-widest text-slate-400">
                                    COLLABORATION MODELS
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-extrabold text-cyan-300">
                                    ∞
                                </p>
                                <p className="mt-2 text-[9px] font-bold tracking-widest text-slate-400">
                                    POSSIBILITIES
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-extrabold text-cyan-300">
                                    01
                                </p>
                                <p className="mt-2 text-[9px] font-bold tracking-widest text-slate-400">
                                    SHARED VISION
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* HERO VISUAL */}
                    <div className="relative mx-auto w-full max-w-[440px]">
                        <div className="absolute inset-10 rounded-full bg-cyan-400/20 blur-[90px]" />

                        <div className="relative rounded-[30px] border border-white/15 bg-[#10233a]/85 p-5 shadow-2xl backdrop-blur-xl">
                            <div className="flex items-center justify-between border-b border-white/10 pb-5">
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.22em] text-cyan-300">
                                        THE POWER OF CONNECTION
                                    </p>
                                    <h2 className="mt-2 text-lg font-bold">
                                        One Vision. Many Possibilities.
                                    </h2>
                                </div>

                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-2xl text-cyan-300">
                                    ✧
                                </span>
                            </div>

                            <div className="relative my-5 overflow-hidden rounded-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"
                                    alt="Team working together"
                                    className="h-52 w-full object-cover brightness-95 contrast-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-transparent to-transparent" />
                                <p className="absolute bottom-4 left-4 text-xs font-bold tracking-widest text-white">
                                    COLLABORATE. CREATE. GROW.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    ["◈", "Business"],
                                    ["⌘", "Technology"],
                                    ["▤", "Education"],
                                    ["✳", "Innovation"],
                                ].map(([icon, label]) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3"
                                    >
                                        <span className="text-xl text-cyan-300">
                                            {icon}
                                        </span>
                                        <span className="text-xs font-semibold text-slate-200">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] p-4">
                                <p className="text-[9px] font-bold tracking-[0.2em] text-cyan-300">
                                    OUR BELIEF
                                </p>
                                <p className="mt-2 text-sm font-semibold leading-6 text-white">
                                    The right collaboration can turn a good idea into something extraordinary.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNER PERSONAS */}
            <section className="border-y border-white/10 bg-[#0b1b2d] px-6 py-12 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-7 text-center">
                        <p className="text-[10px] font-bold tracking-[0.3em] text-cyan-300">
                            WHO IS THIS FOR?
                        </p>
                        <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                            Find Your Place in Our Network.
                        </h2>
                        <p className="mt-3 text-sm text-slate-400">
                            Choose your profile to discover relevant collaboration models.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {personas.map((persona) => (
                            <button
                                key={persona.id}
                                type="button"
                                onClick={() => {
                                    setSelectedPersona(persona.id);
                                    document.getElementById("partnership-types")?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                                className={`flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-bold transition ${selectedPersona === persona.id
                                        ? "border-cyan-300 bg-cyan-300 text-[#07111f]"
                                        : "border-white/15 bg-white/[0.04] text-slate-300 hover:border-cyan-300/50 hover:text-cyan-300"
                                    }`}
                            >
                                <span className="text-base">{persona.icon}</span>
                                {persona.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="px-6 py-24 lg:px-10">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div className="relative">
                        <div className="absolute -inset-3 rounded-[28px] border border-cyan-300/15" />
                        <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
                            alt="Team planning ideas together"
                            className="relative h-[310px] w-full rounded-[24px] object-cover brightness-95 contrast-105 sm:h-[400px]"
                        />
                        <div className="absolute -bottom-5 right-5 max-w-[260px] rounded-2xl border border-white/15 bg-[#10233a]/95 p-5 shadow-xl backdrop-blur-xl">
                            <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">
                                PARTNERSHIP MINDSET
                            </p>
                            <p className="mt-2 text-sm font-bold leading-6">
                                Different strengths. One shared direction.
                            </p>
                        </div>
                    </div>

                    <div className="pt-5 lg:pl-5">
                        <p className="mb-5 text-[11px] font-bold tracking-[0.3em] text-cyan-300">
                            01 / WHO WE COLLABORATE WITH
                        </p>

                        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Connections That
                            <span className="mt-2 block text-cyan-300">
                                Create Possibilities.
                            </span>
                        </h2>

                        <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
                            We welcome opportunities to connect with businesses,
                            educational institutions, technology professionals,
                            entrepreneurs, and communities that share an interest
                            in innovation and meaningful progress.
                        </p>

                        <p className="mt-4 text-sm leading-8 text-slate-400">
                            Every partnership starts with a conversation. We
                            believe in understanding each other&apos;s goals,
                            identifying common interests, and exploring
                            opportunities where collaboration can make a difference.
                        </p>

                        <button
                            type="button"
                            onClick={openPitch}
                            className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-cyan-300 transition hover:gap-5"
                        >
                            Tell us about your idea <span>→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* EXPLORE PARTNERSHIP TYPES */}
            <section
                id="partnership-types"
                className="bg-[#0a192b] px-6 py-24 lg:px-10"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-cyan-300">
                                02 / OPPORTUNITIES
                            </p>
                            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                                Explore Ways to
                                <span className="text-cyan-300"> Partner.</span>
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-slate-400">
                            Different goals, different strengths, and different
                            possibilities. Discover the collaboration that
                            matches your vision.
                        </p>
                    </div>

                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#101f32] p-4">
                        <p className="text-sm text-slate-300">
                            Showing{" "}
                            <span className="font-bold text-cyan-300">
                                {filteredPartnerships.length}
                            </span>{" "}
                            collaboration models
                        </p>

                        <button
                            type="button"
                            onClick={() => setSelectedPersona("all")}
                            className="text-xs font-bold text-cyan-300 hover:text-white"
                        >
                            Reset filter ↗
                        </button>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredPartnerships.map((item) => (
                            <article
                                key={item.number}
                                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#101f32] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:shadow-[0_18px_50px_rgba(34,211,238,0.09)] sm:p-7"
                            >
                                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-300/5 blur-2xl transition group-hover:bg-cyan-300/15" />

                                {/* SMALL CATEGORY IMAGE + ICON */}
                                <div className="relative flex items-center justify-between gap-3">
                                    <span className="text-xs font-bold tracking-widest text-slate-500">
                                        {item.number} / 06
                                    </span>

                                    <div className="flex items-center gap-3">
                                        <div className="h-16 w-20 overflow-hidden rounded-xl border border-cyan-300/25 shadow-lg">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-2xl text-cyan-300">
                                            {item.icon}
                                        </span>
                                    </div>
                                </div>

                                <p className="relative mt-8 text-[9px] font-bold tracking-[0.22em] text-cyan-300">
                                    {item.category}
                                </p>

                                <h3 className="relative mt-3 text-xl font-extrabold leading-snug">
                                    {item.title}
                                </h3>

                                <p className="relative mt-4 min-h-[100px] text-sm leading-7 text-slate-400">
                                    {item.description}
                                </p>

                                <div className="relative mt-6 rounded-xl border border-white/10 bg-[#07111f]/60 p-4">
                                    <p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-cyan-300">
                                        WHAT WE CAN EXPLORE
                                    </p>

                                    <ul className="space-y-3">
                                        {item.benefits.map((benefit) => (
                                            <li
                                                key={benefit}
                                                className="flex items-start gap-2 text-xs leading-5 text-slate-300"
                                            >
                                                <span className="mt-0.5 text-cyan-300">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="relative mt-5 flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] font-medium text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={openPitch}
                                    className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-xs font-bold text-cyan-300 transition hover:text-white"
                                >
                                    Discuss This Opportunity
                                    <span className="text-lg transition group-hover:translate-x-1">
                                        →
                                    </span>
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOCUS AREAS */}
            <section className="px-6 py-24 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 max-w-2xl">
                        <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-cyan-300">
                            03 / AREAS OF INTEREST
                        </p>
                        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                            Where Ideas Meet
                            <span className="block text-cyan-300">Technology.</span>
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-slate-400">
                            These are areas we are interested in exploring through
                            potential collaborations, shared knowledge, and future initiatives.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-3">
                        {focusAreas.map((area) => (
                            <div
                                key={area.number}
                                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0d1c30] p-7 transition hover:-translate-y-1 hover:border-cyan-300/40"
                            >
                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl" />

                                <div className="relative flex items-center justify-between">
                                    <span className="text-xs font-bold tracking-widest text-slate-500">
                                        {area.number}
                                    </span>
                                    <span className="text-4xl text-cyan-300">
                                        {area.icon}
                                    </span>
                                </div>

                                <h3 className="relative mt-9 text-xl font-extrabold">
                                    {area.title}
                                </h3>

                                <p className="relative mt-3 text-sm leading-7 text-slate-400">
                                    {area.description}
                                </p>

                                <div className="relative mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 transition-all group-hover:w-28" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY PARTNER WITH NEXORA */}
            <section className="bg-[#0a192b] px-6 py-24 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
                    <div>
                        <p className="mb-5 text-[11px] font-bold tracking-[0.3em] text-cyan-300">
                            04 / THE VALUE OF COLLABORATION
                        </p>

                        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Why Build
                            <span className="block text-cyan-300">With Nexora?</span>
                        </h2>

                        <p className="mt-6 text-sm leading-8 text-slate-400">
                            Strong partnerships are built on communication,
                            shared objectives, trust, and a willingness to
                            explore new possibilities.
                        </p>

                        <p className="mt-4 text-sm leading-8 text-slate-400">
                            We value meaningful connections where every
                            participant can contribute ideas, knowledge,
                            and expertise toward a common purpose.
                        </p>

                        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85"
                                alt="Technology team collaborating at a computer"
                                className="h-52 w-full object-cover brightness-95 contrast-105"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {advantages.map((item) => (
                            <div
                                key={item.number}
                                className="rounded-[22px] border border-white/10 bg-[#101f32] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold tracking-widest text-slate-500">
                                        {item.number}
                                    </span>
                                    <span className="text-3xl text-cyan-300">
                                        {item.icon}
                                    </span>
                                </div>

                                <h3 className="mt-8 text-lg font-extrabold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERSHIP PROCESS */}
            <section className="px-6 py-24 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-cyan-300">
                            05 / HOW WE BEGIN
                        </p>

                        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                            From First Contact
                            <span className="block text-cyan-300">to Collaboration.</span>
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-slate-400">
                            A clear and thoughtful approach helps us understand
                            opportunities and explore the right way forward.
                        </p>
                    </div>

                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent lg:block" />

                        {process.map((item) => (
                            <div
                                key={item.number}
                                className="relative rounded-[22px] border border-white/10 bg-[#0d1c30] p-6"
                            >
                                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-[#0a192b] text-lg font-extrabold text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
                                    {item.number}
                                </div>

                                <h3 className="mt-8 text-xl font-extrabold">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
            <section className="px-6 py-24 lg:px-10">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-cyan-300/20 bg-gradient-to-br from-[#12334b] via-[#102139] to-[#111b35] px-7 py-16 text-center sm:px-12 sm:py-20">
                    <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-[100px]" />
                    <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

                    <div className="relative mx-auto max-w-3xl">
                        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-3xl text-cyan-300">
                            ✧
                        </div>

                        <p className="text-[10px] font-bold tracking-[0.3em] text-cyan-300">
                            LET&apos;S CREATE SOMETHING MEANINGFUL
                        </p>

                        <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Great Things Happen
                            <span className="block text-cyan-300">
                                When We Work Together.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-slate-300">
                            Have an idea, project, or partnership opportunity?
                            We would love to hear about your vision and explore
                            how we can move forward together.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <button
                                type="button"
                                onClick={openPitch}
                                className="rounded-full bg-cyan-300 px-8 py-4 text-sm font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-white"
                            >
                                Submit Your Partnership Idea ↗
                            </button>

                            <a
                                href="/contact"
                                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-300 hover:text-cyan-300"
                            >
                                Contact Nexora
                            </a>
                        </div>

                        <p className="mt-9 text-[10px] font-semibold tracking-[0.2em] text-slate-400">
                            NEXORA TECHNOLOGIES • INNOVATE • BUILD • GROW
                        </p>
                    </div>
                </div>
            </section>

            {/* QUICK PITCH MODAL */}
            {quickPitchOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-md"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setQuickPitchOpen(false);
                        }
                    }}
                >
                    <div className="relative my-auto w-full max-w-xl rounded-[28px] border border-cyan-300/20 bg-[#102139] p-6 shadow-2xl sm:p-9">
                        <button
                            type="button"
                            onClick={() => setQuickPitchOpen(false)}
                            aria-label="Close quick pitch form"
                            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"
                        >
                            ✕
                        </button>

                        {!submitted ? (
                            <>
                                <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-300">
                                    NEXORA PARTNERSHIP NETWORK
                                </p>

                                <h2 className="mt-3 pr-8 text-2xl font-extrabold sm:text-3xl">
                                    Let&apos;s Hear Your Idea.
                                </h2>

                                <p className="mt-3 text-sm leading-7 text-slate-400">
                                    Share a little about yourself and the collaboration
                                    you would like to explore.
                                </p>

                                <form
                                    onSubmit={handlePitchSubmit}
                                    className="mt-7 space-y-5"
                                >
                                    <div>
                                        <label className="mb-2 block text-xs font-semibold text-slate-300">
                                            Your Name
                                        </label>
                                        <input
                                            name="name"
                                            required
                                            maxLength={120}
                                            placeholder="Enter your full name"
                                            className="w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-xs font-semibold text-slate-300">
                                            Organization / Company
                                        </label>
                                        <input
                                            name="organization"
                                            required
                                            maxLength={160}
                                            placeholder="Enter organization name"
                                            className="w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-xs font-semibold text-slate-300">
                                            Partnership Type
                                        </label>
                                        <select
                                            name="type"
                                            required
                                            defaultValue=""
                                            className="w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
                                        >
                                            <option value="" disabled>
                                                Select a partnership type
                                            </option>
                                            {partnershipTypes.map((item) => (
                                                <option key={item.number} value={item.title}>
                                                    {item.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-xs font-semibold text-slate-300">
                                            Your Partnership Idea
                                        </label>
                                        <textarea
                                            name="idea"
                                            required
                                            minLength={20}
                                            maxLength={2000}
                                            rows={4}
                                            placeholder="Tell us briefly what you would like to build or explore together..."
                                            className="w-full resize-y rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-cyan-300 px-5 py-4 text-sm font-extrabold text-[#07111f] transition hover:bg-white"
                                    >
                                        Continue to Email ↗
                                    </button>

                                    <p className="text-center text-[10px] leading-5 text-slate-500">
                                        Your email application will open with your inquiry
                                        prepared for review. Nothing is submitted to a database here.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div className="py-10 text-center">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-3xl text-cyan-300">
                                    ✓
                                </div>

                                <h2 className="mt-6 text-2xl font-extrabold">
                                    Email Application Opened
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-slate-400">
                                    If your email application opened, review your
                                    partnership inquiry and send it to Nexora.
                                    Your message is not received until you send the email.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setQuickPitchOpen(false)}
                                    className="mt-7 rounded-full bg-cyan-300 px-7 py-3 font-bold text-[#07111f] transition hover:bg-white"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}
