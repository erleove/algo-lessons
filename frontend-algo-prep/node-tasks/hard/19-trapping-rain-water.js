'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Trapping Rain Water
Given n non-negative integers representing an elevation map where the width
of each bar is 1, compute how much water it can trap after raining.

Target:
- Time: O(n)
- Space: O(1) or O(n), depending on approach
*/

function trap(height) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'classic example',
    run: () => trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]),
    expected: 6,
  },
  {
    name: 'small case',
    run: () => trap([4, 2, 0, 3, 2, 5]),
    expected: 9,
  },
  {
    name: 'monotonic increasing',
    run: () => trap([1, 2, 3, 4]),
    expected: 0,
  },
];

if (require.main === module) {
  runTests('Trapping Rain Water', tests);
}

module.exports = { trap };
