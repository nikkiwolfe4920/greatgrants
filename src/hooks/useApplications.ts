/**
 * useApplications Hook
 * Manages grant application data and operations
 */

import { useState, useEffect, useCallback } from 'react';
import { GrantApplication, ApplicationStatus } from '@/data/types';
import { mockApplications } from '@/data/mockData';

export function useApplications(organizationId?: string) {
  const [applications, setApplications] = useState<GrantApplication[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch applications
  const fetchApplications = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));

      let filteredApplications = [...mockApplications];

      if (organizationId) {
        filteredApplications = filteredApplications.filter(
          app => app.organizationId === organizationId
        );
      }

      setApplications(filteredApplications);
    } catch (err) {
      setError('Failed to fetch applications');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [organizationId]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  // Get application by ID
  const getApplication = useCallback(
    (id: string) => applications.find(app => app.id === id),
    [applications]
  );

  // Update application status
  const updateApplicationStatus = useCallback(
    (id: string, status: ApplicationStatus) => {
      setApplications(prev =>
        prev.map(app =>
          app.id === id
            ? { ...app, status, updatedAt: new Date().toISOString() }
            : app
        )
      );
    },
    []
  );

  // Update completion percentage
  const updateCompletionPercentage = useCallback(
    (id: string, percentage: number) => {
      setApplications(prev =>
        prev.map(app =>
          app.id === id
            ? { ...app, completionPercentage: percentage, updatedAt: new Date().toISOString() }
            : app
        )
      );
    },
    []
  );

  // Delete application
  const deleteApplication = useCallback((id: string) => {
    setApplications(prev => prev.filter(app => app.id !== id));
  }, []);

  // Create application
  const createApplication = useCallback((application: Omit<GrantApplication, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newApplication: GrantApplication = {
      ...application,
      id: `app-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setApplications(prev => [...prev, newApplication]);
    return newApplication;
  }, []);

  return {
    applications,
    loading,
    error,
    getApplication,
    updateApplicationStatus,
    updateCompletionPercentage,
    deleteApplication,
    createApplication,
    refetch: fetchApplications,
  };
}
