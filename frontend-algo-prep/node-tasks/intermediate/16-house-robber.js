'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: House Robber
Return the maximum amount of money you can rob without robbing
adjacent houses.

Target:
- Time: O(n)
- Space: O(1) or O(n)
*/

function rob(nums) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'basic case',
    run: () => rob([1, 2, 3, 1]),
    expected: 4,
  },
  {
    name: 'skip best middle house',
    run: () => rob([2, 7, 9, 3, 1]),
    expected: 12,
  },
  {
    name: 'single house',
    run: () => rob([9]),
    expected: 9,
  },
];

if (require.main === module) {
  runTests('House Robber', tests);
}

module.exports = { rob };
