import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Questionnaire — DeFi Income",
  description:
    "Complete the confidential investor questionnaire to qualify to invest in DeFi Income, Inc.",
};

export default function InvestorQuestionnaire() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Investor Questionnaire
        </h1>
        <p className="text-xl text-zinc-400">
          Please complete the following questionnaire to qualify to invest in DeFi Income, Inc.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-2 md:p-4">
        <div id="zf_div_ws-8OWPUTgnSrWVCdSvthamMeGqNBXcH_B7TR_EbfVA">
          <iframe
            src="https://forms.zohopublic.com/portfoliobuilder/form/DeFiInvestorQuestionnaire/formperma/ws-8OWPUTgnSrWVCdSvthamMeGqNBXcH_B7TR_EbfVA?zf_rszfm=1"
            style={{ border: "none", height: "4105px", width: "100%", transition: "all 0.5s ease" }}
            aria-label="DeFi Income - Investor Questionnaire"
            title="DeFi Income - Investor Questionnaire"
          />
        </div>
      </div>
    </div>
  );
}
