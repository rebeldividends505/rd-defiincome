import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — DeFi Income",
  description: "Legal disclaimer for DeFi Income Corp.",
};

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-black text-white mb-8">Disclaimer</h1>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-4">
        <p className="text-zinc-300 font-bold">DISCLAIMER</p>
        <p className="text-zinc-400 leading-relaxed">
          This website disclaimer is written for all users of DeFi Income Corp,
          including any additional websites and mobile applications now in use
          or hereinafter developed.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          Through your use of DeFi Income Corp, you acknowledge and agree that
          information provided by the Company is simply that, information, and
          should not be considered a substitute for legal advice, tax advice,
          audit advice, accounting advice, or brokerage advice under the
          guidance of a licensed professional. The information provided herein
          should not be taken as financial planning or investment solicitation.
          No fiduciary relationship has been created between you and the Company.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          DeFi Income Corp is strictly a financial research publishing firm and
          does not provide individual investment advice to its subscribers. It is
          not an investment advisor or a registered securities broker/dealer.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          Trading in securities (including, without limitation, cryptocurrencies,
          stocks, options, ETFs, mutual funds, and bonds) is considered
          speculative and involves risk of loss and volatility. You can lose
          money.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          Past performance does not guarantee future results. Any projected
          returns shown through DeFi Income Corp&apos;s Services may not be
          indicative of real-world results and your investment returns or
          financial gains are not guaranteed in any way.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          The maximum liability of the Company arising from or relating to your
          use of DeFi Income Corp or Services is limited to the greater of one
          hundred ($100) US Dollars or the amount you paid to the Company in the
          last three (3) months.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          Your personal information is important to us. Please see our Privacy
          Policy and Terms of Service to learn about our position on SPAM and
          the privacy of your data. Text msg &amp; data rates may apply in the
          US and Canada.
        </p>
      </div>
    </div>
  );
}
