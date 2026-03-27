'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: 3Sum
Return all unique triplets [a, b, c] such that a + b + c = 0.

Target:
- Time: O(n^2)
- Space: O(1) extra, excluding output
*/

function threeSum(nums) {
  // TODO: implement
  throw new Error('Not implemented');
}

function normalizeTriplets(triplets) {
  return triplets
    .map((triplet) => [...triplet].sort((a, b) => a - b))
    .sort((a, b) => a.join(',').localeCompare(b.join(',')));
}

const tests = [
  {
    name: 'classic example',
    run: () => normalizeTriplets(threeSum([-1, 0, 1, 2, -1, -4])),
    expected: normalizeTriplets([[-1, -1, 2], [-1, 0, 1]]),
  },
  {
    name: 'no solution',
    run: () => normalizeTriplets(threeSum([0, 1, 1])),
    expected: [],
  },
  {
    name: 'all zeros',
    run: () => normalizeTriplets(threeSum([0, 0, 0, 0])),
    expected: [[0, 0, 0]],
  },
];

if (require.main === module) {
  runTests('3Sum', tests);
}

module.exports = { threeSum };
