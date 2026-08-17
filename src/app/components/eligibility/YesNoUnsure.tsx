import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import type { YesNoUnsure as YesNoUnsureValue } from "@/data/eligibilityAssessmentData";

function ConfirmedBadge() {
  return (
    <span
      data-figma-component="ConfirmedBadge"
      className="inline-flex items-center gap-1 flex-shrink-0 rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700 whitespace-nowrap"
    >
      <CheckCircle2 className="w-3.5 h-3.5" />
      Confirmed
    </span>
  );
}

interface YesNoUnsureQuestionProps {
  question: string;
  value: YesNoUnsureValue;
  onChange: (value: YesNoUnsureValue) => void;
  required?: boolean;
  /** Renders directly underneath the question text, before the answer options — e.g. a Helpful Tip accordion. */
  tip?: ReactNode;
}

/**
 * Yes / No / Unsure question row — matches the exact input pattern used on
 * /organization's Financial Info and Policies & Compliance tabs, so the
 * eligibility workflow's Step 3 & 4 questions feel identical to the
 * organization profile the answers ultimately roll up into.
 */
export function YesNoUnsureQuestion({ question, value, onChange, required = true, tip }: YesNoUnsureQuestionProps) {
  const options: { value: YesNoUnsureValue; label: string; color: "teal" | "orange" }[] = [
    { value: "yes", label: "Yes", color: "teal" },
    { value: "no", label: "No", color: "orange" },
    { value: "unsure", label: "Unsure", color: "orange" },
  ];

  return (
    <div data-figma-component="YesNoQuestion">
      <div className="flex items-start justify-between gap-3 mb-3">
        <label className="block text-sm font-medium text-gray-900">
          {question} {required && <span className="text-red-500">*</span>}
        </label>
        {value === "yes" && <ConfirmedBadge />}
      </div>
      {tip && <div className="mb-3">{tip}</div>}
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
              value === option.value
                ? option.color === "teal"
                  ? "border-teal-600 bg-teal-50 text-gray-900"
                  : "border-amber-500 bg-amber-50 text-gray-900"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  value === option.value
                    ? option.color === "teal"
                      ? "border-teal-600 bg-teal-600"
                      : "border-amber-500 bg-amber-500"
                    : "border-gray-300 bg-white"
                }`}
              >
                {value === option.value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
              <span className="text-sm font-medium">
                {option.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
