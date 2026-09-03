/**
 * The Great Grants Process — content model for the "How it works" module on
 * the Dashboard (src/app/components/dashboard/GreatGrantsProcess.tsx).
 *
 * Nine steps, grouped into three phases, that describe the full arc from
 * signing up to submitting. Kept in the data layer (rather than inline in the
 * component) so the copy can be reviewed and edited without touching layout,
 * and so other surfaces — onboarding, marketing, empty states — can render the
 * same canonical process without the wording drifting apart.
 *
 * Live completion state is NOT stored here. The component derives each step's
 * status from real app state (onboarding flag, org profile items remaining,
 * published programs, recently viewed grants, watch list, applications) so the
 * module doubles as an explainer and a "where am I" progress tracker.
 */

import {
  Sparkles,
  Building2,
  FolderOpen,
  Search,
  Target,
  FileText,
  MessageSquareQuote,
  Download,
  Send,
  type LucideIcon,
} from "lucide-react";

export type ProcessPhaseId = "setup" | "discover" | "write";

export interface ProcessPhase {
  id: ProcessPhaseId;
  label: string;
  /** One line describing what this phase buys the user. */
  summary: string;
}

export interface ProcessStep {
  id: string;
  /** 1-indexed position in the full nine-step arc. */
  order: number;
  phase: ProcessPhaseId;
  /** Short label under the rail node. Two words where possible. */
  navLabel: string;
  /** Full step name, as the user asked for it. */
  title: string;
  /** Headline for the detail panel — the promise of this step. */
  promise: string;
  /** What literally happens during this step. */
  summary: string;
  /** Why the step exists — the cost of skipping it. */
  whyItMatters: string;
  /** Three concrete things the user gets. */
  value: string[];
  /** Realistic time investment. */
  duration: string;
  /** What the user walks away holding. */
  outcome: string;
  cta: { label: string; to: string };
  icon: LucideIcon;
}

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    id: "setup",
    label: "Set up",
    summary: "Tell us about your organization once, and every step after this gets easier.",
  },
  {
    id: "discover",
    label: "Discover",
    summary: "Find the grants you can actually win — and rule out the ones you can't.",
  },
  {
    id: "write",
    label: "Write & submit",
    summary: "Draft, refine, and package an application a reviewer will say yes to.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "onboarding",
    order: 1,
    phase: "setup",
    navLabel: "Onboarding",
    title: "Onboarding",
    promise: "Tell us who you are — we'll tune everything else around it.",
    summary:
      "A short set of guided questions about your organization, your mission, and the kind of funding you're looking for.",
    whyItMatters:
      "Everything downstream — your search results, eligibility checks, and AI drafts — is personalized from these answers. Five minutes here saves hours on every step that follows.",
    value: [
      "Under five minutes, no grant experience required",
      "Sets your focus areas, geography, and organization type",
      "Every answer stays editable — nothing is locked in",
    ],
    duration: "~5 min",
    outcome: "A workspace tuned to your mission.",
    cta: { label: "Review your answers", to: "/onboarding" },
    icon: Sparkles,
  },
  {
    id: "org-profile",
    order: 2,
    phase: "setup",
    navLabel: "Org Profile",
    title: "Complete Your Organization Profile",
    promise: "Enter your organization's facts once. Reuse them forever.",
    summary:
      "Your EIN, budget, leadership, service area, past awards, and the boilerplate narratives that funders ask for on every single application.",
    whyItMatters:
      "Funders ask for the same forty facts every time. Storing them here means an application that used to start from scratch now starts most of the way finished — and nothing stalls at 2am the night before a deadline.",
    value: [
      "Autofills eligibility screens and application sections",
      "Raises your Grant Readiness Score as you complete it",
      "Flags required items early, so none of them block a submission later",
    ],
    duration: "~20 min",
    outcome: "One profile that fills a dozen forms.",
    cta: { label: "Complete your profile", to: "/organization" },
    icon: Building2,
  },
  {
    id: "program",
    order: 3,
    phase: "setup",
    navLabel: "Create a Program",
    title: "Create a Program",
    promise: "Describe the work you need funded.",
    summary:
      "A program is the project you're seeking money for — its goals, the population it serves, its budget, and the outcomes you expect. Start from scratch or import an existing proposal.",
    whyItMatters:
      "Grants fund programs, not organizations. A clearly described program is what our matching engine scores against and what the AI writes from, so the quality of everything after this step traces back to it.",
    value: [
      "Import from a document you've already written",
      "Sharpens match quality on every search you run",
      "Reusable across as many applications as you like",
    ],
    duration: "~15 min",
    outcome: "A fundable program, ready to match.",
    cta: { label: "Create a program", to: "/project-details" },
    icon: FolderOpen,
  },
  {
    id: "search",
    order: 4,
    phase: "discover",
    navLabel: "Curated Search",
    title: "Curated Grant Search Experience",
    promise: "Search that already knows your organization.",
    summary:
      "Federal, state, and foundation opportunities, filtered by everything you've told us — not a keyword box on a government website.",
    whyItMatters:
      "Most nonprofits lose weeks reading grants they were never eligible for. Curation removes those before you ever see them, so the list in front of you is the list worth reading.",
    value: [
      "Relevance scored against your profile and your programs",
      "Filter by award amount, deadline, difficulty, and geography",
      "Watch an opportunity and get alerted when its details change",
    ],
    duration: "Ongoing",
    outcome: "A shortlist worth your time.",
    cta: { label: "Search grants", to: "/search" },
    icon: Search,
  },
  {
    id: "perfect-fit",
    order: 5,
    phase: "discover",
    navLabel: "Find the Fit",
    title: "Find a Perfect Grant",
    promise: "Confirm the fit before you commit forty hours.",
    summary:
      "Open a grant and run the eligibility assessment: what's required, how competitive it is, how much effort it takes, and exactly where you currently fall short.",
    whyItMatters:
      "A long application for a grant you can't win is the most expensive mistake in this process. Ten minutes of honest assessment is the cheapest insurance you'll ever buy.",
    value: [
      "A plain-English eligibility verdict, with the reasons behind it",
      "A NOFO fit scorecard across every stated requirement",
      "Gaps surfaced while there's still time to close them",
    ],
    duration: "~10 min",
    outcome: "Confidence that this one is worth writing.",
    cta: { label: "Check your watch list", to: "/watch-list" },
    icon: Target,
  },
  {
    id: "ai-draft",
    order: 6,
    phase: "write",
    navLabel: "Start AI Draft",
    title: "Start an AI Draft",
    promise: "A real first draft, in minutes.",
    summary:
      "We read the funder's notice of funding opportunity, map it against your profile and program, and generate every section of the application.",
    whyItMatters:
      "The blank page is where most applications quietly die. Starting from a complete draft changes the job from writing to editing — and editing is something your team can actually finish.",
    value: [
      "Every required section, structured the way the funder asked for it",
      "Written from your own facts — no invented numbers or claims",
      "Uses one application credit from your plan",
    ],
    duration: "~3 min to generate",
    outcome: "A complete draft to react to.",
    cta: { label: "Go to applications", to: "/applications" },
    icon: FileText,
  },
  {
    id: "ai-coaching",
    order: 7,
    phase: "write",
    navLabel: "AI Coaching",
    title: "Take Advantage of AI Coaching",
    promise: "An expert reviewer sitting with you on every section.",
    summary:
      "Section by section, coaching flags what the NOFO requires, what reads as weak, and what would move a reviewer from \"fine\" to \"fund it\".",
    whyItMatters:
      "Reviewers score against a rubric you never get to see. Coaching puts that rubric in front of you while you're still writing, instead of after the rejection letter.",
    value: [
      "High, Medium, and Recommended priorities — so you know what to fix first",
      "Every note cites the specific NOFO requirement behind it",
      "Resolve a note and the next one surfaces, so the list never overwhelms",
    ],
    duration: "As long as you need",
    outcome: "A draft that answers what was actually asked.",
    cta: { label: "Open a section", to: "/applications" },
    icon: MessageSquareQuote,
  },
  {
    id: "export",
    order: 8,
    phase: "write",
    navLabel: "Complete & Export",
    title: "Complete & Export Your Grant",
    promise: "Package it exactly the way the funder wants it.",
    summary:
      "Track completion down to the section, attach the supporting documents, then export to Word, PDF, or the funder's own upload format.",
    whyItMatters:
      "Formatting and attachment rules disqualify genuinely good applications every cycle. This step handles the rules so a technicality never costs you the award.",
    value: [
      "Completion tracking at the section level, not just the application",
      "An attachment checklist built from the NOFO",
      "Word, PDF, or portal-ready export",
    ],
    duration: "~30 min",
    outcome: "A submission-ready package.",
    cta: { label: "Export an application", to: "/applications" },
    icon: Download,
  },
  {
    id: "submit",
    order: 9,
    phase: "write",
    navLabel: "Submit",
    title: "Submit a Grant with Confidence",
    promise: "Send it — then turn it into a head start on the next one.",
    summary:
      "Mark the application submitted, keep the full record of what you sent and when, and carry everything you wrote into your next opportunity.",
    whyItMatters:
      "Grant seeking is a portfolio, not a lottery ticket. Organizations that win consistently are the ones whose second application takes a fraction of the time the first one did.",
    value: [
      "A permanent submission record with dates and documents",
      "Reusable content that carries straight into your next draft",
      "Your watch list keeps the next deadline in view",
    ],
    duration: "~5 min",
    outcome: "Submitted — and already ahead on the next one.",
    cta: { label: "Review submitted applications", to: "/applications" },
    icon: Send,
  },
];
