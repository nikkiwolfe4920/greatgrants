import { ReactNode } from "react";

export interface PartnerEmailDetailRow {
  label: string;
  value: ReactNode;
}

/**
 * The gray key/value details box used across the partner-invitation email
 * family. Rows use `flex-wrap` rather than an `sm:` breakpoint so the
 * label/value pair genuinely reflows with the row's own rendered width
 * (label alone on its line, value wrapping below once squeezed) instead of
 * only the real browser viewport — the /emails "Mobile" toggle resizes an
 * inner container, not the viewport, so a viewport media query like `sm:`
 * never actually switches off there.
 */
export function PartnerEmailDetails({ rows }: { rows: PartnerEmailDetailRow[] }) {
  return (
    <div className="flex w-full flex-col gap-2.5 rounded-lg border border-[#e9eaeb] bg-[#f9fafb] px-4 py-3.5 text-sm">
      {rows.map((row) => (
        <div key={row.label} className="flex flex-wrap gap-x-3 gap-y-0.5">
          <p className="w-[150px] shrink-0 text-[#535862]">{row.label}</p>
          <p className="min-w-[140px] flex-1 font-semibold text-[#181d27]">{row.value}</p>
        </div>
      ))}
    </div>
  );
}
