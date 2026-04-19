import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor Update — DeFi Income",
  description:
    "DeFi Income investor update — March 2026. 27.2% annualized, 3 dividends in 3 months.",
};

const dividends = [
  { date: "January 7, 2026", yield: "1.09%", income: "$1,090" },
  { date: "January 28, 2026", yield: "2.23%", income: "$2,230" },
  { date: "March 5, 2026", yield: "0.99%", income: "$990", current: true },
];

const yearlyReturns = [
  { year: "2023", return: "45.1%", note: "ann. (launched Oct 18)" },
  { year: "2024", return: "31.42%", note: "return" },
  { year: "2025", return: "40.25%", note: "return" },
  { year: "2026", return: "27.2%", note: "ann. pace", highlight: true },
];

const comparisons = [
  { name: "Bank Savings", pct: 3.8, warning: "Losing purchasing power after taxes and inflation" },
  { name: "US Treasuries", pct: 4.1, warning: "Money locked · loses value if rates rise" },
  { name: "REITs", pct: 4.5, warning: "Tied to property values · extreme leverage risk" },
  { name: "Junk Bonds", pct: 6.2, warning: "Lending to companies that might not pay you back" },
  { name: "Best Income Funds", pct: 9.3, warning: "Full stock market crash risk · upside capped" },
  { name: "Private Lending", pct: 11.5, warning: "Capital locked for years · rising defaults" },
  { name: "DeFi Income", pct: 27.2, ours: true },
];

