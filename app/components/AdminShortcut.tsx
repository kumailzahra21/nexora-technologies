
import Link from "next/link";

export default function AdminShortcut() {
    return (
        <Link
            href="/admin"
            aria-label="Admin Dashboard"
            title="Admin Dashboard"
            className="fixed bottom-5 right-5 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-[#071a35] text-cyan-300 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-110 hover:bg-blue-700 hover:text-white"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        </Link>
    );
}
