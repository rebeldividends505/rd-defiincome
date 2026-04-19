import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Update — DeFi Income",
  description: "Daily market insights and portfolio updates from DeFi Income Corp.",
};

export default function Daily() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
          Daily Update
        </h1>
        <p className="text-zinc-400 text-lg">
          Daily market insights, portfolio commentary, and DeFi intelligence
          from the DeFi Income team.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">📊</div>
        <h2 className="text-xl font-semibold text-white mb-3">
          Daily briefings coming soon
        </h2>
        <p className="text-zinc-400">
          Check back here for daily market commentary and portfolio updates from
          the DeFi Income Corp team.
        </p>
      </div>
    </div>
  );
}
