/**
 * Button Component
 * Aligned with Untitled UI Design System
 */

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { tokens } from '@/theme/tokens';

// Button Variants
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      icon,
      iconPosition = 'left',
      loading = false,
      disabled,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    // Variant styles
    const variantStyles: Record<ButtonVariant, string> = {
      primary: `
        bg-brand-600 text-white border-brand-600
        hover:bg-brand-700 hover:border-brand-700
        active:bg-brand-800
        focus:ring-4 focus:ring-brand-100
        disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-400
      `,
      secondary: `
        bg-white text-gray-700 border-gray-300
        hover:bg-gray-50
        active:bg-gray-100
        focus:ring-4 focus:ring-gray-100
        disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-300
      `,
      tertiary: `
        bg-transparent text-gray-600 border-transparent
        hover:bg-gray-50
        active:bg-gray-100
        focus:ring-4 focus:ring-gray-100
        disabled:text-gray-300
      `,
      ghost: `
        bg-transparent text-gray-600 border-transparent
        hover:text-gray-900
        active:bg-gray-50
        focus:ring-0
        disabled:text-gray-300
      `,
      destructive: `
        bg-error-600 text-white border-error-600
        hover:bg-error-700 hover:border-error-700
        active:bg-error-800
        focus:ring-4 focus:ring-error-100
        disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-400
      `,
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 text-sm h-9 gap-1.5',
      md: 'px-4 py-2 text-base h-10 gap-2',
      lg: 'px-5 py-2.5 text-base h-11 gap-2',
      xl: 'px-6 py-3 text-lg h-12 gap-2.5',
    };

    // Base styles
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium rounded-lg border
      transition-all duration-150
      focus:outline-none
      disabled:cursor-not-allowed disabled:opacity-60
      ${fullWidth ? 'w-full' : ''}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `;

    return (
      <button
        ref={ref}
        className={baseStyles.replace(/\s+/g, ' ').trim()}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && icon && iconPosition === 'left' && icon}
        {children}
        {!loading && icon && iconPosition === 'right' && icon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
