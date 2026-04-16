import { useState } from 'react'
import { ChevronDown, ChevronUp, MoreHorizontal, Download, CheckSquare } from 'lucide-react'
import type { Application } from '@/data/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

interface ApplicationCardProps {
  application: Application
  onUpdateStatus?: (id: string, status: Application['status']) => void
  onExport?: (application: Application) => void
}

const statusConfig = {
  draft: { label: 'Draft', variant: 'default' as const },
  in_progress: { label: 'In Progress', variant: 'blue' as const },
  submitted: { label: 'Submitted', variant: 'brand' as const },
  awarded: { label: 'Awarded', variant: 'success' as const },
  rejected: { label: 'Rejected', variant: 'error' as const },
}

export function ApplicationCard({ application, onUpdateStatus, onExport }: ApplicationCardProps) {
  const [expanded, setExpanded] = useState(false)
  const status = statusConfig[application.status]
  const completedSections = application.sections.filter(s => s.completed).length

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={status.variant}>{status.label}</Badge>
            </div>
            <h3 className="text-base font-semibold text-[var(--text-primary)] leading-tight">{application.grantTitle}</h3>
            <p className="text-sm text-[var(--text-tertiary)] mt-0.5">{application.funder}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button variant="secondary" size="sm" onClick={() => onExport?.(application)}>
              <Download className="h-3.5 w-3.5" />
              Export
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onUpdateStatus?.(application.id, 'in_progress')}>
                  Mark In Progress
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onUpdateStatus?.(application.id, 'submitted')}>
                  Mark Submitted
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onUpdateStatus?.(application.id, 'awarded')}>
                  Mark Awarded
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
          <div>
            <p className="text-[var(--text-tertiary)] text-xs mb-0.5">Amount</p>
            <p className="font-semibold text-[var(--text-primary)]">
              ${application.amount.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-[var(--text-tertiary)] text-xs mb-0.5">Deadline</p>
            <p className="font-medium text-[var(--text-primary)]">
              {new Date(application.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
          <div>
            <p className="text-[var(--text-tertiary)] text-xs mb-0.5">Progress</p>
            <p className="font-medium text-[var(--text-primary)]">{completedSections}/{application.sections.length} sections</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-[var(--text-tertiary)]">Completion</span>
            <span className="text-xs font-medium text-[var(--text-primary)]">{application.completionPercent}%</span>
          </div>
          <Progress value={application.completionPercent} />
        </div>

        <button
          className="flex items-center gap-1.5 text-sm text-[var(--brand-600)] hover:text-[var(--brand-700)] font-medium transition-colors cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          {expanded ? 'Hide' : 'View'} sections
        </button>

        {expanded && (
          <div className="mt-4 space-y-2 pt-4 border-t border-[var(--border-primary)]">
            {application.sections.map(section => (
              <div key={section.id} className="flex items-center gap-3 py-1.5">
                <CheckSquare
                  className={cn(
                    'h-4 w-4 flex-shrink-0',
                    section.completed ? 'text-[var(--brand-600)]' : 'text-[var(--text-quaternary)]'
                  )}
                />
                <span className={cn(
                  'text-sm flex-1',
                  section.completed ? 'text-[var(--text-primary)]' : 'text-[var(--text-tertiary)]'
                )}>
                  {section.title}
                </span>
                {section.required && !section.completed && (
                  <Badge variant="error" size="sm">Required</Badge>
                )}
                {section.completed && (
                  <Badge variant="success" size="sm">Done</Badge>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
