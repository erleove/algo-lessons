'use strict';

const { runTests } = require('../_lib/testRunner');
const { ListNode } = require('../_lib/structures');

/*
Task: Linked List Cycle
Return true if the linked list has a cycle.

Target:
- Time: O(n)
- Space: O(1)
*/

function hasCycle(head) {
  // TODO: implement
  throw new Error('Not implemented');
}

function buildCyclicList(values, cycleIndex) {
  if (!values.length) {
    return null;
  }

  const nodes = values.map((value) => new ListNode(value));

  for (let index = 0; index < nodes.length - 1; index += 1) {
    nodes[index].next = nodes[index + 1];
  }

  if (cycleIndex >= 0) {
    nodes[nodes.length - 1].next = nodes[cycleIndex];
  }

  return nodes[0];
}

const tests = [
  {
    name: 'has cycle',
    run: () => hasCycle(buildCyclicList([3, 2, 0, -4], 1)),
    expected: true,
  },
  {
    name: 'no cycle',
    run: () => hasCycle(buildCyclicList([1, 2], -1)),
    expected: false,
  },
  {
    name: 'single node cycle',
    run: () => hasCycle(buildCyclicList([1], 0)),
    expected: true,
  },
];

if (require.main === module) {
  runTests('Linked List Cycle', tests);
}

module.exports = { hasCycle };
