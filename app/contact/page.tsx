import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — DeFi Income",
  description:
    "Contact DeFi Income Corp to learn about our weekly dividend program for retirement investors.",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-zinc-400 text-lg">
          Become a shareholder today. Experience the benefits of professional
          DeFi market making services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Contact Info</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">📞</span>
              <div>
                <div className="text-zinc-400 text-sm">Phone</div>
                <a
                  href="tel:5053227515"
                  className="text-white hover:text-green-400 transition"
                >
                  (505) 322-7515
                </a>
                <div className="text-zinc-500 text-xs mt-1">
                  Call our Co-Founder to start earning
                </div>
              </div>
            </div>
          </div>
          <p className="text-zinc-400 text-sm mt-6 leading-relaxed">
            Contact us today to learn more about our market making solutions and
            discuss how we can support your growth and success in the
            decentralized finance ecosystem.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Apply Now</h2>
          <p className="text-zinc-400 text-sm mb-6">
            Ready to start earning weekly dividends? Apply for access to our
            investor program today.
          </p>
          <Link
            href="https://portal.rebeldividends.com/apply"
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition inline-block w-full text-center"
          >
            Apply for Access →
          </Link>
        </div>
      </div>
    </div>
  );
}
