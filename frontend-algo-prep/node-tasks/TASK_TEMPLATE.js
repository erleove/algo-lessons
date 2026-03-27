'use strict';

const { runTests } = require('./_lib/testRunner');

/*
Task: Replace With Problem Name
Write the description here.

Target:
- Time: O(...)
- Space: O(...)
*/

function solve(input) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'replace with first test',
    run: () => solve('replace me'),
    expected: 'replace me',
  },
];

if (require.main === module) {
  runTests('Replace With Problem Name', tests);
}

module.exports = { solve };
