import { useEffect, useMemo, useState } from "react";
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Check,
  Lock,
} from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { cn } from "./ui/utils";

/**
 * AI Coaching suggestions module.
 *
 * Groups AI-generated NOFO feedback into three priority tiers — High Impact
 * (required, red), Medium Impact (weak/partial, orange) and Recommended
 * Enhancements (optional, grey) — and layers on the interaction rules from
 * the design spec: capped/priority-ordered display, resolve-to-reveal,
 * per-tag tooltips, and a "section complete" state that never blocks on
 * optional (Recommended) feedback.
 */

type Priority = "high" | "medium" | "recommended";

interface Suggestion {
  id: string;
  priority: Priority;
  title: string;
  description: string;
}

interface AICoachingModuleProps {
  applicationId: string;
  sectionId: string;
}

// Most active suggestion cards ever shown for a given priority tier at once.
// Additional lower-priority feedback is held back and revealed as the
// visible items are resolved — see `unresolved.slice(0, MAX_VISIBLE)` below.
const MAX_VISIBLE = 5;

const PRIORITY_ORDER: Record<Priority, number> = {
  high: 0,
  medium: 1,
  recommended: 2,
};

const PRIORITY_META: Record<
  Priority,
  {
    label: string;
    definition: string;
    Icon: typeof AlertCircle;
    iconColor: string;
    tagClasses: string;
    countPillClasses: string;
    ringClass: string;
  }
> = {
  high: {
    label: "High Impact",
    definition: "NOFO requirement is not met — required information is missing.",
    Icon: AlertCircle,
    iconColor: "text-red-600",
    tagClasses: "bg-red-50 text-red-700 border-red-200 hover:bg-red-100",
    countPillClasses: "bg-red-100 text-red-700",
    ringClass: "focus-visible:ring-red-400",
  },
  medium: {
    label: "Medium Impact",
    definition: "NOFO requirement is met but the response is weak or only partially responsive.",
    Icon: AlertTriangle,
    iconColor: "text-orange-600",
    tagClasses: "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100",
    countPillClasses: "bg-orange-100 text-orange-700",
    ringClass: "focus-visible:ring-orange-400",
  },
  recommended: {
    label: "Recommended Enhancements",
    definition: "Response is sufficient but could be improved.",
    Icon: Lightbulb,
    iconColor: "text-gray-500",
    tagClasses: "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200",
    countPillClasses: "bg-gray-200 text-gray-700",
    ringClass: "focus-visible:ring-gray-400",
  },
};

// Mock AI coaching feedback, keyed by section. Mission & Vision (s1) and
// Narrative (s6) are wired up today; add more entries here to light up the
// module elsewhere. Narrative is the section the Dashboard's coaching
// notification links to, so it needs content for that link to pay off.
const SUGGESTIONS_BY_SECTION: Record<string, Suggestion[]> = {
  s1: [
    {
      id: "mv-h1",
      priority: "high",
      title: "State a measurable outcome",
      description:
        "The NOFO requires your mission to name at least one measurable outcome. None was found in the current response.",
    },
    {
      id: "mv-h2",
      priority: "high",
      title: "Reference the funding opportunity number",
      description:
        "A cross-reference to the NOFO number (e.g., HHS-2026-ACL-AT) is required and missing from the vision statement.",
    },
    {
      id: "mv-m1",
      priority: "medium",
      title: "Clarify the population you serve",
      description:
        "The mission mentions \"individuals with disabilities\" but doesn't specify the age range or service area the NOFO asks for.",
    },
    {
      id: "mv-m2",
      priority: "medium",
      title: "Tie the vision to a community outcome",
      description:
        "Your vision touches on independence and dignity, but doesn't connect those goals to an outcome reviewers can score.",
    },
    {
      id: "mv-r1",
      priority: "recommended",
      title: "Lead with a concrete statistic",
      description:
        "Opening with a data point, like the number of people served last year, helps the mission stand out to reviewers.",
    },
    {
      id: "mv-r2",
      priority: "recommended",
      title: "Name a key partnership",
      description:
        "Calling out a flagship community partner reinforces credibility without adding much length.",
    },
    {
      id: "mv-r3",
      priority: "recommended",
      title: "Tighten the second paragraph",
      description:
        "The vision paragraph runs long — trimming the repeated phrasing around \"financial barriers\" will improve readability.",
    },
  ],
  s6: [
    {
      id: "nar-h1",
      priority: "high",
      title: "State the outcomes you'll be measured on",
      description:
        "The NOFO requires the narrative to name the outcomes this project will be evaluated against. The current draft describes activities but never commits to a result.",
    },
    {
      id: "nar-h2",
      priority: "high",
      title: "Address the sustainability requirement",
      description:
        "Section IV asks how the program continues after the award period ends. There is no sustainability plan anywhere in the narrative.",
    },
    {
      id: "nar-m1",
      priority: "medium",
      title: "Quantify the need you're responding to",
      description:
        "The need statement is descriptive but has no numbers. Reviewers score need statements on evidence, and a single local statistic would carry this paragraph.",
    },
    {
      id: "nar-m2",
      priority: "medium",
      title: "Connect the narrative to your budget",
      description:
        "Three activities described here don't appear as line items in the Budget section. Reviewers cross-check the two, and mismatches read as unplanned.",
    },
    {
      id: "nar-m3",
      priority: "medium",
      title: "Name who is accountable for delivery",
      description:
        "The narrative describes what will happen but not who does it. Naming roles from your Organization Profile makes the plan feel staffed rather than aspirational.",
    },
    {
      id: "nar-m4",
      priority: "medium",
      title: "Use the funder's own terminology",
      description:
        "The NOFO says \"direct service hours\" where this draft says \"program time\". Matching the funder's language makes the response easier to score against the rubric.",
    },
    {
      id: "nar-r1",
      priority: "recommended",
      title: "Open with the person, not the program",
      description:
        "A one-sentence account of a specific participant gives reviewers something concrete before the structural detail arrives.",
    },
    {
      id: "nar-r2",
      priority: "recommended",
      title: "Break the third paragraph in two",
      description:
        "It currently carries both the implementation plan and the evaluation approach. Separating them makes each easier to find and score.",
    },
    {
      id: "nar-r3",
      priority: "recommended",
      title: "Reference your past performance",
      description:
        "You've run a comparable program before. One sentence on that track record strengthens the case without lengthening the narrative much.",
    },
    {
      id: "nar-r4",
      priority: "recommended",
      title: "Trim the repeated framing",
      description:
        "\"Underserved communities\" appears five times in four paragraphs. Varying it keeps the prose from reading as boilerplate.",
    },
    {
      id: "nar-r5",
      priority: "recommended",
      title: "Add a timeline reference",
      description:
        "Pointing to the milestones already in Program Details helps reviewers see the narrative and the work plan as one document.",
    },
    {
      id: "nar-r6",
      priority: "recommended",
      title: "Close on the outcome, not the ask",
      description:
        "The final paragraph ends on the funding request. Ending on what changes for participants leaves a stronger last impression.",
    },
  ],
};

