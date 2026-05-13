import { useNavigate } from "react-router";
import { Logo } from "@/app/components/Logo";
import { Check, Users } from "lucide-react";

const FREE_FEATURES = [
  "5 free searches per month",
  "5 saved grants",
  "Readiness coaching",
  "Up to 5 seats",
];

const UNLIMITED_FEATURES = [
  "Everything in Free",
  "Unlimited grant searches",
  "Unlimited saved grants",
  "Unlimited seats",
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
    <li className="flex items-start gap-3">
      <Check className="mt-0.5 shrink-0 text-teal-600" size={16} strokeWidth={2.5} />
      <span className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
        {text}
      </span>
    </li>
  );
}

export function SubscribeEntryPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Top nav bar */}
      <header className="border-b border-gray-100 px-6 py-4 flex items-center justify-center">
        <Logo />
      </header>

      <main className="px-4 py-16 max-w-6xl mx-auto">
        {/* Heading section */}
        <div className="mb-12 max-w-2xl">
          <span
            className="inline-block mb-4 text-sm font-semibold text-teal-600"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            Pricing
          </span>
          <h1
            className="text-4xl font-normal text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: "Lustria, serif" }}
          >
            Choose the right level of support for your grant strategy
          </h1>
          <p className="text-base text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
            Start with free grant discovery, upgrade when you need unlimited search, and add
            AI-powered application support when you are ready to move faster from opportunity to
            submission.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Free tier */}
          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <p
                className="text-sm font-medium text-gray-500 mb-1"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Free
              </p>
              <p
                className="text-4xl font-normal text-gray-900 mb-3"
                style={{ fontFamily: "Lustria, serif" }}
              >
                Free
              </p>
              <p className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                For organizations beginning their grant search and building readiness.
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {FREE_FEATURES.map((f) => (
                <FeatureItem key={f} text={f} />
              ))}
            </ul>
            <button
              onClick={() => navigate("/subscribe/create-account")}
              className="w-full rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Create an account
            </button>
          </div>

          {/* Unlimited Search & Discovery (recommended) */}
          <div className="flex flex-col rounded-xl border-2 border-teal-600 bg-white p-6 shadow-sm relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span
                className="inline-block rounded-full bg-teal-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Recommended
              </span>
            </div>
            <div className="mb-6 mt-2">
              <p
                className="text-sm font-medium text-gray-500 mb-1"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                Unlimited Search &amp; Discovery
              </p>
              <p
                className="text-4xl font-normal text-gray-900 mb-1"
                style={{ fontFamily: "Lustria, serif" }}
              >
                $49.99
                <span className="text-base font-normal text-gray-500">/mo</span>
              </p>
              <p className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                For teams actively searching, saving, and prioritizing grant opportunities.
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {UNLIMITED_FEATURES.map((f) => (
                <FeatureItem key={f} text={f} />
              ))}
            </ul>
            <button
              onClick={() => navigate("/subscribe/create-account")}
              className="w-full rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Create an account
            </button>
          </div>

          {/* AI Grant Writer */}
          <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
              <p
                className="text-sm font-medium text-gray-500 mb-1"
                style={{ fontFamily: "Cabin, sans-serif" }}
              >
                AI Grant Writer
              </p>
              <p
                className="text-4xl font-normal text-gray-900 mb-3"
                style={{ fontFamily: "Lustria, serif" }}
              >
                Coming Soon
              </p>
              <p className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                For organizations ready to generate and manage grant applications with AI-powered
                writing support.
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {AI_WRITER_FEATURES.map((f) => (
                <FeatureItem key={f} text={f} />
              ))}
            </ul>
            <button
              disabled
              className="w-full rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-400 cursor-not-allowed"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Bottom consultation CTA */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="shrink-0 text-gray-400">
            <Users size={40} strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <p
              className="text-base font-semibold text-gray-900 mb-1"
              style={{ fontFamily: "Cabin, sans-serif" }}
            >
              Need help choosing the right grants or preparing your application?
            </p>
            <p className="text-sm text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
              Start with a free 15-minute evaluation call. Our consulting services help
              organizations assess grant fit, prepare stronger applications, and move forward with
              more confidence.{" "}
              <strong className="text-gray-700">
                Professional services start at $199/application.
              </strong>
            </p>
          </div>
          <button
            className="shrink-0 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            Book a free evaluation call
          </button>
        </div>
      </main>
    </div>
  );
}
