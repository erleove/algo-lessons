'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Top K Frequent Elements
Return the k most frequent elements.

Target:
- Time: Better than O(n log n) is ideal
- Space: O(n)
*/

function topKFrequent(nums, k) {
  // TODO: implement
  throw new Error('Not implemented');
}

function normalize(values) {
  return [...values].sort((a, b) => a - b);
}

const tests = [
  {
    name: 'basic case',
    run: () => normalize(topKFrequent([1, 1, 1, 2, 2, 3], 2)),
    expected: [1, 2],
  },
  {
    name: 'single answer',
    run: () => normalize(topKFrequent([1], 1)),
    expected: [1],
  },
  {
    name: 'negative numbers',
    run: () => normalize(topKFrequent([4, -1, -1, 2, -1, 2, 3], 2)),
    expected: [-1, 2],
  },
];

if (require.main === module) {
  runTests('Top K Frequent Elements', tests);
}

module.exports = { topKFrequent };
