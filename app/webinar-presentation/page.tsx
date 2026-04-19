import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webinar Presentation — DeFi Income",
  description:
    "DeFi Income Corp webinar presentation — learn how to secure weekly dividends for retirement through DeFi.",
};

export default function WebinarPresentation() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-green-950 border border-green-800 rounded-full px-4 py-1.5 text-green-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Live Presentation
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Webinar Presentation
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Secure Weekly Dividends for Retirement — learn how DeFi Income Corp
          delivers consistent income through advanced DeFi strategies.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">
          What You&apos;ll Learn
        </h2>
        <div className="space-y-4">
          {[
            "How DeFi Income generates consistent weekly dividends",
            "Our concentrated liquidity market making strategy",
            "Risk management and downside protection",
            "How to qualify as an accredited or sophisticated investor",
            "The application and onboarding process",
            "Live Q&A with our team",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5 shrink-0">✓</span>
              <span className="text-zinc-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-950/40 border border-green-900/40 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-zinc-400 mb-6">
          Don&apos;t wait for the next webinar — apply now to speak directly
          with our team about your investment goals.
        </p>
        <Link
          href="https://portal.rebeldividends.com/apply"
          className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition inline-block"
        >
          Apply for Access →
        </Link>
      </div>
    </div>
  );
}
