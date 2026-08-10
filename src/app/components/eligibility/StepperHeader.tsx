import { Check } from "lucide-react";

export interface StepDefinition {
  label: string;
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
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isDone = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isActive = isDone || isCurrent;

          return (
            <div key={step.label} className={`flex items-center ${index === steps.length - 1 ? "" : "flex-1"}`}>
              <div className="flex flex-col items-center w-[72px] shrink-0">
                <div
                  className={`size-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                    isActive ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-400"
                  }`}
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {isDone ? <Check className="size-4" /> : stepNumber}
                </div>
                <p
                  className={`mt-1.5 text-xs text-center leading-[15px] whitespace-pre-line ${
                    isActive ? "text-teal-700 font-semibold" : "text-gray-400"
                  }`}
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {step.label}
                </p>
              </div>
              {index !== steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-gray-200 rounded-full mb-5 mx-2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
