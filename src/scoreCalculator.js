export function calculateMatchScore(pick, actual) {
  // Simple scoring: 1 for correct, 0 for wrong, 0.5 for draw
  if (pick === actual) return 1;
  if (actual === "draw") return 0.5;
  return 0;
}
