import { ShieldCheck, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { YesNoUnsureQuestion } from "@/app/components/eligibility/YesNoUnsure";
import type { PolicyInfoState } from "@/data/eligibilityAssessmentData";

interface PolicyInfoStepProps {
  value: PolicyInfoState;
  onChange: (value: PolicyInfoState) => void;
  onBack: () => void;
  onCheckEligibility: () => void;
  isSubmitting: boolean;
}

/**
 * Step 4 — Policy Info. Header, "Check My Eligibility" and back button
 * chrome from Figma node 12683:28940; the seven questions reuse the exact
 * input pattern from /organization's Policies & Compliance tab.
 */
export function PolicyInfoStep({ value, onChange, onBack, onCheckEligibility, isSubmitting }: PolicyInfoStepProps) {
  const set = <K extends keyof PolicyInfoState>(key: K, val: PolicyInfoState[K]) =>
    onChange({ ...value, [key]: val });

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-[33px]">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
          <ShieldCheck className="size-5 text-teal-600" />
        </div>
        <div>
          <p className="text-xs font-normal text-gray-500 uppercase tracking-[0.3px]" style={{ fontFamily: "Cabin, sans-serif" }}>
            Step 4 of 5
          </p>
          <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            Policy Info
          </h3>
        </div>
      </div>

      <div className="pt-6 space-y-6">
        <p className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
          Federal awards require robust back-office capacity. Be honest — gaps here are fixable before submission.
        </p>

        <YesNoUnsureQuestion
          question="Does the organization have software or a financial system to track deadlines, reporting, and compliance?"
          value={value.complianceTrackingSoftware}
          onChange={(v) => set("complianceTrackingSoftware", v)}
        />

        <YesNoUnsureQuestion
          question="Can the organization track/collect outcome data aligned with federal measures (e.g., GPRA)?"
          value={value.federalDataTracking}
          onChange={(v) => set("federalDataTracking", v)}
        />

        <YesNoUnsureQuestion
          question="Does the organization collect disaggregated demographic data?"
          value={value.demographicDataCollection}
          onChange={(v) => set("demographicDataCollection", v)}
        />

        <YesNoUnsureQuestion
          question="Does the organization have documented internal controls for federal compliance?"
          value={value.internalControlsDocs}
          onChange={(v) => set("internalControlsDocs", v)}
        />

        <YesNoUnsureQuestion
          question="Does the organization have documented policies for procurement and subrecipient monitoring?"
          value={value.procurementPolicies}
          onChange={(v) => set("procurementPolicies", v)}
        />

        <YesNoUnsureQuestion
          question="Does the organization have documented policies for time and effort reporting (personnel)?"
          value={value.timeEffortPolicies}
          onChange={(v) => set("timeEffortPolicies", v)}
        />

        <YesNoUnsureQuestion
          question="Does the organization have documented policies for conflict of interest and record retention?"
          value={value.conflictOfInterestPolicies}
          onChange={(v) => set("conflictOfInterestPolicies", v)}
        />
      </div>

      <div className="pt-8">
        <div className="border-t border-gray-100 pt-[25px] flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} disabled={isSubmitting} className="gap-1.5 text-gray-500">
            <ArrowLeft className="size-4" />
            Back
          </Button>
          <Button onClick={onCheckEligibility} disabled={isSubmitting} className="bg-teal-600 hover:bg-teal-700 text-white gap-1.5">
            {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <ShieldCheck className="size-4" />}
            Check My Eligibility
          </Button>
        </div>
      </div>
    </div>
  );
}
