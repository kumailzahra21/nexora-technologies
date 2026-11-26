
const rewards = [
    {
        number: "01",
        title: "Outstanding Performance",
        category: "EXCELLENCE",
        description:
            "Recognition for individuals who demonstrate exceptional commitment, quality work, and consistent performance.",
        image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85",
    },
    {
        number: "02",
        title: "Innovation & Creativity",
        category: "INNOVATION",
        description:
            "Celebrating fresh ideas, creative thinking, and practical solutions that make a meaningful difference.",
        image:
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85",
    },
    {
        number: "03",
        title: "Leadership & Initiative",
        category: "LEADERSHIP",
        description:
            "Acknowledging people who take initiative, support their teams, and contribute positively to shared goals.",
        image:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    },
    {
        number: "04",
        title: "Learning & Growth",
        category: "DEVELOPMENT",
        description:
            "Recognizing dedication to continuous learning, skill development, and professional improvement.",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
    },
];

const principles = [
    {
        icon: "✦",
        title: "Merit-Based",
        text: "Recognition is based on demonstrated contribution, performance, and applicable evaluation criteria.",
    },
    {
        icon: "◇",
        title: "Transparent",
        text: "Clear expectations and relevant criteria help make the recognition process fair and understandable.",
    },
    {
        icon: "↗",
        title: "Growth-Focused",
        text: "We value progress, learning, initiative, and meaningful contributions.",
    },
];

const steps = [
    ["01", "Contribute", "Demonstrate your skills, commitment, and positive contribution."],
    ["02", "Evaluate", "Contributions are reviewed against relevant criteria."],
    ["03", "Recognize", "Eligible achievements may receive formal recognition."],
];

