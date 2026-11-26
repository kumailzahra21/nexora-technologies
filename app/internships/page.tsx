
type Technology = {
    name: string;
    logo: string;
    color: string;
};

type Internship = {
    number: string;
    title: string;
    category: string;
    description: string;
    technologies: Technology[];
    icon: string;
    color: string;
};

const internships: Internship[] = [
    {
        number: "01",
        title: "Frontend Development",
        category: "WEB TECHNOLOGY",
        description: "Learn to create beautiful, responsive, and interactive websites using modern frontend technologies.",
        technologies: [
            { name: "HTML5", logo: "html5", color: "E34F26" },
            { name: "CSS3", logo: "css3", color: "1572B6" },
            { name: "JavaScript", logo: "javascript", color: "F7DF1E" },
            { name: "React", logo: "react", color: "61DAFB" },
        ],
        icon: "◈",
        color: "from-cyan-400/20 to-blue-500/5",
    },
    {
        number: "02",
        title: "Backend Development",
        category: "SERVER & DATABASE",
        description: "Explore server-side development, database management, and the logic behind powerful web applications.",
        technologies: [
            { name: "Node.js", logo: "nodedotjs", color: "5FA04E" },
            { name: "Express", logo: "express", color: "FFFFFF" },
            { name: "MongoDB", logo: "mongodb", color: "47A248" },
            { name: "PostgreSQL", logo: "postgresql", color: "4169E1" },
        ],
        icon: "⌘",
        color: "from-blue-400/20 to-indigo-500/5",
    },
    {
        number: "03",
        title: "Full Stack Development",
        category: "COMPLETE WEB SOLUTIONS",
        description: "Build your understanding of both frontend and backend development to create complete web solutions.",
        technologies: [
            { name: "HTML5", logo: "html5", color: "E34F26" },
            { name: "React", logo: "react", color: "61DAFB" },
            { name: "Node.js", logo: "nodedotjs", color: "5FA04E" },
            { name: "MongoDB", logo: "mongodb", color: "47A248" },
        ],
        icon: "⌬",
        color: "from-indigo-400/20 to-cyan-500/5",
    },
    {
        number: "04",
        title: "Data Science",
        category: "DATA & ANALYTICS",
        description: "Discover how to explore datasets, identify patterns, and turn information into meaningful insights.",
        technologies: [
            { name: "Python", logo: "python", color: "3776AB" },
            { name: "Pandas", logo: "pandas", color: "FFFFFF" },
            { name: "NumPy", logo: "numpy", color: "4DABCF" },
            { name: "Jupyter", logo: "jupyter", color: "F37626" },
        ],
        icon: "▥",
        color: "from-violet-400/20 to-blue-500/5",
    },
    {
        number: "05",
        title: "Artificial Intelligence",
        category: "INTELLIGENT SYSTEMS",
        description: "Explore AI concepts and understand how intelligent technologies can solve real-world problems.",
        technologies: [
            { name: "Python", logo: "python", color: "3776AB" },
            { name: "TensorFlow", logo: "tensorflow", color: "FF6F00" },
            { name: "PyTorch", logo: "pytorch", color: "EE4C2C" },
            { name: "OpenAI", logo: "openai", color: "FFFFFF" },
        ],
        icon: "✳",
        color: "from-cyan-400/20 to-teal-500/5",
    },
    {
        number: "06",
        title: "Mobile App Development",
        category: "REACT NATIVE",
        description: "Learn the foundations of mobile application development and explore cross-platform app experiences.",
        technologies: [
            { name: "React Native", logo: "react", color: "61DAFB" },
            { name: "JavaScript", logo: "javascript", color: "F7DF1E" },
            { name: "Android", logo: "android", color: "3DDC84" },
            { name: "Expo", logo: "expo", color: "FFFFFF" },
        ],
        icon: "▣",
        color: "from-sky-400/20 to-indigo-500/5",
    },
    {
        number: "07",
        title: "Python Programming",
        category: "PROGRAMMING",
        description: "Build programming foundations with Python and explore its applications in modern technology.",
        technologies: [
            { name: "Python", logo: "python", color: "3776AB" },
            { name: "VS Code", logo: "visualstudiocode", color: "007ACC" },
            { name: "Git", logo: "git", color: "F05032" },
            { name: "GitHub", logo: "github", color: "FFFFFF" },
        ],
        icon: "⌘",
        color: "from-yellow-400/15 to-blue-500/5",
    },
    {
        number: "08",
        title: "Java Programming",
        category: "SOFTWARE DEVELOPMENT",
        description: "Understand object-oriented programming and develop a foundation in Java-based software development.",
        technologies: [
            { name: "Java", logo: "openjdk", color: "FFFFFF" },
            { name: "Spring", logo: "spring", color: "6DB33F" },
            { name: "Git", logo: "git", color: "F05032" },
            { name: "GitHub", logo: "github", color: "FFFFFF" },
        ],
        icon: "◇",
        color: "from-orange-400/20 to-red-500/5",
    },
    {
        number: "09",
        title: "Cybersecurity",
        category: "DIGITAL SECURITY",
        description: "Explore cybersecurity fundamentals, digital safety, and responsible security practices.",
        technologies: [
            { name: "Kali Linux", logo: "kalilinux", color: "557C94" },
            { name: "Linux", logo: "linux", color: "FCC624" },
            { name: "Wireshark", logo: "wireshark", color: "1679A7" },
            { name: "Cisco", logo: "cisco", color: "1BA0D7" },
        ],
        icon: "⬡",
        color: "from-emerald-400/20 to-cyan-500/5",
    },
    {
        number: "10",
        title: "Networking",
        category: "NETWORK INFRASTRUCTURE",
        description: "Learn networking fundamentals and understand how devices and systems communicate.",
        technologies: [
            { name: "Cisco", logo: "cisco", color: "1BA0D7" },
            { name: "Linux", logo: "linux", color: "FCC624" },
            { name: "Wireshark", logo: "wireshark", color: "1679A7" },
            { name: "Ubuntu", logo: "ubuntu", color: "E95420" },
        ],
        icon: "⌘",
        color: "from-blue-400/20 to-cyan-500/5",
    },
];

