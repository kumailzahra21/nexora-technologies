
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import QuickActions from "./components/QuickActions";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nexora Technologies | Innovate • Build • Grow",
    template: "%s | Nexora Technologies",
  },
  description:
    "Nexora Technologies delivers innovative digital solutions, software development, professional internships, online learning and technology partnerships.",
  applicationName: "Nexora Technologies",
  keywords: [
    "Nexora Technologies",
    "Web Development",
    "Software Solutions",
    "Artificial Intelligence",
    "Internships",
    "Online Learning",
    "Technology Partnerships",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <QuickActions />
      </body>
    </html>
  );
}
