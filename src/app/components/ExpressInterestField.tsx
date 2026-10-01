import { AlertCircle } from "lucide-react";
import { Label } from "./ui/label";

/**
 * The labeled-field shell shared by every "Express interest" flow: label +
 * required mark + optional trailing badge, input slot, then either an error
 * (wins when present) or helper text underneath.
 */

export function RequiredMark() {
  return <span className="text-[#d92d20]">*</span>;
}

export function ProgramBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-md border border-[#99f6e0] bg-[#f0fdf9] px-1.5 py-0.5 text-xs font-medium text-[#107569]">
      {children}
    </span>
  );
}

export function Field({
  id,
  label,
  required,
  badge,
  helperText,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  badge?: React.ReactNode;
  helperText?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <Label
          htmlFor={id}
          className="gap-0.5 text-sm font-medium text-[#414651]"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          {label}
          {required && <RequiredMark />}
        </Label>
        {badge && <div className="flex-1" />}
        {badge}
      </div>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          className="flex items-start gap-1 text-xs text-[#d92d20]"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          <AlertCircle className="size-3.5 shrink-0 translate-y-px" />
          {error}
        </p>
      ) : helperText ? (
        <p
          id={`${id}-helper`}
          className="text-xs text-[#535862]"
          style={{ fontFamily: "Cabin, sans-serif" }}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
