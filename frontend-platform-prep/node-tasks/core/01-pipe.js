'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Pipe (sync + async)

Implement pipe(...fns) that returns a function.
Calling that function with an initial value must apply the functions left-to-right.

Requirements:
- Supports both sync and async functions (steps may return plain values or Promises).
- Execution is sequential.

Target:
- Time: O(k), where k is number of functions
- Space: O(1) (excluding call stack / promises)
*/

function pipe(...fns) {
  return async (initialValue) => {
    let result = initialValue;
    for (const fn of fns) {
      result = await fn(result);
    }
    return result;
  };
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const tests = [
  {
    name: 'works with sync functions',
    run: () => pipe((x) => x + 1, (x) => x * 2)(10),
    expected: 22,
  },
  {
    name: 'works with async functions',
    run: async () =>
      await pipe(
        async (x) => {
          await delay(10);
          return x + 5;
        },
        async (x) => {
          await delay(10);
          return x * 3;
        }
      )(4),
    expected: 27,
  },
  {
    name: 'works with mix of sync and async functions',
    run: async () =>
      await pipe(
        (x) => x + 2,
        async (x) => {
          await delay(10);
          return x * 10;
        },
        (x) => x - 3
      )(1),
    expected: 27,
  },
  {
    name: 'supports zero functions (identity)',
    run: async () => await pipe()(123),
    expected: 123,
  },
];

if (require.main === module) {
  runTests('Pipe (sync + async)', tests);
}

module.exports = { pipe };

