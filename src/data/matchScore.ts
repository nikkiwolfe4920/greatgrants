/**
 * Project Fit / Word Match breakdown for a grant. Shared by Grant Search and
 * the dashboard's Recommended module so both show the same Project Fit number.
 */
export function getMatchBreakdown(
  grantId: string,
  relevance: number,
): { projectFit: number; wordMatch: number } {
  // Use grant ID to generate consistent but varied percentages
  const seed = parseInt(grantId) || 1;
  const variance1 = ((seed * 37) % 11) - 5; // -5 to +5
  const variance2 = ((seed * 73) % 11) - 5; // -5 to +5

  const projectFit = Math.min(100, Math.max(50, relevance + variance1));
  const wordMatch = Math.min(100, Math.max(50, relevance + variance2));

  return { projectFit, wordMatch };
}
