'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Daily Temperatures
Return an array such that answer[i] is the number of days to wait
after day i to get a warmer temperature. If none exists, return 0.

Target:
- Time: O(n)
- Space: O(n)
*/

function dailyTemperatures(temperatures) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'classic example',
    run: () => dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]),
    expected: [1, 1, 4, 2, 1, 1, 0, 0],
  },
  {
    name: 'strictly increasing',
    run: () => dailyTemperatures([30, 40, 50, 60]),
    expected: [1, 1, 1, 0],
  },
  {
    name: 'strictly decreasing',
    run: () => dailyTemperatures([90, 80, 70]),
    expected: [0, 0, 0],
  },
];

if (require.main === module) {
  runTests('Daily Temperatures', tests);
}

module.exports = { dailyTemperatures };
