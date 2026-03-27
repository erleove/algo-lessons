'use strict';

const { isDeepStrictEqual } = require('node:util');

function formatValue(value) {
  return JSON.stringify(value, null, 2);
}

function cloneValue(value) {
  if (typeof structuredClone === 'function') {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
}

async function runTests(problemName, tests) {
  console.log(`\n=== ${problemName} ===`);

  let passed = 0;

  for (let index = 0; index < tests.length; index += 1) {
    const test = tests[index];

    try {
      const actual =
        typeof test.run === 'function' ? await test.run() : undefined;

      const ok = isDeepStrictEqual(actual, test.expected);

      if (ok) {
        passed += 1;
        console.log(`PASS ${index + 1}. ${test.name}`);
        continue;
      }

      console.log(`FAIL ${index + 1}. ${test.name}`);
      console.log(`  expected: ${formatValue(test.expected)}`);
      console.log(`  actual:   ${formatValue(actual)}`);
    } catch (error) {
      console.log(`ERROR ${index + 1}. ${test.name}`);
      console.log(`  ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  console.log(`\n${passed}/${tests.length} tests passed`);

  if (passed !== tests.length) {
    process.exitCode = 1;
  }
}

module.exports = {
  cloneValue,
  runTests,
};

