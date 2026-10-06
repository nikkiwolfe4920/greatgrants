/**
 * Mock data for the "Add a partner" modal (PartnerSearchModal) — organizations
 * already on Great Grants that a prime applicant can invite to a partner
 * "need" on an application.
 */

export interface PartnerNeed {
  id: string;
  label: string;
}

export const partnerNeeds: PartnerNeed[] = [
  { id: "nutrition", label: "Nutrition education partner" },
  { id: "housing", label: "Housing stability partner" },
  { id: "evaluation", label: "Evaluation partner" },
];

/** Where an org stands for a given need. */
export type PartnerInviteStatus = "available" | "responded" | "invited" | "selected";

export interface PartnerOrganization {
  id: string;
  name: string;
  city: string;
  staff: number;
  focusAreas: string[];
  member: boolean;
  /** Verified 501(c)(3) */
  verified?: boolean;
  /** Inside the application's service area. */
  inServiceArea: boolean;
  /** 0–100 fit to each need. */
  match: Record<string, number>;
  /** Per-need starting status; anything missing is "available". */
  initialStatus: Record<string, { status: PartnerInviteStatus; note?: string }>;
  /** Extra context shown at the end of the meta line. */
  note?: string;
}

export const partnerOrganizations: PartnerOrganization[] = [
  {
    id: "north-bank",
    name: "North Bank Nutrition Collective",
    city: "Vancouver, WA",
    staff: 22,
    focusAreas: ["Nutrition", "Food Security"],
    member: true,
    verified: true,
    inServiceArea: true,
    match: { nutrition: 94, housing: 41, evaluation: 52 },
    initialStatus: {},
    note: "Available for this NOFO",
  },
  {
    id: "green-line",
    name: "Green Line Community Trust",
    city: "Portland, OR",
    staff: 14,
    focusAreas: ["Nutrition", "Housing Stability"],
    member: false,
    inServiceArea: true,
    match: { nutrition: 91, housing: 86, evaluation: 48 },
    initialStatus: {
      nutrition: { status: "responded", note: "Already responded to your Partner Call" },
    },
  },
  {
    id: "eastside",
    name: "Eastside Literacy Project",
    city: "Gresham, OR",
    staff: 9,
    focusAreas: ["Youth Education"],
    member: true,
    inServiceArea: true,
    match: { nutrition: 88, housing: 35, evaluation: 61 },
    initialStatus: {
      nutrition: { status: "selected", note: "Selected for this need" },
    },
  },
  {
    id: "oregon-seed",
    name: "Oregon Seed & Supper",
    city: "Eugene, OR",
    staff: 6,
    focusAreas: ["Food Security"],
    member: true,
    inServiceArea: false,
    match: { nutrition: 79, housing: 22, evaluation: 30 },
    initialStatus: {},
    note: "Outside your service area",
  },
  {
    id: "portland-healthy",
    name: "Portland Healthy Families",
    city: "Portland, OR",
    staff: 31,
    focusAreas: ["Health Access"],
    member: true,
    inServiceArea: true,
    match: { nutrition: 76, housing: 58, evaluation: 83 },
    initialStatus: {
      nutrition: { status: "invited", note: "Invited Oct 9" },
    },
  },
  {
    id: "harbor-housing",
    name: "Harbor Housing Alliance",
    city: "Salem, OR",
    staff: 18,
    focusAreas: ["Housing Stability"],
    member: true,
    verified: true,
    inServiceArea: true,
    match: { nutrition: 38, housing: 92, evaluation: 57 },
    initialStatus: {},
  },
];
