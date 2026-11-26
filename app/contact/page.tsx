
"use client";

import React, { useState } from "react";
import { createClient } from "@/lib/supabase";

const contactOptions = [
    {
        number: "01",
        title: "General Inquiries",
        description: "Questions about Nexora, our vision, or company information.",
        icon: "✦",
    },
    {
        number: "02",
        title: "IT & Digital Solutions",
        description: "Discuss websites, software, AI, and technology projects.",
        icon: "⌘",
    },
    {
        number: "03",
        title: "Internships & Learning",
        description: "Get in touch about internship opportunities and learning.",
        icon: "◈",
    },
    {
        number: "04",
        title: "Business Partnerships",
        description: "Explore collaborations, strategic partnerships, and ideas.",
        icon: "◎",
    },
];

export default function ContactPage() {
    const supabase = createClient();

    const [form, setForm] = useState({
        full_name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccess("");
        setError("");

        const name = form.full_name.trim();
        const email = form.email.trim();
        const subject = form.subject.trim();
        const message = form.message.trim();

        if (name.length < 2) {
            setError("Please enter your full name.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (subject.length < 3) {
            setError("Please enter a subject.");
            return;
        }

        if (message.length < 10) {
            setError("Your message must contain at least 10 characters.");
            return;
        }

        setLoading(true);

        try {
            const { error: submitError } = await supabase
                .from("contact_messages")
                .insert({
                    full_name: name,
                    email,
                    subject,
                    message,
                });

            if (submitError) throw submitError;

            setSuccess(
                "Your message has been submitted successfully. Our team will review your inquiry."
            );

            setForm({
                full_name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            console.error("Contact form error:", err);
            setError(
                "We could not submit your message. Please try again in a moment."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#050b18] text-white">

            {/* HERO */}
            <section className="relative flex min-h-[580px] items-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=85"
                        alt="Technology professionals collaborating"
                        className="h-full w-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#040a17] via-[#061329]/90 to-[#07152a]/55" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-[#050b18]/30" />
                </div>

                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
                <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />

                <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                            Let's Connect
                        </div>

                        <h1 className="max-w-3xl text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
                            Every Great Idea
                            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                                Starts With
                            </span>
                            A Conversation.
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                            Have a project in mind, a question to ask, or an opportunity to
                            explore? Connect with Nexora Technologies. We would love to hear
                            from you.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="#contact-form"
                                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:shadow-cyan-500/25"
                            >
                                Send an Inquiry →
                            </a>

                            <a
                                href="#contact-options"
                                className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/10"
                            >
                                Explore Contact Options
                            </a>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-7 border-t border-white/10 pt-7">
                            <div>
                                <p className="text-2xl font-bold text-cyan-300">01</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                                    Start a conversation
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-cyan-300">02</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                                    Share your vision
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-cyan-300">03</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                                    Explore possibilities
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-lg">
                        <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-cyan-400/20 blur-2xl" />

                        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b1930]/70 p-3 shadow-2xl backdrop-blur-xl">
                            <img
                                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85"
                                alt="Premium modern office"
                                className="h-[370px] w-full rounded-[1.5rem] object-cover"
                            />

                            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-[#071326]/90 p-5 backdrop-blur-xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                    Nexora Technologies
                                </p>
                                <p className="mt-2 text-xl font-bold">
                                    Innovate • Build • Grow
                                </p>
                                <p className="mt-1 text-sm text-slate-300">
                                    Turning conversations into possibilities.
                                </p>
                            </div>
                        </div>

                        <div className="absolute -right-5 -top-5 hidden rounded-2xl border border-cyan-300/20 bg-[#0b1930]/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:block">
                            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                                Let's build
                            </span>
                            <p className="mt-1 text-sm font-bold">Something great.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT OPTIONS */}
            <section
                id="contact-options"
                className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
            >
                <div className="mb-14 max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                        How Can We Help?
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                        Let's Start With
                        <span className="text-cyan-400"> The Right Conversation.</span>
                    </h2>

                    <p className="mt-5 leading-8 text-slate-400">
                        Choose the area that best describes your inquiry. Our contact
                        process is designed to make reaching out simple and straightforward.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {contactOptions.map((item) => (
                        <div
                            key={item.number}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#101e35] to-[#091426] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-blue-950/40"
                        >
                            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/5 blur-2xl transition group-hover:bg-cyan-400/20" />

                            <div className="relative flex items-center justify-between">
                                <span className="text-xs font-bold tracking-widest text-slate-500">
                                    {item.number}
                                </span>

                                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-[#06101f]">
                                    {item.icon}
                                </span>
                            </div>

                            <h3 className="relative mt-8 text-lg font-bold">
                                {item.title}
                            </h3>

                            <p className="relative mt-3 text-sm leading-7 text-slate-400">
                                {item.description}
                            </p>

                            <div className="relative mt-7 h-px w-full bg-gradient-to-r from-cyan-400/60 to-transparent" />

                            <p className="relative mt-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                                Connect with us
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FORM + IMAGE */}
            <section
                id="contact-form"
                className="relative border-y border-white/10 bg-[#081426] py-24"
            >
                <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

                <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                            Get In Touch
                        </p>

                        <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                            Tell Us What
                            <span className="block text-cyan-400">You're Building.</span>
                        </h2>

                        <p className="mt-6 leading-8 text-slate-400">
                            Share your thoughts, requirements, or questions using the form.
                            Your message will be submitted to our contact system for review.
                        </p>

                        <div className="group relative mt-10 overflow-hidden rounded-3xl border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1100&q=85"
                                alt="Creative contemporary workspace"
                                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/90 via-transparent to-transparent" />

                            <div className="absolute bottom-5 left-6">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                    Ideas. Innovation. Impact.
                                </p>
                                <p className="mt-2 text-xl font-bold">
                                    Your next chapter starts here.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                            <div className="flex items-center gap-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                                <p className="font-semibold text-cyan-300">
                                    Your message matters
                                </p>
                            </div>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                We value clear communication and meaningful opportunities.
                                Please provide accurate information so your inquiry can be
                                reviewed appropriately.
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1c32] p-6 shadow-2xl shadow-black/20 sm:p-9">
                        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/5 blur-3xl" />

                        <div className="relative mb-8">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                                Contact Form
                            </p>

                            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                                Send Us a Message
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                Fill in the details below to submit your inquiry.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="relative space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="full_name"
                                        className="mb-2 block text-sm font-medium text-slate-300"
                                    >
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
                                        className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-slate-300"
                                    >
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
                                        className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-medium text-slate-300"
                                >
                                    Subject *
                                </label>

                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    required
                                    minLength={3}
                                    maxLength={200}
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="What would you like to discuss?"
                                    className="w-full rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-slate-300"
                                >
                                    Your Message *
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    minLength={10}
                                    maxLength={5000}
                                    rows={6}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about your inquiry, project, or idea..."
                                    className="w-full resize-y rounded-xl border border-white/10 bg-[#071326] px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                                />

                                <p className="mt-2 text-right text-xs text-slate-500">
                                    {form.message.length}/5000 characters
                                </p>
                            </div>

                            {error && (
                                <div
                                    role="alert"
                                    className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-300"
                                >
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div
                                    role="status"
                                    className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-300"
                                >
                                    ✓ {success}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Submitting Message..." : "Submit Your Inquiry"}

                                {!loading && (
                                    <span className="transition group-hover:translate-x-1">
                                        →
                                    </span>
                                )}
                            </button>

                            <p className="text-center text-xs leading-6 text-slate-500">
                                By submitting this form, you are providing information for
                                Nexora Technologies to review your inquiry.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative overflow-hidden px-6 py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-cyan-600/10 to-blue-700/20" />
                <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

                <div className="relative mx-auto max-w-4xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                        The Next Step Starts Here
                    </p>

                    <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
                        Let's Create
                        <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Something Meaningful.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
                        Whether it's an idea, a challenge, or a new opportunity, every
                        meaningful collaboration begins with a conversation.
                    </p>

                    <a
                        href="#contact-form"
                        className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-[#071326] transition hover:-translate-y-1 hover:bg-cyan-100"
                    >
                        Start a Conversation <span>↗</span>
                    </a>
                </div>
            </section>
        </main>
    );
}
