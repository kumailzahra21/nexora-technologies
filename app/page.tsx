
import Link from "next/link";

type Service = {
  number: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  tag: string;
  glow: string;
  image: string;
};

type Opportunity = {
  icon: string;
  title: string;
  description: string;
  href: string;
  label: string;
  image: string;
};

const services: Service[] = [
  {
    number: "01",
    icon: "⌘",
    title: "Web & Software Development",
    description:
      "Modern websites, custom software, and scalable digital products built around your business goals.",
    href: "/services",
    tag: "Digital Engineering",
    glow: "from-cyan-400/30 to-blue-500/10",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    icon: "☁",
    title: "Cloud Solutions",
    description:
      "Reliable cloud infrastructure and smarter systems designed for performance, flexibility, and growth.",
    href: "/services",
    tag: "Cloud Technology",
    glow: "from-blue-400/30 to-indigo-500/10",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Digital Transformation",
    description:
      "Improve operations, streamline workflows, and bring innovative technology into your business.",
    href: "/services",
    tag: "Business Growth",
    glow: "from-violet-400/30 to-cyan-500/10",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85",
  },
];

const opportunities: Opportunity[] = [
  {
    icon: "💻",
    title: "Professional Internships",
    description:
      "Build practical skills through structured, project-based learning experiences.",
    href: "/internships",
    label: "Explore Internships",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
  },
  {
    icon: "🎓",
    title: "Online Learning",
    description:
      "Explore technology concepts, strengthen your knowledge, and grow your expertise.",
    href: "/learning",
    label: "Start Learning",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    icon: "🤝",
    title: "Partnerships",
    description:
      "Connect with us to explore meaningful collaborations and innovative opportunities.",
    href: "/partnerships",
    label: "Partner With Us",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=85",
  },
];

