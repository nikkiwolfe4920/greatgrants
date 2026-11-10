import type { GrantResultCardGrant } from "@/app/components/GrantResultCard";

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

export interface CriteriaItem {
  title: string;
  description: string;
}

export interface OpportunityDocument {
  id: string;
  name: string;
  type: string;
  size: string;
}

export interface OpportunityDetails {
  opportunityNumber: string;
  fundingAgency: string;
  assistanceListing: string;
  awardCeilingFloor: string;
  totalFundingPool: string;
  expectedAwards: string;
  keyDeadline: string;
  applicableToChurches: string;
  fundingInstrument: string;
  projectPeriod: string;
  phaseAtHand: string;
  eligibleApplicants: string;
  matchCostShare: string;
  closingInfo: string;
}

export interface OpportunityContact {
  programAdmin: string;
  email: string;
  website: string;
}

export interface PrivateOpportunityDetail {
  id: string;
  title: string;
  agency: string;
  status: OpportunityStatus;
  /** Epoch ms of the most recent close; null while Open. */
  closedAt: number | null;
  /** Header "Closes …" text. */
  closeDate: string;
  awardRange: string;
  // Quick Stats
  location: string;
  region: string;
  openingDateTime: string;
  closingDateTime: string;
  recipients: string;
  totalPool: string;
  // Sections
  overview: string;
  eligibleActivitiesIntro: string;
  eligibleActivities: string[];
  eligibleActivitiesFooter: string;
  whoCanApplyIntro: string;
  whoCanApply: string[];
  whoCanApplyNotes: string;
  criteriaIntro: string;
  criteria: CriteriaItem[];
  criteriaFooter: string;
  restrictionsIntro: string;
  restrictions: string[];
  details: OpportunityDetails;
  contact: OpportunityContact;
  documents: OpportunityDocument[];
}

/** The record from the Figma design — served at /super-admin-op with no id. */
export const DEFAULT_OPPORTUNITY_ID = "po-demo";

const DEMO_OPPORTUNITY: PrivateOpportunityDetail = {
  id: DEFAULT_OPPORTUNITY_ID,
  title: "Advancing Global Health — Child Development, Care, and Protection Addendum",
  agency: "U.S. Department of State, Bureau of Global Health Security and Diplomacy (GHSD)",
  status: "Open",
  closedAt: null,
  closeDate: "May 31, 2026",
  awardRange: "$500,000 – $250,000,000",
  location: "US",
  region: "International",
  openingDateTime: "March 5, 12:00 am ET",
  closingDateTime: "May 31, 11:59 pm ET",
  recipients: "5",
  totalPool: "$53M",
  overview:
    "This Annual Program Statement addendum supports the Child Development, Care, and Protection priorities within the U.S. Department of State's America First Global Health Strategy. The Child Protection Addendum focuses on three core priorities: strengthening national and sub-national child protection systems and workforce, expanding family-based care alternatives to residential institutions, and improving early childhood development outcomes in vulnerable settings.\n\nThe APS overall has a total funding pool of up to $52.65 million, supporting up to 5 awards under this addendum. This is a two-phase process: Phase 1 requires a 5-page Statement of Interest (SOI), and only the strongest concepts are invited to submit a full Phase 2 application.",
  eligibleActivitiesIntro:
    "Eligible projects must address a priority of the Child Development, Care, and Protection addendum, which includes:",
  eligibleActivities: [
    "Strengthening national and sub-national child protection systems and workforce",
    "Expanding family-based care and reducing reliance on residential institutions",
    "Improving early childhood development outcomes in vulnerable settings",
  ],
  eligibleActivitiesFooter:
    "Please refer to the Annual Program Statement for the complete list of eligible activities.",
  whoCanApplyIntro: "Eligible applicants include organizations of every type:",
  whoCanApply: ["Domestic and foreign", "Government and private", "For-profit", "Not-for-profit"],
  whoCanApplyNotes:
    "Proposers must demonstrate direct child protection, family-based care, or early childhood development programming experience. Organizations without prior U.S. federal award experience are eligible but should review the readiness guidance in the Financial Info and Policy Info steps of the eligibility assessment before applying.\n\nPlease refer to the Annual Program Statement for the complete eligibility requirements.",
  criteriaIntro: "The main assessment criteria include:",
  criteria: [
    {
      title: "Quality of Program Idea",
      description: "a clear, feasible concept that addresses a documented child protection, care, or protection gap.",
    },
    {
      title: "Organizational Capacity and Record on Previous Grants",
      description: "demonstrated ability to manage awards of similar size and complexity.",
    },
    {
      title: "Program Planning / Ability to Achieve Objectives",
      description: "a realistic implementation plan with measurable outcomes and a credible MEL framework.",
    },
    {
      title: "Strategic alignment with U.S. foreign assistance priorities",
      description:
        "explicit alignment with the America First Global Health Strategy's pillars of self-reliance, health systems strengthening, efficiency, and American safety.",
    },
  ],
  criteriaFooter: "Please refer to the Notice of Funding Opportunity for the complete scoring rubric.",
  restrictionsIntro: "The following are ineligible for funding:",
  restrictions: [
    "Direct cash transfers or stipends to individual beneficiaries.",
    "Construction, renovation, or other major capital improvements to facilities.",
    "Lobbying, political party activities, or advocacy for specific legislation.",
    "General institutional operating support that is not tied to Child Protection Addendum program activities.",
    "Programs that duplicate an existing, actively funded GHSD award without demonstrating clear additionality.",
  ],
  details: {
    opportunityNumber: "DFOP0017890",
    fundingAgency: "U.S. Department of State — Bureau of Global Health Security and Diplomacy",
    assistanceListing: "19.029",
    awardCeilingFloor: "$500,000 – $250,000,000",
    totalFundingPool: "Up to $52.65M (Child Protection Addendum)",
    expectedAwards: "Up to 5 awards (Child Protection Addendum)",
    keyDeadline: "SOI due May 31, 2026, 11:59 pm EST",
    applicableToChurches: "Yes",
    fundingInstrument: "Grant or cooperative agreement; cooperative agreements carry substantial federal involvement",
    projectPeriod: "Up to 5 years",
    phaseAtHand: "Phase 1 only: Statement of Interest (SOI), not a full application",
    eligibleApplicants: "U.S. and foreign organizations, including nonprofits, for-profits, and government entities",
    matchCostShare: "Not required and will not be scored",
    closingInfo: "Child Protection Addendum: Statement of Interest (SOI) due May 31, 2026, 11:59 pm EST",
  },
  contact: {
    programAdmin: "GHSD Program Office",
    email: "GHSDGrants@state.gov",
    website: "https://www.state.gov",
  },
  documents: [
    { id: "doc-1", name: "Notice of Funding Opportunity (NOFO)", type: "PDF Document", size: "2.4 MB" },
    { id: "doc-2", name: "Funding Opportunity Announcement", type: "PDF Document", size: "1.1 MB" },
  ],
};

