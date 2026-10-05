/**
 * Partner-application records — the sub-recipient's view of applications
 * this org has been invited into as a partner (vs. the org's own grant
 * applications in applications.ts), rendered by ApplicationsPartnershipPage
 * (/partnership-applications), grouped by lifecycle status.
 */

/** Where a partner application sits in this org's own workflow. */
export type PartnerApplicationStatus = "active" | "in-review" | "decision" | "archived";

export type PartnerDecisionOutcome = "accepted" | "not-accepted";

export interface PartnerDecision {
  outcome: PartnerDecisionOutcome;
  decidedOn: string;
  /** Note from the prime applicant explaining the decision. */
  message: string;
  /** False until the user has opened the decision — drives the unread dot. */
  read: boolean;
}

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
  status: PartnerApplicationStatus;
  currentStage: PartnershipStageId;
  /** Set when this org submitted its sections to the prime applicant. */
  submittedOn?: string;
  decision?: PartnerDecision;
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
    status: "active",
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
    status: "active",
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
  {
    id: "p3",
    programName: "HRSA Rural Health Network Development Program",
    roleBadge: "Sub-recipient",
    status: "in-review",
    currentStage: "committed",
    submittedOn: "Oct 2",
    primeApplicant: "Lakeview Health Collaborative",
    need: "Community outreach partner",
    mouAmount: "$14,000",
    period: "12 months",
    nofoDeadline: "Dec 5, 2026",
    stages: [
      { id: "invited", label: "Invited", date: "Sep 12" },
      { id: "interested", label: "Interested", date: "Sep 14" },
      { id: "selected", label: "Selected", date: "Sep 18" },
      { id: "committed", label: "Committed", date: "Sep 25" },
    ],
    assignedSections: [
      {
        id: "ps3",
        name: "Project Narrative · Community outreach plan",
        assignedBy: "Olivia Rhye",
        dueDate: "Oct 1",
        status: "complete",
      },
    ],
  },
  {
    id: "p4",
    programName: "NEA Challenge America Arts Access Grant",
    roleBadge: "Sub-recipient",
    status: "decision",
    currentStage: "committed",
    submittedOn: "Sep 8",
    decision: {
      outcome: "accepted",
      decidedOn: "Oct 3",
      message:
        "Congratulations — Westside Cultural Trust accepted your partnership. Your MOU will be sent for signature within 5 business days.",
      read: false,
    },
    primeApplicant: "Westside Cultural Trust",
    need: "Youth programming partner",
    mouAmount: "$22,000",
    period: "18 months",
    nofoDeadline: "Oct 30, 2026",
    stages: [
      { id: "invited", label: "Invited", date: "Aug 18" },
      { id: "interested", label: "Interested", date: "Aug 20" },
      { id: "selected", label: "Selected", date: "Aug 29" },
      { id: "committed", label: "Committed", date: "Sep 5" },
    ],
    assignedSections: [
      {
        id: "ps4",
        name: "Program Design · Youth workshop series",
        assignedBy: "Phoenix Baker",
        dueDate: "Sep 7",
        status: "complete",
      },
    ],
  },
  {
    id: "p5",
    programName: "DOL Workforce Pathways Innovation Fund",
    roleBadge: "Sub-recipient",
    status: "decision",
    currentStage: "selected",
    submittedOn: "Sep 15",
    decision: {
      outcome: "not-accepted",
      decidedOn: "Oct 4",
      message:
        "Harbor Workforce Network selected a partner with an existing regional presence for this round. They encouraged you to apply for future opportunities.",
      read: false,
    },
    primeApplicant: "Harbor Workforce Network",
    need: "Job placement partner",
    mouAmount: "$30,000",
    period: "24 months",
    nofoDeadline: "Nov 1, 2026",
    stages: [
      { id: "invited", label: "Invited", date: "Aug 25" },
      { id: "interested", label: "Interested", date: "Aug 27" },
      { id: "selected", label: "Selected", date: "Sep 2" },
      { id: "committed", label: "Committed", date: null },
    ],
    assignedSections: [
      {
        id: "ps5",
        name: "Budget Narrative · Placement services",
        assignedBy: "Olivia Rhye",
        dueDate: "Sep 14",
        status: "complete",
      },
    ],
  },
];
