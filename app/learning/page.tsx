
"use client";

import React from "react";

type Technology = {
    name: string;
    logo: string;
    color: string;
};

type LearningPath = {
    number: string;
    title: string;
    category: string;
    description: string;
    technologies: Technology[];
    level: string;
    icon: string;
};

const learningPaths: LearningPath[] = [
    {
        number: "01",
        title: "Web Development",
        category: "BUILD FOR THE WEB",
        description: "Explore modern website development, responsive interfaces, and the technologies behind digital experiences.",
        technologies: [
            { name: "HTML5", logo: "html5", color: "E34F26" },
            { name: "CSS3", logo: "css3", color: "1572B6" },
            { name: "JavaScript", logo: "javascript", color: "F7DF1E" },
            { name: "React", logo: "react", color: "61DAFB" },
        ],
        level: "Beginner Friendly",
        icon: "◈",
    },
    {
        number: "02",
        title: "Artificial Intelligence",
        category: "EXPLORE INTELLIGENCE",
        description: "Discover AI fundamentals and explore how intelligent systems are transforming modern technology.",
        technologies: [
            { name: "Python", logo: "python", color: "3776AB" },
            { name: "TensorFlow", logo: "tensorflow", color: "FF6F00" },
            { name: "PyTorch", logo: "pytorch", color: "EE4C2C" },
        ],
        level: "Beginner Friendly",
        icon: "✳",
    },
    {
        number: "03",
        title: "Python Programming",
        category: "THINK IN CODE",
        description: "Build programming foundations and understand how Python can be used across different technology fields.",
        technologies: [
            { name: "Python", logo: "python", color: "3776AB" },
            { name: "Git", logo: "git", color: "F05032" },
            { name: "Jupyter", logo: "jupyter", color: "F37626" },
        ],
        level: "Beginner Friendly",
        icon: "⌘",
    },
    {
        number: "04",
        title: "Data Science",
        category: "TURN DATA INTO INSIGHT",
        description: "Explore data analysis, visualization, and the foundations of making informed decisions through data.",
        technologies: [
            { name: "Python", logo: "python", color: "3776AB" },
            { name: "Pandas", logo: "pandas", color: "FFFFFF" },
            { name: "NumPy", logo: "numpy", color: "4DABCF" },
        ],
        level: "Skill Building",
        icon: "▥",
    },
    {
        number: "05",
        title: "Cybersecurity",
        category: "UNDERSTAND DIGITAL SECURITY",
        description: "Learn security concepts, responsible digital practices, and the foundations of protecting information.",
        technologies: [
            { name: "Linux", logo: "linux", color: "FCC624" },
            { name: "Kali Linux", logo: "kalilinux", color: "557C94" },
            { name: "Wireshark", logo: "wireshark", color: "1679A7" },
        ],
        level: "Skill Building",
        icon: "⬡",
    },
    {
        number: "06",
        title: "App Development",
        category: "CREATE MOBILE EXPERIENCES",
        description: "Explore mobile application concepts and understand how cross-platform apps are developed.",
        technologies: [
            { name: "React Native", logo: "react", color: "61DAFB" },
            { name: "JavaScript", logo: "javascript", color: "F7DF1E" },
            { name: "Android", logo: "android", color: "3DDC84" },
        ],
        level: "Beginner Friendly",
        icon: "▣",
    },
];

const roadmap = [
    {
        number: "01",
        title: "Discover",
        subtitle: "Build your foundation",
        description: "Explore your chosen field, understand the fundamentals, and become familiar with essential concepts.",
        icon: "⌕",
    },
    {
        number: "02",
        title: "Develop",
        subtitle: "Strengthen your skills",
        description: "Practice what you learn, explore useful tools, and gradually develop your technical confidence.",
        icon: "◇",
    },
    {
        number: "03",
        title: "Create",
        subtitle: "Apply your knowledge",
        description: "Explore practical project ideas and turn your learning into meaningful work.",
        icon: "✳",
    },
    {
        number: "04",
        title: "Grow",
        subtitle: "Move forward",
        description: "Reflect on your progress, improve your portfolio, and prepare for new opportunities.",
        icon: "↗",
    },
];

const features = [
    {
        title: "Structured Learning",
        description: "Explore organized learning paths that help you understand topics step by step.",
        icon: "▤",
    },
    {
        title: "Technology Exposure",
        description: "Get familiar with tools and technologies used across modern digital fields.",
        icon: "⌘",
    },
    {
        title: "Practical Exploration",
        description: "Discover project ideas that help connect technical concepts with real-world applications.",
        icon: "✦",
    },
    {
        title: "Continuous Growth",
        description: "Build confidence through curiosity, consistency, and a commitment to learning.",
        icon: "↗",
    },
];

