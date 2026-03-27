'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Search In Rotated Sorted Array
Given a rotated sorted array with unique values, return the index
of target or -1 if it does not exist.

Target:
- Time: O(log n)
- Space: O(1)
*/

function searchRotated(nums, target) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'target found',
    run: () => searchRotated([4, 5, 6, 7, 0, 1, 2], 0),
    expected: 4,
  },
  {
    name: 'target missing',
    run: () => searchRotated([4, 5, 6, 7, 0, 1, 2], 3),
    expected: -1,
  },
  {
    name: 'single element',
    run: () => searchRotated([1], 0),
    expected: -1,
  },
];

if (require.main === module) {
  runTests('Search In Rotated Sorted Array', tests);
}

module.exports = { searchRotated };
