import { Check, X } from "lucide-react";

export interface StepDefinition {
  label: string;
  /** Optional grey caption under the label, e.g. "Decided on Oct 3". */
  caption?: string;
  /** "error" renders the step as failed (red) — e.g. information not accepted. */
  status?: "error";
}

interface StepperHeaderProps {
  steps: StepDefinition[];
  currentStep: number; // 1-indexed
}

/**
 * 4-step progress stepper shown at the top of the eligibility assessment
 * workflow. Implements Figma node 12683:23302 / 12683:25174 (circle + label
 * + connector), with teal-filled circles for done/current steps.
 */
export function StepperHeader({ steps, currentStep }: StepperHeaderProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6" role="group" aria-label={`Progress: step ${currentStep} of ${steps.length}`}>
      <div className="flex items-start">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isDone = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isError = step.status === "error";
          const isActive = isDone || isCurrent;

          return (
            <div key={step.label} className={`flex items-start ${index === steps.length - 1 ? "" : "flex-1"}`}>
              <div className="flex flex-col items-center w-[88px] shrink-0" aria-current={isCurrent ? "step" : undefined}>
                <div
                  className={`size-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                    isError ? "bg-red-600 text-white" : isActive ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-400"
                  }`}
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {isError ? <X className="size-4" /> : isDone ? <Check className="size-4" /> : stepNumber}
                </div>
                <p
                  className={`mt-1.5 text-xs text-center leading-[15px] whitespace-pre-line ${
                    isError ? "text-red-700 font-semibold" : isActive ? "text-teal-700 font-semibold" : "text-gray-400"
                  }`}
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {step.label}
                  <span className="sr-only">{isError ? " (not accepted)" : isDone ? " (completed)" : isCurrent ? " (current step)" : ""}</span>
                </p>
                {step.caption && (
                  <p className={`mt-0.5 text-xs text-center leading-[15px] whitespace-pre-line ${isError ? "text-red-700" : "text-gray-500"}`} style={{ fontFamily: "Cabin, sans-serif" }}>
                    {step.caption}
                  </p>
                )}
              </div>
              {index !== steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-gray-200 rounded-full mt-[15px] mx-2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
