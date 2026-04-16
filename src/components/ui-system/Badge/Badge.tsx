/**
 * Badge Component
 * Aligned with Untitled UI Design System
 */

import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral' | 'brand';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'neutral',
      size = 'md',
      dot = false,
      icon,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    // Variant styles
    const variantStyles: Record<BadgeVariant, string> = {
      success: 'bg-success-50 text-success-700 border-success-200',
      error: 'bg-error-50 text-error-700 border-error-200',
      warning: 'bg-warning-50 text-warning-700 border-warning-200',
      info: 'bg-brand-50 text-brand-700 border-brand-200',
      neutral: 'bg-gray-50 text-gray-700 border-gray-200',
      brand: 'bg-brand-50 text-brand-700 border-brand-200',
    };

    // Size styles
    const sizeStyles: Record<BadgeSize, string> = {
      sm: 'px-2 py-0.5 text-xs gap-1',
      md: 'px-2.5 py-1 text-sm gap-1.5',
      lg: 'px-3 py-1.5 text-base gap-2',
    };

    // Dot color
    const dotColors: Record<BadgeVariant, string> = {
      success: 'bg-success-600',
      error: 'bg-error-600',
      warning: 'bg-warning-600',
      info: 'bg-brand-600',
      neutral: 'bg-gray-600',
      brand: 'bg-brand-600',
    };

    // Base styles
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium rounded-full border
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `;

    return (
      <span
        ref={ref}
        className={baseStyles.replace(/\s+/g, ' ').trim()}
        {...props}
      >
        {dot && (
          <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />
        )}
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
