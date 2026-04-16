/**
 * Design Token Type Definitions
 * Aligned with Untitled UI Design System
 */

// Color Tokens
export const colors = {
  // Gray Scale
  gray: {
    25: '#fafafa',
    50: '#f9fafb',
    100: '#f2f4f7',
    200: '#e9eaeb',
    300: '#d0d5dd',
    400: '#98a2b3',
    500: '#717680',
    600: '#535862',
    700: '#3e4450',
    800: '#293056',
    900: '#181d27',
    950: '#0d121c',
  },
  // Brand (Teal)
  brand: {
    25: '#f0fdfa',
    50: '#ccfbf1',
    100: '#99f6e4',
    200: '#5eead4',
    300: '#2dd4bf',
    400: '#14b8a6',
    500: '#0d9488',
    600: '#0f766e',
    700: '#115e59',
    800: '#134e4a',
    900: '#10403d',
    950: '#042f2e',
  },
  // Success (Green)
  success: {
    25: '#f6fef9',
    50: '#ecfdf3',
    100: '#dcfae6',
    200: '#abefc6',
    300: '#75e0a7',
    400: '#47cd89',
    500: '#17b26a',
    600: '#079455',
    700: '#067647',
    800: '#085d3a',
    900: '#074d31',
  },
  // Error (Red)
  error: {
    25: '#fffbfa',
    50: '#fef3f2',
    100: '#fee4e2',
    200: '#fecdca',
    300: '#fda29b',
    400: '#f97066',
    500: '#f04438',
    600: '#d92d20',
    700: '#b42318',
    800: '#912018',
    900: '#7a271a',
  },
  // Warning (Yellow)
  warning: {
    25: '#fffcf5',
    50: '#fffaeb',
    100: '#fef0c7',
    200: '#fedf89',
    300: '#fec84b',
    400: '#fdb022',
    500: '#f79009',
    600: '#dc6803',
    700: '#b54708',
    800: '#93370d',
    900: '#7a2e0e',
  },
  // Base colors
  white: '#ffffff',
  black: '#000000',
} as const;

// Spacing Tokens
export const spacing = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  6: '6px',
  8: '8px',
  10: '10px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  40: '40px',
  48: '48px',
  56: '56px',
  64: '64px',
  80: '80px',
  96: '96px',
  128: '128px',
} as const;

// Typography Tokens
export const typography = {
  fontFamily: {
    body: "'Cabin', sans-serif",
    display: "'Lustria', serif",
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    xs: '18px',
    sm: '20px',
    base: '24px',
    md: '24px',
    lg: '28px',
    xl: '30px',
    '2xl': '32px',
    '3xl': '38px',
    '4xl': '44px',
    '5xl': '60px',
    '6xl': '72px',
    '7xl': '90px',
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.02em',
  },
} as const;

// Border Radius Tokens
export const borderRadius = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '20px',
  '4xl': '24px',
  full: '9999px',
} as const;

// Shadow Tokens
export const shadows = {
  xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  sm: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
  md: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
  lg: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
  xl: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
  '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
  '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
} as const;

// Semantic Color Mappings
export const semanticColors = {
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    tertiary: colors.gray[500],
    quaternary: colors.gray[400],
    disabled: colors.gray[300],
    white: colors.white,
    brand: colors.brand[600],
    error: colors.error[600],
    warning: colors.warning[600],
    success: colors.success[600],
  },
  background: {
    primary: colors.white,
    secondary: colors.gray[50],
    tertiary: colors.gray[25],
    brand: colors.brand[600],
    brandLight: colors.brand[50],
    error: colors.error[600],
    errorLight: colors.error[50],
    warning: colors.warning[600],
    warningLight: colors.warning[50],
    success: colors.success[600],
    successLight: colors.success[50],
  },
  border: {
    primary: colors.gray[200],
    secondary: colors.gray[300],
    tertiary: colors.gray[100],
    brand: colors.brand[600],
    error: colors.error[600],
    disabled: colors.gray[200],
  },
  interactive: {
    hover: 'rgba(0, 0, 0, 0.04)',
    pressed: 'rgba(0, 0, 0, 0.08)',
    focusRing: colors.brand[600],
    focusRingError: colors.error[600],
  },
} as const;

// Export all tokens
export const tokens = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  semanticColors,
} as const;

// Type exports for TypeScript
export type ColorScale = typeof colors.gray;
export type SpacingScale = keyof typeof spacing;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type BorderRadius = keyof typeof borderRadius;
export type Shadow = keyof typeof shadows;

export default tokens;
