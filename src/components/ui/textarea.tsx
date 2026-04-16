import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-[var(--border-primary)] bg-white px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-placeholder)] outline-none transition-colors resize-y',
          'focus:border-[var(--brand-600)] focus:ring-2 focus:ring-[var(--brand-600)]/20',
          'disabled:bg-[var(--bg-disabled)] disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
