/**
 * Mock content for the partnership notification modules on /emails.
 *
 * Two audiences, one story (shares its scenario with data/partnerEmails.ts):
 *
 *  - Sub-recipient: follows their own request to join someone else's
 *    application — in review → approved (0%, then partway through the 8 items)
 *    or not approved.
 *  - Primary applicant: a request to review, then a heads-up when the
 *    sub-recipient has finished their 8 items.
 *
 * Not wired to real data yet — preview content for the /emails page.
 */

/** How many quick items a sub-recipient completes for their part. */
export const SUBRECIPIENT_ITEM_COUNT = 8;

interface PartnershipNotificationBase {
  id: string;
  /** The role the sub-recipient would fill (#thispartnerneed). */
  partnerNeed: string;
  /** The federal opportunity the application is for (#thisfederalgrantopportunity). */
  grantName: string;
  /** Relative time, pre-formatted for the mock. */
  time: string;
  read: boolean;
  /** Where the primary CTA takes the user. */
  to: string;
}

/* ------------------------------------------------------------------ */
/* Sub-recipient                                                       */
/* ------------------------------------------------------------------ */

export type SubrecipientNotification = PartnershipNotificationBase &
  (
    | { status: "in-review"; primaryName: string }
    | { status: "approved"; completedItems: number }
    | { status: "not-approved"; primaryName: string }
  );

export const subrecipientNotifications: SubrecipientNotification[] = [
  {
    id: "sub1",
    status: "approved",
    partnerNeed: "Nutrition education partner",
    grantName: "ACL Assistive Technology Alternative Financing Program",
    completedItems: 0,
    time: "1 hour ago",
    read: false,
    to: "/applications",
  },
  {
    id: "sub2",
    status: "approved",
    partnerNeed: "Data & evaluation partner",
    grantName: "HRSA Rural Health Network Development Program",
    completedItems: 3,
    time: "Yesterday",
    read: false,
    to: "/applications",
  },
  {
    id: "sub3",
    status: "in-review",
    partnerNeed: "Outreach & enrollment partner",
    grantName: "SAMHSA Community Mental Health Services Block Grant",
    primaryName: "Riverbend Community Health",
    time: "3 days ago",
    read: true,
    to: "/partnership-applications",
  },
  {
    id: "sub4",
    status: "not-approved",
    partnerNeed: "Youth mentoring partner",
    grantName: "DOJ Juvenile Justice and Delinquency Prevention Program",
    primaryName: "Harborview Youth Alliance",
    time: "1 week ago",
    read: true,
    to: "/partnership-applications",
  },
];

/* ------------------------------------------------------------------ */
/* Primary applicant                                                   */
/* ------------------------------------------------------------------ */

export type PartnershipDecision = "approved" | "declined";

export type PrimaryNotification = PartnershipNotificationBase & {
  subrecipientName: string;
} & (
    | { status: "request-received"; decision?: PartnershipDecision }
    | { status: "items-completed" }
  );

export const primaryNotifications: PrimaryNotification[] = [
  {
    id: "pri1",
    status: "request-received",
    subrecipientName: "Eastside Literacy Project",
    partnerNeed: "Nutrition education partner",
    grantName: "ACL Assistive Technology Alternative Financing Program",
    time: "2 hours ago",
    read: false,
    to: "/partnership-applications",
  },
  {
    id: "pri2",
    status: "items-completed",
    subrecipientName: "Northgate Food Collective",
    partnerNeed: "Data & evaluation partner",
    grantName: "HRSA Rural Health Network Development Program",
    time: "Yesterday",
    read: false,
    to: "/partnership-applications",
  },
  {
    id: "pri3",
    status: "request-received",
    subrecipientName: "Lakeshore Family Services",
    partnerNeed: "Outreach & enrollment partner",
    grantName: "SAMHSA Community Mental Health Services Block Grant",
    time: "2 days ago",
    read: true,
    to: "/partnership-applications",
  },
];
