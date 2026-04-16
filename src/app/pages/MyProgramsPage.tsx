import { useState } from 'react'
import { Plus, LayoutGrid, CheckCircle, Clock, ChevronDown } from 'lucide-react'
import { mockPrograms } from '@/data/mockData'
import type { Program } from '@/data/types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const statusConfig = {
  active: { label: 'Active', variant: 'success' as const, icon: CheckCircle },
  planning: { label: 'Planning', variant: 'warning' as const, icon: Clock },
  completed: { label: 'Completed', variant: 'default' as const, icon: CheckCircle },
}

const CATEGORIES = ['Youth Development', 'Education & Technology', 'Health & Wellness', 'Community Development', 'Arts & Culture', 'Environment']

export default function MyProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>(mockPrograms)
  const [showDialog, setShowDialog] = useState(false)
  const [newProgram, setNewProgram] = useState({ title: '', description: '', category: '', budget: '' })

  const handleCreate = () => {
    if (!newProgram.title.trim() || !newProgram.description.trim()) return
    const prog: Program = {
      id: `prog-${Date.now()}`,
      title: newProgram.title,
      description: newProgram.description,
      category: newProgram.category || 'Community Development',
      budget: Number(newProgram.budget) || 0,
      startDate: new Date().toISOString().split('T')[0],
      endDate: '',
      status: 'planning',
      outcomes: [],
    }
    setPrograms(prev => [prog, ...prev])
    setNewProgram({ title: '', description: '', category: '', budget: '' })
    setShowDialog(false)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-[var(--border-primary)] bg-white px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--text-primary)]">My Programs</h1>
            <p className="text-sm text-[var(--text-tertiary)] mt-1">
              Manage your organization's programs and projects
            </p>
          </div>
          <Button size="sm" onClick={() => setShowDialog(true)}>
            <Plus className="h-4 w-4" />
            Add Program
          </Button>
        </div>

        <div className="flex items-center gap-4 mt-4">
          {Object.entries({
            total: programs.length,
            active: programs.filter(p => p.status === 'active').length,
            planning: programs.filter(p => p.status === 'planning').length,
            completed: programs.filter(p => p.status === 'completed').length,
          }).map(([key, count]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="text-lg font-bold text-[var(--text-primary)]">{count}</span>
              <span className="text-sm text-[var(--text-tertiary)] capitalize">{key}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {programs.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <LayoutGrid className="h-12 w-12 text-[var(--text-quaternary)] mb-4" />
            <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">No programs yet</h3>
            <p className="text-sm text-[var(--text-tertiary)] mb-4">Add your first program to get started</p>
            <Button size="sm" onClick={() => setShowDialog(true)}>
              <Plus className="h-4 w-4" />
              Add Program
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 max-w-3xl">
            {programs.map(program => {
              const status = statusConfig[program.status]
              const StatusIcon = status.icon
              return (
                <Card key={program.id} className="hover:shadow-[var(--shadow-lg)] transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={status.variant} size="sm">
                            <StatusIcon className="h-3 w-3" />
                            {status.label}
                          </Badge>
                          <Badge variant="outline" size="sm">{program.category}</Badge>
                        </div>
                        <h3 className="text-base font-semibold text-[var(--text-primary)]">{program.title}</h3>
                      </div>
                      {program.budget > 0 && (
                        <span className="text-sm font-semibold text-[var(--text-primary)] flex-shrink-0">
                          ${program.budget.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">{program.description}</p>

                    {program.outcomes.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-[var(--text-tertiary)] mb-2">Key Outcomes</p>
                        <ul className="space-y-1">
                          {program.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle className="h-3.5 w-3.5 text-[var(--success-600)] mt-0.5 flex-shrink-0" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Program</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              label="Program Title *"
              placeholder="Enter program title"
              value={newProgram.title}
              onChange={e => setNewProgram(p => ({ ...p, title: e.target.value }))}
            />
            <div>
              <label className="text-sm font-medium text-[var(--text-secondary)] block mb-1.5">Description *</label>
              <Textarea
                placeholder="Describe your program..."
                value={newProgram.description}
                onChange={e => setNewProgram(p => ({ ...p, description: e.target.value }))}
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-[var(--text-secondary)] block mb-1.5">Category</label>
                <Select onValueChange={val => setNewProgram(p => ({ ...p, category: val }))}>
                  <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Input
                label="Annual Budget"
                placeholder="$0"
                value={newProgram.budget}
                onChange={e => setNewProgram(p => ({ ...p, budget: e.target.value }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setShowDialog(false)}>Cancel</Button>
            <Button onClick={handleCreate} disabled={!newProgram.title.trim() || !newProgram.description.trim()}>
              Create Program
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
