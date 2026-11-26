
const services = [
    {
        number: "01",
        title: "Web Development",
        category: "DIGITAL EXPERIENCES",
        description: "We create modern, responsive websites and digital experiences that help businesses build a stronger online presence and connect with their audiences.",
        image: "photo-1498050108023-c5249f4df085",
        features: ["Business Websites", "Custom Web Applications", "Responsive Design"],
    },
    {
        number: "02",
        title: "Software Solutions",
        category: "SMART SYSTEMS",
        description: "Purpose-built software solutions designed to simplify workflows, support operations, and address practical business challenges.",
        image: "photo-1518770660439-4636190af475",
        features: ["Custom Software", "Business Applications", "Process Solutions"],
    },
    {
        number: "03",
        title: "Cloud Services",
        category: "CONNECTED INFRASTRUCTURE",
        description: "Modern cloud solutions that support flexible digital environments, collaboration, and scalable operations.",
        image: "photo-1451187580459-43490279c0fa",
        features: ["Cloud Integration", "Deployment Support", "Digital Infrastructure"],
    },
    {
        number: "04",
        title: "AI & Automation",
        category: "INTELLIGENT TECHNOLOGY",
        description: "Discover intelligent technologies and automation approaches that can make everyday digital processes smarter.",
        image: "photo-1677442136019-21780ecad995",
        features: ["AI Integration", "Workflow Automation", "Smart Experiences"],
    },
    {
        number: "05",
        title: "IT Consulting",
        category: "TECHNOLOGY STRATEGY",
        description: "Technology guidance to help organizations evaluate options, plan improvements, and make informed digital decisions.",
        image: "photo-1454165804606-c3d57bc86b40",
        features: ["Technology Planning", "Digital Guidance", "Solution Strategy"],
    },
    {
        number: "06",
        title: "Digital Transformation",
        category: "BUSINESS EVOLUTION",
        description: "Thoughtful digital improvements that help businesses modernize processes and explore new opportunities.",
        image: "photo-1516321318423-f06f85e504b3",
        features: ["Digital Strategy", "Process Improvement", "Modernization"],
    },
];

const process = [
    { number: "01", title: "Discover", description: "Understand the vision, goals, and challenges." },
    { number: "02", title: "Design", description: "Shape the direction and define the solution." },
    { number: "03", title: "Develop", description: "Turn ideas into practical digital experiences." },
    { number: "04", title: "Evolve", description: "Explore improvements and future possibilities." },
];

