import { ReactNode } from "react";
import { Logo } from "../Logo";

interface EmailShellProps {
  /** Hidden inbox-preview text (the snippet Gmail/Outlook show next to the subject line). */
  preheader: string;
  children: ReactNode;
  /**
   * "You're receiving this because…" + sign-off, rendered above the divider.
   * Kept as a prop (not baked into the shell) since transactional vs. digest
   * emails word this differently.
   */
  receivedBecause: ReactNode;
  /** Footer link(s) for tuning notification volume — required on every alert email. */
  manageLinksLabel?: string;
}

/**
 * Shared chrome for every Great Grants transactional/digest email: logo
 * header, hidden preheader, content slot, sign-off, and the compliance
 * footer (support email + manage/unsubscribe + copyright).
 *
 * Layout intentionally uses normal flow (flex/stack) rather than the fixed
 * absolute-position canvas Figma exports, so it reflows at any width instead
 * of only matching the 600px design frame.
 */
export function EmailShell({
  preheader,
  children,
  receivedBecause,
  manageLinksLabel = "Manage alert preferences",
}: EmailShellProps) {
  return (
    <div className="w-full bg-white">
      {/* Inbox preview text — visually hidden, read by email clients only. */}
      <span className="sr-only">{preheader}</span>

      <header className="px-4 pt-8 pb-2 sm:px-10 sm:pt-10">
        <Logo />
      </header>

      <main className="px-4 sm:px-10">{children}</main>

      <div className="px-4 pt-6 pb-8 text-sm text-gray-500 sm:px-10">{receivedBecause}</div>

      <footer className="flex flex-col gap-3 border-t border-gray-200 px-4 py-6 text-[11px] text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="space-y-1">
          <p>
            Questions? Please email us at{" "}
            <a
              href="mailto:customerservice@greatgrants.ai"
              className="font-semibold text-teal-800 underline"
            >
              customerservice@greatgrants.ai
            </a>
          </p>
          <p>
            <a href="#" className="underline hover:text-gray-700">
              {manageLinksLabel}
            </a>{" "}
            &middot;{" "}
            <a href="#" className="underline hover:text-gray-700">
              Unsubscribe
            </a>
          </p>
          <p>Copyright © 2026. All rights reserved.</p>
        </div>
        <div className="origin-left scale-[0.7] sm:origin-right">
          <Logo />
        </div>
      </footer>
    </div>
  );
}
