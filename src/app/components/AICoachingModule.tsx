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
  RotateCw,
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

// Default visible caps: 2 High/Medium Impact suggestions (whichever ranks
// highest — 2 High, 1 High + 1 Medium, or 2 Medium) plus 1 Recommended
// Enhancement. "Show More Suggestions" reveals the next batch of each pool;
// resolving a visible suggestion slides the next-highest-priority held-back
// one into view automatically, same as before.
const DEFAULT_IMPACT_VISIBLE = 2;
const DEFAULT_RECOMMENDED_VISIBLE = 1;
const REVEAL_BATCH_IMPACT = 2;
const REVEAL_BATCH_RECOMMENDED = 1;

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
// The "project-narrative-demo-*" keys back the /grant-writing-demo page's
// Project Narrative section — one module per field (Project Goals and
// Objectives, Project Activities and Plans, Milestone Schedule, Benefits
// or Results Expected, and Project Management), each keyed to that
// field's own mock NOAA Alaska Marine mini-grant content.
const SUGGESTIONS_BY_SECTION: Record<string, Suggestion[]> = {
  "project-narrative-demo-goals": [
    {
      id: "gwd-goals-h1",
      priority: "high",
      title: "Commit to a named evaluation method",
      description:
        "This section commits to a 25% increase in student-reported career interest, but doesn't say how that will be measured. The NOFO requires a named evaluation method — a survey instrument and timing — not just a target.",
    },
    {
      id: "gwd-goals-m1",
      priority: "medium",
      title: "Anchor the training count to a baseline",
      description:
        "\"Training 150 students annually\" has no prior-year comparison point. A baseline (last year's count, or zero if this is new) helps reviewers see the size of the gain.",
    },
    {
      id: "gwd-goals-m2",
      priority: "medium",
      title: "Tie the goal to the NOFO's specific priority area",
      description:
        "This names \"ocean and coastal stewards\" broadly but doesn't cite the exact priority area listed in the funding opportunity. Matching that language helps reviewers score alignment.",
    },
    {
      id: "gwd-goals-r1",
      priority: "recommended",
      title: "Reference prior program performance",
      description:
        "If Coastal Alaska Marine Institute has run a comparable cohort before, one sentence citing that track record here would strengthen the case without adding much length.",
    },
    {
      id: "gwd-goals-r2",
      priority: "recommended",
      title: "Open with a specific student outcome",
      description:
        "Leading with a single student's story before the structural detail gives reviewers something concrete before the numbers arrive.",
    },
  ],
  "project-narrative-demo-activities": [
    {
      id: "gwd-act-h1",
      priority: "high",
      title: "Name who leads each phase",
      description:
        "Three phases are described here, but no one is named as responsible for any of them. Reviewers look for a named owner behind each phase, not just a task list.",
    },
    {
      id: "gwd-act-h2",
      priority: "high",
      title: "Name the specific data-collection protocol",
      description:
        "\"Collect water quality and species-count data\" doesn't name a specific, citable protocol. Without one, reviewers can't verify the methodology is sound.",
    },
    {
      id: "gwd-act-m1",
      priority: "medium",
      title: "Reconcile this phase breakdown with Milestone Schedule",
      description:
        "This section breaks the project into three phases (Months 1-3, 4-9, 10-12), but Milestone Schedule uses a different month breakdown. Align the two so a reviewer isn't left reconciling them by hand.",
    },
    {
      id: "gwd-act-r1",
      priority: "recommended",
      title: "Add a weather contingency for field expeditions",
      description:
        "The field-expedition months carry real weather risk in coastal Alaska. A one-line contingency note would reassure reviewers the plan is realistic.",
    },
    {
      id: "gwd-act-r2",
      priority: "recommended",
      title: "Quantify the equipment loan agreements",
      description:
        "Naming how many devices or instruments are covered by the equipment loan agreements would make this activity easier to verify and budget against.",
    },
  ],
  "project-narrative-demo-milestones": [
    {
      id: "gwd-mile-h1",
      priority: "high",
      title: "Build in a schedule buffer before the final report",
      description:
        "There's no buffer month before the showcase or final report. A single delayed permit or weather-canceled expedition would cascade into a missed deadline.",
    },
    {
      id: "gwd-mile-m1",
      priority: "medium",
      title: "Add a mid-year progress checkpoint",
      description:
        "The schedule jumps from Month 7-9 straight to the Month 10 showcase with no interim review. A mid-year checkpoint gives you (and NOAA) an earlier signal if something's off track.",
    },
    {
      id: "gwd-mile-m2",
      priority: "medium",
      title: "Match this table's months to Project Activities' phases",
      description:
        "Project Activities and Plans breaks the project into three broader phases that don't line up with this month-by-month breakdown. Reviewers cross-check the two.",
    },
    {
      id: "gwd-mile-r1",
      priority: "recommended",
      title: "Name who signs off on each milestone",
      description:
        "Attaching an owner to each milestone — not just a date — makes the schedule read as staffed rather than aspirational.",
    },
    {
      id: "gwd-mile-r2",
      priority: "recommended",
      title: "Tie milestones to NOAA's reporting cadence",
      description:
        "Referencing your required quarterly report dates alongside program milestones shows the schedule was built around the award's actual reporting obligations.",
    },
  ],
  "project-narrative-demo-benefits": [
    {
      id: "gwd-ben-m1",
      priority: "medium",
      title: "Quantify the community-level benefit",
      description:
        "\"A growing pool of environmentally literate young people\" has no number attached. Reviewers score community-level benefits higher when they're sized, even roughly, the way the student-training numbers already are.",
    },
    {
      id: "gwd-ben-m2",
      priority: "medium",
      title: "Name the specific assessment instrument",
      description:
        "This mentions pre/post assessments but not which instrument or what score counts as a meaningful gain. Naming it makes the claim verifiable.",
    },
    {
      id: "gwd-ben-r1",
      priority: "recommended",
      title: "Lead with the funder's benefit, not last",
      description:
        "This section lists students first and NOAA's benefit last. Opening with what the funder gains can align more tightly with how reviewers score funder-relevance.",
    },
    {
      id: "gwd-ben-r2",
      priority: "recommended",
      title: "Add a one-year-out benefit statement",
      description:
        "Naming one benefit that's still visible a year after the award period ends would reinforce that this isn't a one-time activity.",
    },
  ],
  "project-narrative-demo-management": [
    {
      id: "gwd-mgmt-h1",
      priority: "high",
      title: "Address the sustainability requirement",
      description:
        "Section IV of the NOFO asks how the program continues after the 12-month award period ends. This section describes staffing and partners during the grant but says nothing about what happens to educator positions or curriculum access afterward.",
    },
    {
      id: "gwd-mgmt-m1",
      priority: "medium",
      title: "Clarify the partner's role in evaluation",
      description:
        "The University of Alaska Fairbanks Marine Advisory Program is named as leading the pre/post assessment analysis, but this doesn't say who at your organization signs off on those results before they're reported to NOAA.",
    },
    {
      id: "gwd-mgmt-m2",
      priority: "medium",
      title: "Name a decision-making process for disagreements",
      description:
        "With a lead organization and an academic partner both involved, there's no stated process for resolving a disagreement between them on curriculum or evaluation calls.",
    },
    {
      id: "gwd-mgmt-r1",
      priority: "recommended",
      title: "Name a backup for the Program Coordinator role",
      description:
        "A single part-time Program Coordinator is a single point of failure for day-to-day scheduling. Naming a backup shows continuity planning.",
    },
    {
      id: "gwd-mgmt-r2",
      priority: "recommended",
      title: "Reference your organization's past grants-management experience",
      description:
        "One sentence on prior federal awards successfully managed and closed out would reassure reviewers on administrative capacity.",
    },
  ],
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

  const [isOpen, setIsOpen] = useState(false);
  const [resolvedIds, setResolvedIds] = useState<Set<string>>(new Set());
  const [revealBatches, setRevealBatches] = useState(0);

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

  const unresolvedImpact = unresolved.filter((s) => s.priority !== "recommended");
  const unresolvedRecommended = unresolved.filter((s) => s.priority === "recommended");

  // Two independent priority-ordered caps: High/Medium Impact suggestions
  // and Recommended Enhancements each get their own visible cap, so a pile
  // of Recommended feedback never crowds out the Impact tiers (or vice
  // versa). Resolving a visible item drops it out of its pool, which slides
  // the next-highest-priority held-back suggestion into view automatically.
  // "Show More Suggestions" raises both caps by one reveal batch.
  const impactCap = DEFAULT_IMPACT_VISIBLE + revealBatches * REVEAL_BATCH_IMPACT;
  const recommendedCap = DEFAULT_RECOMMENDED_VISIBLE + revealBatches * REVEAL_BATCH_RECOMMENDED;

  const visibleActive = [...unresolvedImpact.slice(0, impactCap), ...unresolvedRecommended.slice(0, recommendedCap)];
  const hiddenCount =
    Math.max(0, unresolvedImpact.length - impactCap) + Math.max(0, unresolvedRecommended.length - recommendedCap);

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

          {/* Always shown at the bottom of the expanded module — copy and
              the "Show More Suggestions" action switch off once every
              suggestion has been revealed. */}
          <div className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3">
            {hiddenCount > 0 ? (
              <>
                <p className="text-xs text-gray-500" style={{ fontFamily: "Cabin, sans-serif" }}>
                  Additional suggestions were ranked lower in impact and confidence. Addressing them can strengthen
                  this answer, but won't necessarily make your application more competitive.
                </p>
                <button
                  type="button"
                  onClick={() => setRevealBatches((n) => n + 1)}
                  className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-purple-700 transition-colors hover:text-purple-800"
                  style={{ fontFamily: "Cabin, sans-serif" }}
                >
                  <RotateCw className="h-3.5 w-3.5" aria-hidden="true" />
                  Show More Suggestions
                </button>
              </>
            ) : (
              <p className="text-xs text-gray-400" style={{ fontFamily: "Cabin, sans-serif" }}>
                There are no more suggestions available right now.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
