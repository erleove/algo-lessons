'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Contains Duplicate
Return true if any value appears at least twice in the array.

Example:
containsDuplicate([1, 2, 3, 1]) -> true

Target:
- Time: O(n)
- Space: O(n)
*/

function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

const tests = [
  {
    name: 'has duplicate',
    run: () => containsDuplicate([1, 2, 3, 1]),
    expected: true,
  },
  {
    name: 'all unique',
    run: () => containsDuplicate([1, 2, 3, 4]),
    expected: false,
  },
  {
    name: 'negative numbers',
    run: () => containsDuplicate([-1, -2, -3, -1]),
    expected: true,
  },
];

if (require.main === module) {
  runTests('Contains Duplicate', tests);
}

module.exports = { containsDuplicate };
