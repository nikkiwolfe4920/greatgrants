# Design Spec: Website Fallback Search Context

**Ticket:** TP-1220 — "Provide a fallback parameter in the absence of Program information" (design portion)
**Author:** Principal Product Design
**Status:** Ready for engineering handoff
**Related:** TP-1127 (Add Programs flow) — CTA target only, not modified by this spec

---

## 1. Problem & Rationale

A brand-new nonprofit user can run a search before they've created a single Program. Since a website URL is required during onboarding, the backend can (separately, TP-1220 backend) derive a context bundle from that website and use it as a relevance fallback so search isn't context-free on day one.

That fallback is invisible by design in the happy path — it just makes results better. Two moments break the silence and need UI:

1. **Fallback is active** — no Program yet, results are scored against the website-derived context instead. The user should know *why* results look the way they do, and see the fastest path to something better (a Program).
2. **Fallback is impossible** — no Program *and* no website on file (the user removed their website post-onboarding). There is no context to search against at all. This is not "zero results," it's "we can't build a query" — the system must not silently run a context-less search and show whatever falls out.

This spec covers the two surfaces, their copy, states, responsive behavior, and the logic that decides which (if either) renders. It does not cover the scrape/extraction pipeline or the Add Programs flow itself.

### 1.1 Relationship to the existing zero-Program picker CTA

`GrantSearch.tsx` already replaces the Programs dropdown with an inline **"Add Program — +80% match accuracy"** button when `publishedProjects.length === 0` (search bar, left slot). That CTA is structural — it's always present in the zero-Program state, regardless of whether a search has been run, and it doesn't explain *why* accuracy is lower.

The nudge in this spec is complementary, not a duplicate:

| | Picker CTA (existing) | Fallback nudge (new) |
|---|---|---|
| Visible when | Zero Programs, always (page load, pre-search) | Zero Programs **and** a result set is rendering from fallback context |
| Purpose | Persistent affordance to add a Program | Explains *why* results look the way they do, right now |
| Dismissible | No (structural) | Yes |
| Location | Search bar, left slot | Above the result list |

Both can be on screen at once — they reinforce the same action from two different framings (structural vs. contextual).

---

## 2. State logic

```
hasPrograms = publishedProjects.length > 0
hasWebsite  = organization.website is a non-empty, valid URL

┌─────────────┬─────────────┬───────────────────────────────────────────┐
│ hasPrograms │ hasWebsite  │ Search results view                        │
├─────────────┼─────────────┼───────────────────────────────────────────┤
│ true        │ any         │ Normal results. No banner. (Program        │
│             │             │ context always wins once one exists —     │
│             │             │ silent happy path.)                       │
│ false       │ true        │ Normal results + Fallback-Context Nudge    │
│ false       │ false       │ Missing-Context state. No results view,   │
│             │             │ no search executes.                       │
└─────────────┴─────────────┴───────────────────────────────────────────┘
```

- `hasPrograms` reuses the exact signal `GrantSearch.tsx` already computes (`publishedProjects.length === 0` gates the picker CTA today) — same source of truth, no new concept.
- `hasWebsite` is org-profile state owned by `OrganizationProfileForm.tsx` (`legalInfo.website`, validated with the same `isValidUrl` check already used to mark the "Organization Website" checklist item complete).
- The moment a user creates and publishes their first Program, both surfaces disappear — the nudge is suppressed and the missing-context state is moot (a Program supersedes website fallback entirely, independent of the website field).
- If a user has zero Programs and a website, and then deletes the website, the *next* search-results render should show the missing-context state, not a stale nudge. This is a real-time check against current org state — not something cached from a prior visit.

---

## 3. Surface A — Fallback-Context Nudge

### 3.1 Behavior

- Renders on the search results view (`GrantSearch.tsx`), inline with the results — **not** a modal, not a toast, not blocking.
- Results render immediately; the banner is not a gate. If context resolution is somehow delayed server-side, results still show (using whatever ranking is available) and the banner communicates state whenever it's ready — it never spins or blocks the list.
- Dismissible via an `X` control.
- Suppressed entirely the moment `hasPrograms` becomes true — it never renders once a Program exists, dismissed or not.

### 3.2 Placement

Directly below the search bar / National Program toggle (when present), above the filter pills + results-count row. This is the same slot the National Program teal callout already occupies — the two are mutually exclusive in practice (National Program requires a selected Program, which by definition means `hasPrograms` is true and this nudge is suppressed), so no stacking conflict exists, but if both conditions were ever simultaneously true, the National Program callout (a Program-level setting) takes visual priority and this nudge is skipped.

