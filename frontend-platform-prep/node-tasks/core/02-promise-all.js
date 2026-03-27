'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Promise.all (subset)

Implement promiseAll(promises) with behavior similar to Promise.all:
- Resolves with an array of results in the same order as the input.
- Rejects as soon as any promise rejects.
- Accepts non-Promise values too (treat as already resolved).

Target:
- Time: O(n)
- Space: O(n)
*/

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const list = Array.from(promises);

    if (list.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(list.length);
    let remaining = list.length;
    let settled = false;

    list.forEach((p, index) => {
      Promise.resolve(p).then(
        (value) => {
          if (settled) return;
          results[index] = value;
          remaining -= 1;
          if (remaining === 0) {
            settled = true;
            resolve(results);
          }
        },
        (reason) => {
          if (settled) return;
          settled = true;
          reject(reason);
        }
      );
    });
  });
}

const delayResolve = (value, ms) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

const delayReject = (reason, ms) =>
  new Promise((_, reject) => setTimeout(() => reject(reason), ms));

const tests = [
  {
    name: 'resolves values in order',
    run: async () =>
      await promiseAll([delayResolve('a', 30), delayResolve('b', 10), 'c']),
    expected: ['a', 'b', 'c'],
  },
  {
    name: 'rejects on first rejection',
    run: async () => {
      try {
        await promiseAll([delayResolve(1, 10), delayReject('nope', 5)]);
        return 'should not happen';
      } catch (e) {
        return e;
      }
    },
    expected: 'nope',
  },
  {
    name: 'empty input resolves to empty array',
    run: async () => await promiseAll([]),
    expected: [],
  },
];

if (require.main === module) {
  runTests('Promise.all (subset)', tests);
}

module.exports = { promiseAll };

