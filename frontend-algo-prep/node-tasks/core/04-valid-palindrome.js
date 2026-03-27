'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Valid Palindrome
Return true if the string is a palindrome after converting to lowercase
and removing non-alphanumeric characters.

Target:
- Time: O(n)
- Space: O(1) or O(n), depending on approach
*/

function isPalindrome(s) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'mixed characters',
    run: () => isPalindrome('A man, a plan, a canal: Panama'),
    expected: true,
  },
  {
    name: 'not a palindrome',
    run: () => isPalindrome('race a car'),
    expected: false,
  },
  {
    name: 'empty after cleanup',
    run: () => isPalindrome(' '),
    expected: true,
  },
];

if (require.main === module) {
  runTests('Valid Palindrome', tests);
}

module.exports = { isPalindrome };