### 3.3 Visual spec

Reuses the National Program callout's structural pattern (icon + two-line text + trailing control, `rounded-lg` card) but in **blue**, not teal — teal is reserved for Program-level settings and brand actions; blue signals "informational, FYI" per the existing semantic palette (`utility-blue-*`, used today for the "Pending" status badge and "Good Match" relevance tier). This keeps it visually distinct from anything Program-related, which matters since the whole point is "you don't have a Program yet."

```tsx
<div className="flex items-center justify-between gap-3 mt-3 px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
  <div className="flex items-start gap-2.5">
    <Info className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
    <div>
      <p className="text-sm font-medium text-blue-900">
        Results are based on your organization's website
      </p>
      <p className="text-xs text-blue-700 mt-0.5">
        You haven't created a Program yet, so we're using your website to understand your work.
        Create a Program for more accurate, relevant matches.
      </p>
    </div>
  </div>
  <div className="flex items-center gap-2 flex-shrink-0">
    <Button
      size="sm"
      className="gap-1.5 bg-teal-600 hover:bg-teal-700 text-white"
      onClick={() => navigate("/project-details")}
    >
      <Plus className="w-3.5 h-3.5" />
      Create Program
    </Button>
    <button
      onClick={handleDismissNudge}
      className="p-1.5 hover:bg-blue-100 rounded-full transition-colors"
      aria-label="Dismiss"
    >
      <X className="w-3.5 h-3.5 text-blue-700" />
    </button>
  </div>
</div>
```

- **Icon**: `Info` (Lucide), 16px, `text-blue-700` — matches the icon-inventory convention ("informational tooltip or alert").
- **CTA stays teal** even though the banner chrome is blue: the *action* (Create Program) is still the brand primary action pattern used everywhere else (`bg-teal-600`). Don't tint the button blue — that would blur the "this is the important next step" signal the rest of the app trains users to recognize.
- **Dismiss (`X`)** sits to the right of the CTA, not overlapping it — mirrors the filter-pill dismiss pattern (small ghost icon button, `hover:bg-{tint}-100`).

### 3.4 Copy

| Element | Copy |
|---|---|
| Headline | Results are based on your organization's website |
| Body | You haven't created a Program yet, so we're using your website to understand your work. Create a Program for more accurate, relevant matches. |
| CTA (primary) | Create Program |
| Dismiss control | (icon-only, `aria-label="Dismiss"`) |

Tone notes: first-person plural ("we're using"), no jargon like "context bundle" or "fallback" — those are implementation terms, not user-facing ones. "Create a Program" is the exact label used elsewhere for this CTA (matches the picker CTA and `/project-details` entry points), so it reads as the same action wherever the user encounters it.

### 3.5 Dismiss persistence — resolves Open Question 1

**Recommendation:** persist dismissal in `localStorage`, scoped per-organization, and auto-clear the moment the org gets its first Program (belt-and-suspenders on top of the `hasPrograms` render check — so a re-visit after localStorage survives a Program having been deleted again doesn't wrongly suppress the nudge for a *new* zero-Program state).

```
key:   fallbackNudgeDismissed:{organizationId}
value: true
```

- Follows the existing pattern already in this codebase (`localStorage` keys like `projects`, `savedGrants`, `recentlyViewedGrants`) rather than introducing a new persistence mechanism.
- Dismissal is **not** time-boxed (no "show again in 7 days") — this is an educational nudge, not a marketing prompt. Once a user has acknowledged it, re-showing it on every session would train them to ignore it, which defeats the purpose.
- Clearing on `hasPrograms → true` is necessary regardless of dismissal, since the banner shouldn't be capable of showing once Programs exist — but it also means if the user later deletes their only Program, the flag is gone and the nudge is free to show again for that new zero-Program state. That's the intended behavior: each "zero Program" period gets one nudge, dismissible once.
- If product wants a different cadence later (e.g., re-surface after N searches even if dismissed), that's a product decision to revisit — flagging as an assumption, not blocking this spec.

### 3.6 Accessibility

- Container: `role="status"` `aria-live="polite"` — announces once when it first appears, doesn't interrupt anything (matches "non-blocking" requirement; never use `role="alert"`/assertive here, that's reserved for Surface B).
- CTA and dismiss are both real, focusable, keyboard-operable buttons (not the whole card being clickable) — dismiss must be reachable and operable via keyboard/screen reader independent of the CTA.
- Icon is decorative (`aria-hidden`); the text alone carries full meaning.

