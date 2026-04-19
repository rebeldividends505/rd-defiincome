import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome to DeFi Income",
  description:
    "Welcome to DeFi Income Corp — secure weekly dividends for retirement through professional DeFi investing.",
};

export default function WelcomeToDefiIncome() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Welcome to DeFi Income
        </h1>
        <p className="text-xl text-green-400 font-medium mb-6">
          Secure Weekly Dividends for Retirement
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
        <p className="text-zinc-300 leading-relaxed mb-4">
          DeFi Income Corp specializes in high-yield, low-volatility DeFi
          lending solutions engineered for wealth preservation and growth.
        </p>
        <p className="text-zinc-300 leading-relaxed mb-4">
          With 40+ years of combined experience in investing and crypto, we
          offer a forward-thinking, low-risk path to long-term capital growth.
          Our team applies institutional-grade diligence, leveraging blockchain
          transparency and diversified lending portfolios to deliver consistent,
          inflation-resistant returns — without compromising capital security.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          We help investors escape the erosion of inflation by offering a
          transparent, stable DeFi alternative that compounds capital reliably.
          Our mission is to create a secure, scalable income stream that
          outpaces outdated traditional finance.
        </p>
      </div>

      <div className="text-center">
        <Link
          href="/getdividends"
          className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition inline-block"
        >
          Get Your Dividends →
        </Link>
      </div>
    </div>
  );
}
