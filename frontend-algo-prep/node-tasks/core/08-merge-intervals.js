'use strict';

const { cloneValue, runTests } = require('../_lib/testRunner');

/*
Task: Merge Intervals
Given an array of intervals where intervals[i] = [start, end],
merge all overlapping intervals and return the result.

Target:
- Time: O(n log n)
- Space: O(n) or O(1) extra, depending on approach
*/

function merge(intervals) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'basic overlap',
    run: () => merge(cloneValue([[1, 3], [2, 6], [8, 10], [15, 18]])),
    expected: [[1, 6], [8, 10], [15, 18]],
  },
  {
    name: 'touching intervals',
    run: () => merge(cloneValue([[1, 4], [4, 5]])),
    expected: [[1, 5]],
  },
  {
    name: 'already separated',
    run: () => merge(cloneValue([[1, 2], [5, 6]])),
    expected: [[1, 2], [5, 6]],
  },
];

if (require.main === module) {
  runTests('Merge Intervals', tests);
}

module.exports = { merge };