### 3.7 Responsive

- **Desktop**: full-width banner as specced above, CTA + dismiss inline on the right.
- **Tablet / mobile drawer**: same component, but stack the CTA below the body copy instead of trailing it (matches how the National Program callout's Switch would need to wrap on narrow widths) — `flex-col` below `sm`, CTA becomes full-width, dismiss `X` moves to the top-right corner of the card (absolute-positioned) so it doesn't get lost at the bottom of a stacked layout.

```tsx
<div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-3 p-4 sm:px-4 sm:py-3 bg-blue-50 border border-blue-200 rounded-lg">
  <button className="absolute top-3 right-3 sm:hidden ..." aria-label="Dismiss">
    <X className="w-3.5 h-3.5 text-blue-700" />
  </button>
  {/* icon + text block, pr-6 on mobile to clear the absolute dismiss button */}
  {/* CTA: w-full sm:w-auto */}
</div>
```

---

## 4. Surface B — Missing-Context State

### 4.1 Behavior

- Triggers when `hasPrograms === false` **and** `hasWebsite === false`.
- The system does **not** execute a context-less search. This replaces the entire results area (where result cards / loading spinner / "No Grants Found" would normally render) the moment the page determines both conditions are true — before any query is sent. There's nothing to search against, so nothing searches.
- If the user types a query anyway, the input still accepts text (don't disable it — that reads as broken), but submitting doesn't trigger a search call; the missing-context state simply persists. Optionally re-affirm inline ("Add a website or Program to search" as a subline near the input) — see 4.5.
- This state is **not** the zero-match "No Grants Found" empty state. It must look and read differently — see 4.4 for the explicit comparison.

### 4.2 Placement

Same slot the result grid / "No Grants Found" state occupies today — full width, centered, replacing the results column (right rail, if present, can stay — recently-viewed/saved-grants content there is still valid even with no active search).

### 4.3 Visual spec

Same layout skeleton as the existing "No Grants Found" empty state (icon-in-circle, Lustria heading, Cabin body, action row) so it doesn't feel like a foreign pattern — but **amber/warning**, not gray, and with a distinct icon and two CTAs instead of one.

```tsx
<div className="flex items-center justify-center py-20">
  <div className="max-w-lg text-center">
    <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-50 to-amber-100">
      <AlertTriangle className="w-10 h-10 text-amber-600" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Lustria, serif' }}>
      We need a bit more information
    </h3>
    <p className="text-gray-600 mb-6 leading-relaxed">
      Search needs either an organization website or a Program to know what kind of funding to
      look for. Your organization doesn't currently have either on file, so we can't generate
      results yet.
    </p>
    <div className="flex items-center justify-center gap-3">
      <Button
        onClick={() => navigate("/project-details")}
        className="gap-2 bg-teal-600 hover:bg-teal-700 text-white"
      >
        <Plus className="w-4 h-4" />
        Create a Program
      </Button>
      <Button
        onClick={() => navigate("/organization", { state: { highlightField: "org-website" } })}
        variant="outline"
        className="gap-2"
      >
        <Globe className="w-4 h-4" />
        Add Your Website
      </Button>
    </div>
  </div>
</div>
```

- **Icon**: `AlertTriangle` in a `warning`-toned circle (`from-amber-50 to-amber-100` / `text-amber-600`) — deliberately not the `SearchX`/gray treatment used for zero-match, and not `AlertCircle`/red (nothing errored; this is a caution/incomplete-setup state, not a system failure).
- **Two CTAs, not one**: Primary = **Create a Program** (`bg-teal-600`, filled) — this is the stronger long-term fix per the ticket's framing ("creating a Program will improve your results" is the through-line of both surfaces). Secondary = **Add Your Website** (outline) — the faster fix if the user just wants search working again today.
- **Website CTA target**: `/organization` (the existing `OrganizationPage` route), landing on the Legal Info tab with the Website field highlighted/scrolled-into-view. `OrganizationProfileForm.tsx` already has this exact highlight mechanism (`handleRailItemClick('org-website')` → sets `activeTab: 'legal-info'`, `highlightedField: 'website'`, scrolls to `[data-field="website"]`, 3s highlight ring) — it's just wired today to in-page rail clicks, not incoming navigation. Engineering will need to read an incoming route param/state (e.g. `location.state.highlightField`) on mount and call the same handler. Flagging as an implementation note since the visual behavior itself already exists in the codebase; this spec is asking for a new entry point into it, not a new visual state.

### 4.4 Distinctness from "No Grants Found" (zero-match)

| | No Grants Found (zero-match) | Missing-Context state |
|---|---|---|
| Meaning | A search ran, nothing matched | No search can run at all |
| Icon | `SearchX`, gray circle | `AlertTriangle`, amber circle |
| Heading | "No Grants Found" | "We need a bit more information" |
| Body | Suggests loosening filters/search | Explains *why* — no website, no Program |
| Actions | Clear Search / Clear Filters | Create a Program / Add Your Website |
| Implies user error | Query was too narrow | Setup is incomplete (org-level, not query-level) |

If both conditions somehow coexisted (e.g., filters are also too narrow), missing-context always wins — there's no filtered result to report on if no search ran in the first place.

### 4.5 Copy

| Element | Copy |
|---|---|
| Heading | We need a bit more information |
| Body | Search needs either an organization website or a Program to know what kind of funding to look for. Your organization doesn't currently have either on file, so we can't generate results yet. |
| Primary CTA | Create a Program |
| Secondary CTA | Add Your Website |
| Optional input subline (if user types a query anyway) | Add a website or Program above to run this search |

### 4.6 Accessibility

- Heading is a real `<h3>` (or appropriate level for the page's hierarchy) — a screen reader landing on the results region should immediately hear "We need a bit more information," not silence.
- Container should receive focus (or at least be announced via `role="alert"`/`aria-live="assertive"` on first appearance) since — unlike the nudge — this fully replaces the primary content the user came for. This is the one case in this spec where an assertive announcement is correct.
- Two CTAs must both be reachable by keyboard in a sensible order (primary, then secondary — matches visual left-to-right order).

### 4.7 Responsive

- **Desktop**: centered column, CTAs side-by-side as specced.
- **Tablet / mobile drawer**: same centered-column layout, CTAs stack full-width (`flex-col` below `sm`, `w-full` buttons, primary on top) — consistent with how the zero-match empty state's action row would need to behave at the same breakpoint. No new breakpoint is introduced; it inherits whatever the existing empty-state action row already does (or should do) at `sm`.

---

## 5. Consolidated Copy Deck

| Surface | Element | Copy |
|---|---|---|
| Nudge | Headline | Results are based on your organization's website |
| Nudge | Body | You haven't created a Program yet, so we're using your website to understand your work. Create a Program for more accurate, relevant matches. |
| Nudge | CTA | Create Program |
| Missing-context | Heading | We need a bit more information |
| Missing-context | Body | Search needs either an organization website or a Program to know what kind of funding to look for. Your organization doesn't currently have either on file, so we can't generate results yet. |
| Missing-context | Primary CTA | Create a Program |
| Missing-context | Secondary CTA | Add Your Website |
| Missing-context | Input subline (optional) | Add a website or Program above to run this search |

---

## 6. Analytics (recommendation, not blocking)

For product to understand adoption of the fallback mechanism and whether it's actually converting to Program creation:

- `fallback_nudge_shown` (org id, on first render per session)
- `fallback_nudge_dismissed`
- `fallback_nudge_cta_clicked`
- `missing_context_state_shown`
- `missing_context_cta_clicked` (with `cta: "create_program" | "add_website"`)

---

## 7. Acceptance Criteria Mapping

| Ticket AC | Satisfied by |
|---|---|
| Non-blocking banner renders when zero Programs + fallback-derived results | §3.1, §3.2 |
| Banner communicates website-based results + Program improves relevance, primary CTA to Create Program | §3.3, §3.4 |
| Banner doesn't block/delay result rendering | §3.1 |
| Banner is dismissible | §3.3 (X control), §3.5 (persistence) |
| Banner suppressed once ≥1 Program | §2, §3.5 |
| No Program + no website → no context-less search, dedicated state instead | §4.1 |
| State explains why + offers paths to Organization Profile website field and Add Programs | §4.3, §4.5 |
| Primary + secondary CTAs to Org Profile and Add Programs | §4.3 |
| Visually distinct from zero-match "No Grants Found" | §4.4 |
| Both states responsive on desktop + tablet/mobile drawer | §3.7, §4.7 |

---

## 8. Explicit Out of Scope

- The website scrape / context-extraction pipeline (backend, separate ticket).
- Any change to the Add Programs flow itself (TP-1127) — CTAs here only link to its existing entry point (`/project-details`).
- Analytics implementation (recommended above, not required by this ticket's AC).
- Changing how `handleRailItemClick` highlighting works internally — only asking for a new external entry point into the existing mechanism.
