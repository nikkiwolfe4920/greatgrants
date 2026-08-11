import { Check, AlertCircle } from "lucide-react";

interface ProgramSelectedNoticeProps {
  name: string;
  description: string;
  /** Program health-check results — fields still missing from the program's profile, if any. */
  improvementItems?: string[];
}

/**
 * Teal confirmation banner shown underneath the program list once an
 * existing program has been selected on Step 1, with a nested amber
 * "Improve your program" health-check alert when the program's profile is
 * missing fields — Figma node 12827:24434 ("Program Selected / Improve
 * Program").
 */
export function ProgramSelectedNotice({ name, description, improvementItems }: ProgramSelectedNoticeProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border-2 border-[#00bba7] bg-[#f0fdfa] p-[18px]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 size-5 rounded-full bg-[#009689] flex items-center justify-center shrink-0">
          <Check className="size-3 text-white" strokeWidth={3} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            {name}
          </p>
          <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "Cabin, sans-serif" }}>
            {description}
          </p>
        </div>
      </div>

      {improvementItems && improvementItems.length > 0 && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-[13px]">
          <div className="flex items-start gap-3">
            <AlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                Improve your program
              </p>
              <ul className="list-disc pl-[18px] pt-2 space-y-0 text-xs text-amber-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                {improvementItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
