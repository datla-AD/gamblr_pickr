import type { Outcome } from './types';

/** Simple discrete scoring for prediction games */
export function calculateMatchScore(pick: Outcome, actual: Outcome): number {
  if (pick === actual) return 1;
  if (actual === 0.5) return 0.5;
  return 0;
}
