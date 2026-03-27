'use strict';

const { runTests } = require('../_lib/testRunner');
const { buildLinkedList, linkedListToArray } = require('../_lib/structures');

/*
Task: Merge K Sorted Lists
Merge k sorted linked lists and return the merged sorted list.

Target:
- Time: O(n log k)
- Space: O(k) or O(log k), depending on approach
*/

function mergeKLists(lists) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'classic example',
    run: () =>
      linkedListToArray(
        mergeKLists([
          buildLinkedList([1, 4, 5]),
          buildLinkedList([1, 3, 4]),
          buildLinkedList([2, 6]),
        ]),
      ),
    expected: [1, 1, 2, 3, 4, 4, 5, 6],
  },
  {
    name: 'empty input',
    run: () => linkedListToArray(mergeKLists([])),
    expected: [],
  },
  {
    name: 'single empty list',
    run: () => linkedListToArray(mergeKLists([buildLinkedList([])])),
    expected: [],
  },
];

if (require.main === module) {
  runTests('Merge K Sorted Lists', tests);
}

module.exports = { mergeKLists };
