import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Investment Performance — DeFi Income",
  description:
    "Personal investment performance report for DeFi Income Corp investors.",
};

export default function Kent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-green-950 border border-green-800 rounded-full px-4 py-1.5 text-green-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          Personal Investment Report
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Your Investment is Working
        </h1>
        <p className="text-zinc-400 text-lg">
          Your DeFi Income portfolio is generating consistent weekly dividends.
          Here&apos;s a summary of your performance.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Total Return", value: "+11.24%", color: "text-green-400" },
          { label: "Total Profit", value: "$56,197", color: "text-green-400" },
          { label: "Total Value", value: "$556,197", color: "text-white" },
          { label: "Total Shares", value: "534.76", color: "text-white" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center"
          >
            <div className={`text-2xl font-bold mb-1 ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-zinc-500 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">Your Actual Profit</h2>
        <div className="space-y-3">
          {[
            { label: "Current share value (534.76 × $987.19)", value: "$527,909.72" },
            { label: "Cash dividends received", value: "$28,287.61" },
            { label: "Total value today", value: "$556,197.33", highlight: true },
            { label: "Your original investment", value: "$500,000.00" },
            { label: "Your profit", value: "+$56,197.33", profit: true },
          ].map((row) => (
            <div
              key={row.label}
              className={`flex justify-between items-center py-3 border-b border-zinc-800 last:border-0 ${
                row.highlight ? "bg-zinc-800 -mx-4 px-4 rounded-lg" : ""
              }`}
            >
              <span className="text-zinc-300 text-sm">{row.label}</span>
              <span
                className={`font-bold ${
                  row.profit
                    ? "text-green-400 text-lg"
                    : row.highlight
                    ? "text-white"
                    : "text-zinc-200"
                }`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-950/40 border border-green-900/40 rounded-2xl p-8 text-center">
        <p className="text-green-400 text-sm uppercase tracking-wider mb-3">
          Your Investment is Profitable
        </p>
        <p className="text-white text-2xl font-bold mb-2">
          You&apos;re up 11.24% — that&apos;s $56,197 in profit
        </p>
        <p className="text-zinc-400 text-sm mb-6">
          Questions about your account or want to add more shares?
        </p>
        <Link
          href="/contact"
          className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition inline-block"
        >
          Schedule a Call
        </Link>
      </div>
    </div>
  );
}
