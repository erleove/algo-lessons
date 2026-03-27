'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Binary Search
Given a sorted array of integers and a target, return its index.
Return -1 if the target is not found.

Target:
- Time: O(log n)
- Space: O(1)
*/

function search(nums, target) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'target exists',
    run: () => search([-1, 0, 3, 5, 9, 12], 9),
    expected: 4,
  },
  {
    name: 'target missing',
    run: () => search([-1, 0, 3, 5, 9, 12], 2),
    expected: -1,
  },
  {
    name: 'single element',
    run: () => search([5], 5),
    expected: 0,
  },
];

if (require.main === module) {
  runTests('Binary Search', tests);
}

module.exports = { search };
