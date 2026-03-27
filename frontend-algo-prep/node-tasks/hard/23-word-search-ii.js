'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Word Search II
Given an m x n board of characters and a list of strings words,
return all words on the board.

Target:
- Time: depends on trie/backtracking pruning
- Space: depends on trie size and recursion stack
*/

function findWords(board, words) {
  // TODO: implement
  throw new Error('Not implemented');
}

function normalize(words) {
  return [...words].sort();
}

const tests = [
  {
    name: 'classic example',
    run: () =>
      normalize(
        findWords(
          [
            ['o', 'a', 'a', 'n'],
            ['e', 't', 'a', 'e'],
            ['i', 'h', 'k', 'r'],
            ['i', 'f', 'l', 'v'],
          ],
          ['oath', 'pea', 'eat', 'rain'],
        ),
      ),
    expected: ['eat', 'oath'],
  },
  {
    name: 'single cell board',
    run: () => normalize(findWords([['a']], ['a'])),
    expected: ['a'],
  },
  {
    name: 'no matches',
    run: () => normalize(findWords([['a', 'b'], ['c', 'd']], ['efg'])),
    expected: [],
  },
];

if (require.main === module) {
  runTests('Word Search II', tests);
}

module.exports = { findWords };
