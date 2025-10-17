import type { Outcome, Rating, UpdateResult } from './types';

export function expectedScore(rA: Rating, rB: Rating): number {
  return 1 / (1 + Math.pow(10, (rB - rA) / 400));
}

/**
 * updateRatings
 * outcome: 1 (A wins), 0.5 (draw), 0 (B wins)
 * kA/kB can come from a policy upstream (new users, uncertainty, etc.)
 */
export function updateRatings(
  rA: Rating,
  rB: Rating,
  outcome: Outcome,
  kA = 32,
  kB = 32
): UpdateResult {
  const eA = expectedScore(rA, rB);
  const eB = 1 - eA;
  const sA = outcome;
  const sB = 1 - outcome;

  const deltaA = Math.round(kA * (sA - eA));
  const deltaB = Math.round(kB * (sB - eB));

  return {
    newA: rA + deltaA,
    newB: rB + deltaB,
    deltaA,
    deltaB,
    expectedA: eA,
    expectedB: eB
  };
}
