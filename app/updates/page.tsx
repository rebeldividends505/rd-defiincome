import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Updates — DeFi Income",
  description: "Investor updates and news from DeFi Income Corp.",
};

export default function Updates() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Investor Updates
        </h1>
        <p className="text-zinc-400 text-lg">
          Stay current with the latest news, market commentary, and dividend
          announcements from DeFi Income Corp.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">📋</div>
        <h2 className="text-xl font-semibold text-white mb-3">
          Updates Coming Soon
        </h2>
        <p className="text-zinc-400 mb-6">
          Investor updates will be published here. Check back regularly for the
          latest from DeFi Income.
        </p>
        <Link
          href="/contact"
          className="text-green-400 hover:text-green-300 underline underline-offset-2 transition text-sm"
        >
          Contact us with questions
        </Link>
      </div>
    </div>
  );
}
