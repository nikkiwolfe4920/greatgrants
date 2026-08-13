/**
 * Mock data + types for the /emails template gallery.
 *
 * These model the two alert-driven transactional emails a Great Grants user
 * can receive:
 *
 *  1. A single-alert "new matches" email — triggered right after a saved
 *     alert (grant-specific or saved-search, see useGrantAlerts /
 *     useSavedGrants / GrantFilter in @/data/types) finds new similar grants.
 *  2. A combined weekly digest — one email per user per week that rolls up
 *     EVERY alert they have active (grant alerts AND saved-search alerts)
 *     into a single send, each with its own change log and top matches,
 *     instead of a separate email per alert per change.
 *
 * Not wired to real data yet — this is preview content for the /emails page,
 * shaped to match GrantAlert so swapping in live data later is a straight
 * mapping exercise, not a redesign.
 */

/** The kinds of changes a saved alert can fire on for a grant it's watching. */
export type AlertUpdateType =
  | "date-change"
  | "amendment"
  | "status-change"
  | "sponsor-change"
  | "nofo-section";

export interface AlertUpdateEvent {
  id: string;
  type: AlertUpdateType;
  grantTitle: string;
  grantId: string;
  /** Plain-language description of what changed, e.g. "Deadline moved from May 30 to June 15." */
  detail: string;
  occurredAt: string;
}

export interface EmailGrantMatch {
  id: string;
  rank: number;
  title: string;
  image: string;
  amountLabel: string;
  deadlineLabel: string;
  summary: string;
}

/**
 * One saved alert's contribution to the weekly digest. `kind` mirrors how
 * GrantAlert is disambiguated today (grantId set vs. searchQuery/filters
 * set) so a real digest builder can group by the same two entry points.
 */
export interface AlertDigestSection {
  alertId: string;
  alertName: string;
  kind: "grant" | "saved-search";
  updates: AlertUpdateEvent[];
  matches: EmailGrantMatch[];
  /** Full match count from the underlying search — may exceed matches.length. */
  totalMatchCount: number;
}

export const ALERT_UPDATE_META: Record<
  AlertUpdateType,
  { label: string; colorClass: string }
> = {
  "date-change": { label: "Deadline updated", colorClass: "bg-blue-50 text-blue-700 border-blue-200" },
  amendment: { label: "Amendment posted", colorClass: "bg-purple-50 text-purple-700 border-purple-200" },
  "status-change": { label: "Status changed", colorClass: "bg-amber-50 text-amber-700 border-amber-200" },
  "sponsor-change": { label: "Agency/sponsor update", colorClass: "bg-slate-50 text-slate-700 border-slate-200" },
  "nofo-section": { label: "NOFO section updated", colorClass: "bg-teal-50 text-teal-700 border-teal-200" },
};

// Reuse the same Unsplash sourcing convention as GrantSearch.tsx so images
// stay stable (no expiring Figma asset URLs) and on-theme with the rest of
// the app.
const IMG_MOUNTAINS =
  "https://images.unsplash.com/photo-1544572571-ed26f9c5a9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG_SOLAR =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG_CLASSROOM =
  "https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG_YOUTH_MENTORING =
  "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG_SMALL_BUSINESS =
  "https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG_COMMUNITY =
  "https://images.unsplash.com/photo-1758936381780-8092bc60e153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

/** Figma node 13002:22993 — "Grant Alert / Email / Similar Grants" */
export const similarGrantsEmailMock = {
  username: "Olivia",
  alertName: "Faith-Based Youth Ministry and Education Programs",
  searchQuery: "Faith-Based Youth Ministry and Education Programs",
  matchCount: 12,
  matches: [
    {
      id: "grant-usgs-ncgmp",
      rank: 1,
      title:
        "U.S. Geological Survey – The Educational Component of the National Cooperative Geologic Mapping Program",
      image: IMG_MOUNTAINS,
      amountLabel: "$45,000 – $120,000",
      deadlineLabel: "2026-03-31",
      summary:
        "Provides mentorship and training for U.S. Earth science students while carrying out the NCGMP mission and Department of the Interior priorities.",
    },
    {
      id: "grant-indian-energy",
      rank: 2,
      title: "Office of Indian Energy Policy and Programs – Unleashing Tribal Energy Development",
      image: IMG_SOLAR,
      amountLabel: "$100,000 – $500,000",
      deadlineLabel: "2026-03-31",
      summary:
        "Advances affordable, reliable, and secure energy through development of Tribal energy resources for the benefit of Tribes and their members.",
    },
    {
      id: "grant-yali-fellowship",
      rank: 3,
      title:
        "Bureau of Educational and Cultural Affairs (ECA) – Mandela Washington Fellowship for Young African Leaders (YALI Fellowship)",
      image: IMG_CLASSROOM,
      amountLabel: "$25,000 – $75,000",
      deadlineLabel: "2026-03-31",
      summary:
        "Promotes engagement between emerging African thought leaders and American innovators, educators, and institutions.",
    },
  ] satisfies EmailGrantMatch[],
};

