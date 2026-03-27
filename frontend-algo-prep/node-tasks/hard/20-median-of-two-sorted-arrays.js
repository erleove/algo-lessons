'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n, return the median
of the two sorted arrays.

Target:
- Time: O(log(min(m, n)))
- Space: O(1)
*/

function findMedianSortedArrays(nums1, nums2) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'odd total length',
    run: () => findMedianSortedArrays([1, 3], [2]),
    expected: 2,
  },
  {
    name: 'even total length',
    run: () => findMedianSortedArrays([1, 2], [3, 4]),
    expected: 2.5,
  },
  {
    name: 'one empty array',
    run: () => findMedianSortedArrays([], [1]),
    expected: 1,
  },
];

if (require.main === module) {
  runTests('Median of Two Sorted Arrays', tests);
}

module.exports = { findMedianSortedArrays };
