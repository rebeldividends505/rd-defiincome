import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — DeFi Income",
  description: "Thank you for your interest in DeFi Income Corp.",
};

export default function ThankYou() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">🙌</div>
      <h1 className="text-4xl font-black text-white mb-4">Thank You!</h1>
      <p className="text-zinc-400 text-lg mb-8">
        Thank you for your interest in DeFi Income Corp. Our team will be in
        touch with you shortly to discuss how we can help you achieve your
        retirement income goals.
      </p>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8 text-left">
        <h2 className="font-semibold text-white mb-3">What happens next?</h2>
        <ul className="text-zinc-400 text-sm space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">✓</span>
            A member of our team will review your information
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">✓</span>
            We&apos;ll reach out to schedule a conversation
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 mt-0.5">✓</span>
            You&apos;ll receive details on the investment process and
            qualification requirements
          </li>
        </ul>
      </div>
      <Link
        href="/"
        className="text-green-400 hover:text-green-300 underline underline-offset-2 transition"
      >
        ← Return to home
      </Link>
    </div>
  );
}
