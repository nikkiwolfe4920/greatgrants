import { FOCUS_AREA_MIN_SELECTIONS } from "@/lib/constants/focus-areas";
import type { GrantResultCardGrant } from "@/app/components/GrantResultCard";

/**
 * Opportunity record for /super-admin-sop — the intake & publishing flow.
 *
 * Only the fields a Super Admin fills in live on the record. Funding Source
 * (Private foundation), currency (USD), record ID and status are set
 * automatically — never on the form.
 */

export interface SopOpportunity {
  id: string;
  title: string;
  funderName: string;
  shortSummary: string;
  description: string;
  whoCanApply: string;
  eligibleActivities: string;
  selectionCriteria: string;
  restrictions: string;
  focusAreas: string[];
  /** True = nationwide; otherwise `states` lists where it applies. */
  nationwide: boolean;
  states: string[];
  awardMax: string;
  awardMin: string;
  /** Optional. Blank = unknown / not in the announcement. */
  openDate: string;
  deadlineType: "rolling" | "date";
  /** Human-readable date, e.g. "Jan 19, 2027". Only used when deadlineType = "date". */
  deadline: string;
  laterStages: string;
  matchCostShare: string;
  contact: string;
  /** Set when a Super Admin closes the record before its deadline. */
  closedEarly: boolean;
  image?: string;
  /** Announcement the record was prefilled from (single version only — see re-upload caution). */
  announcement?: { name: string; size: number; uploadedAt: string };
}

export const FUNDING_SOURCE = "Private foundation";
export const CURRENCY = "USD";

export type SopStatus = "Open" | "Pending" | "Closed";