const features = [
  {
    icon: "✦",
    title: "Innovation First",
    description: "Creative thinking meets modern technology.",
  },
  {
    icon: "◈",
    title: "Practical Experience",
    description: "Focus on real-world projects and skills.",
  },
  {
    icon: "⌁",
    title: "Growth Mindset",
    description: "Keep learning, improving, and moving forward.",
  },
  {
    icon: "◎",
    title: "Future Focused",
    description: "Build solutions for tomorrow's challenges.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#050b16] text-white">

      {/* HERO */}
      <section className="relative isolate flex min-h-[780px] items-center overflow-hidden px-5 py-28 sm:px-8">

        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=90"
          alt="Futuristic digital technology network"
          className="absolute inset-0 -z-30 h-full w-full animate-pulse object-cover opacity-30"
        />

        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#050b16] via-[#071426]/95 to-[#071426]/65" />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(8,145,178,.25),transparent_65%)]" />

        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(34,211,238,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.15)_1px,transparent_1px)] [background-size:55px_55px]" />

        <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div className="relative z-10 text-center lg:text-left">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              INNOVATE • BUILD • GROW
            </div>

            <h1 className="text-5xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Technology
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                That Moves
              </span>
              You Forward.
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              We bring ideas to life through innovative technology,
              professional development, and future-focused digital solutions.
              Let's create something meaningful together.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

              <Link
                href="/services"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-400/40"
              >
                Explore Our Services ↗
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60"
              >
                Discover Nexora
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-300 lg:justify-start">
              <span>✦ Innovation</span>
              <span>◈ Technology</span>
              <span>⌁ Opportunity</span>
            </div>
          </div>

          {/* FUTURISTIC NEXORA VISUAL */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[490px] items-center justify-center">

            <div className="absolute inset-[5%] animate-[spin_35s_linear_infinite] rounded-full border border-dashed border-cyan-400/40" />

            <div className="absolute inset-[17%] animate-[spin_25s_linear_infinite_reverse] rounded-full border border-blue-400/40" />

            <div className="absolute h-[65%] w-[65%] rounded-full bg-cyan-400/20 blur-[85px]" />

            <div className="relative flex h-48 w-48 items-center justify-center rounded-[3rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-violet-500/20 shadow-[0_0_90px_rgba(34,211,238,0.25)] backdrop-blur-2xl transition duration-500 hover:rotate-6 hover:scale-110 sm:h-60 sm:w-60">

              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-7xl font-black text-transparent sm:text-8xl">
                  N
                </div>

                <p className="mt-2 text-xs font-bold tracking-[0.35em] text-cyan-200">
                  NEXORA
                </p>
              </div>

            </div>

            <div className="absolute right-0 top-[18%] animate-bounce rounded-2xl border border-cyan-400/30 bg-[#10243b]/90 p-4 shadow-xl backdrop-blur-xl">
              <span className="text-2xl">⚡</span>
              <p className="mt-1 text-xs font-semibold text-cyan-200">
                Innovation
              </p>
            </div>

            <div className="absolute bottom-[12%] left-0 animate-pulse rounded-2xl border border-blue-400/30 bg-[#10243b]/90 p-4 shadow-xl backdrop-blur-xl">
              <span className="text-2xl">◈</span>
              <p className="mt-1 text-xs font-semibold text-blue-200">
                Technology
              </p>
            </div>

            <div className="absolute left-[12%] top-[15%] rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs text-violet-200 backdrop-blur-xl">
              Future Ready
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-cyan-400">
            WELCOME TO NEXORA
          </p>

          <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
            Ideas Into Innovation.
            <span className="block text-cyan-400">
              Innovation Into Impact.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl leading-8 text-slate-400">
            Nexora Technologies is focused on digital innovation, technology
            solutions, learning opportunities, and professional growth. We
            believe in building meaningful experiences that help people and
            businesses move forward.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-[#091526] px-5 py-24 sm:px-8">

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="mb-4 text-sm font-bold tracking-[0.3em] text-cyan-400">
                WHAT WE DO
              </p>

              <h2 className="text-4xl font-extrabold sm:text-5xl">
                Our <span className="text-cyan-400">Services</span>
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Technology-driven services designed to turn possibilities
                into practical digital solutions.
              </p>
            </div>

            <Link
              href="/services"
              className="text-sm font-bold text-cyan-300 transition hover:text-white"
            >
              View All Services ↗
            </Link>

          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <Link
                href={service.href}
                key={service.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101f33] shadow-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-[0_25px_70px_rgba(8,145,178,0.2)]"
              >

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101f33] via-[#101f33]/20 to-transparent" />

                  <div className={`absolute inset-0 bg-gradient-to-br ${service.glow} opacity-20 transition duration-500 group-hover:opacity-70`} />

                  <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-xl">
                    {service.number}
                  </span>

                  <div className="absolute bottom-4 left-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/30 bg-[#071525]/80 text-3xl text-cyan-300 shadow-xl backdrop-blur-xl transition duration-500 group-hover:rotate-12 group-hover:scale-110">
                    {service.icon}
                  </div>

                </div>

                <div className="relative p-7">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                    {service.tag}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-20 leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-semibold text-cyan-300">
                    Explore Service
                    <span className="transition duration-300 group-hover:translate-x-2">
                      ↗
                    </span>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="px-5 py-24 sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="mb-4 text-sm font-bold tracking-[0.3em] text-cyan-400">
              GROW WITH NEXORA
            </p>

            <h2 className="text-4xl font-extrabold sm:text-5xl">
              Explore Your <span className="text-cyan-400">Possibilities</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Discover opportunities to learn, gain experience, and build
              valuable professional connections.
            </p>

          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {opportunities.map((item, index) => (
              <Link
                href={item.href}
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101f33] transition duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
              >

                <div className="relative h-52 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101f33] via-black/10 to-transparent" />

                  <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs text-white backdrop-blur-xl">
                    0{index + 1}
                  </span>

                </div>

                <div className="relative p-7">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-3xl transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-20 leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <p className="mt-7 font-bold text-cyan-300">
                    {item.label} ↗
                  </p>

                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* WHY NEXORA */}
      <section className="relative overflow-hidden bg-[#091526] px-5 py-24 sm:px-8">

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-14 max-w-2xl">

            <p className="mb-4 text-sm font-bold tracking-[0.3em] text-cyan-400">
              THE NEXORA DIFFERENCE
            </p>

            <h2 className="text-4xl font-extrabold sm:text-5xl">
              Built Around <span className="text-cyan-400">Your Growth.</span>
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
              >

                <span className="text-4xl text-cyan-300">
                  {feature.icon}
                </span>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-5 py-28 sm:px-8">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#12385a_0%,#081426_55%,#050b16_100%)]" />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="mb-6 text-sm font-bold tracking-[0.3em] text-cyan-400">
            YOUR NEXT CHAPTER STARTS HERE
          </p>

          <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Have an Idea?
            <span className="block text-cyan-400">
              Let's Build It Together.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-slate-300">
            Whether you are looking for technology solutions, professional
            growth, or a meaningful collaboration, Nexora Technologies is
            ready to explore what's possible with you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-9 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-400/40"
            >
              Let's Talk ↗
            </Link>

            <Link
              href="/internships"
              className="rounded-full border border-white/20 bg-white/5 px-9 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60"
            >
              Start Your Journey
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
