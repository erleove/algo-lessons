'use strict';

const { runTests } = require('../_lib/testRunner');
const { buildBinaryTree } = require('../_lib/structures');

/*
Task: Serialize and Deserialize Binary Tree
Implement serialize(root) and deserialize(data).

Target:
- Time: O(n)
- Space: O(n)
*/

function serialize(root) {
  // TODO: implement
  throw new Error('Not implemented');
}

function deserialize(data) {
  // TODO: implement
  throw new Error('Not implemented');
}

function treeToLevelOrder(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (!node) {
      result.push(null);
      continue;
    }

    result.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }

  while (result.length && result[result.length - 1] == null) {
    result.pop();
  }

  return result;
}

const tests = [
  {
    name: 'balanced tree roundtrip',
    run: () => treeToLevelOrder(deserialize(serialize(buildBinaryTree([1, 2, 3, null, null, 4, 5])))),
    expected: [1, 2, 3, null, null, 4, 5],
  },
  {
    name: 'single node roundtrip',
    run: () => treeToLevelOrder(deserialize(serialize(buildBinaryTree([1])))),
    expected: [1],
  },
  {
    name: 'empty tree roundtrip',
    run: () => treeToLevelOrder(deserialize(serialize(buildBinaryTree([])))),
    expected: [],
  },
];

if (require.main === module) {
  runTests('Serialize and Deserialize Binary Tree', tests);
}

module.exports = {
  deserialize,
  serialize,
};
