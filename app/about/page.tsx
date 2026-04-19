import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — DeFi Income",
  description:
    "DeFi Income Corp specializes in high-yield, low-volatility DeFi lending with 40+ years of combined investing experience.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          About DeFi Income
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          We specialize in high-yield, low-volatility DeFi lending solutions
          engineered for wealth preservation and growth.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
        <p className="text-zinc-300 leading-relaxed mb-4">
          With 40+ years of combined experience in investing and crypto, we
          offer a forward-thinking, low-risk path to long-term capital growth.
          Our team applies institutional-grade diligence, leveraging blockchain
          transparency and diversified lending portfolios to deliver consistent,
          inflation-resistant returns — without compromising capital security.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          DeFi Income Corp adopts a data-driven and algorithmic approach to
          market making, combining deep liquidity pools with advanced trading
          strategies to maximize trading opportunities and minimize market
          impact. We focus on identifying optimal entry and exit points,
          managing risk effectively, and adjusting our liquidity provision
          strategies in real-time to adapt to changing market conditions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: "🎯",
            title: "Our Strategy",
            desc: "DeFi Income combines strategic lending with deep protocol research and risk modeling. We target high-yield, low-volatility DeFi opportunities using cutting-edge technology and robust liquidity partners to ensure performance and protection.",
          },
          {
            icon: "🌐",
            title: "Our Mission",
            desc: "We help investors escape the erosion of inflation by offering a transparent, stable DeFi alternative that compounds capital reliably. Our mission is to create a secure, scalable income stream that outpaces outdated traditional finance.",
          },
          {
            icon: "🔬",
            title: "Our Process",
            desc: "We perform rigorous due diligence on every lending protocol, monitor on-chain metrics, and continuously adapt to changing market conditions. Our goal: preserve principal, deliver alpha, and make your capital work harder.",
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

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          Supported Blockchains
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              name: "Ethereum",
              desc: "Benefit from our market making expertise on the leading platform for decentralized finance applications and smart contracts.",
            },
            {
              name: "Arbitrum",
              desc: "Tap into the scalability and low-cost transactions offered by Arbitrum, a layer 2 scaling solution for Ethereum-compatible smart contracts.",
            },
            {
              name: "Base",
              desc: "Explore new opportunities on the Base blockchain, a fast and secure platform designed for decentralized applications and digital assets.",
            },
            {
              name: "More EVM Chains",
              desc: "We continuously expand to up-and-coming EVM compatible, Layer 1 and Layer 2 blockchains and ecosystems for maximum yield.",
            },
          ].map((chain) => (
            <div
              key={chain.name}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
            >
              <h3 className="font-semibold text-green-400 mb-2">{chain.name}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{chain.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-950/40 border border-green-900/40 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Invest?</h2>
        <p className="text-zinc-400 mb-6">
          Experience the benefits of professional DeFi market making services.
          Contact us today to discuss how we can support your wealth goals.
        </p>
        <Link
          href="https://portal.rebeldividends.com/apply"
          className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition inline-block"
        >
          Apply Now →
        </Link>
      </div>
    </div>
  );
}
