import { useState, useCallback } from 'react'
import type { Application } from '@/data/types'
import { mockApplications } from '@/data/mockData'

interface UseApplicationsResult {
  applications: Application[]
  loading: boolean
  error: string | null
  updateApplicationStatus: (id: string, status: Application['status']) => void
  updateSectionContent: (appId: string, sectionId: string, content: string) => void
  createApplication: (grantId: string, grantTitle: string, funder: string, amount: number, deadline: string) => Application
}

export function useApplications(): UseApplicationsResult {
  const [applications, setApplications] = useState<Application[]>(mockApplications)
  const [loading] = useState(false)
  const [error] = useState<string | null>(null)

  const updateApplicationStatus = useCallback((id: string, status: Application['status']) => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status, updatedAt: new Date().toISOString().split('T')[0] } : a))
  }, [])

  const updateSectionContent = useCallback((appId: string, sectionId: string, content: string) => {
    setApplications(prev => prev.map(a => {
      if (a.id !== appId) return a
      const sections = a.sections.map(s =>
        s.id === sectionId ? { ...s, content, completed: content.trim().length > 0 } : s
      )
      const completionPercent = Math.round((sections.filter(s => s.completed).length / sections.length) * 100)
      return { ...a, sections, completionPercent, updatedAt: new Date().toISOString().split('T')[0] }
    }))
  }, [])

  const createApplication = useCallback((
    grantId: string, grantTitle: string, funder: string, amount: number, deadline: string
  ): Application => {
    const newApp: Application = {
      id: `app-${Date.now()}`,
      grantId,
      grantTitle,
      funder,
      amount,
      status: 'draft',
      deadline,
      completionPercent: 0,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      sections: [
        { id: 's1', title: 'Organization Information', type: 'org_info', content: '', required: true, completed: false },
        { id: 's2', title: 'Project Description', type: 'project_desc', content: '', required: true, completed: false, wordLimit: 1000 },
        { id: 's3', title: 'Budget Narrative', type: 'budget', content: '', required: true, completed: false },
      ],
    }
    setApplications(prev => [newApp, ...prev])
    return newApp
  }, [])

  return { applications, loading, error, updateApplicationStatus, updateSectionContent, createApplication }
}
