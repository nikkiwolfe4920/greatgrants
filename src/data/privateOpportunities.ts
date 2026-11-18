import type { GrantResultCardGrant } from "@/app/components/GrantResultCard";
import { emptyOpportunity, type SopOpportunity } from "@/data/sopOpportunities";

/**
 * Private opportunities — the list shown on /super-admin-p and the detail
 * record edited on /super-admin-op/:id. Mock data for now; both pages read
 * from here so a card on the list always opens the matching record.
 */

export interface PrivateOpportunity extends GrantResultCardGrant {
  states: string[];
  populations: string[];
}

export const PRIVATE_OPPORTUNITIES: PrivateOpportunity[] = [
  {
    id: "po-1",
    title: "Harbor Light Family Foundation — Youth Opportunity Fund",
    description: "Multi-year support for after-school and mentoring programs serving children and youth in coastal communities.",
    status: "Open",
    maxAmount: 75000,
    location: "California, Oregon, Washington",
    closeDate: "Dec 15, 2026",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    states: ["California", "Oregon", "Washington"],
    populations: ["Children / Youth"],
  },
  {
    id: "po-2",
    title: "Meridian Community Foundation — Housing Stability Grants",
    description: "Invitation-only grants for organizations providing rapid rehousing and eviction prevention services.",
    status: "Open",
    maxAmount: 150000,
    location: "Texas",
    closeDate: "Jan 31, 2027",
    image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZW50b3JpbmclMjB5b3V0aCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzE5NDQwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Texas"],
    populations: ["Homeless Individuals", "Low-Income Families"],
  },
  {
    id: "po-3",
    title: "Silverleaf Corporate Giving — Veterans Workforce Initiative",
    description: "Funds job training and placement programs that help veterans transition into civilian careers.",
    status: "Pending",
    maxAmount: 50000,
    location: "Virginia, Maryland, District of Columbia",
    closeDate: "Mar 1, 2027",
    image: "https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB3b3JraW5nfGVufDF8fHx8MTc3MTkxNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Virginia", "Maryland", "District of Columbia"],
    populations: ["Veterans"],
  },
  {
    id: "po-4",
    title: "Oak & Ember Trust — Aging in Place Program",
    description: "Supports home-based care, transportation and social connection programs for seniors and elders.",
    status: "Closed",
    maxAmount: 40000,
    location: "New York",
    closeDate: "Sep 30, 2026",
    image: "https://images.unsplash.com/photo-1611956565880-10e29a417648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzcxODYzODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["New York"],
    populations: ["Seniors / Elderly", "People with Disabilities"],
  },
  {
    id: "po-5",
    title: "Northstar Philanthropies — Newcomer Integration Fund",
    description: "Language access, legal aid and community navigation programs for immigrants and refugees.",
    status: "Open",
    maxAmount: 100000,
    location: "Minnesota, Illinois",
    closeDate: "Feb 14, 2027",
    image: "https://images.unsplash.com/photo-1765109384317-592bf3852007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21lbiUyMHRlYW13b3JrfGVufDF8fHx8MTc3MTk0NDAyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Minnesota", "Illinois"],
    populations: ["Immigrants / Refugees"],
  },
  {
    id: "po-6",
    title: "Cedar Ridge Family Foundation — Rural Health Access",
    description: "Mobile clinics and telehealth partnerships serving low-income rural families.",
    status: "Open",
    maxAmount: 120000,
    location: "Montana, Idaho",
    closeDate: "Jan 10, 2027",
    image: "https://images.unsplash.com/photo-1634872583967-6417a8638a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbmNlfGVufDF8fHx8MTc3MTg1NTQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Montana", "Idaho"],
    populations: ["Low-Income Families", "Seniors / Elderly"],
  },
  {
    id: "po-7",
    title: "Lakeshore Giving Circle — Inclusive Recreation Grants",
    description: "Adaptive sports and recreation programs for people with disabilities.",
    status: "Open",
    maxAmount: 35000,
    location: "Michigan, Ohio",
    closeDate: "Dec 1, 2026",
    image: "https://images.unsplash.com/photo-1766846573044-f1107ca5418b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwY3VsdHVyZSUyMGNvbW11bml0eSUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzcxOTQ0MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Michigan", "Ohio"],
    populations: ["People with Disabilities", "Children / Youth"],
  },
  {
    id: "po-8",
    title: "Tribal Futures Trust — Cultural Preservation Fund",
    description: "Language revitalization and cultural programming led by Indigenous communities.",
    status: "Pending",
    maxAmount: 90000,
    location: "Arizona, New Mexico",
    closeDate: "Apr 15, 2027",
    image: "https://images.unsplash.com/photo-1760033444489-462f148d598b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGJ1c2luZXNzJTIwZmFybSUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc3MTk0NDAyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Arizona", "New Mexico"],
    populations: ["Indigenous Communities"],
  },
  {
    id: "po-9",
    title: "Greenway Corporate Foundation — Neighborhood Revitalization",
    description: "Community-led housing, green space and small business projects in underinvested neighborhoods.",
    status: "Open",
    maxAmount: 250000,
    location: "Georgia, Florida",
    closeDate: "Feb 28, 2027",
    image: "https://images.unsplash.com/photo-1758936381780-8092bc60e153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMGhvdXNpbmd8ZW58MXx8fHwxNzcxOTQ0MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Georgia", "Florida"],
    populations: ["Low-Income Families", "Homeless Individuals"],
  },
  {
    id: "po-10",
    title: "Brightpath Family Foundation — Early Literacy Initiative",
    description: "Reading programs and family engagement for children in under-resourced schools.",
    status: "Open",
    maxAmount: 60000,
    location: "North Carolina, South Carolina",
    closeDate: "Jan 20, 2027",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    states: ["North Carolina", "South Carolina"],
    populations: ["Children / Youth"],
  },
  {
    id: "po-11",
    title: "Summit Community Foundation — Arts for All",
    description: "Community theater, music and visual arts programs that reach youth and seniors.",
    status: "Closed",
    maxAmount: 30000,
    location: "Colorado",
    closeDate: "Oct 15, 2026",
    image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZW50b3JpbmclMjB5b3V0aCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzE5NDQwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Colorado"],
    populations: ["Children / Youth", "Seniors / Elderly"],
  },
  {
    id: "po-12",
    title: "Riverbend Trust — Emergency Shelter Support",
    description: "Operating support for emergency shelters and transitional housing providers.",
    status: "Open",
    maxAmount: 200000,
    location: "Pennsylvania, New Jersey",
    closeDate: "Mar 15, 2027",
    image: "https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB3b3JraW5nfGVufDF8fHx8MTc3MTkxNzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Pennsylvania", "New Jersey"],
    populations: ["Homeless Individuals"],
  },
  {
    id: "po-13",
    title: "Harvest Table Foundation — Food Security Fund",
    description: "Food bank, pantry and meal delivery programs serving families and seniors.",
    status: "Open",
    maxAmount: 80000,
    location: "Wisconsin, Iowa",
    closeDate: "Feb 1, 2027",
    image: "https://images.unsplash.com/photo-1611956565880-10e29a417648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzcxODYzODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    states: ["Wisconsin", "Iowa"],
    populations: ["Low-Income Families", "Seniors / Elderly"],
  },
];

