'use strict';

const { runTests } = require('../_lib/testRunner');

/*
Task: Product of Array Except Self
Return an array answer such that answer[i] is the product of all
elements of nums except nums[i].

Target:
- Time: O(n)
- Space: O(1) extra, excluding output
*/

function productExceptSelf(nums) {
  // TODO: implement
  throw new Error('Not implemented');
}

const tests = [
  {
    name: 'positive numbers',
    run: () => productExceptSelf([1, 2, 3, 4]),
    expected: [24, 12, 8, 6],
  },
  {
    name: 'contains zero',
    run: () => productExceptSelf([-1, 1, 0, -3, 3]),
    expected: [0, 0, 9, 0, 0],
  },
];

if (require.main === module) {
  runTests('Product Of Array Except Self', tests);
}

module.exports = { productExceptSelf };
