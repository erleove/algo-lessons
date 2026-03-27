'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Two Sum
Return indices of the two numbers such that they add up to target.
You may assume exactly one solution exists.

Target:
- Time: O(n)
- Space: O(n)
*/

function twoSum(nums, target) {
  const seen = new Map();

  for (let index = 0; index < nums.length; index += 1) {
    const value = nums[index];
    const complement = target - value;

    if (seen.has(complement)) {
      return [seen.get(complement), index];
    }

    seen.set(value, index);
  }

  throw new Error('Expected exactly one valid pair');
}

const tests = [
  {
    name: 'basic case',
    run: () => twoSum([2, 7, 11, 15], 9),
    expected: [0, 1],
  },
  {
    name: 'later pair',
    run: () => twoSum([3, 2, 4], 6),
    expected: [1, 2],
  },
  {
    name: 'duplicate values',
    run: () => twoSum([3, 3], 6),
    expected: [0, 1],
  },
];

if (require.main === module) {
  runTests('Two Sum', tests);
}

module.exports = { twoSum };
