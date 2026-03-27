'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Promise.allSettled (subset)

Implement promiseAllSettled(promises) with behavior similar to Promise.allSettled:
- always resolves (never rejects)
- keeps input order
- each result item:
  - { status: 'fulfilled', value }
  - { status: 'rejected', reason }
*/

function promiseAllSettled(promises) {
  const list = Array.from(promises);
  return Promise.all(
    list.map((p) =>
      Promise.resolve(p).then(
        (value) => ({ status: 'fulfilled', value }),
        (reason) => ({ status: 'rejected', reason })
      )
    )
  );
}

const tests = [
  {
    name: 'handles mixed fulfilled/rejected',
    run: async () =>
      await promiseAllSettled([
        Promise.resolve(1),
        Promise.reject('err'),
        3,
      ]),
    expected: [
      { status: 'fulfilled', value: 1 },
      { status: 'rejected', reason: 'err' },
      { status: 'fulfilled', value: 3 },
    ],
  },
  {
    name: 'empty input returns empty array',
    run: async () => await promiseAllSettled([]),
    expected: [],
  },
];

if (require.main === module) {
  runTests('Promise.allSettled (subset)', tests);
}

module.exports = { promiseAllSettled };

