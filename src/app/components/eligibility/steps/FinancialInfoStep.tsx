import { ClipboardList, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { YesNoUnsureQuestion } from "@/app/components/eligibility/YesNoUnsure";
import type { FinancialInfoState } from "@/data/eligibilityAssessmentData";

function ConfirmedBadge() {
  return (
    <span className="inline-flex items-center gap-1 flex-shrink-0 rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700 whitespace-nowrap">
      <CheckCircle2 className="w-3.5 h-3.5" />
      Confirmed
    </span>
  );
}

interface FinancialInfoStepProps {
  value: FinancialInfoState;
  onChange: (value: FinancialInfoState) => void;
  onBack: () => void;
  onContinue: () => void;
}

const REGISTRATION_OPTIONS: { value: FinancialInfoState["orgRegistrationType"]; label: string }[] = [
  { value: "501c3-church", label: "501(c)(3) Church" },
  { value: "501c3-nonprofit", label: "501(c)(3) Non-Profit (and not a church)" },
  { value: "other-nonprofit", label: "Other Recognized Non-Profit Status" },
  { value: "for-profit", label: "For-Profit" },
];

/**
 * Step 3 — Financial Info. Header / back / continue chrome from Figma node
 * 12683:27670; the six questions themselves reuse the exact input pattern
 * from /organization's Financial Info tab.
 */
export function FinancialInfoStep({ value, onChange, onBack, onContinue }: FinancialInfoStepProps) {
  const set = <K extends keyof FinancialInfoState>(key: K, val: FinancialInfoState[K]) =>
    onChange({ ...value, [key]: val });

  const isComplete =
    value.orgRegistrationType !== "" &&
    value.cfr200Compliant !== "" &&
    value.financialSystemTracking !== "" &&
    value.timeEffortReporting !== "" &&
    value.indirectCostAgreement.trim() !== "" &&
    value.costShareLiquidity !== "";

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-[33px]">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
          <ClipboardList className="size-5 text-teal-600" />
        </div>
        <div>
          <p className="text-xs font-normal text-gray-500 uppercase tracking-[0.3px]" style={{ fontFamily: "Cabin, sans-serif" }}>
            Step 3 of 5
          </p>
          <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            Financial Info
          </h3>
        </div>
      </div>

      <div className="pt-6 space-y-6">
        <p className="text-sm text-gray-600" style={{ fontFamily: "Cabin, sans-serif" }}>
          Please answer the following questions to help us assess your financial readiness for this grant.
        </p>

        <div>
          <div className="flex items-start justify-between gap-3 mb-3">
            <Label className="block text-sm font-medium text-gray-900">
              How is the organization registered? <span className="text-red-500">*</span>
            </Label>
            {value.orgRegistrationType !== "" && <ConfirmedBadge />}
          </div>
          <div className="flex flex-col gap-2">
            {REGISTRATION_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => set("orgRegistrationType", option.value)}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                  value.orgRegistrationType === option.value
                    ? "border-teal-600 bg-teal-50 text-gray-900"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      value.orgRegistrationType === option.value ? "border-teal-600 bg-teal-600" : "border-gray-300 bg-white"
                    }`}
                  >
                    {value.orgRegistrationType === option.value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="text-sm font-medium" style={{ fontFamily: "Cabin, sans-serif" }}>
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <YesNoUnsureQuestion
          question="Is the organization compliant with a 2 CFR 200 audit requirement (including a Single Audit)?"
          value={value.cfr200Compliant}
          onChange={(v) => set("cfr200Compliant", v)}
        />

        <YesNoUnsureQuestion
          question="Can the organization's financial system track expenses by individual grant and manage federal drawdowns?"
          value={value.financialSystemTracking}
          onChange={(v) => set("financialSystemTracking", v)}
        />

        <YesNoUnsureQuestion
          question="Can the organization's financial system support time and effort reporting?"
          value={value.timeEffortReporting}
          onChange={(v) => set("timeEffortReporting", v)}
        />

        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <Label htmlFor="indirectCostAgreement" className="block text-sm font-medium text-gray-900">
              Does the organization have a Negotiated Indirect Cost Rate Agreement (NICRA), or will it use the 10% de minimis rate?{" "}
              <span className="text-red-500">*</span>
            </Label>
            {value.indirectCostAgreement.trim() !== "" && <ConfirmedBadge />}
          </div>
          <Input
            id="indirectCostAgreement"
            value={value.indirectCostAgreement}
            onChange={(e) => set("indirectCostAgreement", e.target.value)}
            placeholder='e.g., "NICRA at 35%" or "De minimis 15%"'
          />
        </div>

        <YesNoUnsureQuestion
          question="Does the organization have liquidity or committed financial resources to meet cost-share/matching requirements?"
          value={value.costShareLiquidity}
          onChange={(v) => set("costShareLiquidity", v)}
        />
      </div>

      <div className="pt-8">
        <div className="border-t border-gray-100 pt-[25px] flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-1.5 text-gray-500">
            <ArrowLeft className="size-4" />
            Back
          </Button>
          <Button
            onClick={onContinue}
            disabled={!isComplete}
            className={isComplete ? "bg-teal-600 hover:bg-teal-700 text-white gap-1.5" : "bg-gray-100 text-gray-400 gap-1.5 cursor-not-allowed"}
          >
            Continue
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
