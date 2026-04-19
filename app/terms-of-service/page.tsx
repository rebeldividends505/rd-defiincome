import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — DeFi Income",
  description: "Terms of service for DeFi Income Corp.",
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-black text-white mb-8">Terms of Service</h1>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6">
        <p className="text-zinc-400 leading-relaxed">
          This Terms of Service Agreement (the &ldquo;Agreement&rdquo;) is a
          legally binding contract that shall govern our relationship with our
          Users and others who may interact or interface with DeFi Income Corp.
        </p>
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Assent &amp; Acceptance
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            By using DeFi Income Corp, you warrant that you have read and
            reviewed this Agreement and you agree to be bound by it. If you do
            not agree to be bound by this Agreement, please exit DeFi Income
            Corp immediately.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Age Restriction</h2>
          <p className="text-zinc-400 leading-relaxed">
            No minors under 18 years of age are permitted to use DeFi Income
            Corp. By using DeFi Income Corp as an individual, you represent and
            warrant that you are at least 18 years of age and may legally enter
            into a binding contract with the Company.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Services</h2>
          <p className="text-zinc-400 leading-relaxed">
            DeFi Income Corp is strictly a financial research publishing firm
            and does not provide individual investment advice to its
            subscribers. DeFi Income Corp is not an investment advisor or a
            registered securities broker/dealer.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Governing Law</h2>
          <p className="text-zinc-400 leading-relaxed">
            Through your use of DeFi Income Corp or the Services, you agree
            that the laws of the State of California shall govern any matter or
            dispute relating to or arising out of this Agreement.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
          <p className="text-zinc-400 leading-relaxed">
            For questions about these terms, please call us at (505) 322-7515
            or use our{" "}
            <a href="/contact" className="text-green-400 hover:text-green-300 transition">
              contact page
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
