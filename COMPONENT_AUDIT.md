# Great Grants Component Audit
## Complete inventory of all UI components in the prototype

---

## UI Component Library (45 Components)

### Form Components (8)
| Component | Status | Location | Notes |
|-----------|--------|----------|-------|
| Button | ✅ Active | `ui/button.tsx` | Primary, Secondary, Outline, Ghost, Destructive variants |
| Input | ✅ Active | `ui/input.tsx` | Text input with teal focus ring |
| Textarea | ✅ Active | `ui/textarea.tsx` | Multi-line text input |
| Select | ✅ Active | `ui/select.tsx` | Dropdown with **white background** |
| Checkbox | ✅ Active | `ui/checkbox.tsx` | Custom styled with teal check |
| Radio Group | ✅ Active | `ui/radio-group.tsx` | Custom styled with teal fill |
| Switch | ✅ Active | `ui/switch.tsx` | **Toggle: Teal when on, Gray when off** (20px × 36px) |
| Label | ✅ Active | `ui/label.tsx` | Form field labels, 14px Cabin Medium |

### Navigation Components (6)
| Component | Status | Location | Notes |
|-----------|--------|----------|-------|
| Tabs | ✅ Active | `ui/tabs.tsx` | **Horizontal with teal bottom border indicator** |
| Dropdown Menu | ✅ Active | `ui/dropdown-menu.tsx` | **White background, no transparency** |
| Navigation Menu | ✅ Active | `ui/navigation-menu.tsx` | Top-level navigation |
| Breadcrumb | ✅ Active | `ui/breadcrumb.tsx` | Path navigation |
| Sidebar | ✅ Active | `ui/sidebar.tsx` | Collapsible side navigation |
| Menubar | ✅ Active | `ui/menubar.tsx` | Application menu bar |

### Overlay Components (7)
| Component | Status | Location | Notes |
|-----------|--------|----------|-------|
| Dialog | ✅ Active | `ui/dialog.tsx` | **White background, shadow-lg** |
| Alert Dialog | ✅ Active | `ui/alert-dialog.tsx` | Confirmation dialogs |
| Popover | ✅ Active | `ui/popover.tsx` | **White background** |
| Sheet | ✅ Active | `ui/sheet.tsx` | Side panel overlay |
| Tooltip | ✅ Active | `ui/tooltip.tsx` | Hover tooltips |
| Hover Card | ✅ Active | `ui/hover-card.tsx` | **White background** |
| Context Menu | ✅ Active | `ui/context-menu.tsx` | Right-click menu |

### Data Display Components (10)
| Component | Status | Location | Notes |
|-----------|--------|----------|-------|
| Card | ✅ Active | `ui/card.tsx` | Border-gray-200, shadow-md, radius-lg |
| Badge | ✅ Active | `ui/badge.tsx` | Status indicators (multiple colors) |
| Table | ✅ Active | `ui/table.tsx` | Data tables |
| Avatar | ✅ Active | `ui/avatar.tsx` | User avatars (circular) |
| Separator | ✅ Active | `ui/separator.tsx` | Horizontal/vertical dividers |
| Progress | ✅ Active | `ui/progress.tsx` | Progress bars |
| Accordion | ✅ Active | `ui/accordion.tsx` | Expandable sections |
| Carousel | ✅ Active | `ui/carousel.tsx` | Image/content carousel |
| Collapsible | ✅ Active | `ui/collapsible.tsx` | Collapsible content |
| Scroll Area | ✅ Active | `ui/scroll-area.tsx` | Custom scrollbar styling |

### Feedback Components (5)
| Component | Status | Location | Notes |
|-----------|--------|----------|-------|
| Alert | ✅ Active | `ui/alert.tsx` | Info, success, error, warning variants |
| Skeleton | ✅ Active | `ui/skeleton.tsx` | Loading state placeholders |
| Toast/Sonner | ✅ Active | `ui/sonner.tsx` | Notification toasts |
| Slider | ✅ Active | `ui/slider.tsx` | Range slider |
| Toggle | ✅ Active | `ui/toggle.tsx` | Toggle button |

### Utility Components (9)
| Component | Status | Location | Notes |
|-----------|--------|----------|-------|
| Aspect Ratio | ✅ Active | `ui/aspect-ratio.tsx` | Maintain aspect ratios |
| Calendar | ✅ Active | `ui/calendar.tsx` | Date picker calendar |
| Chart | ✅ Active | `ui/chart.tsx` | Data visualization |
| Command | ✅ Active | `ui/command.tsx` | Command palette |
| Drawer | ✅ Active | `ui/drawer.tsx` | Bottom sheet drawer |
| Form | ✅ Active | `ui/form.tsx` | Form wrapper with react-hook-form |
| Input OTP | ✅ Active | `ui/input-otp.tsx` | One-time password input |
| Pagination | ✅ Active | `ui/pagination.tsx` | Page navigation |
| Resizable | ✅ Active | `ui/resizable.tsx` | Resizable panels |
| Toggle Group | ✅ Active | `ui/toggle-group.tsx` | Multiple toggle options |

