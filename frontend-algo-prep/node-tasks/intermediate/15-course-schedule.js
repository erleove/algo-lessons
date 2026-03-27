'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Course Schedule
There are numCourses courses labeled from 0 to numCourses - 1.
Return true if you can finish all courses given prerequisite pairs.

Target:
- Time: O(V + E)
- Space: O(V + E)
*/

function canFinish(numCourses, prerequisites) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'simple possible schedule',
    run: () => canFinish(2, [[1, 0]]),
    expected: true,
  },
  {
    name: 'cycle exists',
    run: () => canFinish(2, [[1, 0], [0, 1]]),
    expected: false,
  },
  {
    name: 'larger acyclic graph',
    run: () => canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]]),
    expected: true,
  },
];

if (require.main === module) {
  runTests('Course Schedule', tests);
}

module.exports = { canFinish };
