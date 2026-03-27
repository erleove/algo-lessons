'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Valid Parentheses
Return true if every opening bracket has the correct closing bracket
and the order is valid.

Target:
- Time: O(n)
- Space: O(n)
*/

function isValid(s) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'simple valid',
    run: () => isValid('()[]{}'),
    expected: true,
  },
  {
    name: 'wrong nesting',
    run: () => isValid('(]'),
    expected: false,
  },
  {
    name: 'nested valid',
    run: () => isValid('({[]})'),
    expected: true,
  },
];

if (require.main === module) {
  runTests('Valid Parentheses', tests);
}

module.exports = { isValid };