function PriorityTag({ priority }: { priority: Priority }) {
  const meta = PRIORITY_META[priority];
  const { Icon } = meta;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium transition-colors cursor-help",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
            meta.tagClasses,
            meta.ringClass,
          )}
        >
          <Icon className="h-3 w-3" aria-hidden="true" />
          <span style={{ fontFamily: "Cabin, sans-serif" }}>{meta.label}</span>
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[260px] text-left">
        {meta.definition}
      </TooltipContent>
    </Tooltip>
  );
}

function SuggestionCard({
  suggestion,
  resolved,
  onToggle,
}: {
  suggestion: Suggestion;
  resolved: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-3 transition-colors",
        resolved ? "border-teal-200 bg-teal-50/50" : "border-gray-200 bg-white hover:border-gray-300",
      )}
    >
      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={() => onToggle(suggestion.id)}
          aria-pressed={resolved}
          aria-label={resolved ? `Mark "${suggestion.title}" as unresolved` : `Mark "${suggestion.title}" as resolved`}
          className={cn(
            "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1",
            resolved ? "border-teal-600 bg-teal-600" : "border-gray-300 hover:border-gray-400",
          )}
        >
          {resolved && <Check className="h-3 w-3 text-white" aria-hidden="true" />}
        </button>

        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <PriorityTag priority={suggestion.priority} />
          </div>
          <p
            className={cn("text-sm font-medium", resolved ? "text-teal-900 line-through" : "text-gray-900")}
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            {suggestion.title}
          </p>
          <p
            className={cn("mt-0.5 text-xs leading-relaxed", resolved ? "text-teal-700" : "text-gray-600")}
            style={{ fontFamily: "Cabin, sans-serif" }}
          >
            {suggestion.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CoachingSection({
  priority,
  active,
  resolved,
  onToggle,
}: {
  priority: Priority;
  active: Suggestion[];
  resolved: Suggestion[];
  onToggle: (id: string) => void;
}) {
  const meta = PRIORITY_META[priority];
  const [showResolved, setShowResolved] = useState(active.length === 0 && resolved.length > 0);

  // Auto-reveal the resolved list the moment a section clears out, so the
  // "all done" confirmation is never hidden behind an extra click.
  useEffect(() => {
    if (active.length === 0 && resolved.length > 0) {
      setShowResolved(true);
    }
  }, [active.length, resolved.length]);

  // Deliverable: sections with zero suggestions (active or resolved) render nothing.
  if (active.length === 0 && resolved.length === 0) return null;

  const isFullyResolved = active.length === 0;

  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        {isFullyResolved ? (
          <>
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
            <Tooltip>
              <TooltipTrigger asChild>
                <h4
                  className="cursor-help text-sm font-semibold text-gray-500"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {meta.label}
                </h4>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-[260px] text-left">
                {meta.definition}
              </TooltipContent>
            </Tooltip>
            <span className="inline-flex items-center rounded-full bg-teal-50 px-2 py-0.5 text-xs font-semibold text-teal-700 border border-teal-200">
              All resolved
            </span>
          </>
        ) : (
          <>
            <meta.Icon className={cn("h-4 w-4 flex-shrink-0", meta.iconColor)} aria-hidden="true" />
            <Tooltip>
              <TooltipTrigger asChild>
                <h4
                  className="cursor-help text-sm font-semibold text-gray-900"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  {meta.label}
                </h4>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-[260px] text-left">
                {meta.definition}
              </TooltipContent>
            </Tooltip>
            <span
              className={cn(
                "inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-semibold",
                meta.countPillClasses,
              )}
            >
              {active.length}
            </span>
          </>
        )}

        <div className="h-px flex-1 bg-gray-200" />

        {resolved.length > 0 && (
          <button
            type="button"
            onClick={() => setShowResolved((v) => !v)}
            className="flex items-center gap-1 text-xs font-medium text-gray-400 transition-colors hover:text-gray-600"
          >
            {showResolved ? "Hide" : "Show"} resolved ({resolved.length})
            {showResolved ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
        )}
      </div>

      <div className="space-y-2">
        {active.map((s) => (
          <SuggestionCard key={s.id} suggestion={s} resolved={false} onToggle={onToggle} />
        ))}
        {showResolved && resolved.map((s) => <SuggestionCard key={s.id} suggestion={s} resolved={true} onToggle={onToggle} />)}
      </div>
    </div>
  );
}

export function AICoachingModule({ applicationId, sectionId }: AICoachingModuleProps) {
  const suggestions = SUGGESTIONS_BY_SECTION[sectionId];
  const storageKey = `app-${applicationId}-section-${sectionId}-coaching-resolved`;

  const [isOpen, setIsOpen] = useState(true);
  const [resolvedIds, setResolvedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setResolvedIds(new Set(JSON.parse(saved)));
        return;
      } catch {
        // fall through to reset below
      }
    }
    setResolvedIds(new Set());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  const toggleResolved = (id: string) => {
    setResolvedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      localStorage.setItem(storageKey, JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const sorted = useMemo(
    () => (suggestions ? [...suggestions].sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]) : []),
    [suggestions],
  );

  const unresolved = sorted.filter((s) => !resolvedIds.has(s.id));
  const resolved = sorted.filter((s) => resolvedIds.has(s.id));

  // Priority-ordered cap: the top MAX_VISIBLE unresolved items are shown as
  // active cards. Resolving one drops it out of `unresolved`, which slides
  // the next-highest-priority held-back suggestion into view automatically.
  const visibleActive = unresolved.slice(0, MAX_VISIBLE);
  const hiddenCount = Math.max(0, unresolved.length - MAX_VISIBLE);

  const byPriority = (list: Suggestion[], p: Priority) => list.filter((s) => s.priority === p);

  // Per TP-1431: open Recommended (grey) items never block completion —
  // only High and Medium impact suggestions count toward "required".
  const requiredResolved = unresolved.every((s) => s.priority === "recommended");

  if (!suggestions || suggestions.length === 0) return null;

  return (
    <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between bg-gray-50 px-4 py-3 text-left transition-colors hover:bg-gray-100"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-purple-600" aria-hidden="true" />
          <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: "Cabin, sans-serif" }}>
            AI Coaching
          </span>
          {unresolved.length > 0 && (
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-purple-100 px-1.5 text-xs font-semibold text-purple-700">
              {unresolved.length}
            </span>
          )}
        </span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-500" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="space-y-5 bg-white p-4">
          {requiredResolved && (
            <div className="flex items-start gap-2.5 rounded-lg border border-green-200 bg-green-50 px-3.5 py-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-green-900" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Section complete
                </p>
                <p className="text-xs text-green-700" style={{ fontFamily: "Cabin, sans-serif" }}>
                  All required NOFO feedback has been addressed. Recommended enhancements below are optional and won't hold up your submission.
                </p>
              </div>
            </div>
          )}

          <CoachingSection
            priority="high"
            active={byPriority(visibleActive, "high")}
            resolved={byPriority(resolved, "high")}
            onToggle={toggleResolved}
          />
          <CoachingSection
            priority="medium"
            active={byPriority(visibleActive, "medium")}
            resolved={byPriority(resolved, "medium")}
            onToggle={toggleResolved}
          />
          <CoachingSection
            priority="recommended"
            active={byPriority(visibleActive, "recommended")}
            resolved={byPriority(resolved, "recommended")}
            onToggle={toggleResolved}
          />

          {hiddenCount > 0 && (
            <div className="flex items-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-3.5 py-2.5">
              <Lock className="h-3.5 w-3.5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              <p className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                <span className="font-semibold text-gray-600">
                  {hiddenCount} more suggestion{hiddenCount === 1 ? "" : "s"}
                </span>{" "}
                available once you address {visibleActive.length === 1 ? "this one" : "these"}.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
