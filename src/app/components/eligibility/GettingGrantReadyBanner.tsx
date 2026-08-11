import { Info } from "lucide-react";

/**
 * Teal "Getting Grant Ready" info banner shown at the top of the Financial
 * Info and Policy Info steps — matches the pasted design reference.
 */
export function GettingGrantReadyBanner() {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-teal-200 bg-teal-50 p-4">
      <Info className="size-5 text-teal-600 shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
          Getting Grant Ready
        </p>
        <p className="text-sm text-gray-600 mt-0.5" style={{ fontFamily: "Cabin, sans-serif" }}>
          Answer all questions in this tab. To be considered grant ready, you must answer{" "}
          <span className="font-semibold">Yes</span> to all questions.
        </p>
      </div>
    </div>
  );
}
