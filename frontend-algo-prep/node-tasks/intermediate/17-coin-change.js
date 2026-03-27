'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Coin Change
Given coin denominations and an amount, return the fewest number
of coins needed to make up that amount. Return -1 if impossible.

Target:
- Time: O(amount * coins.length)
- Space: O(amount)
*/

function coinChange(coins, amount) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'classic example',
    run: () => coinChange([1, 2, 5], 11),
    expected: 3,
  },
  {
    name: 'impossible amount',
    run: () => coinChange([2], 3),
    expected: -1,
  },
  {
    name: 'zero amount',
    run: () => coinChange([1], 0),
    expected: 0,
  },
];

if (require.main === module) {
  runTests('Coin Change', tests);
}

module.exports = { coinChange };
