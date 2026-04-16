import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[var(--gray-100)] text-[var(--text-secondary)]',
        success: 'bg-[var(--success-50)] text-[var(--success-700)] border border-[var(--success-200)]',
        error: 'bg-[var(--error-50)] text-[var(--error-700)] border border-[var(--error-200)]',
        warning: 'bg-[var(--warning-50)] text-[var(--warning-700)] border border-[var(--warning-200)]',
        brand: 'bg-[var(--brand-50)] text-[var(--brand-700)] border border-[var(--brand-200)]',
        blue: 'bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)]',
        purple: 'bg-[var(--purple-50)] text-[var(--purple-700)] border border-[var(--purple-200)]',
        outline: 'border border-[var(--border-primary)] text-[var(--text-secondary)]',
      },
      size: {
        sm: 'text-[11px] px-2 py-0.5',
        md: 'text-xs px-2.5 py-0.5',
        lg: 'text-sm px-3 py-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
  icon?: React.ReactNode
}

function Badge({ className, variant, size, dot, icon, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
      )}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  )
}

export { Badge, badgeVariants }
