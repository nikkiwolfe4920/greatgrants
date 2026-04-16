import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: 'group toast group-[.toaster]:bg-white group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--border-primary)] group-[.toaster]:shadow-[var(--shadow-lg)]',
          description: 'group-[.toast]:text-[var(--text-tertiary)]',
          actionButton: 'group-[.toast]:bg-[var(--brand-600)] group-[.toast]:text-white',
          cancelButton: 'group-[.toast]:bg-[var(--gray-100)] group-[.toast]:text-[var(--text-secondary)]',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
