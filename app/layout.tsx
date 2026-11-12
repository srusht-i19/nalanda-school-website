import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { school } from "@/content/school";
import { AnnouncementBar } from "@/components/sections/announcement-bar";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${school.name} · ${school.city}`,
    template: `%s · ${school.name}`,
  },
  description: `School in ${school.city}, Maharashtra. Admissions open for ${school.session}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#content"
          className="focus:rounded-pill focus:bg-accent focus:text-ink sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <AnnouncementBar />

        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
