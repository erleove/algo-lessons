'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Largest Rectangle In Histogram
Given an array of integers heights representing the histogram's bar height,
return the area of the largest rectangle in the histogram.

Target:
- Time: O(n)
- Space: O(n)
*/

function largestRectangleArea(heights) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'classic example',
    run: () => largestRectangleArea([2, 1, 5, 6, 2, 3]),
    expected: 10,
  },
  {
    name: 'two bars',
    run: () => largestRectangleArea([2, 4]),
    expected: 4,
  },
  {
    name: 'all same height',
    run: () => largestRectangleArea([3, 3, 3]),
    expected: 9,
  },
];

if (require.main === module) {
  runTests('Largest Rectangle In Histogram', tests);
}

module.exports = { largestRectangleArea };
