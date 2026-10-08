import type { CandidateStatus, PartnerCandidate, PartnerNeedRecord } from "@/data/partnerPlanning";

export const money = (n: number) => `$${n.toLocaleString("en-US")}`;

const k = (n: number) => `$${Math.round(n / 1000)}K`;

/** "$30K–$45K" */
export const kRange = (min: number, max: number) => `${k(min)}–${k(max)}`;

/** "2026-10-30" → "Oct 30, 2026" (parsed as a local date so it never shifts a day). */
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

export const todayShort = () => new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });

export const todayIso = () => {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

export const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export type NeedStatus = "filled" | "open" | "deferred";

export const committedOf = (need: PartnerNeedRecord) => need.candidates.filter((c) => c.status === "committed");

export const needStatus = (need: PartnerNeedRecord): NeedStatus =>
  need.deferred ? "deferred" : committedOf(need).length >= need.needed ? "filled" : "open";

export const sumAmount = (list: PartnerCandidate[]) => list.reduce((total, c) => total + c.amount, 0);

/** Ranks candidates in the order a prime works through them. */
const STATUS_ORDER: CandidateStatus[] = [
  "committed",
  "selected",
  "shortlisted",
  "interested",
  "requested",
  "invited",
  "suggested",
];

export type CandidateGroup = "partners" | "candidates" | "recommended";

export const groupOf = (c: PartnerCandidate): CandidateGroup => {
  if (c.status === "committed" || c.status === "selected") return "partners";
  if (c.status === "suggested" || c.status === "invited") return "recommended";
  return "candidates";
};

export const sortCandidates = (list: PartnerCandidate[]) =>
  [...list].sort((a, b) => STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status));
