import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DeFi Income — Secure Weekly Dividends for Retirement",
  description:
    "Safely grow your money in crypto markets with a downside hedge. DeFi Income Corp delivers secure weekly dividends engineered for retirement investors.",
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-green-950 border border-green-800 rounded-full px-4 py-1.5 text-green-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Secure weekly dividends for retirement
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Secure Weekly
          <br />
          Dividends for Retirement
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Safely grow your money in crypto markets with a downside hedge. DeFi
          Income Corp delivers consistent weekly income engineered for serious
          retirement investors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://portal.rebeldividends.com/apply"
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition"
          >
            Get Weekly Dividends →
          </Link>
          <Link
            href="/getdividends"
            className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-8 py-4 rounded-xl text-lg transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          { label: "Experience", value: "40+", sub: "years combined" },
          { label: "Strategy", value: "DeFi", sub: "yield + hedge" },
          { label: "Payouts", value: "Weekly", sub: "every Friday" },
          { label: "Focus", value: "Retirement", sub: "income investors" },
        ].map((m) => (
          <div
            key={m.label}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center"
          >
            <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
            <div className="text-zinc-400 text-sm font-medium">{m.label}</div>
            <div className="text-zinc-600 text-xs mt-1">{m.sub}</div>
          </div>
        ))}
      </section>

      {/* Feature Grid */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Why DeFi Income?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "💵",
              title: "Weekly Cash Dividends",
              desc: "Generate consistent weekly income by safely investing in crypto markets with a downside hedge — designed specifically for retirement investors.",
            },
            {
              icon: "🛡️",
              title: "Downside Hedge",
              desc: "Our concentrated liquidity and algorithmic trading strategies are engineered to protect capital during market downturns while maximizing upside.",
            },
            {
              icon: "📈",
              title: "Inflation-Resistant Returns",
              desc: "We help investors escape the erosion of inflation by offering a transparent, stable DeFi alternative that compounds capital reliably.",
            },
            {
              icon: "🔬",
              title: "Institutional-Grade Diligence",
              desc: "Our team applies rigorous due diligence on every lending protocol, monitoring on-chain metrics and adapting to market conditions in real time.",
            },
            {
              icon: "🔗",
              title: "DeFi Lending Expertise",
              desc: "Specialized in high-yield, low-volatility DeFi lending solutions across Ethereum, Arbitrum, Base, and other leading EVM-compatible blockchains.",
            },
            {
              icon: "🏦",
              title: "40+ Years Experience",
              desc: "Our team brings 40+ years of combined experience in investing and crypto — applied to create a forward-thinking, low-risk income path.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-20 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-zinc-400 mb-8 max-w-2xl">
          Our data-driven approach combines deep liquidity pools with advanced
          trading strategies to maximize returns while protecting your principal.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              step: "01",
              title: "Concentrated Liquidity Provision",
              desc: "We strategically deploy liquidity to specific trading pairs, concentrating it around key price levels to facilitate efficient trading and minimize price slippage.",
            },
            {
              step: "02",
              title: "Algorithmic Trading",
              desc: "Advanced trading algorithms analyze market data and execute trades with precision and speed, optimizing liquidity provision and minimizing market impact.",
            },
            {
              step: "03",
              title: "Risk Management",
              desc: "Robust risk management protocols mitigate exposure to market fluctuations and ensure the safety of capital while maximizing returns.",
            },
            {
              step: "04",
              title: "Weekly Dividend Payout",
              desc: "Income is distributed weekly to investors — paid directly to your account or automatically reinvested to compound your position.",
            },
          ].map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="text-green-500 font-black text-2xl w-10 shrink-0">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-b from-green-950/30 to-transparent rounded-2xl mb-10 border border-green-900/30">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to secure your retirement income?
        </h2>
        <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
          Join investors building stable, weekly dividend income through DeFi.
          Beat inflation and protect your wealth.
        </p>
        <Link
          href="https://portal.rebeldividends.com/apply"
          className="bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition inline-block"
        >
          Apply for Access →
        </Link>
        <p className="mt-4 text-sm text-zinc-500">
          Questions?{" "}
          <Link
            href="/contact"
            className="text-green-400 hover:text-green-300 underline underline-offset-2 transition"
          >
            Contact us
          </Link>{" "}
          ·{" "}
          <Link
            href="/about"
            className="text-green-400 hover:text-green-300 underline underline-offset-2 transition"
          >
            Learn about our approach
          </Link>
        </p>
      </section>
    </div>
  );
}
