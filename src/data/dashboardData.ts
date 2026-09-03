/**
 * Dashboard content — notifications, recommended-grant reasoning, feature
 * summaries, and the starter questions offered by the Ask Great Grants
 * module (src/app/components/dashboard/).
 *
 * Grant facts are NOT duplicated here: recommended grants reference
 * grantDetails.ts by id and only add the "why we're showing you this"
 * reasoning that's specific to the recommendation surface.
 */

import {
  Building2,
  Search,
  FileText,
  MessageSquareQuote,
  Eye,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";
import { grantDetails, type GrantDetail } from "./grantDetails";

/* ------------------------------------------------------------------ */
/* Notifications                                                       */
/* ------------------------------------------------------------------ */

export type NotificationKind = "deadline" | "match" | "coaching" | "team" | "plan";

export interface DashboardNotification {
  id: string;
  kind: NotificationKind;
  title: string;
  /** One line of detail. Keep it scannable — this is a feed, not an inbox. */
  body: string;
  /** Relative time, pre-formatted for the mock. */
  time: string;
  read: boolean;
  /** Where clicking the notification takes the user. */
  to: string;
}

export const dashboardNotifications: DashboardNotification[] = [
  {
    id: "n1",
    kind: "deadline",
    title: "ACL Assistive Technology is your nearest deadline",
    body: "Due Mar 14 — 7 of 9 sections are still unfinished on this application.",
    time: "2 hours ago",
    read: false,
    to: "/applications",
  },
  {
    id: "n2",
    kind: "coaching",
    title: "12 coaching notes waiting on your Narrative",
    body: "Two are High Impact — the NOFO asks for outcomes you haven't stated yet.",
    time: "5 hours ago",
    read: false,
    to: "/application/1/s/s6",
  },
  {
    id: "n3",
    kind: "match",
    title: "3 new grants match your programs",
    body: "Including one federal opportunity scored at 95% relevance.",
    time: "Yesterday",
    read: false,
    to: "/search",
  },
  {
    id: "n4",
    kind: "team",
    title: "Allison M. edited Mission & Vision",
    body: "She accepted 3 AI suggestions and marked the section complete.",
    time: "Yesterday",
    read: true,
    to: "/application/1/s/s1",
  },
  {
    id: "n5",
    kind: "plan",
    title: "Your application credits reset May 31st",
    body: "You've used every credit included in your plan this period.",
    time: "3 days ago",
    read: true,
    to: "/settings",
  },
];

/* ------------------------------------------------------------------ */
/* Recommended grants                                                  */
/* ------------------------------------------------------------------ */

export interface GrantRecommendation {
  /** Matches an id in grantDetails.ts so /grant/:id resolves. */
  grantId: string;
  /** The single strongest reason this grant surfaced. */
  reason: string;
  /** Short signals shown as chips — what specifically lined up. */
  signals: string[];
}

export const grantRecommendations: GrantRecommendation[] = [
  {
    grantId: "1",
    reason: "Your Community Meals program matches this funder's stated priorities almost line for line.",
    signals: ["Faith-based eligible", "Matches 2 of your programs", "Opens to 501(c)(3)"],
  },
  {
    grantId: "2",
    reason: "Rolling deadline and a D.I.Y. effort level — the fastest realistic win on your list.",
    signals: ["D.I.Y. effort", "Rolling deadline", "Churches eligible"],
  },
  {
    grantId: "nasa-roses",
    reason: "A stretch opportunity: large award, but it needs research capacity you haven't documented yet.",
    signals: ["Stretch fit", "Expert assistance", "Closes Aug 1"],
  },
];

/** Joins a recommendation to its full grant record. Skips unknown ids. */
export function getRecommendedGrants(): Array<GrantRecommendation & { grant: GrantDetail }> {
  const byId = new Map(grantDetails.map((g) => [g.id, g]));
  return grantRecommendations
    .map((rec) => {
      const grant = byId.get(rec.grantId);
      return grant ? { ...rec, grant } : null;
    })
    .filter((r): r is GrantRecommendation & { grant: GrantDetail } => r !== null);
}

/* ------------------------------------------------------------------ */
/* Feature summaries                                                   */
/* ------------------------------------------------------------------ */

export interface FeatureSummary {
  id: string;
  label: string;
  /** The headline number or state for this feature. */
  metric: string;
  /** What the number means, in one short line. */
  caption: string;
  to: string;
  icon: LucideIcon;
  /** Drives the accent color of the tile. */
  tone: "brand" | "neutral" | "warning" | "success";
}

/* ------------------------------------------------------------------ */
/* Ask Great Grants — starter questions                                */
/* ------------------------------------------------------------------ */

export interface SuggestedQuestion {
  id: string;
  /** The question, phrased the way a user would actually type it. */
  question: string;
  /** Mocked answer. Replace with a real assistant response when wired up. */
  answer: string;
  /** Optional deep link offered alongside the answer. */
  action?: { label: string; to: string };
}

export const suggestedQuestions: SuggestedQuestion[] = [
  {
    id: "q1",
    question: "What should I work on next?",
    answer:
      "Your ACL Assistive Technology application is your nearest deadline — due Mar 14 — and 7 of its 9 sections are still unfinished. Narrative is already in progress, so finish that first, then move to Performance Metrics: at 30 points it's worth more than any other section left on the application.",
    action: { label: "Open the application", to: "/applications" },
  },
  {
    id: "q2",
    question: "How do I make my Narrative section stronger?",
    answer:
      "Coaching flagged two High Impact issues on that section: the NOFO requires at least one measurable outcome, and it asks you to cite the funding opportunity number. Both are quick fixes. After those, the Medium Impact notes are mostly about naming the specific population you serve rather than describing it generally.",
    action: { label: "Go to coaching", to: "/application/1/s/s6" },
  },
  {
    id: "q3",
    question: "Am I eligible for federal grants as a small nonprofit?",
    answer:
      "Usually yes — most federal opportunities open to 501(c)(3) organizations set no minimum budget. What actually gates you is registration: you need an active SAM.gov registration and a UEI before you can submit. Your Organization Profile has a UEI field; filling it in lets us screen federal opportunities accurately for you.",
    action: { label: "Check your profile", to: "/organization" },
  },
  {
    id: "q4",
    question: "What does a 95% relevance score actually mean?",
    answer:
      "It's how closely a grant's stated eligibility, focus areas, geography, and funding range line up with your organization profile and your published programs. Above 90% means you clear the stated requirements and your work sits squarely inside what the funder is asking for. It's a strong signal of fit — not a prediction of whether you'll win.",
    action: { label: "Search grants", to: "/search" },
  },
  {
    id: "q5",
    question: "How many application credits do I have left?",
    answer:
      "You're on the AI Grant Writer plan, which includes 3 AI-generated applications per period. You've generated all 3, so you have 0 credits remaining. They reset on May 31st, or you can move up a tier to keep drafting now.",
    action: { label: "Manage your plan", to: "/settings" },
  },
];

/** Icons used by the feature tiles, exported so the component stays declarative. */
export const featureIcons = {
  organization: Building2,
  search: Search,
  applications: FileText,
  coaching: MessageSquareQuote,
  watchList: Eye,
  eligibility: ClipboardCheck,
} satisfies Record<string, LucideIcon>;
