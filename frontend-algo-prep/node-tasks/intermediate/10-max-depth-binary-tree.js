'use strict';

const { runTests } = require('../_lib/testRunner');
const { buildBinaryTree } = require('../_lib/structures');

/*
Task: Maximum Depth of Binary Tree
Return the maximum depth of the binary tree.

Target:
- Time: O(n)
- Space: O(h) recursion or O(n) queue
*/

function maxDepth(root) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'balanced tree',
    run: () => maxDepth(buildBinaryTree([3, 9, 20, null, null, 15, 7])),
    expected: 3,
  },
  {
    name: 'single node',
    run: () => maxDepth(buildBinaryTree([1])),
    expected: 1,
  },
  {
    name: 'empty tree',
    run: () => maxDepth(buildBinaryTree([])),
    expected: 0,
  },
];

if (require.main === module) {
  runTests('Maximum Depth of Binary Tree', tests);
}

module.exports = { maxDepth };
