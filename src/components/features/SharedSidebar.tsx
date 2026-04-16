import { Link, useLocation } from 'react-router'
import {
  Search, FileText, Building2, LayoutGrid, BarChart3,
  Settings, LogOut, ChevronRight, Building
} from 'lucide-react'
import { Logo } from './Logo'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuRadioGroup
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const navItems = [
  { icon: Search, label: 'Grant Search', path: '/' },
  { icon: FileText, label: 'My Applications', path: '/applications' },
  { icon: Building2, label: 'Organizations', path: '/organizations' },
  { icon: LayoutGrid, label: 'My Programs', path: '/programs' },
  { icon: BarChart3, label: 'Grant Readiness', path: '/readiness' },
  { icon: Settings, label: 'Account Settings', path: '/settings' },
]

const organizations = [
  { id: 'org-1', name: 'Bright Futures Foundation', initials: 'BF' },
  { id: 'org-2', name: 'Green City Alliance', initials: 'GC' },
  { id: 'org-3', name: 'Arts Collective Network', initials: 'AC' },
]

export function SharedSidebar() {
  const location = useLocation()
  const [selectedOrg, setSelectedOrg] = useState(organizations[0].id)
  const currentOrg = organizations.find(o => o.id === selectedOrg) || organizations[0]

  return (
    <aside className="flex flex-col h-full w-[var(--sidebar-width)] border-r border-[var(--border-primary)] bg-white">
      <div className="p-5 border-b border-[var(--border-primary)]">
        <Logo />
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = path === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(path)
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-[var(--brand-50)] text-[var(--brand-700)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--gray-50)] hover:text-[var(--text-primary)]'
              )}
            >
              <Icon className={cn('h-4 w-4 flex-shrink-0', isActive ? 'text-[var(--brand-600)]' : 'text-[var(--text-quaternary)]')} />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="p-3 border-t border-[var(--border-primary)]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-[var(--gray-50)] transition-colors cursor-pointer outline-none">
              <div className="relative flex-shrink-0">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">{currentOrg.initials}</AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[var(--success-600)] border-2 border-white" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-sm font-medium text-[var(--text-primary)] truncate">{currentOrg.name}</p>
                <p className="text-xs text-[var(--text-tertiary)] truncate">admin@org.com</p>
              </div>
              <ChevronRight className="h-3 w-3 text-[var(--text-quaternary)] flex-shrink-0" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="start" className="w-80">
            <div className="p-4">
              <p className="text-xs font-semibold text-[var(--text-tertiary)] mb-3">Switch organizations</p>
              <DropdownMenuRadioGroup value={selectedOrg} onValueChange={setSelectedOrg}>
                <div className="space-y-1">
                  {organizations.map(org => (
                    <button
                      key={org.id}
                      onClick={() => setSelectedOrg(org.id)}
                      className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-[var(--gray-50)] transition-colors cursor-pointer"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-[var(--gray-100)] text-[var(--text-secondary)] text-sm font-semibold">{org.initials}</AvatarFallback>
                      </Avatar>
                      <span className="flex-1 text-sm font-medium text-[var(--text-primary)] text-left">{org.name}</span>
                      <div className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                        selectedOrg === org.id
                          ? 'border-[var(--brand-600)] bg-[var(--brand-600)]'
                          : 'border-[var(--gray-300)] bg-white'
                      )}>
                        {selectedOrg === org.id && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </DropdownMenuRadioGroup>
            </div>
            <DropdownMenuSeparator />
            <Link to="/organizations">
              <DropdownMenuItem className="mx-2 my-1 rounded-lg py-3 cursor-pointer">
                <Building className="h-4 w-4 text-[var(--text-quaternary)]" />
                <span>My Organization ({organizations.length})</span>
                <span className="ml-auto font-mono text-[var(--text-quaternary)]">⌘O</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="mx-2 mb-1 rounded-lg py-3 cursor-pointer text-[var(--error-600)] focus:text-[var(--error-600)] focus:bg-[var(--error-50)]">
              <LogOut className="h-4 w-4" />
              <span>Sign out</span>
              <span className="ml-auto font-mono text-[var(--text-quaternary)]">⌃⌘Q</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  )
}
