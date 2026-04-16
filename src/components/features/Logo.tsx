import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  collapsed?: boolean
}

export function Logo({ className, collapsed = false }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#0e9384" />
        <path d="M8 16C8 11.582 11.582 8 16 8C18.122 8 20.044 8.826 21.464 10.182L18.636 13.01C17.938 12.38 17.012 12 16 12C13.791 12 12 13.791 12 16C12 18.209 13.791 20 16 20C17.012 20 17.938 19.62 18.636 18.99L21.464 21.818C20.044 23.174 18.122 24 16 24C11.582 24 8 20.418 8 16Z" fill="white" />
        <path d="M20 14H24V18H20V14Z" fill="white" opacity="0.6" />
      </svg>
      {!collapsed && (
        <span className="text-[var(--text-primary)] font-semibold text-base tracking-tight" style={{ fontFamily: 'var(--font-body)' }}>
          Great Grants
        </span>
      )}
    </div>
  )
}
