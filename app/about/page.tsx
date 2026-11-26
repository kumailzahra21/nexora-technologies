
const values = [
    { number: "01", icon: "✦", title: "Innovation First", description: "We explore fresh ideas and modern technologies to create smarter digital solutions." },
    { number: "02", icon: "◎", title: "Excellence in Work", description: "We focus on quality, attention to detail, and meaningful results in everything we build." },
    { number: "03", icon: "◇", title: "Growth Together", description: "We believe in shared success through collaboration, learning, and continuous improvement." },
    { number: "04", icon: "↗", title: "Future Focused", description: "We prepare businesses and emerging talent for the opportunities of tomorrow." },
];

const strengths = [
    { title: "Modern Technology", description: "We embrace modern tools and development practices to build future-ready solutions.", icon: "⌘" },
    { title: "Creative Thinking", description: "We turn complex challenges into practical ideas and thoughtful digital experiences.", icon: "✧" },
    { title: "Learning Culture", description: "We encourage continuous learning, practical experience, and professional development.", icon: "◈" },
    { title: "Collaboration", description: "We value teamwork, open communication, and long-term professional relationships.", icon: "∞" },
];

const focusAreas = [
    { title: "Digital Solutions", tag: "TECHNOLOGY", image: "photo-1518770660439-4636190af475", description: "Building useful digital experiences through modern technology." },
    { title: "Emerging Talent", tag: "LEARNING", image: "photo-1521737711867-e3b97375f902", description: "Encouraging practical skills, creativity, and professional growth." },
    { title: "Future Partnerships", tag: "COLLABORATION", image: "photo-1522071820081-009f0129c71c", description: "Creating meaningful connections and opportunities to grow together." },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">

            {/* HERO EXPERIENCE */}
            <section className="relative flex min-h-[720px] items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85')" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/90 to-[#07111f]/40" />
                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />
                <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />

                <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
                    <div>
                        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-xs font-bold tracking-[0.25em] text-cyan-300">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                            BEYOND TECHNOLOGY
                        </div>

                        <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                            Ideas Into
                            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
                                Innovation.
                            </span>
                            <span className="block text-white">Vision Into Reality.</span>
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                            We are Nexora Technologies — bringing technology, creativity,
                            and learning together to shape meaningful digital experiences
                            and opportunities for the future.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a href="/services" className="rounded-xl bg-cyan-400 px-8 py-4 font-bold text-[#07111f] shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300">
                                Discover Our Services ↗
                            </a>
                            <a href="/contact" className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-cyan-400 hover:bg-cyan-400/10">
                                Let&apos;s Connect
                            </a>
                        </div>

                        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
                            <div>
                                <p className="text-sm font-bold text-cyan-300">INNOVATE</p>
                                <p className="mt-1 text-xs text-slate-500">Think Beyond Limits</p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-cyan-300">BUILD</p>
                                <p className="mt-1 text-xs text-slate-500">Turn Ideas Into Reality</p>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-cyan-300">GROW</p>
                                <p className="mt-1 text-xs text-slate-500">Create New Possibilities</p>
                            </div>
                        </div>
                    </div>

                    {/* CREATIVE IMAGE COMPOSITION */}
                    <div className="relative mx-auto w-full max-w-lg">
                        <div className="absolute inset-0 rounded-full bg-cyan-400/15 blur-[100px]" />
                        <div className="relative rotate-2 rounded-[38px] border border-cyan-300/30 bg-white/5 p-3 shadow-2xl backdrop-blur-xl transition duration-700 hover:rotate-0">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=85"
                                alt="Technology team working together"
                                className="h-[390px] w-full rounded-[29px] object-cover sm:h-[460px]"
                            />
                            <div className="absolute inset-3 rounded-[29px] bg-gradient-to-t from-[#07111f]/90 via-transparent to-transparent" />
                            <div className="absolute bottom-9 left-8 right-8">
                                <p className="text-xs font-bold tracking-[0.3em] text-cyan-300">THE NEXORA PHILOSOPHY</p>
                                <p className="mt-3 text-3xl font-black">Innovate. Build. Grow.</p>
                            </div>
                        </div>

                        <div className="absolute -left-8 top-12 rounded-2xl border border-cyan-300/30 bg-[#102139]/95 p-4 shadow-xl backdrop-blur-xl sm:-left-14">
                            <span className="text-2xl text-cyan-300">✧</span>
                            <p className="mt-2 text-xs font-bold">CREATIVITY</p>
                        </div>
                        <div className="absolute -right-4 bottom-20 rounded-2xl border border-blue-300/30 bg-[#102139]/95 p-4 shadow-xl backdrop-blur-xl sm:-right-10">
                            <span className="text-2xl text-blue-300">⌘</span>
                            <p className="mt-2 text-xs font-bold">TECHNOLOGY</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT NEXORA */}
            <section className="px-6 py-28 lg:px-10">
                <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                    <div className="relative">
                        <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-cyan-400/20 to-blue-600/10 blur-2xl" />
                        <img
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                            alt="Modern collaborative workspace"
                            className="relative h-[420px] w-full rounded-[35px] border border-white/10 object-cover"
                        />
                        <div className="absolute -bottom-7 right-5 rounded-2xl border border-cyan-300/30 bg-[#102139] p-6 shadow-2xl sm:right-10">
                            <p className="text-3xl font-black text-cyan-300">NEXORA</p>
                            <p className="mt-1 text-xs tracking-[0.3em] text-slate-400">TECHNOLOGIES</p>
                        </div>
                    </div>

                    <div>
                        <p className="mb-5 text-xs font-bold tracking-[0.35em] text-cyan-400">01 / WHO WE ARE</p>
                        <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                            Technology With
                            <span className="block text-cyan-400">Purpose & Vision.</span>
                        </h2>
                        <p className="mt-7 leading-8 text-slate-400">
                            Nexora Technologies is a technology-focused organization
                            dedicated to digital innovation, practical learning, and
                            meaningful collaboration. We connect ideas with technology
                            and transform possibilities into valuable outcomes.
                        </p>
                        <p className="mt-5 leading-8 text-slate-400">
                            From digital solutions to professional learning opportunities,
                            our focus is on creating an environment where businesses,
                            individuals, and creative minds can move forward together.
                        </p>
                        <div className="mt-9 h-px w-full bg-gradient-to-r from-cyan-400/70 to-transparent" />
                        <p className="mt-6 text-sm font-semibold tracking-wider text-cyan-300">
                            INNOVATE <span className="mx-2 text-slate-600">•</span>
                            BUILD <span className="mx-2 text-slate-600">•</span> GROW
                        </p>
                    </div>
                </div>
            </section>

            {/* THREE FOCUS AREAS */}
            <section className="bg-[#0b192b] px-6 py-24 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 max-w-2xl">
                        <p className="mb-4 text-xs font-bold tracking-[0.35em] text-cyan-400">02 / WHAT WE DO</p>
                        <h2 className="text-4xl font-black sm:text-5xl">Where Ideas Take Shape.</h2>
                        <p className="mt-5 leading-7 text-slate-400">
                            Our focus connects technology, talent, and collaboration into
                            meaningful opportunities.
                        </p>
                    </div>

                    <div className="grid gap-7 md:grid-cols-3">
                        {focusAreas.map((item, index) => (
                            <div key={item.title} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#101e31] transition duration-500 hover:-translate-y-3 hover:border-cyan-400/50">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=85`}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />
                                    <span className="absolute left-5 top-5 rounded-full border border-cyan-300/30 bg-[#07111f]/70 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
                                        {item.tag}
                                    </span>
                                    <span className="absolute bottom-5 right-5 text-4xl font-black text-white/50">0{index + 1}</span>
                                </div>
                                <div className="p-7">
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                    <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MISSION AND VISION */}
            <section className="px-6 py-28 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-16 max-w-2xl text-center">
                        <p className="mb-4 text-xs font-bold tracking-[0.35em] text-cyan-400">03 / OUR DIRECTION</p>
                        <h2 className="text-4xl font-black sm:text-5xl">Purpose That Drives Us.</h2>
                        <p className="mt-5 leading-7 text-slate-400">A clear mission. A forward-thinking vision. A commitment to meaningful progress.</p>
                    </div>

                    <div className="grid gap-7 md:grid-cols-2">
                        <div className="group relative overflow-hidden rounded-[30px] border border-cyan-400/20 bg-gradient-to-br from-[#12314a] to-[#101e31] p-9 transition duration-500 hover:-translate-y-2 hover:border-cyan-300/60">
                            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />
                            <div className="relative">
                                <span className="text-5xl text-cyan-300">◈</span>
                                <p className="mt-8 text-xs font-bold tracking-[0.3em] text-cyan-300">OUR MISSION</p>
                                <h3 className="mt-4 text-3xl font-black">Empowering Through Innovation</h3>
                                <p className="mt-6 leading-8 text-slate-300">
                                    To deliver thoughtful technology solutions, provide practical
                                    learning experiences, and create opportunities that help
                                    individuals and organizations achieve their potential.
                                </p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-[30px] border border-blue-400/20 bg-gradient-to-br from-[#172747] to-[#101e31] p-9 transition duration-500 hover:-translate-y-2 hover:border-blue-300/60">
                            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl transition group-hover:bg-blue-400/20" />
                            <div className="relative">
                                <span className="text-5xl text-blue-300">◎</span>
                                <p className="mt-8 text-xs font-bold tracking-[0.3em] text-blue-300">OUR VISION</p>
                                <h3 className="mt-4 text-3xl font-black">A Smarter Digital Future</h3>
                                <p className="mt-6 leading-8 text-slate-300">
                                    To build a connected technology ecosystem where innovation,
                                    talent, and collaboration create lasting value and open doors
                                    to new possibilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="bg-[#0b192b] px-6 py-28 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16">
                        <p className="mb-4 text-xs font-bold tracking-[0.35em] text-cyan-400">04 / OUR PRINCIPLES</p>
                        <h2 className="text-4xl font-black sm:text-5xl">Values That Define Us.</h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => (
                            <div key={value.number} className="group relative min-h-[270px] overflow-hidden rounded-[25px] border border-white/10 bg-[#101e31] p-7 transition duration-500 hover:-translate-y-3 hover:border-cyan-400/60 hover:shadow-[0_20px_60px_-25px_rgba(34,211,238,0.35)]">
                                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-400/5 blur-2xl transition group-hover:bg-cyan-400/20" />
                                <div className="relative flex items-center justify-between">
                                    <span className="text-sm font-bold tracking-widest text-slate-500">{value.number}</span>
                                    <span className="text-3xl text-cyan-300 transition duration-300 group-hover:rotate-12 group-hover:scale-125">{value.icon}</span>
                                </div>
                                <h3 className="relative mt-12 text-xl font-extrabold">{value.title}</h3>
                                <p className="relative mt-4 text-sm leading-7 text-slate-400">{value.description}</p>
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY NEXORA */}
            <section className="px-6 py-28 lg:px-10">
                <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                    <div>
                        <p className="mb-5 text-xs font-bold tracking-[0.35em] text-cyan-400">05 / THE NEXORA DIFFERENCE</p>
                        <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                            A Different Way
                            <span className="block text-cyan-400">To Move Forward.</span>
                        </h2>
                        <p className="mt-7 leading-8 text-slate-400">
                            We bring together technology, creativity, and a growth mindset
                            to make digital progress more meaningful. Our approach is built
                            around people, possibilities, and practical results.
                        </p>
                        <a href="/internships" className="mt-9 inline-flex rounded-xl bg-cyan-400 px-7 py-4 font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-cyan-300">
                            Explore Opportunities ↗
                        </a>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {strengths.map((item) => (
                            <div key={item.title} className="group rounded-[25px] border border-white/10 bg-[#101e31] p-7 transition duration-300 hover:border-cyan-400/50 hover:bg-[#122943]">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-3xl text-cyan-300 transition group-hover:rotate-6 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
            <section className="px-6 pb-28 lg:px-10">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[35px] border border-cyan-400/20 bg-gradient-to-br from-[#12334b] via-[#102139] to-[#111b35] px-8 py-20 text-center sm:px-16">
                    <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-[100px]" />
                    <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
                    <div className="relative">
                        <p className="text-xs font-bold tracking-[0.35em] text-cyan-300">YOUR NEXT CHAPTER STARTS HERE</p>
                        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
                            Let&apos;s Create
                            <span className="block text-cyan-300">Something Extraordinary.</span>
                        </h2>
                        <p className="mx-auto mt-7 max-w-2xl leading-8 text-slate-300">
                            Explore our services, discover learning opportunities, or
                            connect with us to build something meaningful together.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <a href="/contact" className="rounded-xl bg-cyan-400 px-8 py-4 font-bold text-[#07111f] transition hover:-translate-y-1 hover:bg-cyan-300">Get In Touch ↗</a>
                            <a href="/partnerships" className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:bg-white/5">Partner With Us</a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
