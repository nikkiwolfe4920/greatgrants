/**
 * Card Component
 * Aligned with Untitled UI Design System
 */

import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'ghost';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  interactive?: boolean;
  children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      interactive = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    // Variant styles
    const variantStyles: Record<CardVariant, string> = {
      default: 'bg-white border border-gray-200',
      elevated: 'bg-white shadow-md',
      outlined: 'bg-transparent border border-gray-300',
      ghost: 'bg-gray-50',
    };

    // Padding styles
    const paddingStyles: Record<CardPadding, string> = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    };

    // Interactive styles
    const interactiveStyles = interactive
      ? 'cursor-pointer transition-all duration-150 hover:shadow-lg hover:border-gray-300'
      : '';

    // Base styles
    const baseStyles = `
      rounded-lg
      ${variantStyles[variant]}
      ${paddingStyles[padding]}
      ${interactiveStyles}
      ${className}
    `;

    return (
      <div
        ref={ref}
        className={baseStyles.replace(/\s+/g, ' ').trim()}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card Header Component
export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-start justify-between mb-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = 'CardHeader';

// Card Title Component
export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', children, ...props }, ref) => (
    <h3
      ref={ref}
      className={`text-lg font-semibold text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </h3>
  )
);

CardTitle.displayName = 'CardTitle';

// Card Description Component
export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className = '', children, ...props }, ref) => (
    <p
      ref={ref}
      className={`text-sm text-gray-600 ${className}`}
      {...props}
    >
      {children}
    </p>
  )
);

CardDescription.displayName = 'CardDescription';

// Card Content Component
export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

CardContent.displayName = 'CardContent';

// Card Footer Component
export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center gap-2 mt-4 pt-4 border-t border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = 'CardFooter';

export default Card;
