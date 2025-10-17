export function expectedScore(rA, rB) {
  return 1 / (1 + Math.pow(10, (rB - rA) / 400));
}

export function updateRatings(rA, rB, outcome, kA = 32, kB = 32) {
  const eA = expectedScore(rA, rB);
  const sA = outcome;
  const sB = 1 - outcome;
  const deltaA = Math.round(kA * (sA - eA));
  const deltaB = Math.round(kB * (sB - (1 - eA)));
  return {
    newA: rA + deltaA,
    newB: rB + deltaB,
    deltaA,
    deltaB
  };
}
