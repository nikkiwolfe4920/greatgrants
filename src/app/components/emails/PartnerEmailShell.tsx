import { ReactNode } from "react";
import { Logo } from "../Logo";

interface PartnerEmailShellProps {
  children: ReactNode;
  footer: ReactNode;
}

/**
 * Shared chrome for the partner-invitation email family (Figma nodes
 * 15494:25670, 15494:25731, 15494:25766): a gray page background holding one
 * white rounded card (logo + content), with the compliance footer sitting
 * directly on the page background below the card rather than inside it like
 * EmailShell's alert emails.
 *
 * Layout intentionally uses normal flow (flex/stack) rather than the fixed
 * absolute-position canvas Figma exports, so it reflows at any width instead
 * of only matching the 640px design frame.
 */
export function PartnerEmailShell({ children, footer }: PartnerEmailShellProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4 bg-[#f2f4f7] px-4 pb-8 pt-5 sm:px-10 sm:pt-6">
      <div className="flex w-full flex-col gap-5 rounded-xl bg-white p-5 sm:p-8">
        <Logo />
        {children}
      </div>
      <div className="flex w-full flex-col gap-1.5 px-2 text-xs leading-[18px] text-[#717680]">
        {footer}
      </div>
    </div>
  );
}
