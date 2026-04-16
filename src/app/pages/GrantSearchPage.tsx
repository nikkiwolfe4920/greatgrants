import { useState } from 'react'
import { Search, SlidersHorizontal, Bell, BellOff } from 'lucide-react'
import { useGrants } from '@/hooks/useGrants'
import { GrantCard } from '@/components/features/GrantCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

const CATEGORIES = ['Community Development', 'Education', 'Health', 'Youth', 'Arts', 'Environment', 'Technology', 'Housing']
const DIFFICULTIES = ['Easy', 'Medium', 'Hard']

export default function GrantSearchPage() {
  const [searchInput, setSearchInput] = useState('')
  const { grants, loading, searchParams, updateSearch, toggleSaveGrant } = useGrants()
  const [alertSet, setAlertSet] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    updateSearch({ query: searchInput })
  }

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-[var(--border-primary)] bg-white px-8 py-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-body)' }}>
              Grant Search
            </h1>
            <p className="text-sm text-[var(--text-tertiary)] mt-1">
              Discover grants matched to your organization's mission and profile
            </p>
          </div>
          <Button
            variant={alertSet ? 'secondary' : 'default'}
            size="sm"
            onClick={() => setAlertSet(!alertSet)}
          >
            {alertSet ? <BellOff className="h-4 w-4" /> : <Bell className="h-4 w-4" />}
            {alertSet ? 'Remove Alert' : 'Save Alert'}
          </Button>
        </div>

        <form onSubmit={handleSearch} className="flex gap-3">
          <div className="flex-1 relative">
            <Input
              icon={<Search className="h-4 w-4" />}
              iconPosition="left"
              placeholder="Search grants by keyword, funder, or category..."
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              className="text-base"
            />
          </div>
          <Button type="submit" loading={loading}>Search</Button>
          <Button type="button" variant="secondary">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </form>

        <div className="flex items-center gap-3 mt-4 flex-wrap">
          <Select onValueChange={val => updateSearch({ category: val === 'all' ? undefined : val })}>
            <SelectTrigger className="w-44 h-8 text-xs">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select onValueChange={val => updateSearch({ difficulty: val === 'all' ? undefined : val })}>
            <SelectTrigger className="w-36 h-8 text-xs">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {DIFFICULTIES.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
          {searchParams.query && (
            <Badge variant="brand" size="sm">
              "{searchParams.query}"
              <button className="ml-1 hover:opacity-70" onClick={() => { setSearchInput(''); updateSearch({ query: '' }) }}>×</button>
            </Badge>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="rounded-lg border border-[var(--border-primary)] p-6 space-y-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-16 w-full" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : grants.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <Search className="h-12 w-12 text-[var(--text-quaternary)] mb-4" />
            <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">No grants found</h3>
            <p className="text-sm text-[var(--text-tertiary)]">Try adjusting your search terms or filters</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-[var(--text-tertiary)]">
                {grants.length} grant{grants.length !== 1 ? 's' : ''} found
              </p>
              <Select>
                <SelectTrigger className="w-40 h-8 text-xs">
                  <SelectValue placeholder="Sort by: Match" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="match">Best Match</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="amount">Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              {grants.map(grant => (
                <GrantCard
                  key={grant.id}
                  grant={grant}
                  onSave={toggleSaveGrant}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
