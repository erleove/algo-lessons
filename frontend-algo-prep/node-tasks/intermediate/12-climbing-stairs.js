'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Climbing Stairs
You can climb 1 or 2 steps at a time.
Return how many distinct ways you can reach the top.

Target:
- Time: O(n)
- Space: O(1) or O(n)
*/

function climbStairs(n) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'n = 2',
    run: () => climbStairs(2),
    expected: 2,
  },
  {
    name: 'n = 3',
    run: () => climbStairs(3),
    expected: 3,
  },
  {
    name: 'n = 5',
    run: () => climbStairs(5),
    expected: 8,
  },
];

if (require.main === module) {
  runTests('Climbing Stairs', tests);
}

module.exports = { climbStairs };
