'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Longest Substring Without Repeating Characters
Return the length of the longest substring without duplicate characters.

Target:
- Time: O(n)
- Space: O(k)
*/

function lengthOfLongestSubstring(s) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'classic example',
    run: () => lengthOfLongestSubstring('abcabcbb'),
    expected: 3,
  },
  {
    name: 'all same chars',
    run: () => lengthOfLongestSubstring('bbbbb'),
    expected: 1,
  },
  {
    name: 'window needs shrinking',
    run: () => lengthOfLongestSubstring('pwwkew'),
    expected: 3,
  },
];

if (require.main === module) {
  runTests('Longest Substring Without Repeating Characters', tests);
}

module.exports = { lengthOfLongestSubstring };
