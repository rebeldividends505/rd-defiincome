import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Dividends — DeFi Income",
  description:
    "Generate weekly income by safely investing in markets with a downside hedge. Learn how DeFi Income delivers retirement dividends.",
};

export default function GetDividends() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-green-950 border border-green-800 rounded-full px-4 py-1.5 text-green-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Retirement dividends await
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Generate Weekly Income
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
          Safely invest in markets with a downside hedge. DeFi Income Corp
          delivers consistent weekly dividends for retirement investors.
        </p>
        <Link
          href="https://portal.rebeldividends.com/apply"
          className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition inline-block"
        >
          Apply for Access →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: "🎯",
            title: "Our Strategy",
            desc: "DeFi Income combines strategic lending with deep protocol research and risk modeling. We target high-yield, low-volatility DeFi opportunities using cutting-edge technology and robust liquidity partners.",
          },
          {
            icon: "🌐",
            title: "Our Mission",
            desc: "We help investors escape the erosion of inflation by offering a transparent, stable DeFi alternative that compounds capital reliably — creating a secure, scalable income stream that outpaces traditional finance.",
          },
          {
            icon: "🔬",
            title: "Our Process",
            desc: "We perform rigorous due diligence on every lending protocol, monitor on-chain metrics, and continuously adapt to changing market conditions. Our goal: preserve principal, deliver alpha.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-white text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-green-950/40 border border-green-900/40 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to start earning?
        </h2>
        <p className="text-zinc-400 mb-6">
          Experience the benefits of professional DeFi market making. Apply
          today to learn how we can support your income goals.
        </p>
        <Link
          href="https://portal.rebeldividends.com/apply"
          className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition inline-block"
        >
          Apply Now →
        </Link>
        <p className="text-zinc-500 text-xs mt-4">
          Your personal information is important to us. Please see our Privacy
          Policy for details.
        </p>
      </div>
    </div>
  );
}
