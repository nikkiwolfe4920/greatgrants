import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  errorMessage?: string
  state?: 'default' | 'error' | 'disabled'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, helperText, errorMessage, state, icon, iconPosition = 'left', ...props }, ref) => {
    const isError = state === 'error' || !!errorMessage
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-[var(--text-secondary)]">{label}</label>
        )}
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-quaternary)]">{icon}</div>
          )}
          <input
            type={type}
            ref={ref}
            disabled={state === 'disabled' || props.disabled}
            className={cn(
              'flex h-9 w-full rounded-md border bg-white px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-placeholder)] outline-none transition-colors',
              'focus:border-[var(--brand-600)] focus:ring-2 focus:ring-[var(--brand-600)]/20',
              'disabled:bg-[var(--bg-disabled)] disabled:text-[var(--text-disabled)] disabled:cursor-not-allowed',
              isError
                ? 'border-[var(--error-600)] focus:ring-[var(--error-600)]/20'
                : 'border-[var(--border-primary)]',
              icon && iconPosition === 'left' ? 'pl-9' : '',
              icon && iconPosition === 'right' ? 'pr-9' : '',
              className
            )}
            {...props}
          />
          {icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-quaternary)]">{icon}</div>
          )}
        </div>
        {errorMessage && <p className="text-xs text-[var(--error-600)]">{errorMessage}</p>}
        {helperText && !errorMessage && <p className="text-xs text-[var(--text-tertiary)]">{helperText}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
