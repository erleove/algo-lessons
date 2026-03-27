'use strict';

const { runTests } = require('../_lib/testRunner');
const { buildLinkedList, linkedListToArray } = require('../_lib/structures');

/*
Task: Reverse Linked List
Reverse a singly linked list and return the new head.

Target:
- Time: O(n)
- Space: O(1)
*/

function reverseList(head) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'multiple nodes',
    run: () => linkedListToArray(reverseList(buildLinkedList([1, 2, 3, 4, 5]))),
    expected: [5, 4, 3, 2, 1],
  },
  {
    name: 'two nodes',
    run: () => linkedListToArray(reverseList(buildLinkedList([1, 2]))),
    expected: [2, 1],
  },
  {
    name: 'empty list',
    run: () => linkedListToArray(reverseList(buildLinkedList([]))),
    expected: [],
  },
];

if (require.main === module) {
  runTests('Reverse Linked List', tests);
}

module.exports = { reverseList };
