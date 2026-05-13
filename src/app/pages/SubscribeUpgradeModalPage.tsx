import { useNavigate } from "react-router";
import { Logo } from "@/app/components/Logo";
import { Check, X } from "lucide-react";

const UNLIMITED_FEATURES = [
  "Unlimited grant searches",
  "Unlimited saved grants",
  "Unlimited seats",
  "Readiness coaching",
  "AI Grant Writer included for a limited time",
];

const AI_WRITER_FEATURES = [
  "Everything in Unlimited Search & Discovery",
  "Up to 10 active applications",
  "AI-assisted grant drafting",
  "Application workspace",
  "Submission-readiness support",
];

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <Check className="mt-0.5 shrink-0 text-teal-400" size={15} strokeWidth={2.5} />
      <span className="text-sm text-white/80" style={{ fontFamily: "Cabin, sans-serif" }}>
        {text}
      </span>
    </li>
  );
}

export function SubscribeUpgradeModalPage() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-3xl rounded-2xl bg-gray-900 p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2
            className="text-3xl font-normal text-white mb-2"
            style={{ fontFamily: "Lustria, serif" }}
          >
            Win More Grants, Write Less
          </h2>
          <p className="text-sm text-gray-400" style={{ fontFamily: "Cabin, sans-serif" }}>
            Upgrade to unlock unlimited searching and AI-powered grant writing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Unlimited Search & Discovery */}
          <div className="flex flex-col rounded-xl border-2 border-teal-500 bg-gray-800 p-6">
            <div className="mb-4">
              <p
                className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Unlimited Search &amp; Discovery
              </p>
              <p
                className="text-3xl font-normal text-white mb-1"
                style={{ fontFamily: "Lustria, serif" }}
              >
                $49.99
                <span className="text-base font-normal text-gray-400">/mo</span>
              </p>
              <p className="text-xs text-gray-400" style={{ fontFamily: "Cabin, sans-serif" }}>
                For teams actively searching, saving, and prioritizing grants.
              </p>
            </div>
            <ul className="space-y-2.5 flex-1 mb-6">
              {UNLIMITED_FEATURES.map((f) => (
                <FeatureItem key={f} text={f} />
              ))}
            </ul>
            <button
              onClick={() => navigate("/subscribe/stripe")}
              className="w-full rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Get Started
            </button>
          </div>

          {/* AI Grant Writer */}
          <div className="flex flex-col rounded-xl border border-gray-600 bg-gray-800 p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span
                className="inline-block rounded-full bg-amber-500 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                First 2 Months Free
              </span>
            </div>
            <div className="mb-4 mt-2">
              <p
                className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                AI Grant Writer
              </p>
              <p
                className="text-3xl font-normal text-white mb-1"
                style={{ fontFamily: "Lustria, serif" }}
              >
                Coming Soon
              </p>
              <p className="text-xs text-gray-400" style={{ fontFamily: "Cabin, sans-serif" }}>
                For organizations ready to generate and manage grant applications with AI.
              </p>
            </div>
            <ul className="space-y-2.5 flex-1 mb-6">
              {AI_WRITER_FEATURES.map((f) => (
                <FeatureItem key={f} text={f} />
              ))}
            </ul>
            <button
              disabled
              className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-sm font-semibold text-gray-500 cursor-not-allowed"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-3 text-gray-500">
          <svg width="48" height="20" viewBox="0 0 100 42" fill="none" aria-label="Stripe">
            <text x="0" y="32" fontSize="36" fill="#6272a4" fontFamily="Cabin, sans-serif" fontWeight="600">stripe</text>
          </svg>
          <span className="text-xs" style={{ fontFamily: "Cabin, sans-serif" }}>
            Payments secured by Stripe
          </span>
        </div>
      </div>
    </div>
  );
}
