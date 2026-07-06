# Great Grants Design System

Complete design system documentation for the Great Grants application, aligned with the Untitled UI design system patterns and implemented using CSS custom properties and Tailwind CSS.

## Table of Contents
- [Overview](#overview)
- [Colors](#colors)
- [Component Color Utilities](#component-color-utilities)
- [Typography](#typography)
- [Spacing](#spacing)
- [Border Radius](#border-radius)
- [Shadows](#shadows)
- [Iconography](#iconography)
- [Tabs](#tabs)
- [Global Navigation (Left Sidebar)](#global-navigation-left-sidebar)
- [Breadcrumbs](#breadcrumbs)
- [Right Rail (Workflow Helper Panel)](#right-rail-workflow-helper-panel)
- [Search](#search)
- [Implementation Guide](#implementation-guide)
- [Migration Guide](#migration-guide)
- [Design Principles](#design-principles)

---

## Overview

The design system has been fully integrated using CSS custom properties (variables) that map to the Untitled UI foundations. All design tokens are defined in `/src/styles/design-tokens.css` and mapped through `/src/styles/theme.css` for Tailwind CSS integration.

**Key Features:**
- Token-based design system for consistency
- Light/dark mode support (foundation in place)
- Semantic color naming for easy maintenance
- 8px-based spacing grid
- Responsive typography scale
- Comprehensive shadow system

---

## Colors

### Brand Colors
| Token | Value | Usage |
|-------|-------|-------|
| `Colors/Brand/600` | `#0e9384` | Primary brand (teal) — CTAs, active states, links |
| `Colors/Brand/500` | `#15b79e` | Secondary brand (lighter teal) — hover states |
| `Colors/Brand/700` | `#107569` | Dark brand — pressed states, emphasis |
| `Colors/Brand/200` | `#99f6e0` | Brand accents, hover backgrounds |
| `Colors/Brand/50` | `#f0fdf9` | Light brand backgrounds, subtle highlights |

### Text Colors
| Token | Value | Usage |
|-------|-------|-------|
| `Colors/Text/text-primary (900)` | `#181d27` | Main body text, headlines |
| `Colors/Text/text-secondary (700)` | `#414651` | Secondary text, labels |
| `Colors/Text/text-tertiary (600)` | `#535862` | Tertiary text, captions |
| `Colors/Text/text-quaternary (500)` | `#717680` | Muted text, disabled labels |
| `Colors/Text/text-placeholder` | `#717680` | Input placeholders |
| `Colors/Text/text-disabled` | `#717680` | Disabled text states |
| `Colors/Text/text-brand-primary (900)` | `#134e48` | Brand-colored text, dark teal |
| `Colors/Text/text-success-primary (600)` | `#079455` | Success text (green) |

### Foreground Colors
| Token | Value | Usage |
|-------|-------|-------|
| `Colors/Foreground/fg-primary (900)` | `#181d27` | Primary foreground elements |
| `Colors/Foreground/fg-secondary (700)` | `#414651` | Secondary foreground elements |
| `Colors/Foreground/fg-brand-primary (600)` | `#0e9384` | Brand foreground, icons |
| `Colors/Foreground/fg-disabled` | `#a4a7ae` | Disabled foreground states |

### Border Colors
| Token | Value | Usage |
|-------|-------|-------|
| `Colors/Border/border-primary` | `#d5d7da` | Default borders, dividers |
| `Colors/Border/border-disabled` | `#d5d7da` | Disabled element borders |

### Background Colors
| Token | Value | Usage |
|-------|-------|-------|
| `Colors/Background/bg-brand-primary` | `#f0fdf9` | Brand background (light teal) |
| `Colors/Background/bg-tertiary` | `#f5f5f5` | Tertiary background, surfaces |
| `Colors/Background/bg-disabled` | `#f5f5f5` | Disabled element backgrounds |
| `Colors/Background/bg-secondary_hover` | `#f5f5f5` | Hover state backgrounds |

### Gray Scale (Complete)
| Token | CSS Variable | Hex Value | Usage |
|-------|--------------|-----------|-------|
| gray-25 | `--gray-25` | #fafafa | Lightest backgrounds |
| gray-50 | `--gray-50` | #f9fafb | Secondary backgrounds |
| gray-100 | `--gray-100` | #f2f4f7 | Tertiary backgrounds |
| gray-200 | `--gray-200` | #e9eaeb | Borders, dividers |
| gray-300 | `--gray-300` | #d0d5dd | Secondary borders |
| gray-400 | `--gray-400` | #98a2b3 | Placeholder text |
| gray-500 | `--gray-500` | #717680 | Tertiary text |
| gray-600 | `--gray-600` | #535862 | Secondary text |
| gray-700 | `--gray-700` | #414651 | Primary text (medium) |
| gray-800 | `--gray-800` | #252b37 | Emphasis text |
| gray-900 | `--gray-900` | #181d27 | Primary text (darkest) |
| gray-950 | `--gray-950` | #0d121c | Maximum contrast |

### Semantic Colors

#### Success (Green)
- `--success-50` (#ecfdf3) - Light success backgrounds
- `--success-200` (#abefc6) - Success borders, accents
- `--success-600` (#079455) - Primary success color
- `--success-700` (#067647) - Dark success, emphasis

#### Error (Red)
- `--error-50` (#fef3f2) - Light error backgrounds
- `--error-200` (#fecdca) - Error borders, accents
- `--error-600` (#d92d20) - Primary error color
- `--error-700` (#b42318) - Dark error, emphasis

#### Warning (Orange/Yellow)
- `--warning-50` (#fffaeb) - Light warning backgrounds
- `--warning-200` (#fedf89) - Warning borders, accents
- `--warning-600` (#dc6803) - Primary warning color
- `--warning-700` (#b54708) - Dark warning, emphasis

---

## Component Color Utilities

Utility tokens for specific component states and use cases:

| Token | Value | Usage |
|-------|-------|-------|
| `utility-brand-50` | `#f0fdf9` | Brand background, subtle highlights |
| `utility-brand-200` | `#99f6e0` | Brand hover states, accents |
| `utility-brand-700` | `#107569` | Brand dark text, borders |
| `utility-success-50` | `#ecfdf3` | Success background |
| `utility-success-200` | `#abefc6` | Success accents |
| `utility-success-600` | `#079455` | Success primary |
| `utility-success-700` | `#067647` | Success dark |
| `utility-error-50` | `#fef3f2` | Error background |
| `utility-error-200` | `#fecdca` | Error accents |
| `utility-error-700` | `#b42318` | Error dark |
| `utility-blue-50` | `#eff8ff` | Blue background |
| `utility-blue-200` | `#b2ddff` | Blue accents |
| `utility-blue-600` | `#1570ef` | Blue primary |
| `utility-blue-700` | `#175cd3` | Blue dark |
| `utility-purple-50` | `#f4f3ff` | Purple background |
| `utility-purple-200` | `#d9d6fe` | Purple accents |
| `utility-purple-700` | `#5925dc` | Purple dark |
| `utility-gray-200` | `#e9eaeb` | Gray light borders/backgrounds |
| `utility-gray-800` | `#252b37` | Gray dark text |
| `utility-gray-900` | `#181d27` | Gray darkest text |

---

## Typography

### Font Families
- **Body Text**: `Cabin` (sans-serif)
- **Display/Headers**: `Lustria` (serif) - Used for H1 titles only

```css
--font-body: 'Cabin', sans-serif
--font-display: 'Lustria', serif
```

### Text Styles

#### Text SM/Medium
- **Font**: Cabin Medium
- **Size**: 14px
- **Line Height**: 20px
- **Weight**: 500

#### Text XS/Medium
- **Font**: Cabin Medium
- **Size**: 12px
- **Line Height**: 18px
- **Weight**: 500

### Font Sizes
| Token | CSS Variable | Value | Usage |
|-------|--------------|-------|-------|
| text-xs | `--text-xs` | 12px | Extra small text, labels |
| text-sm | `--text-sm` | 14px | Small text, UI labels |
| text-base | `--text-base` | 16px | Body text |
| text-lg | `--text-lg` | 18px | Large text |
| text-xl | `--text-xl` | 20px | Extra large |
| text-2xl | `--text-2xl` | 24px | H3, section headers |
| text-3xl | `--text-3xl` | 30px | H2 |
| text-4xl | `--text-4xl` | 36px | Large headers |
| text-5xl | `--text-5xl` | 48px | Display text |
| text-6xl | `--text-6xl` | 60px | H1 (Lustria) |

### Font Weights
```css
--font-weight-regular: 400    /* Body text */
--font-weight-medium: 500     /* Labels, UI elements */
--font-weight-semibold: 600   /* Headers, emphasis */
--font-weight-bold: 700       /* Strong emphasis */
```

### Line Heights
| Token | CSS Variable | Value |
|-------|--------------|-------|
| leading-xs | `--leading-xs` | 18px |
| leading-sm | `--leading-sm` | 20px |
| leading-base | `--leading-base` | 24px |
| leading-lg | `--leading-lg` | 28px |
| leading-xl | `--leading-xl` | 30px |
| leading-2xl | `--leading-2xl` | 32px |

---

## Spacing

### Core Spacing Scale
Spacing follows an 8px base grid with additional granular values:

| Token | Value | Common Usage |
|-------|-------|--------------|
| `spacing-0` | 0px | No spacing |
| `spacing-1` | 1px | Hairline spacing |
| `spacing-2` | 2px | Extra extra small |
| `spacing-4` | 4px | Extra small |
| `spacing-6` | 6px | Small |
| `spacing-8` | 8px | Base unit |
| `spacing-12` | 12px | Medium small |
| `spacing-16` | 16px | Medium |
| `spacing-20` | 20px | Medium large |
| `spacing-24` | 24px | Large |
| `spacing-32` | 32px | Extra large |
| `spacing-40` | 40px | 2XL |
| `spacing-48` | 48px | 3XL |
| `spacing-64` | 64px | 4XL |
| `spacing-96` | 96px | 5XL |
| `spacing-128` | 128px | 6XL |

### Named Spacing Aliases
| Token | Value | Common Usage |
|-------|-------|--------------|
| `spacing-xxs` | 2px | Minimal spacing between elements |
| `spacing-sm` | 6px | Small gaps, tight spacing |
| `spacing-xl` | 16px | Standard section padding |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-none` | 0px | No rounding |
| `radius-xs` | 2px | Subtle rounding |
| `radius-sm` | 6px | Small components (buttons, inputs, badges) |
| `radius-md` | 6px | Medium components |
| `radius-lg` | 8px | Cards, modals |
| `radius-xl` | 12px | Large cards |
| `radius-2xl` | 16px | Hero sections |
| `radius-3xl` | 20px | Extra large containers |
| `radius-full` | 9999px | Pills, circular avatars |

---

## Shadows

### Shadow MD
**Definition**: 2-layer drop shadow
- Layer 1: `0px 2px 4px -2px rgba(16, 24, 40, 0.06)`
- Layer 2: `0px 4px 6px -1px rgba(16, 24, 40, 0.10)`

**Usage**: Cards, dropdowns, small elevated components

### Shadow LG
**Definition**: 3-layer drop shadow
- Layer 1: `0px 2px 2px -1px rgba(16, 24, 40, 0.03)`
- Layer 2: `0px 4px 6px -2px rgba(16, 24, 40, 0.05)`
- Layer 3: `0px 12px 16px -4px rgba(16, 24, 40, 0.08)`

**Usage**: Modals, popovers, major elevated surfaces

### Full Shadow Scale
| Token | Definition | Usage |
|-------|------------|-------|
| `shadow-xs` | `0px 1px 2px 0px rgba(16, 24, 40, 0.05)` | Subtle depth |
| `shadow-sm` | 2-layer: (0,1) blur 2 + (0,1) blur 3 | Small components |
| `shadow-md` | 2-layer: (0,2) blur 4 spread -2 + (0,4) blur 6 spread -1 | Cards, dropdowns |
| `shadow-lg` | 3-layer: (0,2) blur 2 spread -1 + (0,4) blur 6 spread -2 + (0,12) blur 16 spread -4 | Modals, major surfaces |
| `shadow-xl` | 2-layer: (0,8) blur 8 spread -4 + (0,20) blur 24 spread -4 | Floating panels |
| `shadow-2xl` | `0px 24px 48px -12px rgba(16, 24, 40, 0.18)` | Maximum elevation |

---

## Iconography

### Library

**Lucide React** is the single icon library used across Great Grants. No other icon libraries (heroicons, react-icons, etc.) are used.

```
Package: lucide-react
```

Import icons individually — never import the whole library:

```tsx
import { Search, Bookmark, DollarSign } from "lucide-react";
```

### Size Scale

| Size | Usage |
|------|-------|
| `16px` (`size={16}`) | Inline / compact UI, inside badges or tight labels |
| `20px` (default) | Buttons, form labels, list items — standard size |
| `24px` (`size={24}`) | Empty states, primary navigation items |

### Color Usage

Icons inherit the current text color via CSS. Use Tailwind text utilities:

| Color token | Hex | Usage |
|-------------|-----|-------|
| `text-gray-500` | `#717680` | Default / secondary icons |
| `text-gray-700` | `#414651` | Primary / emphasis icons |
| `text-teal-600` | `#0e9384` | Brand action icons |
| `text-green-600` | `#079455` | Success state icons |
| `text-red-600` | `#d92d20` | Error / destructive icons |
| `text-orange-500` | `#f97316` | Warning icons |

### Icon Inventory

#### Navigation & UI Controls
| Icon | Usage |
|------|-------|
| `ChevronRight` | Next, expand, breadcrumb arrow |
| `ChevronLeft` | Back, collapse |
| `ChevronDown` | Dropdown trigger, accordion |
| `ChevronUp` | Collapse, scroll up indicator |
| `ArrowLeft` | Page back navigation |
| `ArrowRight` | Page forward, continue CTA |
| `Home` | Home / dashboard link |
| `MoreVertical` | Overflow / kebab menu |
| `MoreHorizontal` | Overflow / ellipsis menu |
| `X` | Close, dismiss, remove tag |
| `Plus` | Add, create new item |

#### Status & Feedback
| Icon | Usage |
|------|-------|
| `CheckCircle2` | Success, completed state |
| `Check` | Checkbox selected, confirmed |
| `AlertCircle` | Error, critical alert |
| `AlertTriangle` | Warning, caution |
| `Info` | Informational tooltip or alert |
| `Circle` | Radio button, step indicator |

#### File & Document
| Icon | Usage |
|------|-------|
| `FileText` | Text documents, applications |
| `FileSpreadsheet` | Spreadsheet / CSV uploads |
| `FileCheck` | Reviewed / approved document |
| `File` | Generic file attachment |
| `Image` | Image upload, logo |
| `Upload` | File upload action |
| `FolderOpen` | Open folder / project |
| `Archive` | Archive application or record |

#### User & Organization
| Icon | Usage |
|------|-------|
| `User` | Individual user profile |
| `UserCircle2` | Avatar placeholder |
| `UserPlus` | Invite / add member |
| `UserMinus` | Remove member |
| `Users` | Team, member list |
| `Building2` | Organization, company |

#### Actions & Settings
| Icon | Usage |
|------|-------|
| `Settings` | Account / app settings |
| `Trash2` | Delete, remove |
| `Edit2` | Edit in place |
| `Bookmark` | Save / bookmark a grant |
| `Lock` | Locked / secure state |
| `Shield` | Security, permissions |
| `Mail` | Email address, contact |
| `Bell` | Notifications |
| `Camera` | Photo / avatar upload |
| `Globe` | Website URL, public scope |
| `LogOut` | Sign out action |

#### Grants & Financial
| Icon | Usage |
|------|-------|
| `DollarSign` | Funding amount, financial |
| `Calendar` | Deadline, application date |
| `Clock` | Time remaining, duration |
| `MapPin` | Location, geographic eligibility |
| `Target` | Goals, focus area |
| `Briefcase` | Business, grant purpose |
| `Search` | Grant search |
| `Star` | Featured grant, rating |
| `Zap` | AI-assisted, fast-track |
| `Sparkles` | AI generation, magic action |

#### Rich Text & Content Editing
| Icon | Usage |
|------|-------|
| `Type` | Text type / heading |
| `Bold` | Bold text formatting |
| `Italic` | Italic text formatting |
| `Underline` | Underline text |
| `AlignLeft` | Left-align text |
| `AlignCenter` | Center-align text |
| `AlignRight` | Right-align text |
| `List` | Unordered list |
| `ListOrdered` | Ordered list |
| `Link` | Insert hyperlink |
| `MessageSquare` | Comment, discussion |
| `Send` | Submit, send application |
| `Undo2` | Undo action |

### Standards

1. **One library only** — Always use Lucide React. Do not add heroicons, react-icons, or any other icon library.
2. **Named imports** — Always import icons by name; never use a wildcard import.
3. **Size via prop** — Use the `size` prop (`size={20}`) rather than CSS `width`/`height` overrides.
4. **Color via className** — Use Tailwind `text-*` classes to color icons; avoid inline `color` styles.
5. **No decorative `alt` or `aria-label`** — Icons paired with visible text need no extra label. Standalone icons (buttons with no text) must include `aria-label` on the wrapping element.
6. **Icon + label spacing** — Pair icons with text using `gap-1.5` (`6px`) or `gap-2` (`8px`) inside a flex container.

---

## Tabs

Section navigation using ShadCN/Radix `Tabs`. Two accepted styles, chosen by context:

### Underline style (default — `src/app/components/ui/tabs.tsx`)
The base `TabsList` has **no background** (transparent) with a `border-b border-gray-200` running the full width. The active `TabsTrigger` gets a 2px teal underline (`data-[state=active]:after:bg-teal-600`) and `text-teal-700`; inactive triggers are `text-gray-500`.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs";

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="requirements">Requirements</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">…</TabsContent>
</Tabs>
```

### Pill style (grouped toolbar tabs — e.g. Grant Detail page)
A **white** (`bg-white`), bordered (`border border-gray-200`) container with `p-1` padding. The active tab is a lifted white pill: `data-[state=active]:bg-white data-[state=active]:text-teal-700 data-[state=active]:shadow-sm`.

```tsx
<Tabs defaultValue="overview">
  <TabsList className="bg-white border border-gray-200 p-1">
    <TabsTrigger
      value="overview"
      className="data-[state=active]:bg-white data-[state=active]:text-teal-700 data-[state=active]:shadow-sm text-gray-600"
    >
      Overview
    </TabsTrigger>
  </TabsList>
  <TabsContent value="overview">…</TabsContent>
</Tabs>
```

**Standard: the tab-group container background must always be white (`bg-white`), never light gray (`bg-gray-100` / `bg-gray-50`).** The active-tab distinction comes from the lifted `shadow-sm` (pill style) or the teal underline (underline style) — not from contrasting the active tab against a gray tray. A gray container flattens that contrast and reads as disabled.

---

## Global Navigation (Left Sidebar)

The app has exactly **one** left navigation — `SharedSidebar` (`src/app/components/SharedSidebar.tsx`) — rendered once by `AppLayout` (`src/app/components/AppLayout.tsx`) and shared by every authenticated route via `<Outlet />`. Pages must never render a second, page-local `<aside>` sidebar.

```tsx
import { Outlet } from "react-router";
import { SharedSidebar } from "@/app/components/SharedSidebar";

export function AppLayout() {
  return (
    <div className="flex h-screen bg-white">
      <SharedSidebar />
      <main className="flex-1 overflow-y-auto bg-white lg:pl-0 pl-12">
        <Outlet />
      </main>
    </div>
  );
}
```

### Standards
- **Single source of truth** — `SharedSidebar` is the only left nav. Route pages through `AppLayout`, never duplicate an `<aside>` inside a page component.
- **Width** — `lg:w-60` (240px) at desktop, `xl:w-64` (256px) at wide desktop, `shrink-0 h-screen sticky top-0`.
- **Responsive collapse** — below the `lg` breakpoint, the fixed sidebar is replaced by a hamburger button (`fixed top-3 left-3`, `Menu` icon) that opens a slide-in drawer (`fixed inset-y-0 left-0 w-64`, `translate-x-0`/`-translate-x-full` transition) with a backdrop scrim (`bg-gray-900/40 backdrop-blur-[1px]`). The drawer closes on route change and on outside click.
- **Layout order (top → bottom)** — Logo → primary nav list → auto-margin spacer → credits usage widget → user profile / org switcher. Each section is separated by `border-t border-gray-200`.
- **Active state** — `bg-gray-100 text-gray-900` with `font-semibold`. Inactive: `text-gray-700 hover:bg-gray-100`. Never use the teal brand color as a row background in the nav — teal is reserved for small accent indicators (active dots, underlines), not full-row fills.
- **Icons** — every nav item leads with a 16px (`w-4 h-4`) Lucide icon, `shrink-0`.
- **Typography** — Cabin, 14px; `font-weight: 600` when active, `400` otherwise.
- **Counts & badges** — pill counters use `bg-gray-100 text-gray-600 text-xs font-semibold rounded-full px-2 py-0.5`. Don't color-code count badges by status inside the nav; save color coding for the "required items remaining" `AlertCircle` badge pattern.
- **Collapsible nested groups** — e.g. All Applications → application → section — toggle with `ChevronRight`/`ChevronDown` and indent `ml-3`, then `ml-5` per depth level.
- **Org switcher** — lives behind the user profile row at the bottom (avatar `w-8 h-8 rounded-full bg-[#E9EAEB]`) as a `DropdownMenu`, not a separate top-level nav item.
- **Credits usage widget** — a distinct warm card (`bg-[#fffefa] rounded-lg p-3`) sitting directly above the user profile, showing generated-applications progress with a `bg-[#fef7c3]` track / `bg-[#ca8504]` fill bar. This widget is unique to the sidebar footer — don't reuse its palette elsewhere.

---

## Breadcrumbs

Ancestor trail rendered directly above the page's H1, using `src/app/components/ui/breadcrumb.tsx`. See it live on the Organization Profile page.

```tsx
import { Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbHome,
} from "@/app/components/ui/breadcrumb";

<Breadcrumb className="mb-6">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link to="/"><BreadcrumbHome /></Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link to="/settings">Settings</Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Organization</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Standards
- **Placement** — always directly above the H1 page header, `mb-6` spacing. Never nested inside a card, tab panel, or table.
- **First crumb** — always `<BreadcrumbHome />` (Home icon, `text-[#A4A7AE]`) linking to `/`. No text label on the home crumb.
- **Separator** — default `ChevronRight`, `text-[#A4A7AE]`, stroke width `1.33`. Only override when truncating a long trail with an ellipsis (`BreadcrumbEllipsis`).
- **Linked crumbs** — `text-[#717680]`, hover `text-[#414651]`, Cabin semibold, 14px/20px line height.
- **Current page** — `BreadcrumbPage`, not a link: `text-[#107569]` (brand dark teal), `aria-current="page"`, `aria-disabled="true"`.
- **Routing** — wrap a react-router `Link` with `BreadcrumbLink asChild` for SPA navigation. Don't use a raw `<a href>`.

---

## Right Rail (Workflow Helper Panel)

A contextual, collapsible panel docked to the right edge of the main content area — used today for the "Profile Completion" checklist on the Organization Profile page (`src/app/components/OrganizationProfileForm.tsx`, `showRightRail` state). This is the standard pattern for any future contextual helper (guidance checklists, AI assistants, etc.) that should stay attached to the current page's workflow.

```tsx
<AnimatePresence mode="wait">
  {showRightRail && (
    <motion.aside
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 320, opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#F9FAFB] border-l border-gray-200 overflow-hidden flex-shrink-0 relative"
    >
      {/* Collapse button — absolute top-6 -left-4, straddles the rail edge */}
      {/* Header: title + progress badge + one-line supporting copy */}
      {/* Grouped sections: heading + time estimate, each with row items */}
    </motion.aside>
  )}
</AnimatePresence>

{/* Floating re-open tab — rendered only while the rail is collapsed */}
{!showRightRail && (
  <motion.button
    className="fixed right-0 top-1/3 z-20 text-white px-3 py-4 rounded-l-xl shadow-xl"
    style={{ background: bgGradient }}
  >
    {/* icon, vertical label, completion count */}
  </motion.button>
)}
```

### Standards
- **Sizing & motion** — expanded width `320px`, animated with `framer-motion` (`motion/react`) on `width` + `opacity`, `duration: 0.3`, ease `[0.4, 0, 0.2, 1]`.
- **Surface** — background `#F9FAFB` (gray-50), `border-l border-gray-200`. Content sits on white cards/rows inside — never directly on the gray surface.
- **Collapse control** — circular button, `w-8 h-8 bg-white rounded-full border-2 border-gray-200 shadow-lg`, positioned straddling the rail's top-left edge (`absolute top-6 -left-4`). Use teal brand tokens for hover (`hover:border-teal-500 hover:bg-teal-50`) rather than one-off colors.
- **Collapsed state** — a `fixed right-0 top-1/3` vertical tab, `rounded-l-xl`, colored by progress/urgency (gradient), with a vertical text label and completion count. The rail is never fully hidden without an obvious, always-visible way back in.
- **Reflow, don't overlap** — the main content area is `w-full` when the rail is open and constrains to `max-w-5xl mx-auto` when collapsed. The rail must never float on top of content.
- **Anatomy** — header (title + progress badge + one-line supporting copy) → grouped sections (section heading + "~X minutes to complete" hint) → rows (leading completion indicator — filled teal `CheckCircle2` when done, empty outlined circle otherwise — title, helper text). Rows are clickable and jump to / highlight the related field in the main content.
- **Progress badge** — a pill with a gradient background communicating state: green gradient when 100% complete, amber/blue gradient at moderate progress, orange/red gradient at low progress.
- **Default state** — open on first load for any page using this pattern.
- **Recommended next step** — this pattern currently lives inline inside `OrganizationProfileForm.tsx`. New usages (e.g. an AI assistant rail) should extract a shared `WorkflowRail` component instead of copy-pasting the implementation.

---

## Search

Grant Search (`src/app/components/GrantSearch.tsx`) is conversational and AI-assisted: a single natural-language input, relevance-scored result cards, and flat gray filter controls.

### Search Input
A single connected white toolbar: a program-context picker on the left, the text input on the right, inside one bordered card.

```tsx
<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
  <div className="relative flex items-center">
    {/* Program context picker */}
    <div className="flex-shrink-0 border-r border-gray-200">…</div>

    <div className="flex-1 relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
        <Search className={`w-5 h-5 ${query ? "text-teal-600" : "text-gray-400"}`} />
        <Sparkles className="w-4 h-4" style={{ color: "#9810FA" }} />
      </div>
      <input
        placeholder="Tell us about your project that needs funding"
        className={`w-full pl-20 pr-12 py-3.5 text-base focus:outline-none ${query ? "bg-teal-50/30" : "bg-white"}`}
      />
    </div>
  </div>
</div>
```
- Container: `bg-white rounded-xl shadow-sm border border-gray-200`. The input itself has no visible border — it relies on the parent card, with `focus:outline-none` (no native focus ring).
- Padding `pl-20` makes room for the stacked `Search` + `Sparkles` icons; `pr-12` clears space for the clear (`X`) button.
- State change: non-empty query → `bg-teal-50/30` tint + `text-teal-600` search icon; empty → `bg-white` + `text-gray-400`.
- Placeholder copy is conversational/AI-prompt style ("Tell us about your project that needs funding"), not a keyword hint.

### AI Search Rules
- **AI accent color: `#9810FA`.** This is the **single exception** to the brand/gray/semantic palette — an exact hex, not a Tailwind `purple-*` token for the border/text. Reserve it exclusively for AI-assisted or generative search affordances: the `Sparkles` icon and the natural-language example-query chips.
- **Never mix with brand teal for the same affordance.** Teal communicates "primary action / matched relevance"; purple communicates "AI-generated / AI-powered." Keeping them distinct preserves the signal to users.
- **Icon** — always `Sparkles` (Lucide), 16px, glued directly beside the `Search` icon inside the input. Not rendered as a standalone badge.
- **Example chips** — "Try:" chips pre-fill the input with natural-language example queries: `text-[#9810FA] border-[#9810FA]`, hover background falls back to Tailwind's `purple-50`.
- **Don't confuse with the Difficulty tag** on result cards, which also uses purple but via the ordinary Tailwind token (`bg-purple-50 text-purple-700 border-purple-200`) — that's a categorical tag color, unrelated to the AI accent hex.

### Result Cards
Flat white cards, no shadow at rest, lift on hover only.

```tsx
<div className="bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all overflow-hidden cursor-pointer">
  <div className="p-5">
    {/* Title + relevance Badge */}
    {/* Description, line-clamp-2 */}
    {/* Metadata row: Banknote (amount) · Globe (location) · Calendar (deadline) */}
    {/* Status / category / difficulty tag Badges + Save button */}
  </div>
</div>
```

**Relevance ("match") badge tiers** — always the `Target` icon + label, never purple (purple is reserved for AI search, not match scoring):

| Relevance | Label | Classes |
|---|---|---|
| ≥ 85 | Excellent Match | `bg-teal-600 text-white border-teal-600` |
| ≥ 70 | Great Match | `bg-teal-500 text-white border-teal-500` |
| ≥ 55 | Good Match | `bg-blue-500 text-white border-blue-500` |
| < 55 | Fair Match | `bg-gray-500 text-white border-gray-500` |

- **Card** — `bg-white border border-gray-200 rounded-xl`, no shadow at rest, `hover:shadow-md` only. The whole card is a click target to the grant detail page.
- **Metadata row** — `Banknote` (amount), `Globe` (location), `Calendar` (deadline); 16px icons, `gap-4` between fields, `gap-1.5` icon-to-text.
- **Tag badges** — status (`green-50/700/200` Open, `blue-50/700/200` Pending, `gray-100/600/200` Closed), category (`teal-50/700/200`), difficulty (`purple-50/700/200`).
- **Save action** — outline `Button` with `Bookmark` icon; saved state fills the icon (`fill-current`) and tints the button teal (`border-teal-200 bg-teal-50 text-teal-700`).
- **Match breakdown gauges** (list view) — thin `h-1 bg-gray-100 rounded-full` tracks filled with `bg-gradient-to-r from-teal-500 to-teal-600`, animated via `transition-all duration-500` on inline `width`.

### List & Controls
- **Result count** — `text-lg font-semibold` count + `font-normal text-gray-500` label (e.g. "24 grants").
- **View toggle** — segmented pill control, `bg-white border border-gray-200 rounded-lg p-0.5`; active segment `bg-gray-100 text-gray-900`, inactive `text-gray-500`. Icons: `List`, `LayoutGrid`.
- **Sort control** — `DropdownMenu` triggered by an outline `Button` with `ArrowUpDown`; each menu item pairs an icon with its label (`TrendingUp` Relevance, `Banknote` Funding Amount, `Calendar` Deadline, `Clock` Recently Added).
- **Filter pills** — always flat `bg-gray-50 text-gray-700 border-gray-200`, regardless of the underlying filter category. Don't color-code filter pills by category — save color-coding for result-card tags.
- **Add Filters** — outline button opens a popover (`w-96`, `shadow-xl border border-gray-200`). Root-level menu header uses a teal gradient (`from-teal-600 to-teal-500`, white text); drilled-down levels use a lighter gradient (`from-teal-50 to-white`) with a back chevron.
- **Grid vs. list layout** — list view caps content width at `max-w-[960px]` (`space-y-3`); grid view is a fixed `grid grid-cols-2 gap-4` (not responsive-breakpointed).
- **Loading state** — centered `Loader2` spinner (teal, `animate-spin`) with supporting copy ("Searching for grants..."). No skeleton loaders in this flow.
- **Empty state** — `SearchX` icon inside an `80×80` soft gray gradient circle (`bg-gradient-to-br from-gray-50 to-gray-100`), Lustria heading ("No Grants Found"), Cabin body copy, with actions to clear search/filters.
- **No pagination or infinite scroll** — results render in full; introduce pagination only if result volumes grow enough to require it.

---

## Implementation Guide

### Using CSS Variables

All design tokens are implemented as CSS custom properties and can be referenced directly:

```css
/* Example button component */
.button-primary {
  background-color: var(--brand-600);
  color: var(--text-white);
  border-radius: var(--radius-sm);
  padding: var(--spacing-sm) var(--spacing-xl);
  box-shadow: var(--shadow-sm);
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
}

/* Example card component */
.card {
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-24);
}

/* Example input field */
.input-field {
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  padding: var(--spacing-8) var(--spacing-12);
  font-size: var(--text-base);
  color: var(--text-primary);
}

.input-field::placeholder {
  color: var(--text-placeholder);
}

.input-field:focus {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}
```

### Tailwind CSS Integration

The design tokens are mapped to Tailwind CSS utility classes in `/src/styles/theme.css`:

```jsx
// Example usage in React components
<div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
  <h2 className="text-gray-900 font-semibold">Card Title</h2>
  <p className="text-gray-700 mt-2">Card content</p>
  <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md mt-4">
    Action
  </button>
</div>
```

### Component Examples

#### Button Component
```jsx
<button
  className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
  style={{
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-weight-medium)',
    fontFamily: 'var(--font-body)'
  }}
>
  Click me
</button>
```

#### Card Component
```jsx
<div
  className="bg-white border border-gray-200 p-6"
  style={{
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)'
  }}
>
  <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>
    Card Title
  </h3>
  <p className="text-gray-600 mt-2">Card content goes here</p>
</div>
```

#### Input Field with Label
```jsx
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Email Address
  </label>
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full border border-gray-300 text-gray-900 placeholder-gray-500 rounded-md px-3 py-2"
    style={{
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-body)'
    }}
  />
</div>
```

#### Checkbox (Form Controls)
```jsx
<Checkbox /> {/* uses the Checkbox component from @/components/ui/checkbox */}
```

**Anatomy**
| Part | Token / Class | Value |
|------|---------------|-------|
| Size | `size-4` | 16 × 16 px |
| Border radius | `rounded-[4px]` | 4 px |
| Unchecked background | `bg-input-background` | `--bg-primary` (white) |
| Checked background | `data-[state=checked]:bg-primary` | `--gray-900` |
| Checked border | `data-[state=checked]:border-primary` | `--gray-900` |
| **Check icon color** | `text-white` on the indicator | **Always white** |
| Check icon size | `size-3.5` | 14 px |

**Standard: check icon must always be white.**
The `CheckboxPrimitive.Indicator` carries an explicit `text-white` class so the Lucide `CheckIcon` renders with a white stroke regardless of surrounding context or dark-mode settings. Do **not** use `text-current` or rely on color cascade — always set `text-white` directly on the indicator.

---

## Migration Guide

### Replacing Hardcoded Values

#### Colors
**Before:**
```css
background-color: #14b8a6;
color: #181d27;
border: 1px solid #e9eaeb;
```

**After:**
```css
background-color: var(--brand-600);
color: var(--text-primary);
border: 1px solid var(--border-primary);
```

#### Spacing
**Before:**
```css
padding: 8px;
gap: 16px;
margin-bottom: 24px;
```

**After:**
```css
padding: var(--spacing-8);
gap: var(--spacing-16);
margin-bottom: var(--spacing-24);
```

#### Typography
**Before:**
```css
font-size: 14px;
font-weight: 600;
line-height: 20px;
font-family: 'Cabin', sans-serif;
```

**After:**
```css
font-size: var(--text-sm);
font-weight: var(--font-weight-semibold);
line-height: var(--leading-sm);
font-family: var(--font-body);
```

#### Shadows & Radius
**Before:**
```css
border-radius: 8px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
```

**After:**
```css
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);
```

### Semantic Token Mappings

Use semantic tokens for better maintainability:

```css
/* Text Colors */
--text-primary: var(--gray-900)      /* Primary body text */
--text-secondary: var(--gray-700)    /* Secondary text */
--text-tertiary: var(--gray-600)     /* Tertiary text */
--text-brand: var(--brand-600)       /* Brand colored text */

/* Background Colors */
--bg-primary: #ffffff                /* Primary surface */
--bg-secondary: var(--gray-50)       /* Secondary surface */
--bg-brand-primary: #f0fdf9          /* Light brand background */

/* Border Colors */
--border-primary: #d5d7da            /* Primary borders */
--border-brand: var(--brand-600)     /* Brand borders */

/* Foreground Colors */
--fg-primary: var(--gray-900)        /* Primary foreground */
--fg-brand-primary: var(--brand-600) /* Brand foreground */
```

---

## Design Principles

### 1. White Backgrounds
All modals, dropdowns, select menus, popovers, and tab-group containers use solid white backgrounds (`#ffffff`) with no transparency for clarity and accessibility. Never substitute a light gray tray (`bg-gray-50` / `bg-gray-100`) for the white container — active-state contrast should come from shadow/underline/color, not from a gray backdrop.

### 2. Teal Brand Color
Primary brand color is teal (`#0e9384`) used consistently for:
- Call-to-action buttons
- Active navigation states
- Links and interactive elements
- Brand accents and highlights

**Exception — AI accent purple (`#9810FA`):** reserved exclusively for AI-assisted/generative search affordances (see [Search](#search)). It never substitutes for teal and is not used for anything unrelated to AI.

### 3. Typography Hierarchy
- **Cabin** for all body text and UI elements
- **Lustria** exclusively for H1 display titles
- Consistent font weights: 400 (regular), 500 (medium), 600 (semibold)

### 4. 8px Grid System
All spacing uses multiples of 8px (with 2px, 4px, 6px for fine-tuning) ensuring:
- Visual rhythm and consistency
- Predictable component sizing
- Easy mental math for developers

### 5. Subtle Shadows
- Use `shadow-md` for cards and elevated components
- Use `shadow-lg` for modals and major UI surfaces
- Avoid excessive shadow depth

### 6. 6px Radius Standard
- Standard border radius is 6px (`radius-sm`) for buttons, inputs, badges
- 8px (`radius-lg`) for cards and larger components
- Maintains visual consistency across the application

### 7. Semantic Color Usage
- Use semantic tokens (`--text-primary`, `--bg-brand-primary`) over raw color values
- Makes theming and dark mode implementation easier
- Improves code maintainability

---

## File Structure

```
src/
├── styles/
│   ├── design-tokens.css    # Core token definitions (source of truth)
│   ├── theme.css            # Tailwind theme mappings
│   └── fonts.css            # Font imports (Cabin, Lustria)
└── app/
    └── components/
        └── ui/              # Reusable UI components using design system
```

---

## Resources

- **Untitled UI**: https://www.untitledui.com
- **Figma Design System**: Imported components and design tokens
- **Design Tokens**: `/src/styles/design-tokens.css`
- **Theme Configuration**: `/src/styles/theme.css`
- **Design System Page**: `/design-system` (`src/app/pages/DesignSystemPage.tsx`) — live, interactive reference for every pattern in this document
- **Global Navigation**: `src/app/components/SharedSidebar.tsx`, `src/app/components/AppLayout.tsx`
- **Breadcrumbs**: `src/app/components/ui/breadcrumb.tsx`
- **Right Rail**: `src/app/components/OrganizationProfileForm.tsx` (`showRightRail`)
- **Search**: `src/app/components/GrantSearch.tsx`

---

**Last Updated**: July 6, 2026
**Version**: 2.1
**Based on**: Untitled UI Design System
