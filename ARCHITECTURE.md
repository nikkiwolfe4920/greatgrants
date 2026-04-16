# Frontend Architecture Documentation

## Overview

This document outlines the scalable React frontend architecture aligned with the Untitled UI design system. The application follows modern best practices with a component-driven approach, TypeScript for type safety, and a token-based design system.

## Directory Structure

```
src/
├── app/                      # Application routes and pages
│   ├── components/           # Legacy page-specific components (to be refactored)
│   └── App.tsx              # Main application entry
│
├── components/              # Reusable components
│   ├── ui-system/          # Design system primitives
│   │   ├── Button/         # Button component with variants
│   │   ├── Input/          # Input component with states
│   │   ├── Card/           # Card component with sub-components
│   │   ├── Badge/          # Badge component with variants
│   │   └── index.ts        # Component library exports
│   │
│   └── features/           # Feature-specific components
│       └── GrantCard/      # Grant display card
│
├── theme/                   # Design system foundation
│   ├── tokens.ts           # Design token definitions
│   └── ThemeProvider.tsx   # Theme context provider
│
├── hooks/                   # Custom React hooks
│   ├── useGrants.ts        # Grant data management
│   ├── useApplications.ts  # Application data management
│   └── index.ts            # Hook exports
│
├── data/                    # Data layer
│   ├── types.ts            # TypeScript type definitions
│   └── mockData.ts         # Mock data for development
│
└── styles/                  # Global styles
    ├── design-tokens.css   # CSS custom properties
    ├── theme.css           # Theme configuration
    ├── design-system-utilities.css
    └── index.css           # Style imports
```

## Design System Architecture

### 1. Token System

**Location:** `/src/theme/tokens.ts`

The design system is built on a foundation of design tokens that define all visual properties:

```typescript
import { tokens } from '@/theme/tokens';

// Access tokens programmatically
const brandColor = tokens.colors.brand[600];
const spacing = tokens.spacing[16];
const fontSize = tokens.typography.fontSize.base;
```

**Token Categories:**
- **Colors:** Gray scale, brand colors, semantic colors (success, error, warning)
- **Spacing:** 0px to 128px scale
- **Typography:** Font families, sizes, weights, line heights
- **Border Radius:** xs to full
- **Shadows:** xs to 3xl

### 2. Component Architecture

All UI components follow a consistent pattern:

```typescript
// Component Interface
interface ComponentProps {
  variant?: 'primary' | 'secondary' | 'tertiary';  // Visual variants
  size?: 'sm' | 'md' | 'lg';                       // Size variants
  state?: 'default' | 'error' | 'disabled';        // Interactive states
  // ... other props
}

// Component Implementation
const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ variant = 'primary', size = 'md', ...props }, ref) => {
    // Token-based styling
    // No hardcoded values
    return <element className={tokenBasedClasses} {...props} />;
  }
);
```

**Key Principles:**
- ✅ Use props for variants and states
- ✅ Forward refs for component composition
- ✅ Token-based styling only
- ❌ No inline styles
- ❌ No hardcoded values

### 3. Component Library

**Base Components** (`/src/components/ui-system/`)
- **Button:** Multiple variants (primary, secondary, tertiary, ghost, destructive)
- **Input:** With label, helper text, error states, icons
- **Card:** With sub-components (Header, Title, Description, Content, Footer)
- **Badge:** Status indicators with variants

**Feature Components** (`/src/components/features/`)
- **GrantCard:** Complex card component demonstrating composition
- Future: ApplicationCard, OrganizationCard, etc.

## State Management

### Custom Hooks Pattern

Data fetching and state management is handled through custom hooks:

```typescript
// useGrants Hook Example
const {
  grants,              // Grant data
  loading,            // Loading state
  error,              // Error state
  searchParams,       // Current search params
  toggleSaveGrant,    // Save/unsave operation
  updateSearch,       // Update search
  refetch,            // Manual refetch
} = useGrants();
```

**Available Hooks:**
- `useGrants` - Grant search and management
- `useApplications` - Application CRUD operations
- `useTheme` - Theme management (light/dark mode)

### Hook Guidelines

```typescript
// ✅ Good: Declarative data fetching
const { grants, loading } = useGrants({ query: 'education' });

// ✅ Good: Centralized state logic
const { updateApplicationStatus } = useApplications();

// ❌ Avoid: Direct data manipulation in components
// ❌ Avoid: Scattered state logic
```

## Data Layer

### Type System

**Location:** `/src/data/types.ts`

All data structures are fully typed with TypeScript:

