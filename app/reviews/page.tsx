
"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase";

type Review = {
    id: string;
    full_name: string;
    role: string | null;
    review: string;
    rating: number;
    created_at: string;
};

const supabase = createClient();

const photos = [
    {
        src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
        alt: "Professional team collaboration",
    },
    {
        src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
        alt: "Business professionals working together",
    },
    {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85",
        alt: "Modern office workspace",
    },
];

function Stars({ rating }: { rating: number }) {
    return (
        <div
            className="flex gap-1 text-amber-400"
            aria-label={`${rating} out of 5 stars`}
        >
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < rating ? "" : "text-slate-300"}>
                    ★
                </span>
            ))}
        </div>
    );
}

function getInitials(name: string) {
    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("");
}

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState("");

    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [reviewText, setReviewText] = useState("");

    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function loadReviews() {
        setLoading(true);
        setLoadError("");

        const { data, error } = await supabase
            .from("client_reviews")
            .select("id, full_name, role, review, rating, created_at")
            .eq("status", "approved")
            .order("created_at", { ascending: false });

        if (error) {
            setLoadError("We couldn't load reviews right now. Please try again.");
            setReviews([]);
        } else {
            setReviews((data || []) as Review[]);
        }

        setLoading(false);
    }

    useEffect(() => {
        loadReviews();
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setSubmitting(true);
        setMessage("");
        setError("");

        const cleanName = fullName.trim();
        const cleanReview = reviewText.trim();

        if (cleanName.length < 2 || cleanName.length > 120) {
            setError("Please enter a name between 2 and 120 characters.");
            setSubmitting(false);
            return;
        }

        if (cleanReview.length < 10 || cleanReview.length > 2000) {
            setError("Your review must be between 10 and 2000 characters.");
            setSubmitting(false);
            return;
        }

        const { error: submitError } = await supabase
            .from("client_reviews")
            .insert([
                {
                    full_name: cleanName,
                    email: email.trim() || null,
                    role: role.trim() || null,
                    review: cleanReview,
                    rating,
                    status: "pending",
                },
            ]);

        if (submitError) {
            setError("Your review could not be submitted. Please try again later.");
        } else {
            setMessage("Thank you! Your review has been submitted for approval.");
            setFullName("");
            setEmail("");
            setRole("");
            setReviewText("");
            setRating(5);
            setHoverRating(0);
        }

        setSubmitting(false);
    }

    return (
        <main className="min-h-screen overflow-hidden bg-[#f5f8fd] text-[#10213d]">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

        .review-body { font-family: 'DM Sans', sans-serif; }
        .review-heading { font-family: 'Manrope', sans-serif; }

        .review-photo img {
          transition: transform .75s cubic-bezier(.2,.8,.2,1);
        }

        .review-photo:hover img {
          transform: scale(1.06);
        }

        .review-card {
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .review-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 50px rgba(16,33,61,.10);
        }

        .review-grid {
          background-image:
            linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .review-input {
          width: 100%;
          border: 1px solid rgba(148,163,184,.25);
          border-radius: 12px;
          background: rgba(255,255,255,.07);
          padding: 14px 16px;
          color: white;
          outline: none;
          transition: border-color .2s ease, background .2s ease;
        }

        .review-input:focus {
          border-color: #22d3ee;
          background: rgba(255,255,255,.11);
        }

        .review-input::placeholder {
          color: #94a3b8;
        }
      `}</style>

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#07162e] text-white">
                <div className="review-grid absolute inset-0 opacity-60" />

                <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
                <div className="absolute -bottom-48 left-10 h-[450px] w-[450px] rounded-full bg-cyan-400/15 blur-[120px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-28">
                    <div>
                        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-cyan-200">
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                            CLIENT EXPERIENCES
                        </div>

                        <h1 className="review-heading max-w-2xl text-5xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl lg:text-[72px]">
                            Experiences That
                            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
                                Inspire Trust.
                            </span>
                        </h1>

                        <p className="review-body mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                            Behind every meaningful relationship is a genuine experience.
                            Discover feedback from people connected with Nexora Technologies
                            and share your own journey with us.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="#all-reviews"
                                className="rounded-xl bg-cyan-400 px-7 py-4 text-sm font-bold text-[#07162e] shadow-lg shadow-cyan-500/20 transition hover:bg-white"
                            >
                                Explore Reviews ↗
                            </a>

                            <a
                                href="#share-review"
                                className="rounded-xl border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:border-cyan-300 hover:bg-white/10"
                            >
                                Share Your Experience
                            </a>
                        </div>

                        <div className="mt-12 border-t border-white/15 pt-7">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {photos.map((photo) => (
                                        <div
                                            key={photo.src}
                                            className="h-12 w-12 overflow-hidden rounded-full border-[3px] border-[#07162e]"
                                        >
                                            <img
                                                src={photo.src}
                                                alt={photo.alt}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <p className="review-body text-sm font-semibold text-white">
                                        Every perspective matters.
                                    </p>
                                    <p className="review-body mt-1 text-xs text-slate-400">
                                        Genuine feedback. Continuous improvement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* UNIQUE PHOTO COLLAGE */}
                    <div className="relative mx-auto h-[480px] w-full max-w-xl sm:h-[550px]">
                        <div className="absolute right-0 top-0 h-[77%] w-[78%] overflow-hidden rounded-[24px] border border-white/15 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=90"
                                alt="A team collaborating in a modern workplace"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="review-photo absolute bottom-0 left-0 h-[48%] w-[55%] overflow-hidden rounded-2xl border-[7px] border-[#07162e] shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85"
                                alt="Team sharing ideas during a meeting"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="absolute bottom-[13%] right-0 max-w-[185px] rounded-2xl border border-white/15 bg-[#102c50]/95 p-5 shadow-xl backdrop-blur-xl sm:right-[-8px]">
                            <span className="text-3xl text-cyan-300">✦</span>
                            <p className="review-heading mt-2 text-sm font-bold text-white">
                                Built on trust.
                            </p>
                            <p className="review-body mt-1 text-xs leading-5 text-slate-300">
                                Strengthened through meaningful experiences.
                            </p>
                        </div>

                        <div className="absolute left-0 top-[8%] rounded-xl border border-cyan-300/20 bg-[#102c50]/90 px-4 py-3 text-[10px] font-bold tracking-[.18em] text-cyan-200 backdrop-blur">
                            THE NEXORA COMMUNITY
                        </div>
                    </div>
                </div>
            </section>

            {/* BLUE BRAND STRIP */}
            <section className="bg-gradient-to-r from-[#0753a6] via-[#0878bd] to-[#0796ba] px-6 py-6 text-white">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
                    {["TRUST", "COLLABORATION", "EXPERIENCE", "GROWTH"].map((word) => (
                        <span
                            key={word}
                            className="review-body text-xs font-bold tracking-[.22em]"
                        >
                            ✧ {word}
                        </span>
                    ))}
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
                <div className="relative">
                    <div className="absolute -left-5 -top-5 h-36 w-36 rounded-full border border-cyan-300/60" />

                    <div className="review-photo relative overflow-hidden rounded-[26px]">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                            alt="Business professionals collaborating"
                            className="h-[360px] w-full object-cover sm:h-[440px]"
                        />
                    </div>

                    <div className="absolute -bottom-6 right-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl">
                        <p className="review-heading text-xl font-extrabold text-blue-700">
                            Better Together
                        </p>
                        <p className="review-body mt-1 text-xs text-slate-500">
                            Connecting ideas and people
                        </p>
                    </div>
                </div>

                <div className="pt-5 lg:pl-5">
                    <p className="review-body text-xs font-bold tracking-[.25em] text-blue-700">
                        MORE THAN JUST FEEDBACK
                    </p>

                    <h2 className="review-heading mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                        Your experience helps shape our future.
                    </h2>

                    <p className="review-body mt-7 leading-8 text-slate-600">
                        We believe that listening is an important part of building better
                        professional relationships. Honest feedback helps us understand
                        expectations, identify opportunities, and improve the way we work.
                    </p>

                    <p className="review-body mt-4 leading-8 text-slate-600">
                        Whether you are a client, intern, learner, or project partner,
                        your perspective helps us keep moving forward.
                    </p>

                    <a
                        href="#share-review"
                        className="review-body mt-8 inline-flex items-center gap-3 text-sm font-bold text-blue-700 transition hover:text-cyan-600"
                    >
                        Share your perspective <span>→</span>
                    </a>
                </div>
            </section>

            {/* REVIEW LIST */}
            <section id="all-reviews" className="bg-white px-6 py-24 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <p className="review-body text-xs font-bold tracking-[.25em] text-blue-700">
                                VOICES OF OUR COMMUNITY
                            </p>

                            <h2 className="review-heading mt-4 text-4xl font-extrabold sm:text-5xl">
                                Real experiences.
                                <span className="block text-blue-600">Shared with purpose.</span>
                            </h2>

                            <p className="review-body mt-5 max-w-xl leading-7 text-slate-500">
                                Explore feedback that has been reviewed and approved for
                                publication.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-blue-100 bg-blue-50 px-6 py-5">
                            <p className="review-body text-xs font-bold tracking-widest text-slate-500">
                                PUBLISHED REVIEWS
                            </p>
                            <p className="review-heading mt-2 text-4xl font-extrabold text-blue-700">
                                {reviews.length.toString().padStart(2, "0")}
                            </p>
                        </div>
                    </div>

                    {loading ? (
                        <div className="rounded-2xl bg-slate-50 py-20 text-center">
                            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
                            <p className="review-body mt-5 text-sm text-slate-500">
                                Loading published reviews...
                            </p>
                        </div>
                    ) : loadError ? (
                        <div className="rounded-2xl border border-red-100 bg-red-50 p-10 text-center">
                            <p className="review-body text-sm text-red-700">
                                {loadError}
                            </p>

                            <button
                                onClick={loadReviews}
                                className="mt-5 rounded-xl bg-[#10213d] px-6 py-3 text-sm font-bold text-white"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : reviews.length === 0 ? (
                        <div className="grid items-center gap-8 rounded-3xl bg-[#f3f7fc] p-8 md:grid-cols-[.85fr_1.15fr] md:p-12">
                            <div className="review-photo overflow-hidden rounded-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=85"
                                    alt="People connecting and sharing ideas"
                                    className="h-64 w-full object-cover"
                                />
                            </div>

                            <div>
                                <span className="text-3xl text-cyan-600">✧</span>

                                <h3 className="review-heading mt-4 text-3xl font-extrabold">
                                    Every great story begins with an experience.
                                </h3>

                                <p className="review-body mt-4 max-w-lg leading-7 text-slate-500">
                                    We look forward to sharing genuine experiences here.
                                    You can be among the first to submit feedback.
                                </p>

                                <a
                                    href="#share-review"
                                    className="review-body mt-7 inline-block rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-600"
                                >
                                    Share Your Experience →
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {reviews.map((item, index) => (
                                <article
                                    key={item.id}
                                    className={`review-card rounded-2xl border border-slate-200 bg-[#f8fafd] p-7 ${index % 3 === 1 ? "lg:mt-10" : ""
                                        }`}
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <Stars rating={item.rating} />

                                        <span className="review-body text-xs text-slate-400">
                                            {new Date(item.created_at).toLocaleDateString()}
                                        </span>
                                    </div>

                                    <span className="review-heading mt-6 block text-5xl font-extrabold leading-none text-blue-200">
                                        “
                                    </span>

                                    <p className="review-body mt-2 whitespace-pre-wrap break-words text-sm leading-7 text-slate-700">
                                        {item.review}
                                    </p>

                                    <div className="mt-7 flex items-center gap-3 border-t border-slate-200 pt-5">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-cyan-500 text-sm font-bold text-white">
                                            {getInitials(item.full_name)}
                                        </div>

                                        <div className="min-w-0">
                                            <p className="review-body truncate text-sm font-bold text-[#10213d]">
                                                {item.full_name}
                                            </p>

                                            <p className="review-body truncate text-xs text-slate-500">
                                                {item.role || "Community Member"}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* BRAND STORY FEATURE */}
            <section className="relative overflow-hidden bg-[#07162e] px-6 py-24 text-white lg:px-10">
                <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[110px]" />
                <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[100px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1fr]">
                    <div>
                        <p className="review-body text-xs font-bold tracking-[.25em] text-cyan-300">
                            THE POWER OF CONNECTION
                        </p>

                        <h2 className="review-heading mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                            Strong relationships.
                            <span className="block text-cyan-300">
                                Stronger possibilities.
                            </span>
                        </h2>

                        <p className="review-body mt-6 max-w-xl leading-8 text-slate-300">
                            At Nexora, we value collaboration, open communication, and
                            continuous improvement. Your feedback is one of the ways we
                            understand how to create better experiences.
                        </p>

                        <a
                            href="/contact"
                            className="review-body mt-9 inline-flex rounded-xl bg-cyan-400 px-7 py-4 text-sm font-bold text-[#07162e] transition hover:bg-white"
                        >
                            Connect With Our Team ↗
                        </a>
                    </div>

                    <div className="review-photo overflow-hidden rounded-[28px] border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=90"
                            alt="Contemporary professional workspace"
                            className="h-[340px] w-full object-cover sm:h-[420px]"
                        />
                    </div>
                </div>
            </section>

            {/* SUBMIT REVIEW */}
            <section
                id="share-review"
                className="relative overflow-hidden bg-[#eef4fc] px-6 py-24 lg:px-10"
            >
                <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-[100px]" />

                <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr]">
                    <div className="pt-4">
                        <p className="review-body text-xs font-bold tracking-[.25em] text-blue-700">
                            SHARE YOUR VOICE
                        </p>

                        <h2 className="review-heading mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
                            Your feedback can make a difference.
                        </h2>

                        <p className="review-body mt-6 leading-8 text-slate-600">
                            Tell us about your experience with Nexora Technologies.
                            Your honest feedback helps us understand what we do well and
                            where we can improve.
                        </p>

                        <div className="review-photo mt-9 overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=85"
                                alt="Professional team working together"
                                className="h-[280px] w-full object-cover"
                            />
                        </div>

                        <div className="mt-7 space-y-4">
                            {[
                                "Share genuine experiences.",
                                "Help us improve our services.",
                                "Contribute to a better community.",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                                        ✓
                                    </span>
                                    <span className="review-body text-sm text-slate-600">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[28px] border border-white/10 bg-[#0b1c38] p-7 text-white shadow-2xl sm:p-10">
                        <div className="mb-8">
                            <p className="review-body text-xs font-bold tracking-[.22em] text-cyan-300">
                                CLIENT FEEDBACK FORM
                            </p>

                            <h3 className="review-heading mt-4 text-3xl font-extrabold">
                                Tell us your story.
                            </h3>

                            <p className="review-body mt-3 text-sm leading-6 text-slate-400">
                                Complete the form below. Your feedback will be reviewed
                                before it appears publicly.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="review-body mb-2 block text-sm font-semibold">
                                    Full Name *
                                </label>

                                <input
                                    required
                                    minLength={2}
                                    maxLength={120}
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Enter your full name"
                                    className="review-input review-body"
                                />
                            </div>

                            <div>
                                <label className="review-body mb-2 block text-sm font-semibold">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    maxLength={254}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="review-input review-body"
                                />
                            </div>

                            <div>
                                <label className="review-body mb-2 block text-sm font-semibold">
                                    Your Role / Organization
                                </label>

                                <input
                                    maxLength={150}
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    placeholder="e.g. Client, Intern, Student, Partner"
                                    className="review-input review-body"
                                />
                            </div>

                            <div>
                                <label className="review-body mb-3 block text-sm font-semibold">
                                    Your Rating *
                                </label>

                                <div className="flex items-center gap-2">
                                    {Array.from({ length: 5 }, (_, i) => {
                                        const value = i + 1;

                                        return (
                                            <button
                                                key={value}
                                                type="button"
                                                aria-label={`Rate ${value} stars`}
                                                onMouseEnter={() => setHoverRating(value)}
                                                onMouseLeave={() => setHoverRating(0)}
                                                onClick={() => setRating(value)}
                                                className={`text-3xl transition ${value <= (hoverRating || rating)
                                                        ? "text-amber-400"
                                                        : "text-slate-600"
                                                    }`}
                                            >
                                                ★
                                            </button>
                                        );
                                    })}

                                    <span className="review-body ml-2 text-xs text-slate-400">
                                        {rating} / 5
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label className="review-body mb-2 block text-sm font-semibold">
                                    Your Review *
                                </label>

                                <textarea
                                    required
                                    minLength={10}
                                    maxLength={2000}
                                    rows={5}
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                    placeholder="Tell us about your experience with Nexora..."
                                    className="review-input review-body resize-y"
                                />

                                <p className="review-body mt-2 text-right text-xs text-slate-500">
                                    {reviewText.length} / 2000 characters
                                </p>
                            </div>

                            {error && (
                                <div
                                    role="alert"
                                    className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200"
                                >
                                    {error}
                                </div>
                            )}

                            {message && (
                                <div
                                    role="status"
                                    className="rounded-xl border border-green-400/30 bg-green-400/10 p-4 text-sm text-green-200"
                                >
                                    {message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="review-body w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-4 text-sm font-bold text-[#07162e] shadow-lg shadow-blue-500/20 transition hover:from-cyan-300 hover:to-white disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {submitting ? "Submitting..." : "Submit Your Review →"}
                            </button>

                            <p className="review-body text-center text-xs leading-6 text-slate-400">
                                By submitting, you confirm that your feedback reflects
                                your genuine experience. Your review may be published
                                after approval.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative overflow-hidden bg-gradient-to-r from-[#0753a6] via-[#0878bd] to-[#0796ba] px-6 py-16 text-center text-white">
                <div className="absolute -left-20 -top-28 h-72 w-72 rounded-full border border-white/10" />
                <div className="absolute -bottom-32 -right-10 h-80 w-80 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-3xl">
                    <p className="review-body text-xs font-bold tracking-[.25em] text-cyan-100">
                        NEXORA TECHNOLOGIES
                    </p>

                    <h2 className="review-heading mt-5 text-4xl font-extrabold sm:text-5xl">
                        Innovate. Build. Grow.
                    </h2>

                    <p className="review-body mt-4 text-sm leading-7 text-blue-100">
                        Thank you for being a part of our journey.
                    </p>

                    <a
                        href="/"
                        className="review-body mt-8 inline-flex rounded-xl bg-white px-7 py-4 text-sm font-bold text-blue-800 transition hover:bg-[#07162e] hover:text-white"
                    >
                        Back to Home ↑
                    </a>
                </div>
            </section>
        </main>
    );
}
