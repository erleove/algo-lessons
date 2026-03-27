'use strict';

const { runTests } = require('../node-tasks/_lib/testRunner');
const {
  ListNode,
  TreeNode,
  buildBinaryTree,
  buildLinkedList,
  linkedListToArray,
} = require('../node-tasks/_lib/structures');

function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left += 1;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right -= 1;
    }
  }

  return water;
}

function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);
  let left = 0;
  let right = nums1.length;

  while (left <= right) {
    const partitionA = Math.floor((left + right) / 2);
    const partitionB = half - partitionA;

    const leftA = partitionA > 0 ? nums1[partitionA - 1] : -Infinity;
    const rightA = partitionA < nums1.length ? nums1[partitionA] : Infinity;
    const leftB = partitionB > 0 ? nums2[partitionB - 1] : -Infinity;
    const rightB = partitionB < nums2.length ? nums2[partitionB] : Infinity;

    if (leftA <= rightB && leftB <= rightA) {
      if (total % 2 === 1) {
        return Math.min(rightA, rightB);
      }

      return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
    }

    if (leftA > rightB) {
      right = partitionA - 1;
    } else {
      left = partitionA + 1;
    }
  }

  throw new Error('Invalid input');
}

function mergeKLists(lists) {
  if (!lists.length) {
    return null;
  }

  function mergeTwo(list1, list2) {
    const dummy = new ListNode();
    let tail = dummy;
    let left = list1;
    let right = list2;

    while (left && right) {
      if (left.val <= right.val) {
        tail.next = left;
        left = left.next;
      } else {
        tail.next = right;
        right = right.next;
      }

      tail = tail.next;
    }

    tail.next = left || right;
    return dummy.next;
  }

  let currentLists = lists;

  while (currentLists.length > 1) {
    const merged = [];

    for (let index = 0; index < currentLists.length; index += 2) {
      const list1 = currentLists[index];
      const list2 = index + 1 < currentLists.length ? currentLists[index + 1] : null;
      merged.push(mergeTwo(list1, list2));
    }

    currentLists = merged;
  }

  return currentLists[0];
}

function serialize(root) {
  if (!root) {
    return '';
  }

  const values = [];
  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const node = queue[index++];

    if (!node) {
      values.push('#');
      continue;
    }

    values.push(String(node.val));
    queue.push(node.left);
    queue.push(node.right);
  }

  while (values.length && values[values.length - 1] === '#') {
    values.pop();
  }

  return values.join(',');
}

function deserialize(data) {
  if (!data) {
    return null;
  }

  const values = data.split(',');
  const root = new TreeNode(Number(values[0]));
  const queue = [root];
  let valueIndex = 1;
  let queueIndex = 0;

  while (queueIndex < queue.length && valueIndex < values.length) {
    const node = queue[queueIndex++];

    const leftValue = values[valueIndex++];
    if (leftValue != null && leftValue !== '#') {
      node.left = new TreeNode(Number(leftValue));
      queue.push(node.left);
    }

    if (valueIndex >= values.length) {
      break;
    }

    const rightValue = values[valueIndex++];
    if (rightValue != null && rightValue !== '#') {
      node.right = new TreeNode(Number(rightValue));
      queue.push(node.right);
    }
  }

  return root;
}

function findWords(board, words) {
  const trie = {};

  for (const word of words) {
    let node = trie;
    for (const char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.word = word;
  }

  const rows = board.length;
  const cols = rows ? board[0].length : 0;
  const found = [];

  function dfs(row, col, node) {
    if (row < 0 || col < 0 || row >= rows || col >= cols) {
      return;
    }

    const char = board[row][col];
    if (char === '#' || !node[char]) {
      return;
    }

    const nextNode = node[char];

    if (nextNode.word) {
      found.push(nextNode.word);
      delete nextNode.word;
    }

    board[row][col] = '#';
    dfs(row + 1, col, nextNode);
    dfs(row - 1, col, nextNode);
    dfs(row, col + 1, nextNode);
    dfs(row, col - 1, nextNode);
    board[row][col] = char;

    if (!Object.keys(nextNode).length) {
      delete node[char];
    }
  }

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      dfs(row, col, trie);
    }
  }

  return found;
}

function largestRectangleArea(heights) {
  const stack = [];
  let best = 0;

  for (let index = 0; index <= heights.length; index += 1) {
    const currentHeight = index === heights.length ? 0 : heights[index];

    while (stack.length && currentHeight < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const leftBoundary = stack.length ? stack[stack.length - 1] : -1;
      const width = index - leftBoundary - 1;
      best = Math.max(best, height * width);
    }

    stack.push(index);
  }

  return best;
}

function treeToLevelOrder(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const node = queue[index++];

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
    name: 'trapping rain water',
    run: () => trap([4, 2, 0, 3, 2, 5]),
    expected: 9,
  },
  {
    name: 'median of arrays',
    run: () => findMedianSortedArrays([1, 2], [3, 4]),
    expected: 2.5,
  },
  {
    name: 'merge k lists',
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
    name: 'serialize roundtrip',
    run: () => treeToLevelOrder(deserialize(serialize(buildBinaryTree([1, 2, 3, null, null, 4, 5])))),
    expected: [1, 2, 3, null, null, 4, 5],
  },
];

if (require.main === module) {
  runTests('Hard Answers', tests);
}

module.exports = {
  deserialize,
  findMedianSortedArrays,
  findWords,
  largestRectangleArea,
  mergeKLists,
  serialize,
  trap,
};