/* ─────────────────────────────────────────────────────────────────
   Detail record (what /super-admin-op edits)
───────────────────────────────────────────────────────────────── */

export type OpportunityStatus = "Open" | "Closed";

/**
 * Detail record edited on /super-admin-op. Same fields as the SOP intake
 * form (see SopOpportunity); status / closedAt drive the Open / Closed
 * switch on the editor.
 */
export interface PrivateOpportunityDetail extends SopOpportunity {
  status: OpportunityStatus;
  /** Epoch ms of the most recent close; null while Open. */
  closedAt: number | null;
}

/** The record served at /super-admin-op with no id (Lilly Endowment example). */
export const DEFAULT_OPPORTUNITY_ID = "po-demo";

const DEMO_OPPORTUNITY: PrivateOpportunityDetail = {
  ...emptyOpportunity(DEFAULT_OPPORTUNITY_ID),
  status: "Open",
  closedAt: null,
  title: "Serving Neighbors Through Congregational Collaborations Initiative",
  funderName: "Lilly Endowment Inc.",
  shortSummary:
    "Planning grants up to $50,000, then up to $5M, for organizations that help congregations and local charities build joint community programs",
  description: "Background, two aims, four objectives",
  whoCanApply: "501(c)(3) public charities that work with groups of congregations or charities",
  eligibleActivities: "Five required program elements",
  selectionCriteria: "Five unweighted criteria",
  restrictions: "No housing or property efforts",
  focusAreas: [
    "Mental Health Services",
    "Food Security Initiatives",
    "Faith-Based Youth Programs",
    "K-12 Education",
    "Community Arts",
  ],
  nationwide: true,
  states: [],
  awardMax: "50000",
  awardMin: "",
  openDate: "",
  deadlineType: "date",
  deadline: "Jan 19, 2027",
  laterStages: "Stage 2, by invitation: implementation grants up to $5M, proposals due Jul 19, 2027",
  matchCostShare: "No match; disclose other funders if the program exceeds the grant",
  contact: "servingneighbors@lei.org",
};

/** A blank-ish detail record for a list item that has no authored detail yet. */
function detailFromListItem(item: PrivateOpportunity): PrivateOpportunityDetail {
  const closed = item.status === "Closed";
  const parsedClose = item.closeDate ? Date.parse(item.closeDate) : NaN;
  const [funderName] = item.title.split(" \u2014 ");
  const hasDate = !!item.closeDate && !Number.isNaN(parsedClose);
  return {
    ...emptyOpportunity(item.id),
    status: closed ? "Closed" : "Open",
    closedAt: closed && hasDate ? parsedClose : null,
    closedEarly: closed,
    title: item.title,
    funderName,
    shortSummary: item.description,
    description: item.description,
    whoCanApply: item.populations.join(", "),
    states: item.states,
    awardMax: String(item.maxAmount),
    deadlineType: hasDate ? "date" : "rolling",
    deadline: hasDate ? item.closeDate! : "",
  };
}

/** Seed record for an id, or null when no such private opportunity exists. */
export function getSeedOpportunity(id: string): PrivateOpportunityDetail | null {
  if (id === DEFAULT_OPPORTUNITY_ID) return DEMO_OPPORTUNITY;
  const item = PRIVATE_OPPORTUNITIES.find((o) => o.id === id);
  return item ? detailFromListItem(item) : null;
}
