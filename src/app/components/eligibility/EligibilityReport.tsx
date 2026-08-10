import { CheckCircle2, Circle, XCircle, ArrowRight, RotateCcw } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Button } from "@/app/components/ui/button";
import { OverallNofoFitScorecard, type FitCategory } from "@/app/components/OverallNofoFitScorecard";
import type { ActionItem, PassItem } from "@/data/eligibilityAssessmentData";

interface ActionItemRowProps {
  item: ActionItem;
  onToggle: (id: string) => void;
}

function ActionItemRow({ item, onToggle }: ActionItemRowProps) {
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

const BASE_CATEGORIES: FitCategory[] = [
  { label: "Eligibility", score: 100 },
  { label: "Mission Fit", score: 92 },
  { label: "Program Alignment", score: 84 },
  { label: "Capacity", score: 71 },
  { label: "Compliance", score: 100 },
  { label: "Competitiveness", score: 65 },
];

const BASE_RISKS = ["No prior awards from this agency", "Limited evaluation framework", "Matching funds not secured"];

interface EligibilityReportProps {
  actionItems: ActionItem[];
  passItems: PassItem[];
  onToggleActionItem: (id: string) => void;
  onRetake: () => void;
  onStartApplication: () => void;
}

/**
 * The eligibility report — Figma node 12683:25848: a single "Eligibility
 * Activities & Assessment" heading (rendered by the parent page) followed
 * by the two modules that make it up — the NOFO Analysis fit card
 * (OverallNofoFitScorecard, node 12749:6075) and the Action Items
 * accordion (node 12683:25936, renamed from "Final Snapshot", no priority
 * badges). Once every action item is checked, the fit card goes to a
 * clean 100%/no-risk state and a "Start Application" prompt replaces the
 * retake link.
 */
export function EligibilityReport({ actionItems, passItems, onToggleActionItem, onRetake, onStartApplication }: EligibilityReportProps) {
  const completedCount = actionItems.filter((item) => item.completed).length;
  const totalCount = actionItems.length;
  const percent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
  const passCount = passItems.length;
  const unresolvedCount = totalCount - completedCount;
  const isAllComplete = totalCount > 0 && completedCount === totalCount;

  return (
    <div className="space-y-5">
      <OverallNofoFitScorecard
        showScore={false}
        categories={isAllComplete ? BASE_CATEGORIES.map((c) => ({ ...c, score: 100 })) : BASE_CATEGORIES}
        risks={isAllComplete ? [] : BASE_RISKS}
        nextSteps={isAllComplete ? [] : undefined}
      />

      <Accordion type="single" defaultValue="action-items" collapsible className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <AccordionItem value="action-items" className="border-b-0">
          <AccordionTrigger className="px-5 py-4 no-underline hover:no-underline">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                Action Items
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

      {isAllComplete ? (
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 flex items-start gap-4">
          <div className="size-10 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
            <CheckCircle2 className="size-5 text-teal-700" />
          </div>
          <div className="flex-1">
            <p className="text-base text-gray-900" style={{ fontFamily: "Lustria, serif" }}>
              All clear — you&apos;re ready to apply
            </p>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed" style={{ fontFamily: "Cabin, sans-serif" }}>
              Every action item is resolved and your NOFO fit is 100% with no outstanding risks. You&apos;re in strong
              shape to move forward with a full application.
            </p>
            <Button onClick={onStartApplication} className="mt-4 bg-teal-600 hover:bg-teal-700 text-white gap-1.5">
              Start Application
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
            Work through the action items above to close gaps, then retake the assessment.
          </p>
          <button
            type="button"
            onClick={onRetake}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 hover:underline shrink-0"
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            <RotateCcw className="size-3.5" />
            Retake the assessment
          </button>
        </div>
      )}
    </div>
  );
}
