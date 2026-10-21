# Feature Factory — operating guide

The Feature Factory is a release timeline at `/feature-factory`: one post at the end of every two-week cycle covering **what shipped**, **what changed**, **design docs**, and **engineering docs**. This guide is how a design team runs it — and how to stand one up for another project.

- Page: `src/app/pages/FeatureFactoryPage.tsx`
- Components: `src/app/components/feature-factory/`
- Content: `src/data/featureFactory/` (types, `projects/`, registry)
- Cadence maths: `src/lib/featureFactory.ts`

## The cycle

Every cycle is 14 days. Cycle dates are **derived** from the project's `startDate` — you never type a date into a post, so the feed can't drift out of sync.

| Day | What happens | Owner |
|---|---|---|
| 1 (Mon) | **Plan.** Pick what's in this cycle. Open a draft post for it (title + goals) so the cycle has a home from day one. | PM + design lead |
| 2–8 | **Build and document as you go.** Every shipped item gets a Figma link and a one-line description *when it's done*, not at the end. | Designers + engineers |
| 9–10 | **Review.** Fill in "what changed" (before/after), link the PRs, check every link opens. One person other than the author reads it cold. | Design lead + reviewer |
| 11 (Fri) | **Publish.** Merge the post. It's live at `/feature-factory`. Share the link. | Design lead |
| 12–14 | Retro on the cycle; the next cycle's day 1 starts the loop again. | Team |

**The rule that makes it work:** the post is assembled *during* the cycle, not reconstructed on Friday. If a design is "done" and has no doc link, it isn't done.

## Writing a post

A post is one entry in `releases` for the project (see `projects/greatGrants.ts`). Set `sprint` to the cycle number.

### Checklist

- [ ] **Title names the outcome**, not the ticket. "Faster program setup" — not "GG-412 import flow".
- [ ] **Summary reads cold.** Two or three sentences a stakeholder can understand with no other context: what users can do now, why it matters.
- [ ] **What shipped** — each item typed `new`, `improved`, or `fixed`, with a one-sentence user-facing description and (if live) an `href` to see it.
- [ ] **What changed** — only for behaviour an existing user will *notice*. Write before / now / why. Skip if nothing changed.
- [ ] **Design docs** — Figma file (final frames marked), spec (states, edge cases, copy), Storybook/design-system updates.
- [ ] **Engineering docs** — PRs, component/prop/token changes, API or schema changes, feature flags, migrations.
- [ ] **Every link opens** and points at something that will still exist in six months (no personal drafts).
- [ ] Contributors listed.

### Who reads which tab

| Audience | Reads | Wants to know |
|---|---|---|
| Business / stakeholders | Summary, *What shipped*, *What changed* | What's new, what to tell customers, what to expect |
| Designers | *Design docs* | Final frames, rationale, system changes |
| Engineers | *Engineering docs* | What to build against, what changed in the code |

Write the summary and "What shipped" for the first group; they are the only parts everyone reads.

### Cycle states

The feed renders each cycle from the calendar:

- **Shipped** — cycle over and a post exists.
- **In progress** — today is inside the cycle. A post can already exist (a draft that grows through the cycle).
- **Planned** — future cycle; shows a placeholder with its release date.
- **No post** — cycle over, nothing published. Deliberately visible: a skipped cycle should be noticed and either filled in or consciously left.

## Running it for another project

1. **Copy the starter.** `cp src/data/featureFactory/projects/template.ts src/data/featureFactory/projects/myProduct.ts` and rename the export.
2. **Fill in the project:** `slug`, `name`, `tagline`, `description`, `links` (Figma, design system, Storybook, repo).
3. **Set `startDate`** to the first day of the team's first cycle (a Monday works well). `cadenceDays` and `releaseOffsetDays` default to a 14-day cycle that publishes on day 11 — change them if the team runs a different rhythm.
4. **Register it** in `src/data/featureFactory/index.ts` by adding it to `featureFactoryProjects`. It's live at `/feature-factory/<slug>`; a project switcher appears automatically once there is more than one. The first project in the list is the one at the bare `/feature-factory`.
5. **Publish cycle 1** the same way as above.

No component or routing changes are needed for a new project. If a team needs a field that doesn't exist (e.g. a "metrics" block), add it to `types.ts` and render it in `ReleaseDocs.tsx`/`ReleaseCard.tsx` so every project gets it.

## Conventions that keep multiple teams consistent

- **One owner per project timeline.** They chase links and publish; everyone else contributes items.
- **Same cadence across teams if possible.** Aligning `startDate` makes "this week's releases" a single conversation.
- **Docs live elsewhere, the post links to them.** Don't paste specs into the post — link the source of truth.
- **Don't edit published posts to change history.** If something was wrong, add a correction to the *next* post's "What changed".
- **Review the post in a PR.** Content is code here; reviewers catch dead links and jargon before stakeholders do.
