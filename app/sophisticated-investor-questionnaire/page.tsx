import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sophisticated Investor Questionnaire — DeFi Income",
  description:
    "If you're not an accredited investor, please complete the sophisticated investor questionnaire to qualify to invest in DeFi Income, Inc.",
};

export default function SophisticatedInvestorQuestionnaire() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Sophisticated Investor Questionnaire
        </h1>
        <p className="text-xl text-zinc-400">
          If you&apos;re not an accredited investor, please complete the following
          questionnaire to qualify to invest in DeFi Income, Inc.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-2 md:p-4">
        <div id="zf_div_eMuQU48HMieXXzOr6WgsYD8g-p5bwIJD-70omTvvG1E">
          <iframe
            src="https://forms.zohopublic.com/portfoliobuilder/form/DeFiSophisticatedQuestionnaire/formperma/eMuQU48HMieXXzOr6WgsYD8g-p5bwIJD-70omTvvG1E?zf_rszfm=1"
            style={{ border: "none", height: "5831px", width: "100%", transition: "all 0.5s ease" }}
            aria-label="DeFi Income - Sophisticated Investor Questionnaire"
            title="DeFi Income - Sophisticated Investor Questionnaire"
          />
        </div>
      </div>
    </div>
  );
}