function parseMoney(value: string): number {
  const n = Number(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export function parseSopDate(value: string): Date | null {
  if (!value.trim()) return null;
  const ts = Date.parse(value);
  return Number.isNaN(ts) ? null : new Date(ts);
}

/**
 * Status is derived, never typed. Closed when a Super Admin closed it early or
 * its specific-date deadline has passed (same rule as Grant Guru records);
 * rolling records only close manually. Pending until the open date, if any.
 */
export function deriveStatus(o: SopOpportunity, now: Date = new Date()): SopStatus {
  if (o.closedEarly) return "Closed";
  if (o.deadlineType === "date") {
    const d = parseSopDate(o.deadline);
    if (d) {
      const endOfDay = new Date(d);
      endOfDay.setHours(23, 59, 59, 999);
      if (endOfDay < now) return "Closed";
    }
  }
  const open = parseSopDate(o.openDate);
  if (open && open > now) return "Pending";
  return "Open";
}

export function formatLocation(o: SopOpportunity): string {
  if (o.nationwide) return "US: National";
  if (o.states.length === 0) return "—";
  return o.states.length > 2 ? `${o.states.slice(0, 2).join(", ")} +${o.states.length - 2}` : o.states.join(", ");
}

/** Shape the shared GrantResultCard understands. */
export function toCardGrant(o: SopOpportunity): GrantResultCardGrant {
  return {
    id: o.id,
    title: o.title,
    description: o.shortSummary,
    status: deriveStatus(o),
    maxAmount: parseMoney(o.awardMax),
    location: formatLocation(o),
    closeDate: o.deadlineType === "date" && o.deadline ? o.deadline : "Rolling",
    image: o.image,
  };
}

export function emptyOpportunity(id: string): SopOpportunity {
  return {
    id,
    title: "",
    funderName: "",
    shortSummary: "",
    description: "",
    whoCanApply: "",
    eligibleActivities: "",
    selectionCriteria: "",
    restrictions: "",
    focusAreas: [],
    nationwide: false,
    states: [],
    awardMax: "",
    awardMin: "",
    openDate: "",
    deadlineType: "rolling",
    deadline: "",
    laterStages: "",
    matchCostShare: "",
    contact: "",
    closedEarly: false,
  };
}

export type RequiredKey =
  | "title"
  | "funderName"
  | "shortSummary"
  | "description"
  | "whoCanApply"
  | "focusAreas"
  | "geography"
  | "awardMax"
  | "deadline"
  | "contact";

/** What blocks publishing. Empty object = ready. */
export function validate(o: SopOpportunity): Partial<Record<RequiredKey, string>> {
  const errors: Partial<Record<RequiredKey, string>> = {};
  const need = (key: RequiredKey, ok: boolean, msg: string) => {
    if (!ok) errors[key] = msg;
  };
  need("title", o.title.trim() !== "", "Opportunity title is required.");
  need("funderName", o.funderName.trim() !== "", "Funder name is required.");
  need("shortSummary", o.shortSummary.trim() !== "", "Short summary is required.");
  need("description", o.description.trim() !== "", "Description is required.");
  need("whoCanApply", o.whoCanApply.trim() !== "", "Who can apply is required.");
  need("focusAreas", o.focusAreas.length >= FOCUS_AREA_MIN_SELECTIONS, `Select at least ${FOCUS_AREA_MIN_SELECTIONS} focus areas.`);
  need("geography", o.nationwide || o.states.length > 0, "Choose Nationwide or at least one state.");
  need("awardMax", parseMoney(o.awardMax) > 0, "Award maximum is required.");
  need(
    "deadline",
    o.deadlineType === "rolling" || parseSopDate(o.deadline) !== null,
    "Pick a deadline date, or switch to Rolling.",
  );
  const contact = o.contact.trim();
  const contactOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) || /^(https?:\/\/)?[^\s]+\.[^\s]+$/.test(contact);
  need("contact", contactOk, "Enter one contact email or webpage.");
  return errors;
}

let counter = 100;
export function nextOpportunityId(): string {
  counter += 1;
  return `sop-${counter}`;
}

/* ── Seed records (the five cards in the Figma) ─────────────────── */

const seed = (partial: Partial<SopOpportunity> & Pick<SopOpportunity, "id" | "title" | "shortSummary" | "awardMax">): SopOpportunity => ({
  ...emptyOpportunity(partial.id),
  funderName: "Private foundation",
  description: partial.shortSummary,
  whoCanApply: "501(c)(3) public charities and faith-based organizations.",
  focusAreas: ["Food Banks & Pantries", "Food Security Initiatives"],
  nationwide: true,
  contact: "grants@example.org",
  ...partial,
});

export const SOP_SEED: SopOpportunity[] = [
  seed({
    id: "sop-1",
    title:
      "National Aeronautics and Space Administration (NASA) – Research Opportunities in Space and Earth Sciences (ROSES): Solar System Science",
    funderName: "NASA",
    shortSummary:
      "This program aims to provide funding for research, data analysis, data preservation, and tools that support investigations to help ascertain the content, origin, and evolution of the Solar System and the search for life's origin, evolution, distribution, and future in the universe.",
    awardMax: "26000000",
    deadlineType: "date",
    deadline: "Aug 1, 2027",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  }),
  seed({
    id: "sop-2",
    title: "Faith-Based Community Development Grants",
    shortSummary:
      "This program supports faith-based organizations in providing community services, including food banks, homeless shelters, youth mentorship programs, and community health initiatives.",
    awardMax: "500000",
    deadlineType: "date",
    deadline: "Jun 30, 2027",
    image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  }),
  seed({
    id: "sop-3",
    title: "Religious Organizations Mission Trip Support Program",
    shortSummary:
      "Funding for religious organizations conducting international mission trips focused on humanitarian aid, education, healthcare services, and community building in underserved regions.",
    awardMax: "75000",
    deadlineType: "date",
    deadline: "Apr 15, 2027",
    image: "https://images.unsplash.com/photo-1611956565880-10e29a417648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  }),
  seed({
    id: "sop-4",
    title: "Small Business Grants for Faith Community Entrepreneurs",
    shortSummary:
      "Supporting entrepreneurs from faith communities in launching or expanding small businesses with focus on values-driven business practices and community impact.",
    awardMax: "50000",
    deadlineType: "date",
    deadline: "Jun 15, 2027",
    image: "https://images.unsplash.com/photo-1753185234794-e3b41b94a352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  }),
  seed({
    id: "sop-5",
    title: "Faith-Based Workforce Development and Job Training",
    shortSummary:
      "Supporting religious organizations providing job training, vocational education, career counseling, and employment placement services for underserved communities.",
    awardMax: "400000",
    deadlineType: "date",
    deadline: "Aug 15, 2026",
    image: "https://images.unsplash.com/photo-1611956565880-10e29a417648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  }),
];
