import { updateRatings } from '../dist/esm/index.js';

const startA = 1500;
const startB = 1600;

const result = updateRatings(startA, startB, 1); // A wins
console.log(result);
// { newA: ..., newB: ..., deltaA: ..., expectedA: ... }
