/**
 * Partner-application records — the sub-recipient's view of applications
 * this org has been invited into as a partner (vs. the org's own grant
 * applications in applications.ts), rendered by ApplicationsPartnershipPage
 * (/applications-partnership) under its own "Active Partner Applications"
 * section.
 */

export type PartnershipStageId = "invited" | "interested" | "selected" | "committed";

export interface PartnershipStage {
  id: PartnershipStageId;
  label: string;
  /** Date this org reached the stage, or null if not reached yet. */
  date: string | null;
}

export interface AssignedPartnerSection {
  id: string;
  /** e.g. "Program Details · Nutrition education component" */
  name: string;
  assignedBy: string;
  dueDate: string;
  status: "assigned" | "in-progress" | "complete";
}

export interface PartnerApplication {
  id: string;
  /** The prime applicant's program/application name — shown as the accordion title. */
  programName: string;
  /** This org's role on the application, e.g. "Sub-recipient". */
  roleBadge: string;
  currentStage: PartnershipStageId;
  primeApplicant: string;
  /** e.g. "Nutrition education partner" */
  need: string;
  mouAmount: string;
  period: string;
  nofoDeadline: string;
  stages: PartnershipStage[];
  /** Freeform note shown under the stage timeline once an MOU is involved. */
  mouNote?: string;
  assignedSections: AssignedPartnerSection[];
}

export const mockPartnerApplications: PartnerApplication[] = [
  {
    id: "p1",
    programName: "ACL – Assistive Technology Alternative Financing Program",
    roleBadge: "Sub-recipient",
    currentStage: "committed",
    primeApplicant: "UptownArts Coalition",
    need: "Nutrition education partner",
    mouAmount: "$26,000",
    period: "12 months",
    nofoDeadline: "Nov 20, 2026",
    stages: [
      { id: "invited", label: "Invited", date: "Oct 6" },
      { id: "interested", label: "Interested", date: "Oct 7" },
      { id: "selected", label: "Selected", date: "Oct 8" },
      { id: "committed", label: "Committed", date: "Oct 12" },
    ],
    mouNote: "UptownArts Coalition marked your MOU signed on Oct 12. MOUs are signed directly between partners, outside Great Grants.",
    assignedSections: [
      {
        id: "ps1",
        name: "Program Details · Nutrition education component",
        assignedBy: "Olivia Rhye",
        dueDate: "Nov 10",
        status: "assigned",
      },
    ],
  },
  {
    id: "p2",
    programName: "USDA Rural Community Facilities Grant",
    roleBadge: "Sub-recipient",
    currentStage: "selected",
    primeApplicant: "Riverside Housing Alliance",
    need: "Workforce training partner",
    mouAmount: "$18,500",
    period: "9 months",
    nofoDeadline: "Jan 15, 2027",
    stages: [
      { id: "invited", label: "Invited", date: "Nov 2" },
      { id: "interested", label: "Interested", date: "Nov 4" },
      { id: "selected", label: "Selected", date: "Nov 9" },
      { id: "committed", label: "Committed", date: null },
    ],
    assignedSections: [
      {
        id: "ps2",
        name: "Budget Narrative · Workforce training line items",
        assignedBy: "Phoenix Baker",
        dueDate: "Dec 1",
        status: "assigned",
      },
    ],
  },
];
