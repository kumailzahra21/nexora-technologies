
"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

type Skill = {
  name: string;
  logo: string;
};

type Track = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  skills: Skill[];
};

const tracks: Track[] = [
  {
    title: "Frontend Development",
    subtitle: "Build beautiful interfaces",
    description: "Explore modern website interfaces and responsive user experiences.",
    icon: "✧",
    skills: [
      { name: "HTML5", logo: "html5" },
      { name: "CSS3", logo: "css3" },
      { name: "JavaScript", logo: "javascript" },
      { name: "React", logo: "react" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Tailwind", logo: "tailwindcss" },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Power the digital world",
    description: "Learn server-side development, APIs, databases, and application logic.",
    icon: "⌘",
    skills: [
      { name: "Node.js", logo: "nodejs" },
      { name: "Python", logo: "python" },
      { name: "Express", logo: "express" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "MySQL", logo: "mysql" },
      { name: "PostgreSQL", logo: "postgresql" },
    ],
  },
  {
    title: "Full Stack Development",
    subtitle: "Connect front and back",
    description: "Discover how complete web applications are designed and developed.",
    icon: "◈",
    skills: [
      { name: "React", logo: "react" },
      { name: "Next.js", logo: "nextjs" },
      { name: "Node.js", logo: "nodejs" },
      { name: "JavaScript", logo: "javascript" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "Git", logo: "git" },
    ],
  },
  {
    title: "Data Science",
    subtitle: "Discover insights in data",
    description: "Explore data analysis, visualization, and foundational data science tools.",
    icon: "◉",
    skills: [
      { name: "Python", logo: "python" },
      { name: "Pandas", logo: "pandas" },
      { name: "NumPy", logo: "numpy" },
      { name: "Jupyter", logo: "jupyter" },
      { name: "R", logo: "r" },
      { name: "PostgreSQL", logo: "postgresql" },
    ],
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Explore intelligent systems",
    description: "Get familiar with machine learning and modern AI development tools.",
    icon: "✳",
    skills: [
      { name: "Python", logo: "python" },
      { name: "TensorFlow", logo: "tensorflow" },
      { name: "PyTorch", logo: "pytorch" },
      { name: "OpenCV", logo: "opencv" },
      { name: "NumPy", logo: "numpy" },
      { name: "Jupyter", logo: "jupyter" },
    ],
  },
  {
    title: "Mobile App Development (React Native)",
    subtitle: "Create mobile experiences",
    description: "Explore cross-platform mobile application development.",
    icon: "▣",
    skills: [
      { name: "React Native", logo: "react" },
      { name: "JavaScript", logo: "javascript" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Android", logo: "android" },
      { name: "Firebase", logo: "firebase" },
      { name: "Git", logo: "git" },
    ],
  },
  {
    title: "Python Programming",
    subtitle: "Build with Python",
    description: "Develop programming fundamentals, problem-solving, and practical scripts.",
    icon: "⌘",
    skills: [
      { name: "Python", logo: "python" },
      { name: "Django", logo: "django" },
      { name: "Flask", logo: "flask" },
      { name: "Jupyter", logo: "jupyter" },
      { name: "Git", logo: "git" },
      { name: "Linux", logo: "linux" },
    ],
  },
  {
    title: "Java Programming",
    subtitle: "Strengthen programming foundations",
    description: "Learn Java fundamentals, object-oriented programming, and application development.",
    icon: "☕",
    skills: [
      { name: "Java", logo: "java" },
      { name: "Spring", logo: "spring" },
      { name: "Maven", logo: "maven" },
      { name: "MySQL", logo: "mysql" },
      { name: "Git", logo: "git" },
      { name: "IntelliJ", logo: "intellij" },
    ],
  },
  {
    title: "Cybersecurity",
    subtitle: "Understand digital security",
    description: "Explore security fundamentals, safe computing, and defensive practices.",
    icon: "⬡",
    skills: [
      { name: "Linux", logo: "linux" },
      { name: "Python", logo: "python" },
      { name: "Bash", logo: "bash" },
      { name: "Docker", logo: "docker" },
      { name: "Git", logo: "git" },
      { name: "Ubuntu", logo: "ubuntu" },
    ],
  },
  {
    title: "Networking",
    subtitle: "Connect systems together",
    description: "Understand networking fundamentals, infrastructure, and connectivity.",
    icon: "⌁",
    skills: [
      { name: "Cisco", logo: "cisco" },
      { name: "Linux", logo: "linux" },
      { name: "Ubuntu", logo: "ubuntu" },
      { name: "Python", logo: "python" },
      { name: "Bash", logo: "bash" },
      { name: "Docker", logo: "docker" },
    ],
  },
];

const benefits = [
  {
    number: "01",
    title: "Practical Learning",
    description: "Explore practical technology concepts and structured learning activities.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Technical Development",
    description: "Build familiarity with tools and technologies used in your chosen field.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Professional Growth",
    description: "Strengthen communication, confidence, and problem-solving abilities.",
    icon: "◎",
  },
  {
    number: "04",
    title: "Structured Duration",
    description: "A two-month internship program with a focused learning journey.",
    icon: "◷",
  },
];

function TechLogo({ logo, name }: Skill) {
  const [attempt, setAttempt] = useState(0);

  const sources = [
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logo}/${logo}-original.svg`,
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logo}/${logo}-plain.svg`,
  ];

  if (attempt >= sources.length) {
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-xs font-black text-cyan-300">
        {name.slice(0, 1)}
      </span>
    );
  }

  return (
    <img
      src={sources[attempt]}
      alt={`${name} logo`}
      title={name}
      className="h-7 w-7 shrink-0 object-contain"
      loading="lazy"
      onError={() => setAttempt((current) => current + 1)}
    />
  );
}

function getErrorMessage(err: unknown) {
  if (err && typeof err === "object") {
    const details = err as {
      message?: string;
      details?: string;
      hint?: string;
      code?: string;
    };

    const parts = [
      details.message,
      details.details,
      details.hint,
      details.code ? `Error code: ${details.code}` : "",
    ].filter(Boolean);

    if (parts.length) return parts.join(" — ");
  }

  if (err instanceof Error) return err.message;

  return "An unexpected error occurred. Please try again.";
}

export default function ApplyPage() {
  const supabase = createClient();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    internship_field: "",
    education: "",
    institution: "",
    portfolio_url: "",
    motivation: "",
    privacy_consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [applicationReference, setApplicationReference] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedTrack = params.get("track");

    if (selectedTrack && tracks.some((track) => track.title === selectedTrack)) {
      setForm((previous) => ({
        ...previous,
        internship_field: selectedTrack,
      }));
    }
  }, []);

  const selectedTrack = tracks.find(
    (track) => track.title === form.internship_field
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setForm((previous) => ({
        ...previous,
        [name]: (e.target as HTMLInputElement).checked,
      }));
      return;
    }

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const selectTrack = (title: string) => {
    setForm((previous) => ({
      ...previous,
      internship_field: title,
    }));
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setSuccess("");
    setApplicationReference("");
    setError("");

    const name = form.full_name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const education = form.education.trim();
    const motivation = form.motivation.trim();
    const portfolio = form.portfolio_url.trim();

    if (name.length < 2 || name.length > 120) {
      setError("Please enter your full name (2–120 characters).");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (phone.length < 7 || phone.length > 30) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!tracks.some((track) => track.title === form.internship_field)) {
      setError("Please select an internship track.");
      return;
    }

    if (!education || education.length > 200) {
      setError("Please enter your education details (maximum 200 characters).");
      return;
    }

    if (form.institution.trim().length > 200) {
      setError("Institution name cannot exceed 200 characters.");
      return;
    }

    if (motivation.length < 30 || motivation.length > 3000) {
      setError("Your motivation statement must contain 30–3000 characters.");
      return;
    }

    if (!form.privacy_consent) {
      setError("Please confirm the application information statement.");
      return;
    }

    if (portfolio) {
      try {
        const url = new URL(portfolio);
        if (!["http:", "https:"].includes(url.protocol)) {
          throw new Error("Invalid URL");
        }
      } catch {
        setError("Please enter a valid portfolio URL starting with https://");
        return;
      }
    }

    setLoading(true);

    try {
      const reference = crypto.randomUUID();

      const { error: submitError } = await supabase
        .from("internship_applications")
        .insert({
          id: reference,
          full_name: name,
          email,
          phone,
          internship_field: form.internship_field,
          education,
          institution: form.institution.trim() || null,
          portfolio_url: portfolio || null,
          motivation,
          privacy_consent: true,
        });

      if (submitError) {
        throw submitError;
      }

      setApplicationReference(reference);
      setSuccess(
        "Your application has been saved successfully and is awaiting review."
      );

      setForm({
        full_name: "",
        email: "",
        phone: "",
        internship_field: "",
        education: "",
        institution: "",
        portfolio_url: "",
        motivation: "",
        privacy_consent: false,
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Nexora application submission error:", err);

      const message = getErrorMessage(err);

      setError(
        `Application could not be submitted. ${message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050b18] text-white">

      {/* HERO */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85"
            alt="Technology professionals working together"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040a17] via-[#061329]/90 to-[#061329]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-[#050b18]/20" />
        </div>

        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              Nexora Career Launchpad
            </div>

            <h1 className="text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Discover Your
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                Tech Potential.
              </span>
              Build What's Next.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Choose your technology path, explore the tools behind modern
              innovation, and take your next step with Nexora Technologies.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#tracks"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1"
              >
                Explore Technology Tracks →
              </a>
              <a
                href="#application-form"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold transition hover:border-cyan-300/60 hover:bg-white/10"
              >
                Apply Now
              </a>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-7">
              <div>
                <p className="text-3xl font-bold text-cyan-300">10</p>
                <p className="mt-1 text-xs text-slate-400">Tech Tracks</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-300">02</p>
                <p className="mt-1 text-xs text-slate-400">Months</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-300">∞</p>
                <p className="mt-1 text-xs text-slate-400">Ideas to Explore</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b1930]/70 p-3 shadow-2xl backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=85"
                alt="Creative technology team"
                className="h-[390px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-[#071326]/90 p-5 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Your Journey Starts Here
                </p>
                <p className="mt-2 text-xl font-bold">Learn. Create. Evolve.</p>
                <p className="mt-1 text-sm text-slate-300">
                  Innovate • Build • Grow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM INTRO */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85"
          alt="Technology learning workspace"
          className="h-[390px] w-full rounded-3xl border border-white/10 object-cover"
        />

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            About The Program
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
            Turn Curiosity Into
            <span className="block text-cyan-400">Technical Confidence.</span>
          </h2>
          <p className="mt-6 leading-8 text-slate-400">
            The Nexora Technologies internship program is designed for
            individuals who want to explore technology fields and develop
            relevant skills through a structured learning journey.
          </p>
          <p className="mt-4 leading-8 text-slate-400">
            Select a track that matches your interests, complete your
            application, and tell us about your learning goals. Every
            application is subject to review.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-[#0b1930] p-5">
              <p className="text-2xl font-bold text-cyan-300">10</p>
              <p className="mt-2 text-sm text-slate-400">Specializations</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0b1930] p-5">
              <p className="text-2xl font-bold text-cyan-300">2 Months</p>
              <p className="mt-2 text-sm text-slate-400">Program Duration</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-white/10 bg-[#081426] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              The Nexora Experience
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Learn With Purpose.
              <span className="text-cyan-400"> Grow With Direction.</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.number}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-[#12213a] to-[#091426] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-slate-500">
                    {item.number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
                    {item.icon}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Explore Your Specialization
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Find Your <span className="text-cyan-400">Technology Path.</span>
          </h2>
          <p className="mt-5 leading-8 text-slate-400">
            Every track features a selection of technologies and tools
            associated with that field.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {tracks.map((track, index) => {
            const active = form.internship_field === track.title;

            return (
              <div
                key={track.title}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition duration-300 sm:p-7 ${active
                    ? "border-cyan-400 bg-[#102440] shadow-xl shadow-cyan-950/30"
                    : "border-white/10 bg-gradient-to-br from-[#101e35] to-[#091426] hover:-translate-y-1 hover:border-cyan-400/40"
                  }`}
              >
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300">
                      {track.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-500">
                        TRACK 0{index + 1}
                      </p>
                      <h3 className="mt-1 text-lg font-bold sm:text-xl">
                        {track.title}
                      </h3>
                      <p className="mt-1 text-xs text-cyan-300">
                        {track.subtitle}
                      </p>
                    </div>
                  </div>
                  {active && (
                    <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-300">
                      Selected
                    </span>
                  )}
                </div>

                <p className="mt-6 min-h-12 text-sm leading-7 text-slate-400">
                  {track.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Technology Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {track.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#071326]/80 px-3 py-2"
                      >
                        <TechLogo {...skill} />
                        <span className="text-xs font-medium text-slate-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs text-slate-500">
                    Duration: 2 Months
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      selectTrack(track.title);
                      document
                        .getElementById("application-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-[#06101f]"
                  >
                    Choose This Track →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section
        id="application-form"
        className="relative border-y border-white/10 bg-[#081426] py-24"
      >
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Application Portal
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Your Next <span className="block text-cyan-400">Move Starts Here.</span>
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              Complete the application with accurate details. Your
              information will be submitted to Nexora's application system
              for review.
            </p>

            <div className="group relative mt-10 overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=85"
                alt="Students learning and collaborating"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/95 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Start Your Journey
                </p>
                <p className="mt-2 text-xl font-bold">
                  Build your skills with purpose.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
              <p className="font-semibold text-cyan-300">Application Checklist</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                <li>✓ Correct contact information</li>
                <li>✓ Your preferred technology track</li>
                <li>✓ Education and institution details</li>
                <li>✓ A thoughtful motivation statement</li>
                <li>✓ Your consent to submit the application</li>
              </ul>
            </div>

            {selectedTrack && (
              <div className="mt-6 rounded-2xl border border-cyan-400/30 bg-[#102440] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                  Currently Selected
                </p>
                <p className="mt-2 font-bold">{selectedTrack.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedTrack.skills.slice(0, 4).map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-lg bg-[#071326] px-2 py-1.5"
                    >
                      <TechLogo {...skill} />
                      <span className="text-xs text-slate-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1c32] p-6 shadow-2xl sm:p-9">
            <div className="relative mb-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Join Nexora
              </p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Internship Application
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Complete all required fields marked with an asterisk (*).
              </p>
            </div>

            <form
              noValidate
              onSubmit={handleSubmit}
              className="relative space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-slate-300">
                    Full Name *
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={120}
                    autoComplete="name"
                    value={form.full_name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    maxLength={30}
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label htmlFor="internship_field" className="mb-2 block text-sm font-medium text-slate-300">
                    Internship Track *
                  </label>
                  <select
                    id="internship_field"
                    name="internship_field"
                    required
                    value={form.internship_field}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm text-white outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  >
                    <option value="" className="bg-[#071326]">
                      Select your track
                    </option>
                    {tracks.map((track) => (
                      <option key={track.title} value={track.title} className="bg-[#071326]">
                        {track.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {selectedTrack && (
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                    Your Selected Technology Track
                  </p>
                  <p className="mt-2 font-semibold">{selectedTrack.title}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedTrack.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#071326] px-3 py-2">
                        <TechLogo {...skill} />
                        <span className="text-xs text-slate-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="education" className="mb-2 block text-sm font-medium text-slate-300">
                    Education *
                  </label>
                  <input
                    id="education"
                    name="education"
                    type="text"
                    required
                    maxLength={200}
                    value={form.education}
                    onChange={handleChange}
                    placeholder="e.g. BS Computer Science"
                    className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="mb-2 block text-sm font-medium text-slate-300">
                    Institution
                  </label>
                  <input
                    id="institution"
                    name="institution"
                    type="text"
                    maxLength={200}
                    value={form.institution}
                    onChange={handleChange}
                    placeholder="University or college"
                    className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="portfolio_url" className="mb-2 block text-sm font-medium text-slate-300">
                  Portfolio / LinkedIn / GitHub URL
                </label>
                <input
                  id="portfolio_url"
                  name="portfolio_url"
                  type="url"
                  maxLength={1000}
                  value={form.portfolio_url}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                />
                <p className="mt-2 text-xs text-slate-500">
                  Optional — share your professional profile or work.
                </p>
              </div>

              <div>
                <label htmlFor="motivation" className="mb-2 block text-sm font-medium text-slate-300">
                  Why Do You Want to Join Nexora? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  minLength={30}
                  maxLength={3000}
                  rows={6}
                  value={form.motivation}
                  onChange={handleChange}
                  placeholder="Tell us about your interests, goals, and what you hope to learn..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm leading-7 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                />
                <p className="mt-2 text-right text-xs text-slate-500">
                  {form.motivation.length}/3000 characters
                </p>
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-[#071326] p-4">
                <input
                  type="checkbox"
                  name="privacy_consent"
                  checked={form.privacy_consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 shrink-0 accent-cyan-400"
                />
                <span className="text-sm leading-6 text-slate-400">
                  I confirm that the information provided is accurate and
                  agree that Nexora Technologies may use it to review my
                  internship application. *
                </span>
              </label>

              {error && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm leading-7 text-red-200"
                >
                  <p className="font-bold">Application Error</p>
                  <p className="mt-1 break-words">{error}</p>
                </div>
              )}

              {success && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-sm leading-7 text-emerald-200"
                >
                  <p className="font-bold">✓ Application Submitted Successfully!</p>
                  <p className="mt-1">{success}</p>
                  <p className="mt-3 break-all text-xs text-emerald-300">
                    Your application reference: {applicationReference}
                  </p>
                  <p className="mt-2 text-xs text-emerald-200/70">
                    Keep this reference for your records.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Submitting Your Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <span className="transition group-hover:translate-x-1">→</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-6 text-slate-500">
                Applications are subject to review. Submission does not
                guarantee selection or internship placement.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-cyan-600/10 to-blue-700/20" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Innovate • Build • Grow
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
            Choose Your Path.
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Shape Your Future.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Every great journey begins with a decision to learn. Explore
            your interests and take your next step with Nexora Technologies.
          </p>
          <a
            href="#application-form"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-[#071326] transition hover:-translate-y-1 hover:bg-cyan-100"
          >
            Start Your Application <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
