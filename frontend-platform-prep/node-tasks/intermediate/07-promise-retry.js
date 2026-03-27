'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Promise retry

Implement retry(taskFn, maxRetries):
- taskFn returns Promise
- retry until taskFn resolves or retries are exhausted
- total attempts = 1 + maxRetries
*/

async function retry(taskFn, maxRetries) {
  let lastError;
  for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
    try {
      return await taskFn();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

const tests = [
  {
    name: 'resolves after transient failures',
    run: async () => {
      let calls = 0;
      const task = async () => {
        calls += 1;
        if (calls < 3) throw new Error('temporary');
        return 'ok';
      };
      return await retry(task, 3);
    },
    expected: 'ok',
  },
  {
    name: 'throws after retries exhausted',
    run: async () => {
      let calls = 0;
      const task = async () => {
        calls += 1;
        throw new Error(`fail-${calls}`);
      };
      try {
        await retry(task, 2);
        return 'unexpected';
      } catch (e) {
        return e.message;
      }
    },
    expected: 'fail-3',
  },
];

if (require.main === module) {
  runTests('Promise retry', tests);
}

module.exports = { retry };

