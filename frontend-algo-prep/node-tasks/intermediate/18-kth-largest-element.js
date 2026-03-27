'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Kth Largest Element In An Array
Return the kth largest element in the array.

Target:
- Time: O(n log k) with heap, or average O(n) with quickselect
- Space: O(k) or O(1), depending on approach
*/

function findKthLargest(nums, k) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'basic case',
    run: () => findKthLargest([3, 2, 1, 5, 6, 4], 2),
    expected: 5,
  },
  {
    name: 'with duplicates',
    run: () => findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4),
    expected: 4,
  },
  {
    name: 'single element',
    run: () => findKthLargest([1], 1),
    expected: 1,
  },
];

if (require.main === module) {
  runTests('Kth Largest Element In An Array', tests);
}

module.exports = { findKthLargest };
