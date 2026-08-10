import { CheckCircle2, Circle, XCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import type { ActionItem, ActionItemPriority, PassItem } from "@/data/eligibilityAssessmentData";

const PRIORITY_STYLES: Record<ActionItemPriority, { label: string; bg: string; border: string; text: string }> = {
  high: { label: "High Priority", bg: "bg-red-50", border: "border-red-100", text: "text-red-600" },
  medium: { label: "Medium", bg: "bg-amber-50", border: "border-amber-100", text: "text-amber-700" },
  optional: { label: "Optional", bg: "bg-gray-100", border: "border-gray-200", text: "text-gray-500" },
};

interface ActionItemRowProps {
  item: ActionItem;
  onToggle: (id: string) => void;
}

function ActionItemRow({ item, onToggle }: ActionItemRowProps) {
  const priorityStyle = PRIORITY_STYLES[item.priority];

  return (
    <div
      className={`rounded-lg border p-[17px] flex items-start gap-4 transition-colors ${
        item.completed ? "bg-gray-50/60 border-gray-200" : "bg-white border-gray-200"
      }`}
    >
      <button
        type="button"
        onClick={() => onToggle(item.id)}
        aria-pressed={item.completed}
        aria-label={item.completed ? `Mark "${item.title}" incomplete` : `Mark "${item.title}" complete`}
        className="mt-0.5 shrink-0"
      >
        {item.completed ? (
          <CheckCircle2 className="size-5 text-teal-600" />
        ) : (
          <Circle className="size-5 text-gray-300 hover:text-gray-400" />
        )}
      </button>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p
            className={`text-sm font-semibold ${item.completed ? "text-gray-400 line-through" : "text-gray-900"}`}
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            {item.title}
          </p>
          <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${priorityStyle.bg} ${priorityStyle.border} ${priorityStyle.text}`}>
            {priorityStyle.label}
          </span>
          {item.completed ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700">
              <CheckCircle2 className="size-3" />
              Response stored
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-600">
              <XCircle className="size-3" />
              Unresolved
            </span>
          )}
        </div>
        <p className={`text-xs mt-1 ${item.completed ? "text-gray-400" : "text-gray-500"}`} style={{ fontFamily: "Cabin, sans-serif" }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

function PassTagRow({ item }: { item: PassItem }) {
  return (
    <div className="rounded-lg border border-green-200 bg-green-50 px-[17px] py-[13px] flex items-start gap-3">
      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700 shrink-0 mt-0.5">
        <CheckCircle2 className="size-3" />
        Pass
      </span>
      <div>
        <p className="text-sm font-medium text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
          {item.title}
        </p>
        <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "Cabin, sans-serif" }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

interface EligibilityReportProps {
  actionItems: ActionItem[];
  passItems: PassItem[];
  onToggleActionItem: (id: string) => void;
  onRetake: () => void;
}

/**
 * The eligibility report — Figma node 12683:25848, with the interactive
 * action-item checkbox behavior from nodes 12683:26425 (in progress) and
 * 12683:26857 (all checked / prompt to retake).
 */
export function EligibilityReport({ actionItems, passItems, onToggleActionItem, onRetake }: EligibilityReportProps) {
  const completedCount = actionItems.filter((item) => item.completed).length;
  const totalCount = actionItems.length;
  const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
  const passCount = passItems.length;
  const unresolvedCount = totalCount - completedCount + 0; // "Unresolved" tracks the fit criteria, held constant like the design

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: "Lustria, serif" }}>
        Eligibility Assessment
      </h2>
      <div className="w-16 h-1 bg-teal-500 rounded-full mb-6" />

      <Accordion type="single" defaultValue="snapshot" collapsible className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <AccordionItem value="snapshot" className="border-b-0">
          <AccordionTrigger className="px-5 py-4 no-underline hover:no-underline">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                Final Snapshot
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-green-100 px-1.5 py-0.5 text-xs font-semibold text-green-700">
                <CheckCircle2 className="size-3" />
                {passCount} Pass
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-xs font-semibold text-red-700">
                <XCircle className="size-3" />
                {unresolvedCount} Unresolved
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5">
            <div className="flex items-center justify-between text-xs mb-1.5" style={{ fontFamily: "Cabin, sans-serif" }}>
              <span className="text-gray-500">
                {completedCount} of {totalCount} actions completed
              </span>
              <span className="font-medium text-teal-600">{percent}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden mb-4">
              <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${percent}%` }} />
            </div>

            <div className="space-y-3">
              {actionItems.map((item) => (
                <ActionItemRow key={item.id} item={item} onToggle={onToggleActionItem} />
              ))}
            </div>

            <div className="space-y-2 mt-4">
              {passItems.map((item) => (
                <PassTagRow key={item.id} item={item} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-5 bg-white border border-red-100 rounded-2xl p-6 flex items-start gap-4">
        <div className="size-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
          <XCircle className="size-5 text-red-500" />
        </div>
        <div className="flex-1">
          <p className="text-base text-gray-900" style={{ fontFamily: "Lustria, serif" }}>
            Might not be a strong fit
          </p>
          <p className="text-sm text-gray-500 mt-1 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
            Based on your eligibility assessment, your organization may not meet the core criteria for this grant at
            this time. Work through the action items above to close gaps — then retake the assessment to see if your
            fit has improved.
          </p>
          <button
            type="button"
            onClick={onRetake}
            className="mt-3 text-sm font-semibold text-teal-700 hover:text-teal-800 hover:underline"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            Retake the assessment
          </button>
        </div>
      </div>
    </div>
  );
}
