# Figma Design System Publishing Guide
## Aligning Figma Components with Great Grants Prototype

This guide ensures your Figma design system components and tokens are perfectly aligned with the implemented Great Grants prototype.

---

## Table of Contents
1. [Design Token Mapping](#design-token-mapping)
2. [Component Library Audit](#component-library-audit)
3. [Publishing Checklist](#publishing-checklist)
4. [Naming Conventions](#naming-conventions)
5. [Maintenance Workflow](#maintenance-workflow)

---

## Design Token Mapping

### Colors to Publish

#### Brand Colors (Teal)
Ensure these exact values are in your Figma color styles:

```
Brand/50       #f0fdf9    (Light backgrounds, subtle highlights)
Brand/200      #99f6e0    (Hover backgrounds, accents)
Brand/500      #15b79e    (Secondary brand)
Brand/600      #0e9384    (PRIMARY - CTAs, active states) ⭐
Brand/700      #107569    (Dark brand, pressed states)
Brand/800      #134e48    (Emphasis)
```

#### Gray Scale
```
Gray/25        #fafafa    (Lightest backgrounds)
Gray/50        #f9fafb    (Secondary backgrounds)
Gray/100       #f2f4f7    (Tertiary backgrounds)
Gray/200       #e9eaeb    (Borders, dividers) ⭐
Gray/300       #d0d5dd    (Secondary borders)
Gray/400       #98a2b3    (Placeholder text)
Gray/500       #717680    (Tertiary text, disabled)
Gray/600       #535862    (Secondary text)
Gray/700       #414651    (Primary text medium) ⭐
Gray/800       #252b37    (Emphasis text)
Gray/900       #181d27    (Primary text darkest) ⭐
```

#### Semantic Colors
```
Success/50     #ecfdf3
Success/200    #abefc6
Success/600    #079455    (Primary success) ⭐
Success/700    #067647

Error/50       #fef3f2
Error/200      #fecdca
Error/600      #d92d20
Error/700      #b42318    (Primary error) ⭐

Warning/50     #fffaeb
Warning/200    #fedf89
Warning/600    #dc6803

Blue/50        #eff8ff
Blue/200       #b2ddff
Blue/600       #1570ef
Blue/700       #175cd3

Purple/50      #f4f3ff
Purple/200     #d9d6fe
Purple/700     #5925dc
```

#### Special Tokens
```
Border/Primary      #d5d7da
Background/Primary  #ffffff (solid white, no transparency)
Background/Tertiary #f5f5f5
Foreground/Disabled #a4a7ae
```

### Typography to Publish

#### Font Families
```
Font/Body     "Cabin"     (sans-serif)
Font/Display  "Lustria"   (serif - H1 only)
```

#### Text Styles
Create these text styles in Figma:

```
Text/XS/Medium
  Font: Cabin Medium
  Size: 12px
  Line: 18px
  Weight: 500

Text/SM/Medium
  Font: Cabin Medium
  Size: 14px
  Line: 20px
  Weight: 500

Text/Base/Regular
  Font: Cabin
  Size: 16px
  Line: 24px
  Weight: 400

Text/Base/Medium
  Font: Cabin Medium
  Size: 16px
  Line: 24px
  Weight: 500

Text/LG/Semibold
  Font: Cabin
  Size: 18px
  Line: 28px
  Weight: 600

Text/XL/Semibold
  Font: Cabin
  Size: 20px
  Line: 30px
  Weight: 600

Text/2XL/Semibold
  Font: Cabin
  Size: 24px
  Line: 32px
  Weight: 600

Display/H1
  Font: Lustria
  Size: 60px (or 24px for smaller H1)
  Weight: 600
```

### Spacing to Publish

Create spacing tokens:
```
Spacing/XXS    2px
Spacing/XS     4px
Spacing/SM     6px
Spacing/MD     8px
Spacing/LG     12px
Spacing/XL     16px
Spacing/2XL    24px
Spacing/3XL    32px
Spacing/4XL    48px
```

### Border Radius to Publish

```
Radius/SM      6px    (Buttons, inputs, badges) ⭐
Radius/MD      6px    (Same as SM)
Radius/LG      8px    (Cards, modals)
Radius/XL      12px   (Large cards)
Radius/2XL     16px
Radius/Full    9999px (Pills, avatars)
```

### Shadows to Publish

```
Shadow/SM
  Layer 1: 0px 1px 2px rgba(16, 24, 40, 0.06)
  Layer 2: 0px 1px 3px rgba(16, 24, 40, 0.10)

Shadow/MD ⭐
  Layer 1: 0px 2px 4px -2px rgba(16, 24, 40, 0.06)
  Layer 2: 0px 4px 6px -1px rgba(16, 24, 40, 0.10)

Shadow/LG ⭐
  Layer 1: 0px 2px 2px -1px rgba(16, 24, 40, 0.03)
  Layer 2: 0px 4px 6px -2px rgba(16, 24, 40, 0.05)
  Layer 3: 0px 12px 16px -4px rgba(16, 24, 40, 0.08)

Shadow/XL
  Layer 1: 0px 8px 8px -4px rgba(16, 24, 40, 0.03)
  Layer 2: 0px 20px 24px -4px rgba(16, 24, 40, 0.08)
```

---

## Component Library Audit

### ✅ Components Used in Prototype

These components are actively used and should be published:

#### Form Components
- **Button** (Primary, Secondary, Outline, Ghost variants)
- **Input** (Text input with focus states)
- **Textarea** (Multi-line text input)
- **Select** (Dropdown with white background)
- **Checkbox** (Custom styled)
- **Radio Group** (Custom styled)
- **Switch** (Toggle with teal active state)
- **Label** (Form field labels)

#### Navigation Components
- **Tabs** (Horizontal with bottom border indicator)
- **Dropdown Menu** (White background, teal hover)
- **Navigation Menu**
- **Breadcrumb**
- **Sidebar**

#### Overlay Components
- **Dialog/Modal** (White background, no transparency)
- **Alert Dialog** (Confirmation dialogs)
- **Popover** (White background)
- **Sheet** (Side panels)
- **Tooltip**
- **Hover Card**

#### Data Display Components
- **Card** (With shadow-md)
- **Badge** (Status indicators)
- **Table**
- **Avatar**
- **Separator**
- **Progress**

#### Feedback Components
- **Alert** (Info, success, error, warning)
- **Skeleton** (Loading states)
- **Toast/Sonner** (Notifications)

#### Utility Components
- **Accordion**
- **Carousel**
- **Collapsible**
- **Scroll Area**
- **Resizable**
- **Aspect Ratio**

### 🎨 Custom Components to Publish

These are unique to Great Grants and should be published:

1. **Logo Component**
   - SVG version: 133px × 35px
   - Brand mark variant
   - Color: Teal-600

2. **Application Card**
   - Header with title, status badge
   - Expandable sections list
   - Progress indicator
   - Action menu

3. **Grant Search Card**
   - Header with metadata
   - Description
   - Tags/filters
   - Action buttons (Save, Apply, Share)
   - Difficulty badge
   - Amount display

4. **Readiness Score Card**
   - Circular progress indicator
   - Score display
   - Status badge
   - Items remaining counter

5. **Documentation Upload Card**
   - Title and description
   - Category badge
   - File name display
   - Edit/delete actions

6. **Alert Manager Card** (Saved Alerts)
   - Header with alert name
   - Email and frequency display
   - Toggle switch (teal when active)
   - Frequency dropdown
   - Delete button

---

## Publishing Checklist

### Phase 1: Foundation Tokens
```
□ Publish all color styles (Brand, Gray, Semantic)
□ Create text styles for all typography variants
□ Define spacing variables
□ Set up radius variables
□ Create shadow effects
□ Organize into collections: Color, Typography, Spacing, Effects
```

### Phase 2: Base Components
```
□ Button (all variants with correct states)
□ Input (with focus ring: teal-500)
□ Select (white dropdown background)
□ Checkbox (custom design with teal check)
□ Radio (custom design with teal fill)
□ Switch (teal active, gray inactive, 20px × 36px)
□ Label (14px Cabin Medium, gray-700)
□ Badge (multiple color variants)
```

### Phase 3: Complex Components
```
□ Tabs (horizontal with teal underline)
□ Dialog (white background, shadow-lg)
□ Dropdown Menu (white background)
□ Card (border-gray-200, shadow-md, radius-lg)
□ Alert Dialog (confirmation pattern)
□ Popover (white background)
```

### Phase 4: Custom Components
```
□ Logo component
□ Application Card
□ Grant Search Card
□ Readiness Score Widget
□ Documentation Upload Card
□ Alert Manager Card
```

### Phase 5: Patterns & Templates
```
□ Form layout pattern
□ Settings page layout
□ Dashboard layout
□ Modal patterns
□ Empty states
□ Loading states
```

---

## Naming Conventions

### Color Token Naming
```
Format: [Category]/[Scale]/[Variant]

Examples:
✅ Brand/600                (Primary brand color)
✅ Gray/900                 (Darkest gray)
✅ Success/600              (Primary success)
✅ Border/Primary           (Default border)
✅ Background/Brand-Primary (Light brand background)

❌ Teal-600                 (Don't use color name)
❌ DarkGray                 (Not semantic enough)
```

### Component Naming
```
Format: [Component]/[Variant]/[State]

Examples:
✅ Button/Primary/Default
✅ Button/Primary/Hover
✅ Button/Primary/Disabled
✅ Input/Default/Focus
✅ Tab/Default/Active

❌ PrimaryButton            (No variant separation)
❌ button-hover             (Inconsistent casing)
```

### Text Style Naming
```
Format: Text/[Size]/[Weight]

Examples:
✅ Text/SM/Medium           (14px, weight 500)
✅ Text/Base/Regular        (16px, weight 400)
✅ Display/H1               (Lustria, large)

❌ body-text                (Not scalable)
❌ 14px-medium              (Implementation detail)
```

---

## Maintenance Workflow

### 1. Weekly Sync Checklist
```
□ Review new components added to prototype
□ Check for color token changes in design-tokens.css
□ Verify component variants match implementation
□ Update Figma library with any changes
□ Publish new version with changelog
```

### 2. When Adding New Components

**In Figma:**
1. Create component using existing tokens
2. Name following convention: `Component/Variant/State`
3. Add component description and usage notes
4. Publish to library

**In Code:**
1. Create component in `/src/app/components/ui/`
2. Use CSS variables from `design-tokens.css`
3. Match Figma variant structure
4. Document props and usage

### 3. Token Updates

When updating a token:

**Step 1 - Update Source**
- Figma: Update color/text style
- Code: Update `/src/styles/design-tokens.css`

**Step 2 - Sync**
- Export tokens from Figma (if using Figma Tokens plugin)
- Or manually sync values both ways

**Step 3 - Test**
- Figma: Check all components using the token
- Code: Search for CSS variable usage
- Visual regression test prototype

**Step 4 - Document**
- Update `DESIGN.md` with new values
- Add changelog entry
- Notify team

### 4. Version Control

Use semantic versioning for your Figma library:

```
Major.Minor.Patch

Major: Breaking changes (renamed components, removed variants)
Minor: New components or variants
Patch: Bug fixes, small refinements

Examples:
2.0.0 - Switched from rounded tabs to underline tabs (breaking)
2.1.0 - Added Switch component
2.1.1 - Fixed Button focus ring color
```

---

## Common Issues & Solutions

### Issue 1: Colors Don't Match
**Problem:** Figma teal looks different than prototype
**Solution:** 
- Use exact hex values: Brand/600 = `#0e9384`
- Disable color profile management in Figma (unmanaged colors)
- Check monitor calibration

### Issue 2: Typography Spacing Off
**Problem:** Line heights don't match
**Solution:**
- Use exact px values, not % or auto
- Text/SM/Medium: 14px size, 20px line-height
- Ensure font is embedded correctly

### Issue 3: Shadows Look Different
**Problem:** Shadow appears lighter/darker
**Solution:**
- Use layer-by-layer shadow definition
- Shadow/MD has 2 layers, Shadow/LG has 3 layers
- Copy exact RGBA values from DESIGN.md

### Issue 4: Components Not Responsive
**Problem:** Fixed widths in Figma don't flex
**Solution:**
- Use Auto Layout with "Fill container"
- Set min/max widths when needed
- Use constraints properly

### Issue 5: White Background Has Transparency
**Problem:** Modals/dropdowns show backdrop through them
**Solution:**
- All overlays must be solid `#ffffff` (no transparency)
- Check layer opacity is 100%
- Verify no blur effects on white layers

---

## Quick Reference: Token Usage Map

### Most Used Color Tokens
```
Background    →  #ffffff (solid white)
Text Primary  →  Gray/900 (#181d27)
Text Secondary → Gray/700 (#414651)
Border        →  Gray/200 (#e9eaeb)
Brand Primary →  Brand/600 (#0e9384)
Active State  →  Brand/700 (#107569)
Focus Ring    →  Brand/500 with 50% opacity
```

### Most Used Typography
```
Body Text     →  Text/Base/Regular (16px Cabin)
UI Labels     →  Text/SM/Medium (14px Cabin Medium)
Buttons       →  Text/SM/Medium (14px Cabin Medium)
Small Text    →  Text/XS/Medium (12px Cabin Medium)
H1 Titles     →  Display/H1 (Lustria)
H2-H6         →  Various sizes, Cabin Semibold
```

### Most Used Spacing
```
Card Padding       →  24px (Spacing/2XL)
Button Padding     →  12px 16px (Spacing/LG, Spacing/XL)
Input Padding      →  8px 12px (Spacing/MD, Spacing/LG)
Gap Between Items  →  12px (Spacing/LG)
Section Spacing    →  32px (Spacing/3XL)
```

### Most Used Radius
```
Buttons/Inputs  →  6px (Radius/SM)
Cards          →  8px (Radius/LG)
Modals         →  12px (Radius/XL)
Avatars        →  9999px (Radius/Full)
```

### Most Used Shadows
```
Cards       →  Shadow/MD
Modals      →  Shadow/LG
Dropdowns   →  Shadow/MD
Buttons     →  Shadow/SM (optional)
```

---

## Testing Your Figma Library

### Visual Comparison Checklist

Open the prototype and your Figma file side-by-side:

**Colors:**
```
□ Brand teal matches exactly (#0e9384)
□ Text colors match (Gray/900, Gray/700)
□ Border colors match (Gray/200)
□ Success green matches (#079455)
```

**Typography:**
```
□ Cabin loads correctly
□ Font weights match (Regular 400, Medium 500, Semibold 600)
□ Line heights match exactly
□ H1 uses Lustria, everything else uses Cabin
```

**Components:**
```
□ Button hover states match
□ Input focus ring is teal
□ Tabs have teal underline when active
□ Switch is teal when on, gray when off
□ Dropdowns have white background
□ Modals have white background (no transparency)
```

**Spacing:**
```
□ Card padding is consistent
□ Button padding matches
□ Gap between elements is uniform
```

---

## Resources

**Reference Files:**
- `DESIGN.md` - Complete design system documentation
- `src/styles/design-tokens.css` - Source of truth for all tokens
- `src/app/components/ui/*` - Component implementations

**Prototype Pages to Reference:**
- Account Settings - Tab pattern, switches
- Grant Search - Search card pattern
- Applications - Application card pattern, badges
- Organization Profile - Form patterns, dropdowns
- My Grant Readiness - Score widget pattern

**Tools:**
- Figma Tokens Plugin (optional) - Sync tokens automatically
- Figma Inspect Panel - Copy exact CSS values
- Color Picker - Verify hex values match

---

## Quick Start: 3-Step Publishing

### Step 1: Publish Foundation (30 min)
1. Create color styles from DESIGN.md "Colors" section
2. Create text styles from "Typography" section
3. Test: Build one button using only tokens

### Step 2: Publish Core Components (2 hours)
1. Build Button, Input, Select, Checkbox, Switch
2. Ensure all use color/text tokens
3. Test: Can you build a login form?

### Step 3: Publish Patterns (1-2 hours)
1. Create Card, Modal, Tabs components
2. Build 2-3 common patterns (form layout, settings page)
3. Test: Can team members use library to build pages?

---

**Last Updated:** April 8, 2026
**Prototype Version:** 2.0
**Figma Library Version:** [Update with your version]

---

## Need Help?

If tokens don't match:
1. Check `DESIGN.md` for exact values
2. Compare with `src/styles/design-tokens.css`
3. Use browser inspector on prototype to verify

If components don't match:
1. Check `src/app/components/ui/[component].tsx`
2. Review the component in working prototype
3. Match states (default, hover, focus, disabled)

**Remember:** The prototype code is the source of truth. If Figma and code don't match, update Figma to match the code.
