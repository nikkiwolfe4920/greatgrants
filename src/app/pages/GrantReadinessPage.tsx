import { CheckCircle, AlertCircle, XCircle } from 'lucide-react'
import { mockReadinessScore } from '@/data/mockData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

const statusConfig = {
  strong: { label: 'Strong', color: 'text-[var(--success-700)]', bg: 'bg-[var(--success-50)]', border: 'border-[var(--success-200)]', icon: CheckCircle },
  moderate: { label: 'Moderate', color: 'text-[var(--warning-700)]', bg: 'bg-[var(--warning-50)]', border: 'border-[var(--warning-200)]', icon: AlertCircle },
  needs_work: { label: 'Needs Work', color: 'text-[var(--error-700)]', bg: 'bg-[var(--error-50)]', border: 'border-[var(--error-200)]', icon: XCircle },
}

function ScoreCircle({ score }: { score: number }) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (score / 100) * circumference
  const color = score >= 80 ? '#079455' : score >= 60 ? '#dc6803' : '#d92d20'

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="140" height="140" className="-rotate-90">
        <circle cx="70" cy="70" r={radius} fill="none" stroke="#e9eaeb" strokeWidth="10" />
        <circle
          cx="70" cy="70" r={radius} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      <div className="absolute text-center">
        <span className="text-3xl font-bold text-[var(--text-primary)]">{score}</span>
        <span className="block text-xs text-[var(--text-tertiary)]">/ 100</span>
      </div>
    </div>
  )
}

export default function GrantReadinessPage() {
  const readiness = mockReadinessScore

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-[var(--border-primary)] bg-white px-8 py-6">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">My Grant Readiness</h1>
        <p className="text-sm text-[var(--text-tertiary)] mt-1">
          Track your organization's readiness to apply for grants
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-3xl space-y-6">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-8">
                <ScoreCircle score={readiness.overall} />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
                    Overall Readiness Score
                  </h2>
                  <p className="text-sm text-[var(--text-tertiary)] mb-4">
                    Your organization is {readiness.overall >= 80 ? 'well-prepared' : readiness.overall >= 60 ? 'moderately prepared' : 'still building capacity'} to apply for grants.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {readiness.categories.map(cat => {
                      const status = statusConfig[cat.status]
                      return (
                        <Badge key={cat.name} variant="outline" size="sm" className={cn(status.color)}>
                          {cat.name}: {cat.score}%
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {readiness.categories.map(category => {
            const status = statusConfig[category.status]
            const StatusIcon = status.icon
            return (
              <Card key={category.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <StatusIcon className={cn('h-4 w-4', status.color)} />
                      {category.name}
                    </CardTitle>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" size="sm" className={cn(status.color, status.bg, status.border)}>
                        {status.label}
                      </Badge>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{category.score}%</span>
                    </div>
                  </div>
                  <Progress value={category.score} className="h-1.5" />
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {category.items.map(item => (
                      <li key={item.id} className="flex items-center gap-3">
                        <Checkbox checked={item.completed} readOnly className="flex-shrink-0" />
                        <span className={cn(
                          'text-sm flex-1',
                          item.completed ? 'text-[var(--text-primary)] line-through opacity-60' : 'text-[var(--text-secondary)]'
                        )}>
                          {item.label}
                        </span>
                        {item.required && !item.completed && (
                          <Badge variant="error" size="sm">Required</Badge>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}

          <Card className="bg-[var(--brand-50)] border-[var(--brand-200)]">
            <CardContent className="p-6">
              <h3 className="font-semibold text-[var(--brand-700)] mb-2">Improve Your Score</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Complete the missing items above to increase your grant readiness score and unlock more grant opportunities.
              </p>
              <Button size="sm">View Recommended Grants</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
