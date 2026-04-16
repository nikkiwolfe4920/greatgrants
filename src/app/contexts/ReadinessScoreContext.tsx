import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ReadinessScoreContextType {
  score: number;
  setScore: (score: number) => void;
  requiredItemsRemaining: number;
  setRequiredItemsRemaining: (count: number) => void;
  orgProfileItemsRemaining: number;
  setOrgProfileItemsRemaining: (count: number) => void;
}

const ReadinessScoreContext = createContext<ReadinessScoreContextType | undefined>(undefined);

export function ReadinessScoreProvider({ children }: { children: ReactNode }) {
  const [score, setScoreState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('readinessScore');
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  const [requiredItemsRemaining, setRequiredItemsRemainingState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('requiredItemsRemaining');
      return saved ? parseInt(saved, 10) : 4; // Default to 4 required items
    }
    return 4;
  });

  const [orgProfileItemsRemaining, setOrgProfileItemsRemainingState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('orgProfileItemsRemaining');
      return saved ? parseInt(saved, 10) : 4; // Default to 4 required profile items
    }
    return 4;
  });

  const setScore = (newScore: number) => {
    setScoreState(newScore);
    if (typeof window !== 'undefined') {
      localStorage.setItem('readinessScore', newScore.toString());
    }
  };

  const setRequiredItemsRemaining = (count: number) => {
    setRequiredItemsRemainingState(count);
    if (typeof window !== 'undefined') {
      localStorage.setItem('requiredItemsRemaining', count.toString());
    }
  };

  const setOrgProfileItemsRemaining = (count: number) => {
    setOrgProfileItemsRemainingState(count);
    if (typeof window !== 'undefined') {
      localStorage.setItem('orgProfileItemsRemaining', count.toString());
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('readinessScore');
      if (saved) {
        setScoreState(parseInt(saved, 10));
      }
      const savedRequired = localStorage.getItem('requiredItemsRemaining');
      if (savedRequired) {
        setRequiredItemsRemainingState(parseInt(savedRequired, 10));
      }
      const savedOrgProfile = localStorage.getItem('orgProfileItemsRemaining');
      if (savedOrgProfile) {
        setOrgProfileItemsRemainingState(parseInt(savedOrgProfile, 10));
      }
    }
  }, []);

  return (
    <ReadinessScoreContext.Provider value={{ 
      score, 
      setScore, 
      requiredItemsRemaining, 
      setRequiredItemsRemaining,
      orgProfileItemsRemaining,
      setOrgProfileItemsRemaining
    }}>
      {children}
    </ReadinessScoreContext.Provider>
  );
}

export function useReadinessScore() {
  const context = useContext(ReadinessScoreContext);
  if (context === undefined) {
    // Return safe defaults instead of throwing to handle HMR and edge cases gracefully
    // This can occur during initial render or hot module replacement
    return {
      score: 0,
      setScore: () => {},
      requiredItemsRemaining: 4,
      setRequiredItemsRemaining: () => {},
      orgProfileItemsRemaining: 4,
      setOrgProfileItemsRemaining: () => {},
    };
  }
  return context;
}