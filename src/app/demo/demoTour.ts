/**
 * The guided demo tour — content model for the public walkthrough at
 * /marketing (src/app/pages/MarketingPage.tsx) and for the demo banner that
 * rides along on top of the real app pages
 * (src/app/components/demo/DemoBanner.tsx).
 *
 * One list, two surfaces: the landing page renders every stop as a card and
 * the in-app banner renders the *current* stop, so a prospect never sees the
 * tour describe a screen differently from the way the tour introduced it.
 *
 * Each stop deliberately carries three things:
 *   1. `promise`      — what this screen does for the visitor's organization.
 *   2. `whatToLookFor` — two or three concrete things to click, so an
 *                        unguided visitor doesn't stall on a full screen.
 *   3. `objection` / `answer` — the doubt a skeptical grant seeker actually
 *                        holds at this point in the arc, answered on the spot.
 *
 * The phases mirror the canonical Great Grants Process (see
 * src/data/greatGrantsProcess.ts) so the demo tells the same story as the
 * product's own explainer rather than inventing a second one.
 */

import {
  LayoutDashboard,
  Building2,
  Search,
  FileSearch,
  Target,
  FolderOpen,
  MessageSquareQuote,
  type LucideIcon,
} from "lucide-react";

// One screenshot per stop, captured from the running application (the sample
// workspace seeded by demoSeed.ts) rather than mocked up, so the imagery on
// /marketing can never drift from what a visitor actually sees when they open
// the screen. Re-capture after a UI change to keep them honest.
import shotDashboard from "@/assets/demo/dashboard.jpg";
import shotOrganization from "@/assets/demo/organization.jpg";
import shotSearch from "@/assets/demo/search.jpg";
import shotGrantDetail from "@/assets/demo/grant-detail.jpg";
import shotEligibility from "@/assets/demo/eligibility.jpg";
import shotApplications from "@/assets/demo/applications.jpg";
import shotCoaching from "@/assets/demo/coaching.jpg";

export type DemoPhaseId = "setup" | "discover" | "write";

export interface DemoPhase {
  id: DemoPhaseId;
  label: string;
  /** One line on what this phase of the demo proves. */
  summary: string;
}

export interface DemoStop {
  id: string;
  /** 1-indexed position in the tour. */
  order: number;
  phase: DemoPhaseId;
  /** Short label for the banner and progress rail. Two or three words. */
  navLabel: string;
  /** Full name of the screen being shown. */
  title: string;
  /** The in-app route this stop opens. */
  path: string;
  /** The promise of this screen, in the visitor's terms. */
  promise: string;
  /** Two or three concrete things to try once the screen is open. */
  whatToLookFor: string[];
  /** The doubt a skeptical visitor holds at this point. */
  objection: string;
  /** The honest answer to it. */
  answer: string;
  icon: LucideIcon;
  /** Screenshot of this screen, captured from the running app. */
  image: string;
  /** Alt text describing what the screenshot shows. */
  imageAlt: string;
}

export const DEMO_PHASES: DemoPhase[] = [
  {
    id: "setup",
    label: "Set up once",
    summary: "See what you tell us, and how little of it you ever type twice.",
  },
  {
    id: "discover",
    label: "Find the right grants",
    summary: "See how a shortlist gets built — and how the bad fits get ruled out.",
  },
  {
    id: "write",
    label: "Write and submit",
    summary: "See a real draft, and the coaching that turns it into a submission.",
  },
];

