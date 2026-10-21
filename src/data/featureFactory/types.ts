/**
 * Feature Factory — content model.
 *
 * The Feature Factory is a release-notes timeline on a fixed cadence (two
 * weeks by default). One *project* owns one timeline; each *release post* is
 * the write-up published at the end of one cycle.
 *
 * Content lives here, in the data layer, so a post can be written and reviewed
 * without touching layout — the same split as `src/data/greatGrantsProcess.ts`.
 * To start a timeline for another product, copy `projects/template.ts`.
 */

export type ReleaseItemType = "new" | "improved" | "fixed";

export type DocKind =
  | "figma"
  | "spec"
  | "storybook"
  | "prd"
  | "pull-request"
  | "api"
  | "runbook"
  | "other";

export interface DocLink {
  title: string;
  /** One line on what the reader will find, and when they need it. */
  description?: string;
  href: string;
  kind: DocKind;
}

/** Something that shipped this cycle, in the words a business reader would use. */
export interface ShippedItem {
  title: string;
  description: string;
  type: ReleaseItemType;
  /** Product area, e.g. "Search", "Dashboard". Rendered as a quiet tag. */
  area?: string;
  /** Where to see it live — an in-app route or external URL. */
  href?: string;
}

/** A behaviour change someone already using the product will notice. */
export interface ChangeItem {
  title: string;
  before: string;
  after: string;
  /** Why we changed it — the user problem or business reason. */
  rationale?: string;
}

export interface ReleasePost {
  /** 1-indexed cycle number. Dates are derived from this — never typed in. */
  sprint: number;
  title: string;
  /** Two or three sentences, readable without any other context. */
  summary: string;
  shipped: ShippedItem[];
  changes: ChangeItem[];
  designDocs: DocLink[];
  engineeringDocs: DocLink[];
  contributors?: string[];
  /** Marks placeholder content so it is never mistaken for shipped work. */
  isTemplate?: boolean;
}

export interface ProjectLinks {
  figma?: string;
  designSystem?: string;
  storybook?: string;
  repository?: string;
}

export interface FeatureFactoryProject {
  /** URL segment: `/feature-factory/:slug`. */
  slug: string;
  name: string;
  /** Short line under the title. */
  tagline: string;
  /** Who the timeline is for and what they will find. */
  description: string;
  /**
   * First day of cycle 1, as `YYYY-MM-DD`. Pick the day your team's cycle
   * starts (a Monday works well) — every later cycle is derived from it.
   */
  startDate: string;
  /** Length of a cycle in days. Two weeks = 14. */
  cadenceDays: number;
  /**
   * Days after a cycle's start that the release post goes out. Default 11
   * is the Friday of week two for a Monday start.
   */
  releaseOffsetDays: number;
  /** How many future cycles to show as "Planned" slots. */
  upcomingSlots: number;
  links: ProjectLinks;
  releases: ReleasePost[];
}