function TechLogo({ name, logo, color }: Technology) {
    const [imageFailed, setImageFailed] = React.useState(false);

    return (
        <div
            title={name}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#07111f]/70 px-3 py-2 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
        >
            {!imageFailed ? (
                <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logo}/${logo}-original.svg`}
                    alt={`${name} logo`}
                    loading="lazy"
                    onError={() => setImageFailed(true)}
                    className="h-5 w-5 shrink-0 object-contain"
                />
            ) : (
                <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-cyan-300/10 text-[10px] font-extrabold text-cyan-300"
                    aria-hidden="true"
                >
                    {name.slice(0, 1)}
                </span>
            )}
            <span className="text-[10px] font-medium text-slate-300">{name}</span>
        </div>
    );
}

export default function LearningPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">

            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1900&q=85"
                        alt="Modern digital learning workspace"
                        className="h-full w-full object-cover object-center opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/90 via-[#07111f]/75 to-[#07111f]/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/20" />
                </div>

                <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-[100px]" />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/15 blur-[110px]" />

                <div className="relative mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-[#07111f]/60 px-5 py-3 text-[10px] font-bold tracking-[0.22em] text-cyan-300 backdrop-blur-md">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                            NEXORA LEARNING HUB
                        </div>

                        <p className="mb-4 text-xs font-bold tracking-[0.3em] text-slate-300">
                            KNOWLEDGE • CREATIVITY • INNOVATION
                        </p>

                        <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                            Learn Beyond Limits.
                            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                                Build What&apos;s Next.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                            Explore technology, develop new capabilities, and
                            turn curiosity into knowledge. Your next learning
                            journey begins with Nexora Technologies.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#learning-paths"
                                className="rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-white"
                            >
                                Explore Learning Paths ↓
                            </a>
                            <a
                                href="/contact"
                                className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition hover:border-cyan-300 hover:text-cyan-300"
                            >
                                Get in Touch ↗
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8 border-t border-white/15 pt-6">
                            <div>
                                <p className="text-2xl font-extrabold text-cyan-300">06</p>
                                <p className="mt-1 text-[10px] tracking-widest text-slate-400">LEARNING PATHS</p>
                            </div>
                            <div>
                                <p className="text-2xl font-extrabold text-cyan-300">∞</p>
                                <p className="mt-1 text-[10px] tracking-widest text-slate-400">POSSIBILITIES</p>
                            </div>
                            <div>
                                <p className="text-2xl font-extrabold text-cyan-300">01</p>
                                <p className="mt-1 text-[10px] tracking-widest text-slate-400">GROWTH MINDSET</p>
                            </div>
                        </div>
                    </div>

                    {/* HERO LEARNING CARD */}
                    <div className="relative mx-auto w-full max-w-[410px]">
                        <div className="absolute inset-8 rounded-full bg-cyan-400/15 blur-[80px]" />

                        <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#10233a]/80 p-5 shadow-2xl backdrop-blur-xl">
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">LEARNING EXPERIENCE</p>
                                    <p className="mt-1 text-sm font-semibold">Explore. Understand. Create.</p>
                                </div>
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-2xl text-cyan-300">✦</span>
                            </div>

                            <div className="my-5 overflow-hidden rounded-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"
                                    alt="Developer learning modern technologies"
                                    className="h-48 w-full object-cover brightness-110"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-xs font-bold tracking-widest text-slate-300">YOUR LEARNING JOURNEY</p>
                                <span className="text-xs text-cyan-300">01 — 04</span>
                            </div>

                            <div className="mt-5 space-y-3">
                                {roadmap.map((step) => (
                                    <div key={step.number} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-lg text-cyan-300">{step.icon}</span>
                                        <div>
                                            <p className="text-sm font-bold text-white">{step.title}</p>
                                            <p className="mt-1 text-[10px] text-slate-400">{step.subtitle}</p>
                                        </div>
                                        <span className="ml-auto text-[10px] font-bold text-slate-500">{step.number}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="px-6 py-20 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-5 text-[11px] font-bold tracking-[0.3em] text-cyan-300">
                            01 / THE LEARNING EXPERIENCE
                        </p>
                        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Knowledge opens doors.
                            <span className="mt-2 block text-slate-500">Learning moves you forward.</span>
                        </h2>
                        <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
                            At Nexora Technologies, we believe learning is more
                            than collecting information. It is about developing
                            the mindset, skills, and confidence to explore new
                            ideas and create meaningful solutions.
                        </p>
                        <a href="#learning-paths" className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-cyan-300 transition hover:gap-5">
                            Discover learning paths <span>→</span>
                        </a>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-3 rounded-[28px] border border-cyan-300/15" />
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85"
                            alt="Collaborative learning"
                            className="relative h-[310px] w-full rounded-[24px] object-cover brightness-110 sm:h-[370px]"
                        />
                        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#07111f]/80 p-5 backdrop-blur-xl">
                            <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">THE NEXORA APPROACH</p>
                            <p className="mt-2 text-lg font-bold text-white">Learn with purpose. Grow with confidence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LEARNING PATHS */}
            <section id="learning-paths" className="bg-[#0a192b] px-6 py-20 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-cyan-300">02 / EXPLORE YOUR INTERESTS</p>
                            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                                Choose Your <span className="text-cyan-300">Learning Path.</span>
                            </h2>
                        </div>
                        <p className="max-w-sm text-sm leading-7 text-slate-400">
                            Explore technology fields and discover the knowledge
                            that can help shape your future.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {learningPaths.map((path) => (
                            <article key={path.number} className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#101f32] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:shadow-[0_15px_45px_rgba(34,211,238,0.09)]">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold tracking-widest text-slate-500">{path.number} / 06</span>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-2xl text-cyan-300 transition group-hover:scale-110">{path.icon}</span>
                                </div>

                                <p className="mt-7 text-[9px] font-bold tracking-[0.22em] text-cyan-300">{path.category}</p>
                                <h3 className="mt-3 text-xl font-extrabold text-white">{path.title}</h3>
                                <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">{path.description}</p>

                                <div className="my-5 h-px bg-white/10" />

                                <p className="mb-3 text-[9px] font-bold tracking-[0.2em] text-slate-500">TECHNOLOGIES TO EXPLORE</p>
                                <div className="flex flex-wrap gap-2">
                                    {path.technologies.map((technology) => (
                                        <TechLogo key={technology.name} {...technology} />
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                                    <span className="text-[10px] font-semibold text-slate-400">{path.level}</span>
                                    <a href="/contact" className="text-xs font-bold text-cyan-300 transition hover:text-white">
                                        Learn More ↗
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROADMAP */}
            <section className="px-6 py-24 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 text-center">
                        <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-cyan-300">03 / YOUR ROADMAP</p>
                        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                            From Curiosity to <span className="text-cyan-300">Creation.</span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
                            A simple way to think about your learning journey:
                            discover new ideas, develop your skills, create,
                            and keep growing.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {roadmap.map((step, index) => (
                            <div key={step.number} className="relative rounded-[22px] border border-white/10 bg-[#0d1c30] p-6 transition hover:-translate-y-2 hover:border-cyan-300/40">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold tracking-widest text-cyan-300">{step.number}</span>
                                    <span className="text-2xl text-cyan-300">{step.icon}</span>
                                </div>
                                <h3 className="mt-8 text-xl font-extrabold">{step.title}</h3>
                                <p className="mt-2 text-xs font-semibold text-cyan-300">{step.subtitle}</p>
                                <p className="mt-4 text-sm leading-7 text-slate-400">{step.description}</p>
                                {index !== 3 && (
                                    <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-cyan-300/30 bg-[#07111f] text-xs text-cyan-300 lg:flex">
                                        →
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="bg-[#0a192b] px-6 py-20 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-cyan-300">04 / WHY KEEP LEARNING</p>
                        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                            Small steps.
                            <span className="block text-cyan-300">Meaningful progress.</span>
                        </h2>
                        <p className="mt-6 text-sm leading-8 text-slate-400">
                            Every new concept you understand adds to your
                            capabilities. Stay curious, keep exploring, and
                            give your ideas room to grow.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {features.map((feature, index) => (
                            <div key={feature.title} className="rounded-[20px] border border-white/10 bg-[#101f32] p-6 transition hover:border-cyan-300/40">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold tracking-widest text-slate-500">0{index + 1}</span>
                                    <span className="text-2xl text-cyan-300">{feature.icon}</span>
                                </div>
                                <h3 className="mt-6 text-lg font-extrabold">{feature.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-6 py-24 lg:px-10">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-cyan-300/20 bg-gradient-to-br from-[#12334b] via-[#102139] to-[#111b35] px-7 py-16 text-center sm:px-12">
                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]" />
                    <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[90px]" />

                    <div className="relative">
                        <p className="text-[10px] font-bold tracking-[0.3em] text-cyan-300">YOUR FUTURE IS BUILT ONE IDEA AT A TIME</p>
                        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            The next skill you learn
                            <span className="block text-cyan-300">could change everything.</span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300">
                            Start exploring your interests and take a meaningful
                            step toward your personal and professional growth.
                        </p>
                        <a href="#learning-paths" className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-8 py-3.5 text-sm font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-white">
                            Explore Learning Paths ↗
                        </a>
                        <p className="mt-7 text-[10px] tracking-[0.2em] text-slate-400">
                            NEXORA TECHNOLOGIES • INNOVATE • BUILD • GROW
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}
