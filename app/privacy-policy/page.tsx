import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — DeFi Income",
  description: "Privacy policy for DeFi Income Corp.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-black text-white mb-8">Privacy Policy</h1>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Information We Collect
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            When you register, DeFi Income Corp may collect information such as
            your name, email address, phone number, and depending on the
            Services you choose, billing information and verification data.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            How We Use Your Information
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            We use your information to provide our services, communicate with
            you about your account, and send relevant investor updates. We do
            not sell your personal information to third parties.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Data Security</h2>
          <p className="text-zinc-400 leading-relaxed">
            We endeavor to keep DeFi Income Corp and the Services as secure as
            possible. However, no system involving the transmission of
            information via the Internet, or the electronic storage of data, is
            completely secure.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Anti-Spam</h2>
          <p className="text-zinc-400 leading-relaxed">
            Your personal information is important to us. Text msg &amp; data
            rates may apply in the US and Canada. To unsubscribe from any
            messages simply text &lsquo;STOP&rsquo; to the originating number
            or contact support.
          </p>
        </div>
      </div>
    </div>
  );
}
