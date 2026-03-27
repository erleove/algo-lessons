'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Valid Anagram
Return true if string t is an anagram of string s.

Target:
- Time: O(n)
- Space: O(n)
*/

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counts = new Map();

  for (const char of s) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    const nextCount = (counts.get(char) ?? 0) - 1;

    if (nextCount < 0) {
      return false;
    }

    counts.set(char, nextCount);
  }

  return true;
}

const tests = [
  {
    name: 'basic anagram',
    run: () => isAnagram('anagram', 'nagaram'),
    expected: true,
  },
  {
    name: 'different lengths',
    run: () => isAnagram('rat', 'car'),
    expected: false,
  },
  {
    name: 'same letters different counts',
    run: () => isAnagram('aacc', 'ccac'),
    expected: false,
  },
];

if (require.main === module) {
  runTests('Valid Anagram', tests);
}

module.exports = { isAnagram };
