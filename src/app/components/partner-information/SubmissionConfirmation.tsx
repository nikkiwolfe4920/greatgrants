import { forwardRef, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

interface SubmissionConfirmationProps {
  title: string;
  /** "Oct 29, 2:21 PM" — shown under the title. */
  sentOn?: string;
  body: string;
  nextSteps: string[];
  actions?: ReactNode;
}

/**
 * Success panel shown once something has been sent to the lead applicant:
 * confirms it, timestamps it, and sets expectations for what happens next.
 * Focusable so the caller can move focus here after sending (screen readers
 * announce the `status` region; sighted users get scrolled to it).
 */
export const SubmissionConfirmation = forwardRef<HTMLElement, SubmissionConfirmationProps>(function SubmissionConfirmation(
  { title, sentOn, body, nextSteps, actions },
  ref,
) {
  return (
    <section
      ref={ref}
      tabIndex={-1}
      role="status"
      aria-label={title}
      className="rounded-xl border border-green-200 bg-green-50 p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
    >
      <div className="flex gap-3">
        <CheckCircle2 className="size-5 mt-0.5 shrink-0 text-green-700" aria-hidden="true" />
        <div className="space-y-4 min-w-0">
          <div>
            <h3 className="font-semibold text-green-800">{title}</h3>
            {sentOn && <p className="text-xs text-gray-600">Sent {sentOn}</p>}
            <p className="mt-2 text-sm text-gray-700">{body}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">What happens next</p>
            <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-gray-700">
              {nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
        </div>
      </div>
    </section>
  );
});