export const DEMO_STOPS: DemoStop[] = [
  {
    id: "dashboard",
    order: 1,
    phase: "setup",
    navLabel: "Dashboard",
    title: "Your dashboard",
    path: "/",
    promise:
      "The screen you land on every morning: where you stand, what's due, and the single next thing worth doing.",
    whatToLookFor: [
      "The next-best-action card in the top right — there is always exactly one",
      "The Great Grants Process rail, which tracks how far along you actually are",
      "Your plan and credits, so you always know what a click is about to cost",
    ],
    objection: "Is this just another dashboard I'll ignore after week one?",
    answer:
      "Every tile reads from live state rather than a static template, so the page changes as your work does. It exists to answer one question — what do I do next — not to show you charts.",
    icon: LayoutDashboard,
    image: shotDashboard,
    imageAlt:
      "The Great Grants dashboard: a next-best-action card, tiles for each part of the workspace, and the nine-step Great Grants Process with progress.",
  },
  {
    id: "organization",
    order: 2,
    phase: "setup",
    navLabel: "Org profile",
    title: "Your organization profile",
    path: "/organization",
    promise:
      "Your EIN, budget, leadership, service area and boilerplate narratives, entered once and reused on every application after that.",
    whatToLookFor: [
      "How completion is tracked field by field, not as one vague percentage",
      "The items flagged as required by funders, surfaced early instead of at 2am",
      "How the profile feeds your readiness score and autofills application sections",
    ],
    objection: "This looks like a lot of data entry before I get anything back.",
    answer:
      "It is about twenty minutes, once. Funders ask for the same forty facts every cycle — this is the last time you type them. Search results and drafts both read from here, which is why we ask first.",
    icon: Building2,
    image: shotOrganization,
    imageAlt:
      "The organization profile: fields for EIN, budget, leadership and service area, with required items flagged and completion tracked.",
  },
  {
    id: "search",
    order: 3,
    phase: "discover",
    navLabel: "Curated search",
    title: "Curated grant search",
    path: "/search",
    promise:
      "Federal, state and foundation opportunities filtered by what you've already told us — not a keyword box on a government website.",
    whatToLookFor: [
      "Relevance scores on each result, computed against a profile and a program",
      "Filters for award size, deadline, difficulty and geography",
      "The watch toggle, which alerts you when a funder changes the details",
    ],
    objection: "How do I know these are real grants and not filler?",
    answer:
      "The opportunities in this demo are real notices of funding opportunity, including the NASA ROSES solicitation. What's sample data is the organization looking at them — so the relevance scores are illustrative, and yours would be computed from your own profile.",
    icon: Search,
    image: shotSearch,
    imageAlt:
      "Curated grant search showing thirteen matching opportunities, each with a project-fit and word-match score, alongside search insights and filters.",
  },
  {
    id: "grant-detail",
    order: 4,
    phase: "discover",
    navLabel: "Grant detail",
    title: "A grant, in full",
    path: "/grant/1",
    promise:
      "Everything a funder published, read for you: award range, eligibility, deadlines, required attachments and how hard this one really is.",
    whatToLookFor: [
      "The difficulty rating — D.I.Y. through Might Need Help",
      "The funder's own documents, listed rather than buried in a portal",
      "Share and watch, so a colleague can weigh in before you commit",
    ],
    objection: "I can read the notice myself. What am I paying for?",
    answer:
      "You can — and the fortieth one takes as long as the first. This page exists so the decision to write or walk away takes ten minutes instead of an afternoon, and so nothing required gets missed.",
    icon: FileSearch,
    image: shotGrantDetail,
    imageAlt:
      "A grant detail page showing award range, deadline, eligibility, difficulty rating and the funder's own documents.",
  },
  {
    id: "eligibility",
    order: 5,
    phase: "discover",
    navLabel: "Eligibility check",
    title: "The eligibility assessment",
    path: "/eligibility-assessment",
    promise:
      "A plain-English verdict on whether you can win this one, scored against every requirement the funder stated.",
    whatToLookFor: [
      "The NOFO fit scorecard, requirement by requirement",
      "Gaps surfaced while there's still time to close them",
      "The reasoning behind the verdict, not just a number",
    ],
    objection: "A tool telling me I'm eligible doesn't make me eligible.",
    answer:
      "Correct, and we don't claim otherwise. The assessment shows you the funder's stated requirements next to your own facts and names where you fall short. The judgment stays yours — you just get to make it before you spend forty hours.",
    icon: Target,
    image: shotEligibility,
    imageAlt:
      "The eligibility assessment showing a plain-English verdict and a NOFO fit scorecard broken down by requirement.",
  },
  {
    id: "applications",
    order: 6,
    phase: "write",
    navLabel: "Applications",
    title: "Your application workspace",
    path: "/applications",
    promise:
      "Every application in flight, tracked down to the section, with deadlines and completion you can see at a glance.",
    whatToLookFor: [
      "Section-level completion, so you know exactly what's left",
      "Multiple applications in parallel, each with its own deadline",
      "Export to Word, PDF or the funder's own upload format",
    ],
    objection: "We already track applications in a spreadsheet.",
    answer:
      "Most teams do, and the spreadsheet doesn't know what the funder asked for. Here the checklist is built from the notice itself, so a missing attachment shows up as a blocker rather than as a rejection letter.",
    icon: FolderOpen,
    image: shotApplications,
    imageAlt:
      "The applications workspace listing applications in flight with section-level completion and deadlines.",
  },
  {
    id: "coaching",
    order: 7,
    phase: "write",
    navLabel: "AI coaching",
    title: "AI drafting and coaching",
    path: "/application/1/s/s6",
    promise:
      "A real first draft of every section, plus an expert reviewer sitting with you as you edit it.",
    whatToLookFor: [
      "Coaching notes ranked High, Medium and Recommended, so you know what to fix first",
      "Each note citing the specific requirement behind it",
      "Draft text written from stored organization facts — no invented numbers",
    ],
    objection: "AI-written grant applications get rejected.",
    answer:
      "Generic ones do. This drafts from your profile and your program against the funder's own notice, and the coaching flags anything that reads thin. It changes the job from writing to editing — you still sign your name to it.",
    icon: MessageSquareQuote,
    image: shotCoaching,
    imageAlt:
      "An application section with the AI Coaching panel open, showing High and Medium impact notes each citing a NOFO requirement.",
  },
];

export const FIRST_STOP = DEMO_STOPS[0];

/** The stop whose screen the visitor is currently on, if any. */
export function stopForPath(pathname: string): DemoStop | null {
  // Longest path first so /application/1/s/s6 wins over /applications, and
  // the "/" dashboard stop only matches an exact "/".
  const byLength = [...DEMO_STOPS].sort((a, b) => b.path.length - a.path.length);
  return (
    byLength.find((stop) =>
      stop.path === "/" ? pathname === "/" : pathname.startsWith(stop.path),
    ) ?? null
  );
}

export function stopById(id: string): DemoStop | null {
  return DEMO_STOPS.find((stop) => stop.id === id) ?? null;
}

export function nextStop(id: string): DemoStop | null {
  const index = DEMO_STOPS.findIndex((stop) => stop.id === id);
  if (index === -1) return null;
  return DEMO_STOPS[index + 1] ?? null;
}

export function previousStop(id: string): DemoStop | null {
  const index = DEMO_STOPS.findIndex((stop) => stop.id === id);
  if (index <= 0) return null;
  return DEMO_STOPS[index - 1];
}

export function stopsForPhase(phase: DemoPhaseId): DemoStop[] {
  return DEMO_STOPS.filter((stop) => stop.phase === phase);
}