---

## Custom Application Components (15+)

### Core Application Components
| Component | Status | Used In | Description |
|-----------|--------|---------|-------------|
| Logo | ✅ Active | SharedSidebar, Modals | **SVG 133px × 35px, Teal-600** |
| SharedSidebar | ✅ Active | All pages | Left navigation with logo, menu, user avatar |
| ApplicationLoadingModal | ✅ Active | Grant Search → Apply | AI generation loading animation |
| ExportApplicationDialog | ✅ Active | Applications page | **Preview modal with "Mark as submitted" checkbox** |
| InviteMemberModal | ✅ Active | Organizations page | Invite team members |
| CreateOrganizationModal | ✅ Active | Organizations page | Create new organization |
| ShareGrantModal | ✅ Active | Grant cards | Share via link, email, PDF |

### Grant & Application Components
| Component | Status | Used In | Description |
|-----------|--------|---------|-------------|
| GrantSearch | ✅ Active | Grant Search page | Search with AI, filters, saved alerts |
| GrantCard | ✅ Active | GrantSearch results | Card with metadata, tags, actions |
| ApplicationCard | ✅ Active | Applications page | Expandable card with sections, progress |
| ApplicationSection | ✅ Active | Application pages | Individual section editor (9 types) |
| ReadinessScoreWidget | ✅ Active | My Grant Readiness | Circular score with status |
| SavedAlertCard | ✅ Active | Account Settings | **Alert with toggle switch** |

### Organization Components
| Component | Status | Used In | Description |
|-----------|--------|---------|-------------|
| OrganizationCard | ✅ Active | Organizations page | Organization selector card |
| OrganizationProfileForm | ✅ Active | Organization Profile | Complex multi-section form |
| ProjectDetailsPage | ✅ Active | My Programs | **Documentation modals with required fields** |
| MembersList | ✅ Active | Organizations page | Team member management |
| ProgramCard | ✅ Active | My Programs | Program/project cards |

---

## Design Token Usage Patterns

