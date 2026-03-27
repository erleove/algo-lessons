'use strict';

const { runTests } = require('../_lib/testRunner');
const { buildBinaryTree } = require('../_lib/structures');

/*
Task: Binary Tree Level Order Traversal
Return the level order traversal of the binary tree values.

Target:
- Time: O(n)
- Space: O(n)
*/

function levelOrder(root) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'classic example',
    run: () => levelOrder(buildBinaryTree([3, 9, 20, null, null, 15, 7])),
    expected: [[3], [9, 20], [15, 7]],
  },
  {
    name: 'single node',
    run: () => levelOrder(buildBinaryTree([1])),
    expected: [[1]],
  },
  {
    name: 'empty tree',
    run: () => levelOrder(buildBinaryTree([])),
    expected: [],
  },
];

if (require.main === module) {
  runTests('Binary Tree Level Order Traversal', tests);
}

module.exports = { levelOrder };
