'use strict';

const { cloneValue, runTests } = require('../_lib/testRunner');

/*
Task: Number of Islands
Given a 2D grid of '1's and '0's, return the number of islands.
An island is formed by connecting adjacent lands horizontally or vertically.

Target:
- Time: O(rows * cols)
- Space: O(rows * cols) worst case
*/

function numIslands(grid) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'one island',
    run: () =>
      numIslands(
        cloneValue([
          ['1', '1', '1', '1', '0'],
          ['1', '1', '0', '1', '0'],
          ['1', '1', '0', '0', '0'],
          ['0', '0', '0', '0', '0'],
        ]),
      ),
    expected: 1,
  },
  {
    name: 'three islands',
    run: () =>
      numIslands(
        cloneValue([
          ['1', '1', '0', '0', '0'],
          ['1', '1', '0', '0', '0'],
          ['0', '0', '1', '0', '0'],
          ['0', '0', '0', '1', '1'],
        ]),
      ),
    expected: 3,
  },
  {
    name: 'empty grid',
    run: () => numIslands(cloneValue([])),
    expected: 0,
  },
];

if (require.main === module) {
  runTests('Number of Islands', tests);
}

module.exports = { numIslands };