/** Figma node 13014:42002 — "Grant Alert / Duration Email", extended into the combined weekly digest */
export const weeklyDigestEmailMock = {
  username: "Olivia",
  weekOf: "March 9–15, 2026",
  sections: [
    {
      alertId: "alert-search-faith-based-youth",
      alertName: "Faith-Based Youth Ministry and Education Programs",
      kind: "saved-search",
      updates: [
        {
          id: "upd-1",
          type: "nofo-section",
          grantTitle: "Youth Faith Partnership Grant",
          grantId: "grant-youth-faith-partnership",
          detail: "The \"Eligible Applicants\" section was revised to include faith-based coalitions.",
          occurredAt: "2026-03-12",
        },
        {
          id: "upd-2",
          type: "date-change",
          grantTitle: "Community Mentoring Initiative",
          grantId: "grant-community-mentoring",
          detail: "Deadline moved from 2026-04-15 to 2026-05-01.",
          occurredAt: "2026-03-10",
        },
      ],
      matches: [
        {
          id: "grant-youth-mentoring",
          rank: 1,
          title: "National Youth Mentoring Collaborative Grant",
          image: IMG_YOUTH_MENTORING,
          amountLabel: "$20,000 – $60,000",
          deadlineLabel: "2026-05-30",
          summary: "Funds mentoring and enrichment programs for at-risk youth run by community and faith organizations.",
        },
        {
          id: "grant-education-access",
          rank: 2,
          title: "Faith-Based Education Access Fund",
          image: IMG_CLASSROOM,
          amountLabel: "$10,000 – $40,000",
          deadlineLabel: "2026-06-01",
          summary: "Supports tutoring, literacy, and after-school education programs led by congregations and nonprofits.",
        },
        {
          id: "grant-community-schools",
          rank: 3,
          title: "Community Schools Partnership Program",
          image: IMG_COMMUNITY,
          amountLabel: "$15,000 – $50,000",
          deadlineLabel: "2026-04-20",
          summary: "Connects schools with local youth-serving organizations to expand wraparound services.",
        },
      ] satisfies EmailGrantMatch[],
      totalMatchCount: 12,
    },
    {
      alertId: "alert-grant-church-based-small-business",
      alertName: "Church-Based Small Business Development Fund",
      kind: "grant",
      updates: [
        {
          id: "upd-3",
          type: "status-change",
          grantTitle: "Church-Based Small Business Development Fund",
          grantId: "grant-church-based-small-business",
          detail: "This grant re-opened for applications after a temporary pause.",
          occurredAt: "2026-03-13",
        },
        {
          id: "upd-4",
          type: "sponsor-change",
          grantTitle: "Church-Based Small Business Development Fund",
          grantId: "grant-church-based-small-business",
          detail: "Administering agency changed from SBA Regional Office to SBA National Office.",
          occurredAt: "2026-03-11",
        },
        {
          id: "upd-5",
          type: "amendment",
          grantTitle: "Church-Based Small Business Development Fund",
          grantId: "grant-church-based-small-business",
          detail: "Amendment 2 posted: award ceiling increased from $50,000 to $75,000.",
          occurredAt: "2026-03-09",
        },
      ],
      matches: [
        {
          id: "grant-small-biz-1",
          rank: 1,
          title: "Faith-Rooted Small Business Accelerator",
          image: IMG_SMALL_BUSINESS,
          amountLabel: "$25,000 – $75,000",
          deadlineLabel: "2026-04-30",
          summary: "Seed funding and technical assistance for small businesses launched by faith-based organizations.",
        },
        {
          id: "grant-small-biz-2",
          rank: 2,
          title: "Community Enterprise Development Grant",
          image: IMG_COMMUNITY,
          amountLabel: "$10,000 – $50,000",
          deadlineLabel: "2026-05-15",
          summary: "Supports nonprofit-led small business incubation in underserved neighborhoods.",
        },
      ] satisfies EmailGrantMatch[],
      totalMatchCount: 5,
    },
  ] satisfies AlertDigestSection[],
};
