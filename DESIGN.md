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
All modals, dropdowns, select menus, and popovers use solid white backgrounds (`#ffffff`) with no transparency for clarity and accessibility.

### 2. Teal Brand Color
Primary brand color is teal (`#0e9384`) used consistently for:
- Call-to-action buttons
- Active navigation states
- Links and interactive elements
- Brand accents and highlights

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

---

**Last Updated**: April 8, 2026
**Version**: 2.0
**Based on**: Untitled UI Design System
