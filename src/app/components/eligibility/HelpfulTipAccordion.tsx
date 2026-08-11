import { useState, type ReactNode } from "react";
import { Sparkles, ChevronDown, ChevronUp } from "lucide-react";

interface HelpfulTipAccordionProps {
  children: ReactNode;
}

/**
 * "Helpful Tip" accordion shown underneath a question on the Financial Info
 * and Policy Info steps. Default closed; a purple sparkle icon + label sit
 * in the header, with a chevron indicating expand/collapse state.
 */
export function HelpfulTipAccordion({ children }: HelpfulTipAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-2 px-4 py-3"
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
          <Sparkles className="size-4 text-[#9810fa]" />
          Helpful Tip
        </span>
        {open ? <ChevronUp className="size-4 text-gray-500" /> : <ChevronDown className="size-4 text-gray-500" />}
      </button>
      {open && (
        <div className="px-4 pb-4 pt-3 border-t border-gray-200">
          <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
            {children}
          </p>
        </div>
      )}
    </div>
  );
}
