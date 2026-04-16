import { useState, useEffect, useCallback } from 'react'
import type { Grant, SearchParams } from '@/data/types'
import { mockGrants } from '@/data/mockData'

interface UseGrantsResult {
  grants: Grant[]
  loading: boolean
  error: string | null
  searchParams: SearchParams
  updateSearch: (params: Partial<SearchParams>) => void
  toggleSaveGrant: (id: string) => void
  refetch: () => void
}

export function useGrants(initialParams: Partial<SearchParams> = {}): UseGrantsResult {
  const [grants, setGrants] = useState<Grant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchParams, setSearchParams] = useState<SearchParams>({
    query: '',
    ...initialParams,
  })

  const fetchGrants = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      await new Promise(resolve => setTimeout(resolve, 400))
      let filtered = [...mockGrants]
      if (searchParams.query) {
        const q = searchParams.query.toLowerCase()
        filtered = filtered.filter(g =>
          g.title.toLowerCase().includes(q) ||
          g.funder.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.category.some(c => c.toLowerCase().includes(q))
        )
      }
      if (searchParams.category) {
        filtered = filtered.filter(g => g.category.includes(searchParams.category!))
      }
      if (searchParams.difficulty) {
        filtered = filtered.filter(g => g.difficulty === searchParams.difficulty)
      }
      setGrants(filtered)
    } catch {
      setError('Failed to load grants. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [searchParams])

  useEffect(() => {
    fetchGrants()
  }, [fetchGrants])

  const updateSearch = useCallback((params: Partial<SearchParams>) => {
    setSearchParams(prev => ({ ...prev, ...params }))
  }, [])

  const toggleSaveGrant = useCallback((id: string) => {
    setGrants(prev => prev.map(g => g.id === id ? { ...g, saved: !g.saved } : g))
  }, [])

  return { grants, loading, error, searchParams, updateSearch, toggleSaveGrant, refetch: fetchGrants }
}