```typescript
// Type-safe grant operations
const grant: Grant = {
  id: 'grant-1',
  title: 'Example Grant',
  funder: 'Foundation Name',
  amount: { min: 50000, max: 250000 },
  // ... fully typed
};

// API response types
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Pagination support
interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    total: number;
  };
}
```

### Mock Data

**Location:** `/src/data/mockData.ts`

Development data that matches production API structure:

```typescript
import { mockGrants, mockApplications } from '@/data/mockData';

// Use in development
const grants = mockGrants;

// Replace with API call in production
const grants = await api.getGrants();
```

## Theming System

### Theme Provider

**Location:** `/src/theme/ThemeProvider.tsx`

Manages application theme state:

```typescript
import { ThemeProvider, useTheme } from '@/theme/ThemeProvider';

// Wrap app with provider
<ThemeProvider defaultTheme="light">
  <App />
</ThemeProvider>

// Use in components
const { theme, toggleTheme, setTheme } = useTheme();
```

### CSS Custom Properties

All tokens are available as CSS variables:

```css
/* Colors */
background-color: var(--brand-600);
color: var(--text-primary);

/* Spacing */
padding: var(--spacing-16);
gap: var(--spacing-8);

/* Typography */
font-size: var(--text-base);
font-weight: var(--font-weight-medium);

/* Border & Shadow */
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);
```

### Tailwind Integration

Tokens are mapped to Tailwind classes:

```tsx
// Token-based classes
<div className="bg-brand-600 text-white p-4 rounded-lg shadow-md">
  Content
</div>

// Maps to:
// bg-brand-600 → var(--brand-600)
// p-4 → var(--spacing-16)
// rounded-lg → var(--radius-lg)
// shadow-md → var(--shadow-md)
```

## Component Usage Examples

### Button Component

```tsx
import { Button } from '@/components/ui-system';
import { Plus } from 'lucide-react';

// Primary button
<Button variant="primary" size="md">
  Submit Application
</Button>

// With icon
<Button
  variant="secondary"
  size="lg"
  icon={<Plus className="w-4 h-4" />}
  iconPosition="left"
>
  Add Grant
</Button>

// Loading state
<Button variant="primary" loading>
  Saving...
</Button>

// Disabled state
<Button variant="primary" disabled>
  Not Available
</Button>
```

### Input Component

```tsx
import { Input } from '@/components/ui-system';
import { Search } from 'lucide-react';

// Basic input
<Input
  label="Organization Name"
  placeholder="Enter name..."
  helperText="This will appear on your profile"
/>

// With icon
<Input
  icon={<Search className="w-4 h-4" />}
  iconPosition="left"
  placeholder="Search grants..."
/>

// Error state
<Input
  state="error"
  errorMessage="This field is required"
  value=""
/>

// Different sizes
<Input size="sm" />
<Input size="md" />
<Input size="lg" />
```

### Card Component

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui-system';

<Card variant="default" padding="md">
  <CardHeader>
    <CardTitle>Grant Title</CardTitle>
    <CardDescription>Funding Organization</CardDescription>
  </CardHeader>
  
  <CardContent>
    <p>Grant details and description...</p>
  </CardContent>
  
  <CardFooter>
    <Button variant="primary">Apply</Button>
  </CardFooter>
</Card>
```

### Badge Component

```tsx
import { Badge } from '@/components/ui-system';
import { Check } from 'lucide-react';

// Status badges
<Badge variant="success">Active</Badge>
<Badge variant="error">Closed</Badge>
<Badge variant="warning">Pending</Badge>

// With dot indicator
<Badge variant="success" dot>Online</Badge>

// With icon
<Badge variant="success" icon={<Check className="w-3 h-3" />}>
  Verified
</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

## Best Practices

### Component Development

```typescript
// ✅ DO: Use semantic tokens
<div style={{ color: tokens.semanticColors.text.primary }} />

// ❌ DON'T: Hardcode values
<div style={{ color: '#181d27' }} />

// ✅ DO: Use variant props
<Button variant="primary">Click</Button>

// ❌ DON'T: Conditional styling
<button className={isPrimary ? 'bg-blue' : 'bg-gray'}>Click</button>

// ✅ DO: Compose components
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
</Card>

// ❌ DON'T: Create monolithic components
<MegaCard withTitle withFooter withActions ... />
```

### TypeScript Usage

```typescript
// ✅ DO: Define prop interfaces
interface MyComponentProps {
  title: string;
  onSave: (id: string) => void;
  variant?: 'default' | 'highlighted';
}

// ✅ DO: Use type imports
import type { Grant, Organization } from '@/data/types';

// ✅ DO: Type event handlers
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  // ...
};
```

### State Management