export default function RewardsPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#f5f8fc] text-slate-900">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        .reward-font { font-family: 'Space Grotesk', sans-serif; }
        .reward-body { font-family: 'DM Sans', sans-serif; }
        .reward-image { transition: transform .7s cubic-bezier(.2,.8,.2,1); }
        .reward-card:hover .reward-image { transform: scale(1.07); }
        .reward-card { transition: transform .35s ease, box-shadow .35s ease; }
        .reward-card:hover { transform: translateY(-7px); box-shadow: 0 24px 55px rgba(15,23,42,.12); }
        .reward-grid {
          background-image: linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px);
          background-size: 42px 42px;
        }
      `}</style>

            {/* HERO */}
            <section className="relative min-h-[650px] overflow-hidden bg-[#07152d] text-white">
                <div className="reward-grid absolute inset-0 opacity-40" />
                <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-[110px]" />
                <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-32">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold tracking-[.2em] text-cyan-200">
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                            REWARDS & RECOGNITION
                        </div>

                        <h1 className="reward-font max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                            Celebrating
                            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                Excellence.
                            </span>
                            Inspiring Growth.
                        </h1>

                        <p className="reward-body mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                            Every meaningful contribution deserves to be valued. At Nexora
                            Technologies, we believe in recognizing dedication, creativity,
                            innovation, and the drive to achieve more.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#recognition"
                                className="rounded-xl bg-cyan-400 px-7 py-4 text-sm font-bold text-[#07152d] shadow-lg shadow-cyan-500/20 transition hover:bg-white"
                            >
                                Explore Recognition <span className="ml-2">↗</span>
                            </a>
                            <a
                                href="/contact"
                                className="rounded-xl border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/10"
                            >
                                Get in Touch
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400">
                            <span>✦ Performance</span>
                            <span>✦ Innovation</span>
                            <span>✦ Professional Growth</span>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="absolute -inset-4 rounded-[2rem] border border-cyan-300/20 rotate-3" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&w=1200&q=90"
                                alt="Award trophy representing achievement and recognition"
                                className="h-[390px] w-full rounded-[1.5rem] object-cover sm:h-[470px]"
                            />
                            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-[#07152d]/85 p-5 backdrop-blur-xl">
                                <p className="text-xs font-bold tracking-[.2em] text-cyan-300">
                                    THE NEXORA STANDARD
                                </p>
                                <p className="reward-font mt-2 text-2xl font-semibold text-white">
                                    Recognize. Appreciate. Elevate.
                                </p>
                            </div>
                        </div>
                        <div className="absolute -right-5 top-12 hidden rounded-2xl border border-cyan-200/20 bg-[#10294a] px-5 py-4 shadow-xl sm:block">
                            <span className="text-2xl text-cyan-300">✧</span>
                            <p className="mt-1 text-xs font-bold tracking-wider text-white">MAKE AN IMPACT</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
                <div className="relative">
                    <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full border border-cyan-300/50" />
                    <img
                        src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1100&q=85"
                        alt="Team members celebrating a shared achievement"
                        className="relative h-[350px] w-full rounded-[2rem] object-cover shadow-xl sm:h-[430px]"
                    />
                    <div className="absolute -bottom-5 right-5 rounded-2xl bg-white px-6 py-4 shadow-xl">
                        <p className="reward-font text-lg font-bold text-slate-900">People First</p>
                        <p className="text-xs text-slate-500">Progress Together</p>
                    </div>
                </div>

                <div className="pt-5 lg:pl-5">
                    <p className="text-xs font-bold tracking-[.25em] text-cyan-700">OUR PHILOSOPHY</p>
                    <h2 className="reward-font mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                        Great work deserves
                        <span className="text-blue-600"> meaningful recognition.</span>
                    </h2>
                    <p className="reward-body mt-7 leading-8 text-slate-600">
                        Recognition is more than an award. It is an opportunity to appreciate
                        effort, encourage progress, and create a culture where people feel
                        motivated to bring their best ideas forward.
                    </p>
                    <p className="reward-body mt-4 leading-8 text-slate-600">
                        Our approach focuses on genuine contributions and professional
                        development while encouraging a positive and collaborative
                        environment.
                    </p>
                    <a href="/about" className="mt-8 inline-flex items-center gap-3 font-bold text-blue-700 hover:text-cyan-600">
                        Discover Nexora <span>→</span>
                    </a>
                </div>
            </section>

            {/* RECOGNITION CATEGORIES */}
            <section id="recognition" className="bg-white px-6 py-24 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-14 max-w-2xl text-center">
                        <p className="text-xs font-bold tracking-[.25em] text-cyan-700">WHAT WE VALUE</p>
                        <h2 className="reward-font mt-4 text-4xl font-bold sm:text-5xl">
                            Recognition That <span className="text-blue-600">Matters</span>
                        </h2>
                        <p className="reward-body mt-5 leading-7 text-slate-500">
                            Different strengths create meaningful progress. We value the
                            contributions that help individuals and teams move forward.
                        </p>
                    </div>

                    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                        {rewards.map((item) => (
                            <article key={item.number} className="reward-card group overflow-hidden rounded-2xl border border-slate-200 bg-white">
                                <div className="relative h-56 overflow-hidden">
                                    <img src={item.image} alt={item.title} className="reward-image h-full w-full object-cover" />
                                    <div className="absolute left-4 top-4 rounded-lg bg-[#07152d]/85 px-3 py-2 text-xs font-bold tracking-widest text-cyan-200 backdrop-blur">
                                        {item.category}
                                    </div>
                                    <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-700 shadow-lg">
                                        {item.number}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="reward-font text-xl font-bold">{item.title}</h3>
                                    <p className="reward-body mt-3 text-sm leading-7 text-slate-500">{item.description}</p>
                                    <div className="mt-6 h-1 w-12 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* DARK FEATURE SECTION */}
            <section className="relative overflow-hidden bg-[#08172f] px-6 py-24 text-white lg:px-10">
                <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[110px]" />
                <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
                    <div>
                        <p className="text-xs font-bold tracking-[.25em] text-cyan-300">OUR COMMITMENT</p>
                        <h2 className="reward-font mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                            A culture built on
                            <span className="block text-cyan-300">appreciation.</span>
                        </h2>
                        <p className="reward-body mt-6 leading-8 text-slate-300">
                            We aim to create an environment where achievements are valued,
                            ideas are encouraged, and people are motivated to keep learning.
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85"
                            alt="Collaborative team discussion"
                            className="mt-9 h-64 w-full rounded-2xl object-cover"
                        />
                    </div>

                    <div className="grid gap-5">
                        {principles.map((item, index) => (
                            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[.06] p-7 backdrop-blur transition hover:border-cyan-300/50 hover:bg-white/[.09]">
                                <div className="flex items-start gap-5">
                                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-3xl text-cyan-300">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <p className="text-xs font-bold tracking-widest text-cyan-300">0{index + 1} / PRINCIPLE</p>
                                        <h3 className="reward-font mt-2 text-2xl font-bold">{item.title}</h3>
                                        <p className="reward-body mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="px-6 py-24 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 text-center">
                        <p className="text-xs font-bold tracking-[.25em] text-cyan-700">THE JOURNEY</p>
                        <h2 className="reward-font mt-4 text-4xl font-bold sm:text-5xl">How Recognition Works</h2>
                        <p className="reward-body mt-4 text-slate-500">A thoughtful approach to acknowledging meaningful contributions.</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {steps.map((step) => (
                            <div key={step[0]} className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                                <span className="reward-font text-5xl font-bold text-cyan-200">{step[0]}</span>
                                <h3 className="reward-font mt-7 text-2xl font-bold">{step[1]}</h3>
                                <p className="reward-body mt-4 text-sm leading-7 text-slate-500">{step[2]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPORTANT NOTE */}
            <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-7 sm:p-9">
                    <div className="flex items-start gap-4">
                        <span className="text-2xl text-blue-700">ⓘ</span>
                        <div>
                            <h3 className="reward-font text-lg font-bold">A Note on Eligibility</h3>
                            <p className="reward-body mt-2 max-w-4xl text-sm leading-7 text-slate-600">
                                Recognition, awards, and other benefits are subject to applicable
                                eligibility requirements, contribution assessment, evaluation,
                                and availability. Participation does not guarantee an award,
                                financial benefit, or any particular recognition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-gradient-to-r from-[#09234a] via-[#104b83] to-[#087eaa] px-6 py-20 text-center text-white">
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute -bottom-32 -right-10 h-80 w-80 rounded-full border border-white/10" />
                <div className="relative mx-auto max-w-3xl">
                    <p className="text-xs font-bold tracking-[.25em] text-cyan-200">YOUR CONTRIBUTION MATTERS</p>
                    <h2 className="reward-font mt-5 text-4xl font-bold sm:text-5xl">
                        Ready to Make an Impact?
                    </h2>
                    <p className="reward-body mx-auto mt-5 max-w-xl leading-8 text-blue-100">
                        Bring your ideas, develop your skills, and become part of a culture
                        that values meaningful contributions.
                    </p>
                    <div className="mt-9 flex flex-wrap justify-center gap-4">
                        <a href="/internships" className="rounded-xl bg-white px-7 py-4 text-sm font-bold text-blue-900 transition hover:bg-cyan-100">
                            Explore Internships →
                        </a>
                        <a href="/contact" className="rounded-xl border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10">
                            Contact Nexora
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