function formatAward(amount: number): string {
  return `Up to $${amount.toLocaleString("en-US")}`;
}

/** A blank-ish detail record for a list item that has no authored detail yet. */
function detailFromListItem(item: PrivateOpportunity): PrivateOpportunityDetail {
  const closed = item.status === "Closed";
  const parsedClose = item.closeDate ? Date.parse(item.closeDate) : NaN;
  const [agency] = item.title.split(" — ");
  return {
    ...DEMO_OPPORTUNITY,
    id: item.id,
    title: item.title,
    agency,
    status: closed ? "Closed" : "Open",
    closedAt: closed && !Number.isNaN(parsedClose) ? parsedClose : null,
    closeDate: item.closeDate ?? "",
    awardRange: formatAward(item.maxAmount),
    location: "US",
    region: item.location,
    openingDateTime: "",
    closingDateTime: item.closeDate ?? "",
    recipients: "",
    totalPool: `$${item.maxAmount.toLocaleString("en-US")}`,
    overview: item.description,
    eligibleActivitiesIntro: "",
    eligibleActivities: [],
    eligibleActivitiesFooter: "",
    whoCanApplyIntro: "",
    whoCanApply: item.populations,
    whoCanApplyNotes: "",
    criteriaIntro: "",
    criteria: [],
    criteriaFooter: "",
    restrictionsIntro: "",
    restrictions: [],
    details: {
      ...DEMO_OPPORTUNITY.details,
      opportunityNumber: "",
      fundingAgency: agency,
      assistanceListing: "",
      awardCeilingFloor: formatAward(item.maxAmount),
      totalFundingPool: "",
      expectedAwards: "",
      keyDeadline: item.closeDate ?? "",
      applicableToChurches: "",
      fundingInstrument: "",
      projectPeriod: "",
      phaseAtHand: "",
      eligibleApplicants: "",
      matchCostShare: "",
      closingInfo: "",
    },
    contact: { programAdmin: "", email: "", website: "" },
    documents: [],
  };
}

/** Seed record for an id, or null when no such private opportunity exists. */
export function getSeedOpportunity(id: string): PrivateOpportunityDetail | null {
  if (id === DEFAULT_OPPORTUNITY_ID) return DEMO_OPPORTUNITY;
  const item = PRIVATE_OPPORTUNITIES.find((o) => o.id === id);
  return item ? detailFromListItem(item) : null;
}