export default function Update() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
            Investor Update
          </span>
          <span className="text-xs text-zinc-500 font-mono">March 6, 2026</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          DeFi Income
        </h1>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-3xl font-bold text-green-400">$980.22</span>
          <span className="text-green-400 text-sm font-semibold">+0.02%</span>
        </div>
      </div>

      {/* Current Returns */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
        <p className="text-xs font-bold tracking-widest uppercase text-green-400 mb-4">
          Current Returns — 2026
        </p>
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-6xl font-black text-green-400">27.2%</span>
          <span className="text-zinc-400 text-sm">annualized pace</span>
        </div>
        <p className="text-zinc-400 text-sm mb-6">3 dividends in 3 months — and accelerating</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { val: "4.31%", lbl: "YTD Return" },
            { val: "$4,310", lbl: "Income on $100K" },
            { val: "3", lbl: "Dividends Paid" },
          ].map((s) => (
            <div key={s.lbl} className="bg-zinc-800 rounded-xl p-4 text-center">
              <div className="font-mono text-xl font-bold text-green-400">{s.val}</div>
              <div className="text-zinc-500 text-xs mt-1">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Dividend Table */}
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left text-zinc-500 font-semibold pb-2 text-xs uppercase tracking-wider">
                Dividend Date
              </th>
              <th className="text-right text-zinc-500 font-semibold pb-2 text-xs uppercase tracking-wider">
                Yield
              </th>
              <th className="text-right text-zinc-500 font-semibold pb-2 text-xs uppercase tracking-wider">
                Income on $100K
              </th>
            </tr>
          </thead>
          <tbody>
            {dividends.map((d) => (
              <tr
                key={d.date}
                className={`border-b border-zinc-800 ${d.current ? "text-green-400 font-semibold" : "text-zinc-300"}`}
              >
                <td className="py-3">
                  {d.date}
                  {d.current && (
                    <span className="text-green-400 text-xs ml-2">← latest</span>
                  )}
                </td>
                <td className="text-right font-mono">{d.yield}</td>
                <td className="text-right font-mono">{d.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Past Returns */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
        <p className="text-xs font-bold tracking-widest uppercase text-green-400 mb-6">
          Past Returns
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {yearlyReturns.map((y) => (
            <div
              key={y.year}
              className={`rounded-xl p-4 text-center ${
                y.highlight
                  ? "bg-green-600"
                  : "bg-zinc-800"
              }`}
            >
              <div className={`text-xs font-bold tracking-wider uppercase mb-1 ${y.highlight ? "text-white" : "text-zinc-500"}`}>
                {y.year}
              </div>
              <div className={`font-mono text-2xl font-black ${y.highlight ? "text-white" : "text-green-400"}`}>
                {y.return}
              </div>
              <div className={`text-xs mt-1 ${y.highlight ? "text-green-100" : "text-zinc-500"}`}>
                {y.note}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-zinc-800 rounded-xl p-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Total · 25 Dividends · Since Oct &apos;23
          </span>
          <span className="font-mono text-green-400 font-bold text-lg">
            85.13% <span className="text-sm text-zinc-400 font-normal">($835.61/share)</span>
          </span>
        </div>
      </div>

      {/* Yield Comparison */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
        <p className="text-xs font-bold tracking-widest uppercase text-green-400 mb-6">
          How 27% Compares to Everything Else
        </p>
        <div className="space-y-3">
          {comparisons.map((c) => (
            <div key={c.name}>
              <div className="flex items-center gap-3">
                <span className={`w-36 text-sm flex-shrink-0 ${c.ours ? "text-green-400 font-bold" : "text-zinc-400"}`}>
                  {c.name}
                </span>
                <div className="flex-1 h-4 bg-zinc-800 rounded overflow-hidden">
                  <div
                    className={`h-full rounded ${c.ours ? "bg-green-500" : "bg-zinc-600"}`}
                    style={{ width: `${(c.pct / 27.2) * 100}%` }}
                  />
                </div>
                <span className={`w-12 text-right font-mono text-sm font-bold ${c.ours ? "text-green-400" : "text-zinc-400"}`}>
                  {c.pct}%
                </span>
              </div>
              {c.warning && (
                <p className="text-xs text-red-400/70 ml-36 pl-3 mt-0.5">{c.warning}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-zinc-400 text-sm mt-6 leading-relaxed">
          Our income comes from trading fees — not from lending to risky borrowers or betting on the
          stock market. We hedge our positions to minimize exposure to market swings. The income
          fluctuates with trading volume, but it&apos;s not tied to interest rates, government debt,
          corporate defaults, or property values.
        </p>
        <p className="text-green-400 font-semibold text-sm mt-3">
          3x the best income fund on Wall Street. 7x a bank savings account. From a fundamentally
          different source.
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
        <p className="text-xs font-bold tracking-widest uppercase text-green-400 mb-4">
          How DeFi Income Works
        </p>
        <p className="text-zinc-300 leading-relaxed text-sm">
          Think of it like owning a piece of a busy marketplace. Every trade that happens generates
          a fee — and a portion of that fee flows directly to you as income. We hedge our positions
          to keep your principal as protected as possible. The tradeoff is that income fluctuates
          with how busy the marketplace is, rather than arriving in fixed monthly amounts.
        </p>
        <p className="text-green-400 font-semibold text-sm mt-4">
          25 dividends. 85% total return. Principal protected.
        </p>
      </div>

      {/* CTA */}
      <div className="border-2 border-green-600 rounded-2xl p-8 text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">
          Interested in Adding to Your Position?
        </h3>
        <p className="text-zinc-400 text-sm mb-4">
          We&apos;re running at 27% annualized and expect to accelerate as trading activity
          continues recovering. New shares issued at the current price of{" "}
          <span className="font-mono text-green-400 font-bold">$980.22</span>.
        </p>
        <p className="text-green-400 font-bold">
          Call Dean directly at{" "}
          <a href="tel:5053227515" className="hover:text-green-300">
            (505) 322-7515
          </a>{" "}
          to get started.
        </p>
      </div>

      {/* Signoff */}
      <div className="border-t border-zinc-800 pt-8 text-center mb-8">
        <div className="font-bold text-white text-lg">Jason Cox</div>
        <div className="text-zinc-500 text-xs tracking-widest uppercase mt-1">
          President, DeFi Income, Inc.
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-zinc-600 text-xs leading-relaxed space-y-2">
        <p>
          This communication is for informational purposes only and does not constitute an offer to
          sell, a solicitation of an offer to buy, or a recommendation of any security or investment
          product. Past performance is not indicative of future results.
        </p>
        <p>
          DeFi Income utilizes decentralized finance strategies that carry unique risks including
          but not limited to: smart contract risk, liquidity risk, counterparty risk, regulatory
          risk, and the potential for significant volatility in income distributions.
        </p>
        <p>
          DeFi Income, Inc. is not a registered investment advisor, broker-dealer, or bank.
          Investors should consult their own financial, tax, and legal advisors before making any
          investment decisions.
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/updates"
          className="text-green-400 hover:text-green-300 text-sm underline underline-offset-2 transition"
        >
          ← All Updates
        </Link>
      </div>
    </div>
  );
}