### Color Usage Map
| Token | Used In | Frequency |
|-------|---------|-----------|
| `#ffffff` (White) | All modals, dropdowns, cards | Very High |
| `Gray/900` (#181d27) | Primary text | Very High |
| `Gray/700` (#414651) | Secondary text | High |
| `Gray/200` (#e9eaeb) | Borders | Very High |
| `Brand/600` (#0e9384) | CTAs, active states, links | Very High |
| `Brand/700` (#107569) | Active tab text | Medium |
| `Success/600` (#079455) | Success badges, text | Medium |

### Typography Usage
| Style | Used In | Elements |
|-------|---------|----------|
| Lustria | H1 titles only | Page headers |
| Cabin Regular (400) | Body text | Paragraphs, descriptions |
| Cabin Medium (500) | Labels, buttons | Form labels, UI elements |
| Cabin Semibold (600) | Headers, emphasis | H2-H6, card titles |
| 14px (text-sm) | Most UI elements | Buttons, labels, small text |
| 16px (text-base) | Body text | Paragraphs, inputs |
| 12px (text-xs) | Metadata | Timestamps, small labels |

### Shadow Usage
| Shadow | Used In | Elements |
|--------|---------|----------|
| `shadow-sm` | Buttons (hover) | Subtle elevation |
| `shadow-md` | Cards | Grant cards, application cards |
| `shadow-lg` | Modals | Dialogs, preview modal |
| `shadow-xl` | Floating panels | Popovers, dropdowns (rare) |

### Radius Usage
| Radius | Used In | Elements |
|--------|---------|----------|
| 6px (radius-sm) | Buttons, inputs, badges | Most interactive elements |
| 8px (radius-lg) | Cards, modals | Larger containers |
| 12px (radius-xl) | Large cards | Feature cards |
| 9999px (radius-full) | Avatars, pills | Circular elements |

### Spacing Patterns
| Pattern | Spacing | Usage |
|---------|---------|-------|
| Card padding | 24px | Internal card padding |
| Button padding | 8px 16px | Vertical × Horizontal |
| Input padding | 8px 12px | Vertical × Horizontal |
| Section gap | 32px | Between major sections |
| Item gap | 12px | Between list items |
| Tight gap | 6px | Between related elements |

---

## Component State Matrix

### Button States
```
✅ Default (bg-teal-600)
✅ Hover (bg-teal-700)
✅ Focus (ring-2 ring-teal-500)
✅ Disabled (opacity-50)
✅ Loading (spinner icon)
```

### Input States
```
✅ Default (border-gray-300)
✅ Focus (border-teal-600, ring-teal-500)
✅ Error (border-red-600, ring-red-500)
✅ Disabled (bg-gray-100, opacity-50)
✅ Placeholder (text-gray-500)
```

### Tab States
```
✅ Default (text-gray-500)
✅ Active (text-teal-700, border-b-2 border-teal-600)
✅ Hover (text-gray-700)
```

### Switch States
```
✅ Off (bg-gray-200, thumb-white)
✅ On (bg-teal-600, thumb-white)
✅ Disabled (opacity-50)
```

### Select/Dropdown States
```
✅ Closed (border-gray-300)
✅ Open (white background dropdown)
✅ Hover item (bg-gray-50)
✅ Selected item (checkmark icon)
```

---

## Figma Publishing Priority

### Phase 1: Critical (Publish First) ⭐
```
1. Color Tokens (all brand, gray, semantic)
2. Typography Styles (Cabin variants + Lustria H1)
3. Button component (all variants + states)
4. Input component (with focus states)
5. Select component (white dropdown)
6. Tabs component (horizontal with underline)
7. Switch component (teal/gray toggle)
8. Card component (with shadow-md)
```

### Phase 2: Common UI (Publish Second)
```
9. Dialog/Modal (white background)
10. Dropdown Menu (white background)
11. Badge (all color variants)
12. Checkbox (custom teal style)
13. Radio (custom teal style)
14. Label component
15. Separator
16. Avatar
```

### Phase 3: Advanced (Publish Third)
```
17. Alert Dialog (confirmation pattern)
18. Popover (white background)
19. Tooltip
20. Accordion
21. Table
22. Progress
23. Skeleton
24. Toast/Alert
```

### Phase 4: Custom Patterns (Publish Last)
```
25. Logo component (SVG)
26. Application Card pattern
27. Grant Search Card pattern
28. Readiness Score Widget
29. Saved Alert Card (with toggle)
30. Form layout patterns
```

---

## Quality Checklist for Each Component

Before publishing a component to Figma, verify:

```
□ Uses color tokens (not hex values directly)
□ Uses text styles (not manual font settings)
□ Uses spacing tokens (not magic numbers)
□ Has all interactive states (default, hover, focus, disabled)
□ Matches prototype exactly (visual comparison)
□ Named correctly (Component/Variant/State)
□ Has component description
□ Has usage documentation
□ Tested in light mode (dark mode optional)
□ Auto-layout configured properly (if applicable)
```

---

## Component Version History

Track changes to maintain consistency:

```
Example:

Button v2.1
- Added loading state with spinner
- Fixed focus ring color (now teal-500)
- Updated padding to 8px 16px

Tabs v2.0
- BREAKING: Changed from rounded to underline style
- Active state now teal-700 text with teal-600 border
- Inactive state now gray-500 text

Switch v1.2
- Increased size from 18px to 20px height
- Changed active color to teal-600
- Added white thumb with shadow
```

---

## Quick Reference: Where Components Are Used

### Account Settings Page
- Tabs (horizontal with underline)
- Switch (Saved Alerts toggle)
- Input (email, name fields)
- Button (save, delete)
- Alert Dialog (delete confirmation)
- Dropdown Menu (user menu)

### Grant Search Page
- Input (search field)
- Select (filters)
- Badge (tags, difficulty)
- Button (Apply, Save, Share)
- Card (grant results)
- Dialog (Share modal, Alert modal)

### Applications Page
- Card (application cards)
- Badge (status indicators)
- Dropdown Menu (actions menu)
- Progress (section completion)
- Dialog (Export preview modal)
- Checkbox (Mark as submitted)

### Organization Profile Page
- Tabs (navigation)
- Input (form fields)
- Textarea (descriptions)
- Select (dropdowns)
- Button (save, add)
- Dialog (modals for adding items)
- Badge (required field indicators)

### My Programs Page
- Card (program cards)
- Button (add, edit, delete)
- Dialog (documentation modals)
- Select (category dropdown)
- Input (required title field)
- Textarea (required description field)
- Badge (category tags)

---

**Last Updated:** April 8, 2026  
**Total Components:** 60+ (45 UI + 15 custom)  
**Figma Library Version:** [Update with your version]

---

## Next Steps

1. ✅ Review this audit against your Figma library
2. ✅ Identify missing components
3. ✅ Verify token values match exactly
4. ✅ Follow publishing priority order
5. ✅ Use quality checklist for each component
6. ✅ Publish in phases (don't try to do everything at once)

**Need the design specs?** See `DESIGN.md`  
**Need implementation details?** See `FIGMA_DESIGN_SYSTEM_GUIDE.md`  
**Need token values?** See `src/styles/design-tokens.css`
