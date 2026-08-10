import { Loader2 } from "lucide-react";

/**
 * Loading state shown while the eligibility report is generated. Reuses
 * the design system's standard loading pattern (centered teal Loader2
 * spinner + supporting copy — see /design-system → Progress → Loading).
 */
export function EligibilityLoader() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-16 flex flex-col items-center justify-center text-center">
      <Loader2 className="size-8 text-teal-600 animate-spin" />
      <p className="mt-4 text-sm font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
        Checking your eligibility…
      </p>
      <p className="mt-1 text-sm text-gray-500 max-w-sm" style={{ fontFamily: "Cabin, sans-serif" }}>
        Scoring your program, organization, financial, and policy answers against this NOFO's requirements.
      </p>
    </div>
  );
}
