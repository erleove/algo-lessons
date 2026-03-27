'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Group Anagrams
Group the strings so that each group contains anagrams only.

Target:
- Time: O(n * k log k)
- Space: O(n * k)
*/

function groupAnagrams(strs) {
  // TODO: implement
  throw new Error('Not implemented');
}

function normalizeGroups(groups) {
  return groups
    .map((group) => [...group].sort())
    .sort((a, b) => a.join('|').localeCompare(b.join('|')));
}

const tests = [
  {
    name: 'classic example',
    run: () => normalizeGroups(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])),
    expected: normalizeGroups([['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]),
  },
  {
    name: 'single empty string',
    run: () => normalizeGroups(groupAnagrams([''])),
    expected: normalizeGroups([['']]),
  },
  {
    name: 'single word',
    run: () => normalizeGroups(groupAnagrams(['abc'])),
    expected: normalizeGroups([['abc']]),
  },
];

if (require.main === module) {
  runTests('Group Anagrams', tests);
}

module.exports = { groupAnagrams };