const imageUrl = (id: string) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=85`;

export default function ServicesPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">

            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={imageUrl("photo-1519389950473-47ba0277781c")}
                        alt="Technology team collaborating"
                        className="h-full w-full object-cover opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/75 to-[#07111f]/45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/20" />
                </div>

                <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-[100px]" />
                <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-500/15 blur-[100px]" />

                <div className="relative mx-auto grid min-h-[570px] max-w-7xl items-center gap-8 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-[#07111f]/50 px-5 py-3 text-[10px] font-bold tracking-[0.25em] text-cyan-300 backdrop-blur-md">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                            THE NEXORA TECHNOLOGY EXPERIENCE
                        </div>

                        <p className="mb-4 text-xs font-bold tracking-[0.3em] text-slate-300">
                            INNOVATE • BUILD • GROW
                        </p>

                        <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                            Beyond Technology.
                            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                                Into Possibility.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                            From digital experiences to intelligent systems, discover
                            technology services designed to help ideas move forward
                            and create meaningful possibilities.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a href="#all-services" className="rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-white">
                                Discover Our Services ↓
                            </a>
                            <a href="/contact" className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition hover:border-cyan-300 hover:text-cyan-300">
                                Start a Project ↗
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
                            <div>
                                <p className="text-xs font-bold tracking-widest text-cyan-300">INNOVATION</p>
                                <p className="mt-1 text-xs text-slate-400">Modern thinking</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold tracking-widest text-cyan-300">CREATIVITY</p>
                                <p className="mt-1 text-xs text-slate-400">Purposeful ideas</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold tracking-widest text-cyan-300">QUALITY</p>
                                <p className="mt-1 text-xs text-slate-400">Attention to detail</p>
                            </div>
                        </div>
                    </div>

                    {/* COMPACT HERO VISUAL */}
                    <div className="relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center">
                        <div className="absolute h-[90%] w-[90%] rounded-full border border-cyan-300/20" />
                        <div className="absolute h-[72%] w-[72%] animate-[spin_35s_linear_infinite] rounded-full border border-dashed border-cyan-300/30" />
                        <div className="absolute h-[53%] w-[53%] rounded-full border border-blue-400/30" />
                        <div className="absolute h-48 w-48 rounded-full bg-cyan-400/10 blur-[70px]" />

                        <div className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-[32px] border border-cyan-300/40 bg-gradient-to-br from-cyan-300/20 to-blue-500/20 shadow-[0_0_60px_rgba(34,211,238,0.2)] backdrop-blur-xl sm:h-40 sm:w-40">
                            <span className="text-6xl font-black text-cyan-300">N</span>
                            <span className="mt-1 text-[9px] font-bold tracking-[0.35em] text-white">NEXORA</span>
                        </div>

                        <div className="absolute right-0 top-[18%] rounded-xl border border-white/15 bg-[#101d30]/90 p-3 shadow-xl backdrop-blur-xl">
                            <span className="text-xl text-cyan-300">✳</span>
                            <p className="mt-1 text-[11px] font-bold">Innovation</p>
                        </div>

                        <div className="absolute bottom-[15%] left-0 rounded-xl border border-white/15 bg-[#101d30]/90 p-3 shadow-xl backdrop-blur-xl">
                            <span className="text-xl text-blue-300">⌘</span>
                            <p className="mt-1 text-[11px] font-bold">Technology</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="px-6 py-20 lg:px-10">
                <div className="mx-auto grid max-w-7xl items-end gap-8 lg:grid-cols-2">
                    <div>
                        <p className="mb-5 text-[11px] font-bold tracking-[0.3em] text-cyan-300">
                            01 / OUR EXPERTISE
                        </p>
                        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Different challenges.
                            <span className="mt-1 block text-slate-500">Connected solutions.</span>
                        </h2>
                    </div>
                    <p className="border-l-2 border-cyan-400/50 pl-6 text-sm leading-8 text-slate-400 sm:text-base">
                        Every organization has its own vision. Our areas of expertise
                        bring together digital creativity, technology, and thoughtful
                        problem-solving to explore solutions around your goals.
                    </p>
                </div>
            </section>

            {/* SERVICES */}
            <section id="all-services" className="bg-[#0a192b] px-6 py-20 lg:px-10">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-cyan-300">
                                02 / WHAT WE DO
                            </p>
                            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                                Our Digital <span className="text-cyan-300">Universe.</span>
                            </h2>
                        </div>
                        <p className="max-w-sm text-sm leading-7 text-slate-400">
                            Six areas of expertise. One shared vision:
                            making technology more purposeful.
                        </p>
                    </div>

                    {/* WEB DEVELOPMENT */}
                    <article className="group mb-6 grid overflow-hidden rounded-[28px] border border-white/10 bg-[#101f32] lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="relative min-h-[230px] overflow-hidden lg:min-h-[320px]">
                            <img src={imageUrl(services[0].image)} alt={services[0].title} className="absolute inset-0 h-full w-full object-cover brightness-110 transition duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#101f32]/50 to-transparent" />
                            <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#07111f]/70 px-4 py-2 text-[10px] font-bold tracking-widest text-cyan-300 backdrop-blur-md">FEATURED EXPERTISE</span>
                            <span className="absolute bottom-4 left-6 text-6xl font-black text-white/70">01</span>
                        </div>
                        <div className="flex flex-col justify-center p-7 sm:p-10">
                            <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-300">{services[0].category}</p>
                            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">{services[0].title}</h3>
                            <p className="mt-4 text-sm leading-7 text-slate-400">{services[0].description}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {services[0].features.map((feature) => (
                                    <span key={feature} className="rounded-full border border-white/10 px-3 py-2 text-[11px] text-slate-300">{feature}</span>
                                ))}
                            </div>
                            <a href="/contact" className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-cyan-300 transition hover:gap-5">Discuss Web Development ↗</a>
                        </div>
                    </article>

                    {/* SOFTWARE AND CLOUD */}
                    <div className="mb-6 grid gap-6 lg:grid-cols-2">
                        {services.slice(1, 3).map((service) => (
                            <article key={service.number} className="group overflow-hidden rounded-[26px] border border-white/10 bg-[#101f32] transition hover:border-cyan-300/40">
                                <div className="relative h-44 overflow-hidden sm:h-52">
                                    <img src={imageUrl(service.image)} alt={service.title} className="h-full w-full object-cover brightness-110 transition duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#101f32]/60 to-transparent" />
                                    <span className="absolute right-5 top-4 text-4xl font-black text-white/80">{service.number}</span>
                                </div>
                                <div className="p-6 sm:p-7">
                                    <p className="text-[10px] font-bold tracking-[0.22em] text-cyan-300">{service.category}</p>
                                    <h3 className="mt-3 text-xl font-extrabold sm:text-2xl">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {service.features.map((feature) => <span key={feature} className="border-b border-cyan-300/30 pb-1 text-[11px] text-slate-300">{feature}</span>)}
                                    </div>
                                    <a href="/contact" className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-cyan-300 transition group-hover:gap-5">Explore Service ↗</a>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* AI AND AUTOMATION */}
                    <article className="group mb-6 overflow-hidden rounded-[28px] border border-cyan-300/20 bg-[#0d1c30]">
                        <div className="grid lg:grid-cols-2">
                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                                <p className="text-[10px] font-bold tracking-[0.25em] text-cyan-300">{services[3].category}</p>
                                <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">{services[3].title}</h3>
                                <p className="mt-5 text-sm leading-7 text-slate-400">{services[3].description}</p>
                                <div className="mt-6 space-y-3">
                                    {services[3].features.map((feature, index) => (
                                        <div key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/30 text-[10px] text-cyan-300">0{index + 1}</span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <a href="/contact" className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-cyan-300 transition hover:gap-5">Explore AI Possibilities ↗</a>
                            </div>
                            <div className="relative min-h-[260px] overflow-hidden lg:min-h-[360px]">
                                <img src={imageUrl(services[3].image)} alt={services[3].title} className="absolute inset-0 h-full w-full object-cover brightness-110 transition duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1c30]/50 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/50 bg-[#07111f]/50 text-5xl text-cyan-300 shadow-xl backdrop-blur-md">✳</div>
                                </div>
                                <span className="absolute bottom-5 right-5 rounded-full border border-white/30 bg-[#07111f]/70 px-4 py-2 text-[10px] font-bold tracking-widest text-cyan-200 backdrop-blur-md">INTELLIGENT FUTURES</span>
                            </div>
                        </div>
                    </article>

                    {/* IT CONSULTING AND DIGITAL TRANSFORMATION */}
                    {services.slice(4).map((service) => (
                        <article key={service.number} className="group mb-4 grid overflow-hidden rounded-[24px] border border-white/10 bg-[#101f32] transition hover:border-cyan-300/40 md:grid-cols-[150px_1fr_auto] md:items-center">
                            <div className="relative h-36 overflow-hidden md:h-32">
                                <img src={imageUrl(service.image)} alt={service.title} className="h-full w-full object-cover brightness-110 transition duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">{service.number} / {service.category}</p>
                                <h3 className="mt-2 text-xl font-extrabold">{service.title}</h3>
                                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{service.description}</p>
                                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                                    {service.features.map((feature) => <span key={feature} className="text-[11px] text-slate-300">✦ {feature}</span>)}
                                </div>
                            </div>
                            <a href="/contact" aria-label={`Discuss ${service.title}`} className="mx-6 mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 text-lg text-cyan-300 transition hover:bg-cyan-300 hover:text-[#07111f] md:mx-7 md:mb-0">↗</a>
                        </article>
                    ))}
                </div>
            </section>

            {/* PROCESS */}
            <section className="px-6 py-24 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 max-w-2xl">
                        <p className="mb-4 text-[11px] font-bold tracking-[0.3em] text-cyan-300">03 / OUR APPROACH</p>
                        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                            A thoughtful <span className="text-slate-500">way forward.</span>
                        </h2>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                            Every project deserves a clear direction. Our approach
                            keeps the focus on understanding, creating, and improving.
                        </p>
                    </div>

                    <div className="relative grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-cyan-400/10 via-cyan-400/50 to-cyan-400/10 lg:block" />
                        {process.map((item) => (
                            <div key={item.number} className="relative">
                                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/40 bg-[#07111f] text-sm font-extrabold text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.12)]">{item.number}</div>
                                <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
                                <p className="mt-3 max-w-xs text-sm leading-7 text-slate-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-24 lg:px-10">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-cyan-300/20 bg-gradient-to-br from-[#12334b] via-[#102139] to-[#111b35] px-7 py-14 text-center sm:px-12 sm:py-16">
                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]" />
                    <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[90px]" />
                    <div className="relative">
                        <p className="text-[10px] font-bold tracking-[0.3em] text-cyan-300">LET&apos;S CREATE SOMETHING MEANINGFUL</p>
                        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                            Your next idea
                            <span className="block text-cyan-300">deserves a future.</span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300">
                            Have a project, a challenge, or an idea in mind?
                            Let&apos;s explore what technology can make possible.
                        </p>
                        <a href="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-8 py-3.5 text-sm font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-white">
                            Start a Conversation ↗
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
