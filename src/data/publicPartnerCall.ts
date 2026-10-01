export interface PartnerCallDocument {
  name: string;
  type: string;
  size: string;
}

export interface PartnerCallData {
  title: string;
  roleName: string;
  orgName: string;
  orgInitials: string;
  orgLocation: string;
  orgRole: string;
  aboutPartnership: string;
  whatPartnerWillDo: string;
  partnersNeeded: string;
  estimatedSubaward: string;
  periodOfPerformance: string;
  funder: string;
  program: string;
  applicationDeadline: string;
  awardRange: string;
  documents: PartnerCallDocument[];
  closesOn: string;
}

/**
 * Shared mock content for the public (logged-out) partner call pages:
 *   /publicpartner-open, /publicpartner-closed and /publicpartner-open-guest
 */
export const PARTNER_CALL: PartnerCallData = {
  title: "Nutrition education partner wanted for a federal food security grant",
  roleName: "Nutrition education partner",
  orgName: "UptownArts Coalition",
  orgInitials: "UA",
  orgLocation: "Portland, OR",
  orgRole: "Prime applicant",
  aboutPartnership:
    "UptownArts Coalition is applying to the ACL Assistive Technology Alternative Financing Program to expand the Community Food Security Initiative across Multnomah, Clackamas and Washington counties. We are looking for a nutrition education partner to deliver cooking and nutrition classes at weekly distribution sites.",
  whatPartnerWillDo:
    "Deliver cooking and nutrition classes at distribution sites, track attendance, and report outcomes quarterly to the prime applicant. You would operate as a sub-recipient under UptownArts Coalition’s award.",
  partnersNeeded: "1",
  estimatedSubaward: "$20,000 – $30,000",
  periodOfPerformance: "12 months",
  funder: "Administration for Community Living",
  program: "Assistive Technology Alternative Financing",
  applicationDeadline: "Nov 20, 2026",
  awardRange: "$250,000 – $500,000",
  documents: [
    { name: "Notice of Funding Opportunity (APS)", type: "PDF Document", size: "2.4 MB" },
    { name: "Funding Opportunity Announcement Addendum", type: "PDF Document", size: "1.1 MB" },
  ],
  closesOn: "Oct 30, 2026",
};