```typescript
// ✅ DO: Use custom hooks for data
const { grants, loading } = useGrants();

// ✅ DO: Keep local state minimal
const [isOpen, setIsOpen] = useState(false);

// ❌ DON'T: Duplicate server state
const [grants, setGrants] = useState([]);
const { grants: serverGrants } = useGrants();
```

## API Integration

### Replacing Mock Data

Current hooks use mock data. To integrate with real APIs:

```typescript
// Before (Mock)
const fetchGrants = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockGrants;
};

// After (API)
const fetchGrants = async () => {
  const response = await fetch('/api/grants');
  return response.json();
};
```

### API Client Structure

```typescript
// src/api/client.ts
export const api = {
  grants: {
    list: (params: SearchParams) => fetch('/api/grants', { ... }),
    get: (id: string) => fetch(`/api/grants/${id}`),
    save: (id: string) => fetch(`/api/grants/${id}/save`, { method: 'POST' }),
  },
  applications: {
    list: () => fetch('/api/applications'),
    create: (data: ApplicationData) => fetch('/api/applications', { method: 'POST', body: ... }),
    update: (id: string, data: Partial<ApplicationData>) => fetch(`/api/applications/${id}`, { method: 'PATCH', body: ... }),
  },
};
```

## Make.com Integration

### Variable-Based Theming

The theme system supports dynamic control via Make.com:

```typescript
// Set theme via Make.com webhook
window.addEventListener('message', (event) => {
  if (event.data.type === 'SET_THEME') {
    setTheme(event.data.theme);
  }
});

// Update design tokens dynamically
document.documentElement.style.setProperty('--brand-600', '#0f766e');
```

### Webhook Integration Points

```typescript
// Example: Update grant data via webhook
export function useWebhookGrants() {
  const { grants, setGrants } = useGrants();
  
  useEffect(() => {
    const handleWebhook = (event: MessageEvent) => {
      if (event.data.type === 'UPDATE_GRANTS') {
        setGrants(event.data.grants);
      }
    };
    
    window.addEventListener('message', handleWebhook);
    return () => window.removeEventListener('message', handleWebhook);
  }, []);
}
```

## Performance Optimization

### Component Memoization

```typescript
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive components
export const GrantCard = memo(({ grant }) => {
  // Component logic
});

// Memoize expensive calculations
const sortedGrants = useMemo(
  () => grants.sort((a, b) => a.matchScore - b.matchScore),
  [grants]
);

// Memoize callbacks
const handleSave = useCallback(
  (id: string) => toggleSaveGrant(id),
  [toggleSaveGrant]
);
```

### Code Splitting

```typescript
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const GrantSearch = lazy(() => import('./components/GrantSearch'));

// Use with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <GrantSearch />
</Suspense>
```

## Testing Strategy

### Component Testing

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui-system';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('applies variant classes', () => {
  render(<Button variant="primary">Click</Button>);
  expect(screen.getByRole('button')).toHaveClass('bg-brand-600');
});
```

### Hook Testing

```typescript
import { renderHook, waitFor } from '@testing-library/react';
import { useGrants } from '@/hooks';

test('fetches grants', async () => {
  const { result } = renderHook(() => useGrants());
  
  await waitFor(() => {
    expect(result.current.loading).toBe(false);
  });
  
  expect(result.current.grants).toHaveLength(3);
});
```

## Migration Checklist

To migrate existing components to the new system:

- [ ] Replace hardcoded colors with token variables
- [ ] Replace hardcoded spacing with spacing tokens
- [ ] Replace hardcoded typography with typography tokens
- [ ] Use design system components instead of custom implementations
- [ ] Add proper TypeScript types
- [ ] Extract data fetching to custom hooks
- [ ] Add proper error handling
- [ ] Test component variants and states

## Resources

- **Design System Tokens:** `/src/theme/tokens.ts`
- **Component Library:** `/src/components/ui-system/`
- **Type Definitions:** `/src/data/types.ts`
- **Mock Data:** `/src/data/mockData.ts`
- **Token Documentation:** `/DESIGN_SYSTEM_MAPPING.md`

## Next Steps

1. **Refactor existing components** to use the new design system
2. **Add remaining UI components** (Select, Textarea, Checkbox, Radio, etc.)
3. **Implement API integration** replacing mock data
4. **Add comprehensive testing** for all components
5. **Set up Storybook** for component documentation
6. **Implement accessibility** features (ARIA labels, keyboard navigation)
7. **Add animation system** using Motion (framer-motion)
8. **Performance monitoring** and optimization

---

**Last Updated:** April 6, 2026  
**Version:** 1.0.0
