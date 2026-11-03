# Eligibility Report (Step 6): Category Score Colors

Applies to the two headline category tiles in the final report's **Grant Readiness Overview** card: **Organization Checks** and **Program Alignment**.

Source of truth: `getScoreBandClasses()` in `src/app/components/OverallNofoFitScorecard.tsx`. The same thresholds are used on MyGrantReadiness, so a given percentage reads as the same color everywhere in the app. Which categories appear is controlled by `HEADLINE_METRICS` in `src/app/components/eligibility/EligibilityReport.tsx`.

## Gauge

Each tile is a compact stat tile, not a circular gauge:

- Category label (small gray text)
- Score as a percentage (large number), colored by band
- A thin horizontal progress bar (6px tall, fully rounded) filled to `score%`, clamped to 0–100, animated (500ms) when the value changes
- The unfilled track is a light tint of the same color as the fill (not neutral gray), so severity reads across the whole bar
- Accessibility: `role="progressbar"` with `aria-valuenow`, `aria-valuemin=0`, `aria-valuemax=100`

## Color bands

| Score      | Meaning   | Number text | Bar fill (Tailwind) | Track (Tailwind) |
|------------|-----------|-------------|---------------------|------------------|
| 90–100%    | Excellent | teal-700    | teal-600            | teal-100         |
| 75–89%     | Good      | blue-700    | blue-500            | blue-100         |
| 65–74%     | Fair      | amber-700   | amber-500           | amber-100        |
| Below 65%  | Weak      | red-700     | red-500             | red-100          |

Boundaries are inclusive at the lower edge: 90 is teal, 75 is blue, 65 is amber, 64 and below is red.

## Where the scores come from

- Scores are fixed values per report type; they are not recalculated from the answers.
  - Standard report (`BASE_CATEGORIES` in `EligibilityReport.tsx`): Organization Checks **100** (teal), Program Alignment **84** (blue).
  - Sub-recipient report (`src/data/eligibilityAssessmentSubData.ts`): Organization Checks **60** (red), Program Alignment **55** (red).
- Checking off action items does not move the scores gradually. Only when **every** action item is complete does the report force both tiles to **100%**, which turns them teal.
- "Retake assessment" resets action items, so the tiles return to their base scores.

## Related, but a separate rule

The Overall NOFO Fit badge (shown when `showScore` is on) uses its own GO / Caution / No-Go styling (green / amber / red), not the four bands above.