const benefits = [
    {
        number: "01",
        title: "Practical Learning",
        description: "Explore concepts through structured learning activities and practical tasks.",
        icon: "✦",
    },
    {
        number: "02",
        title: "Skill Development",
        description: "Strengthen technical knowledge and build confidence in your chosen field.",
        icon: "◇",
    },
    {
        number: "03",
        title: "Professional Growth",
        description: "Develop problem-solving, communication, and professional working skills.",
        icon: "↗",
    },
    {
        number: "04",
        title: "Recognition",
        description: "Eligible participants may receive completion recognition according to program requirements.",
        icon: "✧",
    },
];

function TechBadge({ technology }: { technology: Technology }) {
    return (
        <div
            title={technology.name}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#07111f]/65 px-3 py-2 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10"
        >
            <img
                src={`https://cdn.simpleicons.org/${technology.logo}/${technology.color}`}
                alt=""
                loading="lazy"
                className="h-4 w-4 shrink-0 object-contain"
            />
            <span className="text-[10px] font-medium text-slate-300">
                {technology.name}
            </span>
        </div>
    );
}

export default function InternshipsPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">

            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85"
                        alt="Students collaborating on technology"
                        className="h-full w-full object-cover object-center opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/80 to-[#07111f]/55" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/30" />
                </div>

                <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-[100px]" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px]" />

                <div className="relative mx-auto grid min-h-[570px] max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">

                    <div>
                        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-[#07111f]/60 px-5 py-3 text-[10px] font-bold tracking-[0.23em] text-cyan-300 backdrop-blur-md">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                            NEXORA CAREER DEVELOPMENT
                        </div>

                        <p className="mb-4 text-xs font-bold tracking-[0.3em] text-slate-300">
                            LEARN • PRACTICE • PROGRESS
                        </p>

                        <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                            Your Potential.
                            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                                Your Next Chapter.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                            Explore technology-focused internship opportunities,
                            strengthen your skills, and take meaningful steps
                            toward your professional journey with Nexora Technologies.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#internship-tracks"
                                className="rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-white"
                            >
                                Explore Internships ↓
                            </a>
                            <a
                                href="/contact"
                                className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition hover:border-cyan-300 hover:text-cyan-300"
                            >
                                Contact Us ↗
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8 border-t border-white/15 pt-6">
                            <div>
                                <p className="text-2xl font-extrabold text-cyan-300">10</p>
                                <p className="mt-1 text-[10px] tracking-widest text-slate-400">TECH TRACKS</p>
                            </div>
                            <div>
                                <p className="text-2xl font-extrabold text-cyan-300">02</p>
                                <p className="mt-1 text-[10px] tracking-widest text-slate-400">MONTHS</p>
                            </div>
                            <div>
                                <p className="text-2xl font-extrabold text-cyan-300">01</p>
                                <p className="mt-1 text-[10px] tracking-widest text-slate-400">GROWTH JOURNEY</p>
                            </div>
                        </div>
                    </div>

                    {/* HERO VISUAL */}
                    <div className="relative mx-auto w-full max-w-[390px]">
                        <div className="absolute inset-5 rounded-full bg-cyan-400/10 blur-[70px]" />
                        <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#10233a]/75 p-5 shadow-2xl backdrop-blur-xl">

                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">YOUR JOURNEY STARTS HERE</p>
                                    <p className="mt-1 text-sm font-semibold text-white">Explore Your Potential</p>
                                </div>
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-xl text-cyan-300">✦</span>
                            </div>

                            <div className="my-5 overflow-hidden rounded-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85"
                                    alt="Technology learning workspace"
                                    className="h-44 w-full object-cover brightness-110"
                                />
                            </div>

                            <div className="space-y-3">
                                {[
                                    ["01", "Choose Your Track"],
                                    ["02", "Build Your Skills"],
                                    ["03", "Move Forward"],
                                ].map((item) => (
                                    <div key={item[0]} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-300/10 text-xs font-bold text-cyan-300">{item[0]}</span>
                                        <span className="text-sm font-semibold text-slate-200">{item[1]}</span>
                                        <span className="ml-auto text-cyan-300">↗</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 flex items-center justify-between rounded-xl bg-gradient-to-r from-cyan-400/15 to-blue-500/15 p-4">
                                <div>
                                    <p className="text-[10px] tracking-widest text-slate-400">PROGRAM DURATION</p>
                                    <p className="mt-1 text-lg font-extrabold text-white">2 Months</p>
                                </div>
                                <span className="text-3xl text-cyan-300">◷</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="px-6 py-20 lg:px-10">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-end">
                    <div>
                        <p className="mb-5 text-[11px] font-bold tracking-[0.3em] text-cyan-300">
                            01 / THE OPPORTUNITY
                        </p>
                        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Start with curiosity.
                            <span className="mt-1 block text-slate-500">Grow with experience.</span>
                        </h2>
                    </div>
                    <p className="border-l-2 border-cyan-400/50 pl-6 text-sm leading-8 text-slate-400 sm:text-base">
                        Our internship tracks are designed to introduce learners to
                        important technology fields through guided learning,
                        skill development, and practical exploration.
                        Choose a direction that matches your interests.
                    </p>
                </div>
            </section>

            {/* INTERNSHIP TRACKS */}
            <section id="internship-tracks" className="bg-[#0a192b] px-6 py-20 lg:px-10">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-cyan-300">02 / CHOOSE YOUR DIRECTION</p>
                            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                                Explore Our <span className="text-cyan-300">Tracks.</span>
                            </h2>
                        </div>
                        <p className="max-w-sm text-sm leading-7 text-slate-400">
                            Find the field that inspires you and begin building
                            knowledge for your next step.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {internships.map((item) => (
                            <article
                                key={item.number}
                                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#101f32] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:shadow-[0_15px_45px_rgba(34,211,238,0.09)]"
                            >
                                <div className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-br ${item.color} opacity-80`} />

                                <div className="relative flex items-center justify-between px-6 pt-6">
                                    <span className="text-xs font-bold tracking-widest text-slate-500">{item.number} / 10</span>
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-[#07111f]/60 text-2xl text-cyan-300 transition group-hover:scale-110 group-hover:bg-cyan-300 group-hover:text-[#07111f]">
                                        {item.icon}
                                    </span>
                                </div>

                                <div className="relative flex flex-1 flex-col px-6 pb-6 pt-7">
                                    <p className="text-[9px] font-bold tracking-[0.22em] text-cyan-300">{item.category}</p>
                                    <h3 className="mt-3 min-h-[56px] text-xl font-extrabold leading-snug text-white">{item.title}</h3>
                                    <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">{item.description}</p>

                                    <div className="my-5 h-px bg-white/10" />

                                    <p className="mb-3 text-[9px] font-bold tracking-[0.2em] text-slate-500">TECHNOLOGIES YOU WILL EXPLORE</p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((technology) => (
                                            <TechBadge key={technology.name} technology={technology} />
                                        ))}
                                    </div>

                                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                                        <div>
                                            <p className="text-[9px] font-bold tracking-widest text-slate-500">DURATION</p>
                                            <p className="mt-1 text-sm font-bold text-white">2 Months</p>
                                        </div>
                                        <a
                                            href={`/apply?track=${encodeURIComponent(item.title)}`}
                                            className="rounded-full bg-cyan-300 px-5 py-2.5 text-xs font-extrabold text-[#07111f] transition hover:bg-white"
                                        >
                                            Apply Now ↗
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="px-6 py-24 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 max-w-2xl">
                        <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-cyan-300">03 / YOUR DEVELOPMENT</p>
                        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                            More than a learning experience.
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-slate-400">
                            A chance to explore your interests, strengthen your
                            capabilities, and develop a professional mindset.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit) => (
                            <div key={benefit.number} className="group rounded-[22px] border border-white/10 bg-[#0d1c30] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold tracking-widest text-slate-500">{benefit.number}</span>
                                    <span className="text-2xl text-cyan-300 transition group-hover:scale-125">{benefit.icon}</span>
                                </div>
                                <h3 className="mt-7 text-lg font-extrabold">{benefit.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-400">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-6 pb-24 lg:px-10">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-cyan-300/20 bg-gradient-to-br from-[#12334b] via-[#102139] to-[#111b35] px-7 py-16 text-center sm:px-12">
                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]" />
                    <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[90px]" />

                    <div className="relative">
                        <p className="text-[10px] font-bold tracking-[0.3em] text-cyan-300">YOUR JOURNEY BEGINS WITH ONE STEP</p>
                        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Ready to explore
                            <span className="block text-cyan-300">what you can become?</span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300">
                            Choose your preferred internship track and take
                            the first step toward your learning journey.
                        </p>
                        <a href="#internship-tracks" className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-8 py-3.5 text-sm font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-white">
                            Find Your Internship ↗
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
