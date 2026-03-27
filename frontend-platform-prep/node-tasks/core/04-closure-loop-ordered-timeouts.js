'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Closure loop (ordered timeouts)

Implement scheduleLogs(n, ms) that returns a Promise resolving to an array [0, 1, ..., n-1].

Constraints:
- You must use setTimeout internally.
- Each scheduled callback must capture its own index value correctly.

Target:
- Time: O(n)
- Space: O(n)
*/

function scheduleLogs(n, ms) {
  return new Promise((resolve) => {
    if (n <= 0) {
      resolve([]);
      return;
    }

    const out = [];
    let remaining = n;

    for (let i = 0; i < n; i += 1) {
      setTimeout(() => {
        out.push(i);
        remaining -= 1;
        if (remaining === 0) {
          resolve(out);
        }
      }, ms);
    }
  });
}

const tests = [
  {
    name: 'returns ordered indices',
    run: async () => await scheduleLogs(5, 5),
    expected: [0, 1, 2, 3, 4],
  },
  {
    name: 'n=0 returns empty array',
    run: async () => await scheduleLogs(0, 5),
    expected: [],
  },
];

if (require.main === module) {
  runTests('Closure loop (ordered timeouts)', tests);
}

module.exports = { scheduleLogs };

