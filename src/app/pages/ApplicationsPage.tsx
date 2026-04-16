import { useApplications } from '@/hooks/useApplications'
import { ApplicationCard } from '@/components/features/ApplicationCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Plus, FileText } from 'lucide-react'
import type { Application } from '@/data/types'

const statusGroups = {
  active: ['draft', 'in_progress'] as Application['status'][],
  submitted: ['submitted'] as Application['status'][],
  completed: ['awarded', 'rejected'] as Application['status'][],
}

export default function ApplicationsPage() {
  const { applications, updateApplicationStatus } = useApplications()

  const active = applications.filter(a => statusGroups.active.includes(a.status))
  const submitted = applications.filter(a => statusGroups.submitted.includes(a.status))
  const completed = applications.filter(a => statusGroups.completed.includes(a.status))

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-[var(--border-primary)] bg-white px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--text-primary)]">My Applications</h1>
            <p className="text-sm text-[var(--text-tertiary)] mt-1">
              Track and manage your grant applications
            </p>
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4" />
            New Application
          </Button>
        </div>

        <div className="flex items-center gap-4 mt-4">
          {[
            { label: 'Total', count: applications.length, variant: 'default' as const },
            { label: 'In Progress', count: active.length, variant: 'blue' as const },
            { label: 'Submitted', count: submitted.length, variant: 'brand' as const },
            { label: 'Awarded', count: applications.filter(a => a.status === 'awarded').length, variant: 'success' as const },
          ].map(({ label, count, variant }) => (
            <div key={label} className="flex items-center gap-2">
              <Badge variant={variant}>{count}</Badge>
              <span className="text-sm text-[var(--text-secondary)]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active">
              Active <Badge variant="default" size="sm" className="ml-1.5">{active.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="submitted">
              Submitted <Badge variant="default" size="sm" className="ml-1.5">{submitted.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed <Badge variant="default" size="sm" className="ml-1.5">{completed.length}</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            {active.length === 0 ? (
              <EmptyState title="No active applications" description="Start a new application from the Grant Search page." />
            ) : (
              <div className="space-y-4">
                {active.map(app => (
                  <ApplicationCard key={app.id} application={app} onUpdateStatus={updateApplicationStatus} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="submitted">
            {submitted.length === 0 ? (
              <EmptyState title="No submitted applications" description="Applications you've submitted will appear here." />
            ) : (
              <div className="space-y-4">
                {submitted.map(app => (
                  <ApplicationCard key={app.id} application={app} onUpdateStatus={updateApplicationStatus} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed">
            {completed.length === 0 ? (
              <EmptyState title="No completed applications" description="Awarded and rejected applications will appear here." />
            ) : (
              <div className="space-y-4">
                {completed.map(app => (
                  <ApplicationCard key={app.id} application={app} onUpdateStatus={updateApplicationStatus} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-48 text-center">
      <FileText className="h-10 w-10 text-[var(--text-quaternary)] mb-3" />
      <h3 className="text-base font-medium text-[var(--text-primary)] mb-1">{title}</h3>
      <p className="text-sm text-[var(--text-tertiary)]">{description}</p>
    </div>
  )
}
