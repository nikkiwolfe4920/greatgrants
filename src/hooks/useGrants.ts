/**
 * useGrants Hook
 * Manages grant data and operations
 */

import { useState, useEffect, useCallback } from 'react';
import { Grant, SearchParams } from '@/data/types';
import { mockGrants } from '@/data/mockData';

export function useGrants(initialParams?: SearchParams) {
  const [grants, setGrants] = useState<Grant[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState<SearchParams>(initialParams || {});

  // Fetch grants (simulated API call)
  const fetchGrants = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Filter grants based on search params
      let filteredGrants = [...mockGrants];

      if (searchParams.query) {
        const query = searchParams.query.toLowerCase();
        filteredGrants = filteredGrants.filter(
          grant =>
            grant.title.toLowerCase().includes(query) ||
            grant.description.toLowerCase().includes(query) ||
            grant.funder.toLowerCase().includes(query)
        );
      }

      if (searchParams.filters) {
        // Apply additional filters
        Object.entries(searchParams.filters).forEach(([key, value]) => {
          if (value && Array.isArray(value) && value.length > 0) {
            filteredGrants = filteredGrants.filter(grant => {
              if (key === 'focusAreas') {
                return value.some(v => grant.focusAreas.includes(v));
              }
              if (key === 'status') {
                return value.includes(grant.status);
              }
              return true;
            });
          }
        });
      }

      // Apply sorting
      if (searchParams.sort) {
        filteredGrants.sort((a, b) => {
          const { field, direction } = searchParams.sort!;
          const aValue = a[field as keyof Grant];
          const bValue = b[field as keyof Grant];

          if (aValue < bValue) return direction === 'asc' ? -1 : 1;
          if (aValue > bValue) return direction === 'asc' ? 1 : -1;
          return 0;
        });
      }

      setGrants(filteredGrants);
    } catch (err) {
      setError('Failed to fetch grants');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchGrants();
  }, [fetchGrants]);

  // Save/unsave grant
  const toggleSaveGrant = useCallback((grantId: string) => {
    setGrants(prev =>
      prev.map(grant =>
        grant.id === grantId ? { ...grant, saved: !grant.saved } : grant
      )
    );
  }, []);

  // Update search params
  const updateSearch = useCallback((params: Partial<SearchParams>) => {
    setSearchParams(prev => ({ ...prev, ...params }));
  }, []);

  // Reset search
  const resetSearch = useCallback(() => {
    setSearchParams({});
  }, []);

  return {
    grants,
    loading,
    error,
    searchParams,
    toggleSaveGrant,
    updateSearch,
    resetSearch,
    refetch: fetchGrants,
  };
}
