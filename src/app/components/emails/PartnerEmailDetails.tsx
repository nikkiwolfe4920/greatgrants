import { ReactNode } from "react";

export interface PartnerEmailDetailRow {
  label: string;
  value: ReactNode;
}

/** The gray key/value details box used across the partner-invitation email family. */
export function PartnerEmailDetails({ rows }: { rows: PartnerEmailDetailRow[] }) {
  return (
    <div className="flex w-full flex-col gap-2.5 rounded-lg border border-[#e9eaeb] bg-[#f9fafb] px-4 py-3.5 text-sm">
      {rows.map((row) => (
        <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
          <p className="text-[#535862] sm:w-[150px] sm:shrink-0">{row.label}</p>
          <p className="font-semibold text-[#181d27] sm:flex-1">{row.value}</p>
        </div>
      ))}
    </div>
  );
}
