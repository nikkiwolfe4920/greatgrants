import { Bookmark, BookmarkCheck, Share2, ExternalLink, Calendar, MapPin, TrendingUp } from 'lucide-react'
import type { Grant } from '@/data/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface GrantCardProps {
  grant: Grant
  onSave: (id: string) => void
  onApply?: (grant: Grant) => void
  onShare?: (grant: Grant) => void
}

const difficultyColors = {
  Easy: 'success' as const,
  Medium: 'warning' as const,
  Hard: 'error' as const,
}

const statusColors = {
  open: 'success' as const,
  closing_soon: 'warning' as const,
  closed: 'default' as const,
}

const statusLabels = {
  open: 'Open',
  closing_soon: 'Closing Soon',
  closed: 'Closed',
}

function formatCurrency(n: number) {
  return n >= 1000000
    ? `$${(n / 1000000).toFixed(1)}M`
    : n >= 1000
    ? `$${(n / 1000).toFixed(0)}K`
    : `$${n}`
}

export function GrantCard({ grant, onSave, onApply, onShare }: GrantCardProps) {
  return (
    <Card className="hover:shadow-[var(--shadow-lg)] transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={statusColors[grant.status]} dot size="sm">
                {statusLabels[grant.status]}
              </Badge>
              <Badge variant={difficultyColors[grant.difficulty]} size="sm">
                {grant.difficulty}
              </Badge>
            </div>
            <h3 className="text-base font-semibold text-[var(--text-primary)] leading-tight line-clamp-2">{grant.title}</h3>
            <p className="text-sm text-[var(--text-tertiary)] mt-0.5">{grant.funder}</p>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              onClick={() => onShare?.(grant)}
              className="p-1.5 rounded-md text-[var(--text-quaternary)] hover:text-[var(--text-secondary)] hover:bg-[var(--gray-100)] transition-colors"
              title="Share grant"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => onSave(grant.id)}
              className={cn(
                'p-1.5 rounded-md transition-colors',
                grant.saved
                  ? 'text-[var(--brand-600)] hover:bg-[var(--brand-50)]'
                  : 'text-[var(--text-quaternary)] hover:text-[var(--brand-600)] hover:bg-[var(--brand-50)]'
              )}
              title={grant.saved ? 'Unsave grant' : 'Save grant'}
            >
              {grant.saved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">{grant.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {grant.category.map(cat => (
            <Badge key={cat} variant="outline" size="sm">{cat}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs text-[var(--text-tertiary)] mb-4">
          <span className="flex items-center gap-1.5">
            <span className="font-medium text-[var(--text-primary)] text-sm">
              {formatCurrency(grant.amount.min)}–{formatCurrency(grant.amount.max)}
            </span>
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(grant.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {grant.location}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-[var(--brand-600)]" />
            <span className="text-xs font-medium text-[var(--brand-600)]">{grant.matchScore}% match</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" onClick={() => onApply?.(grant)}>
              <ExternalLink className="h-3.5 w-3.5" />
              View Details
            </Button>
            <Button size="sm" onClick={() => onApply?.(grant)} disabled={grant.status === 'closed'}>
              Apply
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
