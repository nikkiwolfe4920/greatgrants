/**
 * Mock content for the partner-invitation email family on /emails:
 *
 *  1. Partner invitation (to sub-recipient) — a prime applicant invites an
 *     org directly to join their application as a sub-recipient for a named
 *     role (Figma node 15494:25670).
 *  2. You were selected — sent when the prime applicant chooses this org for
 *     the role after the invitation (Figma node 15494:25731).
 *  3. Not selected — sent to the other orgs that responded to the prime's
 *     open Partner Call (see PublicPartnerCallPage / data/publicPartnerCall)
 *     once the role has been filled by someone else (Figma node 15494:25766).
 *
 * Shares its scenario (UptownArts Coalition, Nutrition education partner,
 * ACL Assistive Technology Alternative Financing Program) with
 * data/publicPartnerCall.ts so the two flows read as one continuous story.
 *
 * Not wired to real data yet — preview content for the /emails page.
 */

export interface PartnerInvitationEmailData {
  recipientFirstName: string;
  inviterName: string;
  inviterOrgName: string;
  subRecipientOrgName: string;
  programName: string;
  roleName: string;
  whatYoudDo: string;
  estimatedSubaward: string;
  periodOfPerformance: string;
  applicationDeadline: string;
  respondBy: string;
}

export const partnerInvitationEmailMock: PartnerInvitationEmailData = {
  recipientFirstName: "Maya",
  inviterName: "Olivia Rhye",
  inviterOrgName: "UptownArts Coalition",
  subRecipientOrgName: "Eastside Literacy Project",
  programName: "ACL Assistive Technology Alternative Financing Program",
  roleName: "Nutrition education partner",
  whatYoudDo: "Cooking and nutrition classes at weekly distribution sites",
  estimatedSubaward: "$20,000 – $30,000",
  periodOfPerformance: "12 months",
  applicationDeadline: "Nov 20, 2026",
  respondBy: "Oct 23, 2026",
};

export interface PartnerSelectedEmailData {
  recipientFirstName: string;
  inviterName: string;
  inviterOrgName: string;
  subRecipientOrgName: string;
  roleName: string;
  programName: string;
  mouAmount: string;
  applicationDeadline: string;
}

export const partnerSelectedEmailMock: PartnerSelectedEmailData = {
  recipientFirstName: "Maya",
  inviterName: "Olivia Rhye",
  inviterOrgName: "UptownArts Coalition",
  subRecipientOrgName: "Eastside Literacy Project",
  roleName: "Nutrition education partner",
  programName: "ACL Assistive Technology Alternative Financing Program",
  mouAmount: "$26,000",
  applicationDeadline: "Nov 20, 2026",
};

export interface PartnerNotSelectedEmailData {
  recipientFirstName: string;
  inviterOrgName: string;
  subRecipientOrgName: string;
  roleName: string;
  openPartnerCallCount: number;
  openGrantCount: number;
}

export const partnerNotSelectedEmailMock: PartnerNotSelectedEmailData = {
  recipientFirstName: "Dana",
  inviterOrgName: "UptownArts Coalition",
  subRecipientOrgName: "Green Line Community Trust",
  roleName: "Nutrition education partner",
  openPartnerCallCount: 4,
  openGrantCount: 12,
};
