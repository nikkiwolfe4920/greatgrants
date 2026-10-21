import type { FeatureFactoryProject } from "../types";

/**
 * Great Grants — the live Feature Factory timeline at `/feature-factory`.
 *
 * To publish a release: add a `ReleasePost` to `releases` with the `sprint`
 * number for the cycle that just ended. Dates are derived from `startDate`
 * and `cadenceDays`, so never type them into a post.
 *
 * The entry below is placeholder content (`isTemplate: true`) showing every
 * field a post can carry. Delete it when the first real post is ready.
 */
export const greatGrants: FeatureFactoryProject = {
  slug: "great-grants",
  name: "Great Grants",
  tagline: "What design shipped, what changed, and where to find the docs.",
  description:
    "A release post every two weeks for the Great Grants product — written for business stakeholders who want the outcome, designers who want the rationale, and engineers who want the specs.",
  // A Monday. Cycle 1 runs Oct 19 – Nov 1, 2026; the post goes out Fri Oct 30.
  startDate: "2026-10-19",
  cadenceDays: 14,
  releaseOffsetDays: 11,
  upcomingSlots: 2,
  links: {
    designSystem: "/design-system",
    // figma: "https://www.figma.com/design/…",
    // storybook: "https://…",
    // repository: "https://github.com/nikkiwolfe4920/greatgrants",
  },
  releases: [
    {
      sprint: 1,
      isTemplate: true,
      title: "[Release title — name the outcome, not the ticket]",
      summary:
        "[Two or three sentences a stakeholder can read cold: what users can do now that they couldn't, and why it matters to the business.]",
      shipped: [
        {
          title: "[Feature name]",
          description: "[One sentence on what it does for the user.]",
          type: "new",
          area: "[Product area]",
        },
        {
          title: "[Improvement name]",
          description: "[One sentence on what got better and by how much, if measured.]",
          type: "improved",
          area: "[Product area]",
        },
        {
          title: "[Fix name]",
          description: "[One sentence on what was broken and who it affected.]",
          type: "fixed",
        },
      ],
      changes: [
        {
          title: "[Behaviour that changed]",
          before: "[How it worked before.]",
          after: "[How it works now.]",
          rationale: "[The user problem or business reason behind the change.]",
        },
      ],
      designDocs: [
        {
          title: "[Figma file — final designs]",
          description: "[What's in it and which frames are ready for build.]",
          href: "#",
          kind: "figma",
        },
        {
          title: "[Design spec]",
          description: "[Interaction rules, states, edge cases, copy.]",
          href: "#",
          kind: "spec",
        },
      ],
      engineeringDocs: [
        {
          title: "[Pull request]",
          description: "[What the PR covers and anything a reviewer should know.]",
          href: "#",
          kind: "pull-request",
        },
        {
          title: "[Component / API notes]",
          description: "[New components, props, tokens, endpoints, flags, migrations.]",
          href: "#",
          kind: "api",
        },
      ],
      contributors: ["[Designer]", "[Engineer]", "[PM]"],
    },
  ],
};
