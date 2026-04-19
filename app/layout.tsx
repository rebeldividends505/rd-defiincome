import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "DeFi Income — Secure Weekly Dividends for Retirement",
    template: "%s — DeFi Income",
  },
  description:
    "DeFi Income Corp specializes in high-yield, low-volatility DeFi lending solutions engineered for wealth preservation and growth. Secure weekly dividends for retirement.",
  metadataBase: new URL("https://defiincome.com"),
  openGraph: {
    type: "website",
    siteName: "DeFi Income",
    title: "DeFi Income — Secure Weekly Dividends for Retirement",
    description:
      "Safely grow your money in crypto markets with a downside hedge. Weekly dividends for retirement investors.",
    url: "https://defiincome.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeFi Income — Secure Weekly Dividends for Retirement",
    description: "Safely grow your money in crypto markets with a downside hedge.",
  },
  keywords: [
    "defi income",
    "weekly dividends",
    "retirement income",
    "crypto dividends",
    "defi yield",
    "passive income",
    "inflation hedge",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-zinc-950 text-white">
        {/* Nav */}
        <nav className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
            <Link
              href="/"
              className="font-bold text-xl text-white hover:text-green-400 transition"
            >
              DeFi Income
            </Link>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/getdividends"
                className="text-zinc-400 hover:text-white text-sm transition hidden md:block"
              >
                Get Dividends
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 hover:text-white text-sm transition hidden md:block"
              >
                About
              </Link>
              <Link
                href="/updates"
                className="text-zinc-400 hover:text-white text-sm transition hidden md:block"
              >
                Updates
              </Link>
              <Link
                href="/daily"
                className="text-zinc-400 hover:text-white text-sm transition hidden md:block"
              >
                Daily
              </Link>
              <Link
                href="https://portal.rebeldividends.com/apply"
                className="bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-800 mt-20 py-10 text-center text-zinc-500 text-sm">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-4">
            <Link href="/" className="hover:text-zinc-300">
              Home
            </Link>
            <Link href="/getdividends" className="hover:text-zinc-300">
              Get Dividends
            </Link>
            <Link href="/about" className="hover:text-zinc-300">
              About
            </Link>
            <Link href="/updates" className="hover:text-zinc-300">
              Updates
            </Link>
            <Link href="/daily" className="hover:text-zinc-300">
              Daily
            </Link>
            <Link href="/contact" className="hover:text-zinc-300">
              Contact
            </Link>
            <Link href="/disclaimer" className="hover:text-zinc-300">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="hover:text-zinc-300">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-zinc-300">
              Terms
            </Link>
          </div>
          <p>© {new Date().getFullYear()} DeFi Income Corp. All rights reserved.</p>
          <p className="mt-2 text-xs max-w-xl mx-auto">
            This is not investment advice. Past performance does not guarantee
            future results. All investments carry risk. No general solicitation.
            Accredited and sophisticated investors only.
          </p>
        </footer>
      </body>
    </html>
  );
}
