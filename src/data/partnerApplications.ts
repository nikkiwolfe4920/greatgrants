/**
 * Partner-application records — the sub-recipient's view of applications
 * this org has been invited into as a partner (vs. the org's own grant
 * applications in applications.ts), rendered by PartnershipApplicationsPage
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

export interface PartnerContact {
  name: string;
  role: string;
  organization: string;
  email: string;
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
  /** Lead applicant's funding range for this request, e.g. "$20,000–$26,000". */
  subawardRange?: string;
  /** When this org's post-acceptance information is due to the lead applicant. */
  informationDue?: string;
  period: string;
  nofoDeadline: string;
  stages: PartnershipStage[];
  /** Freeform note shown under the stage timeline once an MOU is involved. */
  mouNote?: string;
  assignedSections: AssignedPartnerSection[];
  /** Lead applicant's email, shown on the "Contact" button. */
  leadContactEmail?: string;
  /** Who to email with questions about the partnership. */
  contact?: PartnerContact;
}

export const UPTOWN_ARTS_CONTACT: PartnerContact = {
  name: "Olivia Rhye",
  role: "Partnerships Lead",
  organization: "UptownArts Coalition",
  email: "partnerships@uptownartscoalition.org",
};

export const mockPartnerApplications: PartnerApplication[] = [
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
        "Congratulations. Next, send the information Westside Cultural Trust needs to draft the application with you. You'll agree the final amount and MOU with them directly, outside Great Grants.",
      read: false,
    },
    primeApplicant: "Westside Cultural Trust",
    contact: UPTOWN_ARTS_CONTACT,
    leadContactEmail: "SupportOrganization@org.com",
    need: "Nutrition education partner",
    mouAmount: "$22,000",
    subawardRange: "$20,000–$26,000",
    informationDue: "Nov 6, 2026",
    period: "12 months",
    nofoDeadline: "Nov 20, 2026",
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
      read: true,
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
