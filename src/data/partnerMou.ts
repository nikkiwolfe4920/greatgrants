/**
 * Sample data for the post-information-request states of the NEA partnership:
 * /partnership-applications-mou-accepted and /partnership-applications-mou-notaccepted.
 */
import type { InformationRequestValues } from "@/app/components/partner-information/InformationRequestForm";

export const MOU_APPLICATION_ID = "p4";

/** The MOU the Support Organization shares for signing (static file in /public). */
export const MOU_DOCUMENT = {
  name: "NEA Challenge America MOU.pdf",
  url: "/documents/NEA-Challenge-America-MOU.pdf",
  meta: "PDF • 3 KB • Shared Oct 29, 2026",
};

/** Information accepted → Sign MOU is the active step. */
export const MOU_ACCEPTED = {
  acceptedAt: "Oct 29, 3:05 PM",
  mouRequestedOn: "Oct 29",
};

/** Signed MOU accepted → partnership is final. */
export const FINAL_APPROVAL = {
  approvedAt: "Oct 30, 11:20 AM",
  decidedOn: "Oct 30",
  signedMou: {
    name: "NEA Challenge America MOU (signed).pdf",
    url: MOU_DOCUMENT.url,
    meta: "PDF • 3 KB • Signed copy sent Oct 29, 2026",
  },
};

/** Information not accepted → the user edits and resubmits. */
export const MOU_NOT_ACCEPTED = {
  notAcceptedAt: "Oct 29, 3:05 PM",
  reviewedBy: "Westside Cultural Trust",
  notes: {
    reason:
      "Your minimum funding request of $32,000 is above the $20,000–$26,000 range for this partner request, and no line-item budget was attached, so we couldn't confirm how the funds would be used.",
    fixes: [
      "Revise your minimum and maximum funding so they fit within $20,000–$26,000, or explain in “Anything else” why more is needed.",
      "Upload a line-item budget that covers only the costs for your role.",
      "Confirm your final approver is someone who can sign the MOU for your organization.",
    ],
    nextSteps: [
      "Update the information below.",
      "Resubmit it to Westside Cultural Trust.",
      "They'll review it again and you'll get a notification with their decision.",
    ],
  },
};

/** What was sent in the Information Request step — prefilled and editable on the not-accepted page. */
export const PREFILLED_INFORMATION: InformationRequestValues = {
  contacts: {
    main: { firstName: "Jordan", lastName: "Ellis", email: "jordan.ellis@example.org", phone: "(555) 123-4567" },
    lead: { firstName: "Priya", lastName: "Raman", email: "priya.raman@uptownarts.org", phone: "" },
    approver: { firstName: "Marcus", lastName: "Bell", email: "marcus.bell@uptownarts.org", phone: "(555) 987-6543" },
  },
  minFunding: "32000",
  maxFunding: "36000",
  budgetFiles: [],
  roleDocs: [
    { id: "role-impact-plan", name: "Role impact plan.pdf", size: 200 * 1024, uploadedOn: "Oct 27, 2026" },
  ],
  notes:
    "We can host the workshops at our two community sites and already work with eight school districts in the region.",
};
