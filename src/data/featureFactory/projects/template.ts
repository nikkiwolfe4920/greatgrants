import type { FeatureFactoryProject } from "../types";

/**
 * Starter for a new Feature Factory timeline. Not registered anywhere — copy
 * this file, rename it, fill it in, then register it in `../index.ts`.
 *
 *   1. cp template.ts myProduct.ts   (and rename the export below)
 *   2. Set slug, name, tagline, description.
 *   3. Set startDate to the first day of your first cycle.
 *   4. Register it in ../index.ts — it is then live at /feature-factory/<slug>.
 *   5. At the end of each cycle, add one ReleasePost to `releases`.
 *
 * See docs/feature-factory-workflow.md for the full operating guide and the
 * release-post writing checklist.
 */
export const template: FeatureFactoryProject = {
  slug: "my-product",
  name: "My Product",
  tagline: "",
  description: "",
  startDate: "2026-01-05", // first day of cycle 1 (a Monday works well)
  cadenceDays: 14, // two-week cycles
  releaseOffsetDays: 11, // post goes out day 11 of the cycle (Friday of week two)
  upcomingSlots: 2, // future cycles shown as "Planned"
  links: {
    // figma: "",
    // designSystem: "",
    // storybook: "",
    // repository: "",
  },
  releases: [
    // {
    //   sprint: 1,
    //   title: "",
    //   summary: "",
    //   shipped: [{ title: "", description: "", type: "new", area: "" }],
    //   changes: [{ title: "", before: "", after: "", rationale: "" }],
    //   designDocs: [{ title: "", description: "", href: "", kind: "figma" }],
    //   engineeringDocs: [{ title: "", description: "", href: "", kind: "pull-request" }],
    //   contributors: [],
    // },
  ],
};
