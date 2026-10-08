/**
 * Mock data for the application-level partner planning view
 * (/application-partner-planning) — the prime applicant's "Partners" step for
 * one application: the partner needs carried over from the program, who is
 * committed / being considered for each, and whether a public Partner Call
 * has been published to find more.
 */

/** Where a partner sits for a need, in the order a prime moves them through it. */
export type CandidateStatus =
  | "committed"
  | "selected"
  | "shortlisted"
  | "interested"
  | "requested"
  | "invited"
  | "suggested";

export interface PartnerCandidate {
  id: string;
  name: string;
  /** e.g. "Salem, OR" */
  city: string;
  /** Remaining meta-line segments, shown after the city, joined with " · ". */
  meta: string[];
  /** Proposed or agreed subaward, in dollars. */
  amount: number;
  status: CandidateStatus;
  /** Great Grants recommends this org for the need (shows the "Recommended partner" badge). */
  recommended?: boolean;
  /** Why it is recommended — surfaced in the badge tooltip. */
  recommendedReason?: string;
}

export interface PartnerCall {
  /** ISO date (yyyy-mm-dd) the call stops accepting responses. */
  closesOn: string;
  responses: number;
  url: string;
}

export interface PartnerNeedRecord {
  id: string;
  title: string;
  description: string;
  /** How many partners this need requires. */
  needed: number;
  /** Per-partner subaward range, in dollars. */
  minAmount: number;
  maxAmount: number;
  deferred?: boolean;
  /** Estimated amount for a need deferred to post-award. */
  deferredEstimate?: number;
  deferredNote?: string;
  call?: PartnerCall;
  candidates: PartnerCandidate[];
}

export interface PlanningApplication {
  title: string;
  funder: string;
  /** ISO date the NOFO closes. */
  closesOn: string;
  programName: string;
  projectBudget: number;
  /** Subawards above this amount stop the indirect-cost base at $50,000. */
  indirectThreshold: number;
}

export const planningApplication: PlanningApplication = {
  title: "ACL – Assistive Technology Alternative Financing Program",
  funder: "Administration for Community Living",
  closesOn: "2026-11-20",
  programName: "Community Food Security Initiative",
  projectBudget: 480_000,
  indirectThreshold: 50_000,
};

export const initialPartnerNeeds: PartnerNeedRecord[] = [
  {
    id: "distribution",
    title: "Distribution partner",
    description: "Food bank or pantry network distributing weekly boxes across the service area",
    needed: 3,
    minAmount: 30_000,
    maxAmount: 45_000,
    candidates: [
      {
        id: "willamette",
        name: "Willamette Food Bank",
        city: "Salem, OR",
        meta: ["Component program: Weekly box distribution", "MOU signed Oct 2"],
        amount: 42_000,
        status: "committed",
        recommended: true,
        recommendedReason: "Serves 3 of your 4 counties and has run weekly box distribution for 9 years.",
      },
      {
        id: "clackamas",
        name: "Clackamas Family Services",
        city: "Oregon City, OR",
        meta: ["Component program: Mobile pantry route", "MOU signed Oct 4"],
        amount: 38_000,
        status: "committed",
        recommended: true,
        recommendedReason: "Mobile pantry fleet reaches rural sites in your service area.",
      },
      {
        id: "mid-valley",
        name: "Mid-Valley Pantry Network",
        city: "Albany, OR",
        meta: ["Offers: food distribution, cold storage", "Available on this NOFO"],
        amount: 36_000,
        status: "suggested",
        recommended: true,
        recommendedReason: "Marked available on this NOFO and offers cold storage your other partners lack.",
      },
    ],
  },
  {
    id: "nutrition",
    title: "Nutrition education partner",
    description: "Delivers cooking and nutrition classes at distribution sites",
    needed: 1,
    minAmount: 20_000,
    maxAmount: 30_000,
    call: {
      closesOn: "2026-10-30",
      responses: 3,
      url: "greatgrants.ai/call/acl-nutrition-partner",
    },
    candidates: [
      {
        id: "eastside",
        name: "Eastside Literacy Project",
        city: "Gresham, OR",
        meta: ["Selected Oct 8", "MOU not marked signed"],
        amount: 26_000,
        status: "selected",
      },
      {
        id: "harbor",
        name: "Harbor Works Training",
        city: "Astoria, OR",
        meta: ["Responded to Partner Call", "Checklist incomplete"],
        amount: 28_500,
        status: "shortlisted",
      },
      {
        id: "green-line",
        name: "Green Line Community Trust",
        city: "Portland, OR",
        meta: ["Guest (no account yet)", "Responded to Partner Call Oct 6"],
        amount: 26_000,
        status: "interested",
      },
      {
        id: "riverbend",
        name: "Riverbend Youth Alliance",
        city: "Salem, OR",
        meta: ["Requested to join through Find a Prime"],
        amount: 24_000,
        status: "requested",
      },
      {
        id: "north-bank",
        name: "North Bank Nutrition Collective",
        city: "Vancouver, WA",
        meta: ["Offers: nutrition education, SNAP-Ed curriculum", "Available on this NOFO"],
        amount: 25_000,
        status: "suggested",
        recommended: true,
        recommendedReason: "94% match to this need and already delivers SNAP-Ed curriculum.",
      },
    ],
  },
  {
    id: "evaluator",
    title: "Program evaluator",
    description: "Third-party evaluation of outcomes and reporting",
    needed: 1,
    minAmount: 15_000,
    maxAmount: 20_000,
    deferred: true,
    deferredEstimate: 18_000,
    deferredNote:
      "Selection criteria recorded: university or independent evaluator with USDA reporting experience; competitive selection within 60 days of award. The draft will describe this process instead of naming a partner.",
    candidates: [],
  },
];
