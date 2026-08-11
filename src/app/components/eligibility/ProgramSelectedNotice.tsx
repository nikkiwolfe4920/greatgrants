import { Check } from "lucide-react";

interface ProgramSelectedNoticeProps {
  name: string;
  description: string;
}

/**
 * Teal confirmation banner shown underneath the program list once an
 * existing program has been selected on Step 1 — Figma node 12827:24450.
 */
export function ProgramSelectedNotice({ name, description }: ProgramSelectedNoticeProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg border-2 border-[#00bba7] bg-[#f0fdfa] p-[18px]">
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
  );
}
