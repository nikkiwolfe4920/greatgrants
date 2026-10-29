import { MessageSquareText } from "lucide-react";

interface FeedbackNotesCardProps {
  /** Who wrote the notes, e.g. "Westside Cultural Trust". */
  from: string;
  /** "Oct 29, 3:05 PM" */
  at: string;
  reason: string;
  fixes: string[];
  nextSteps: string[];
}

/**
 * Review notes from the lead applicant. Container and type follow the Figma
 * "Card: Anything else" node (16993:11859): grey-50 card, medium label, dark
 * body text — extended with the three sections the user needs: why it wasn't
 * accepted, what to fix, and what happens next.
 */
export function FeedbackNotesCard({ from, at, reason, fixes, nextSteps }: FeedbackNotesCardProps) {
  return (
    <section aria-labelledby="feedback-notes-title" className="rounded-xl bg-gray-50 p-6 space-y-5">
      <div>
        <p id="feedback-notes-title" className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <MessageSquareText className="size-4 text-gray-500" aria-hidden="true" />
          Notes from {from}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">{at}</p>
      </div>

      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-gray-900">Why it wasn&apos;t accepted</h4>
        <p className="text-sm text-gray-700">{reason}</p>
      </div>

      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-gray-900">What to fix</h4>
        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
          {fixes.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-1">
        <h4 className="text-sm font-semibold text-gray-900">Next steps</h4>
        <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-700">
          {nextSteps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
