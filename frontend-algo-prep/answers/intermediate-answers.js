'use strict';

const { runTests } = require('../node-tasks/_lib/testRunner');
const {
  buildBinaryTree,
  buildLinkedList,
  linkedListToArray,
} = require('../node-tasks/_lib/structures');

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

function numIslands(grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] !== '1'
    ) {
      return;
    }

    grid[row][col] = '0';
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === '1') {
        islands += 1;
        dfs(row, col);
      }
    }
  }

  return islands;
}

function climbStairs(n) {
  if (n <= 3) {
    return n;
  }

  let prev2 = 2;
  let prev1 = 3;

  for (let step = 4; step <= n; step += 1) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

function levelOrder(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const levelSize = queue.length - index;
    const level = [];

    for (let count = 0; count < levelSize; count += 1) {
      const node = queue[index++];
      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
}

function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const indegree = Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    indegree[course] += 1;
  }

  const queue = [];

  for (let course = 0; course < numCourses; course += 1) {
    if (indegree[course] === 0) {
      queue.push(course);
    }
  }

  let taken = 0;
  let index = 0;

  while (index < queue.length) {
    const course = queue[index++];
    taken += 1;

    for (const nextCourse of graph[course]) {
      indegree[nextCourse] -= 1;

      if (indegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return taken === numCourses;
}

function rob(nums) {
  let prev2 = 0;
  let prev1 = 0;

  for (const num of nums) {
    const current = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let value = 1; value <= amount; value += 1) {
    for (const coin of coins) {
      if (coin <= value) {
        dp[value] = Math.min(dp[value], dp[value - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

function findKthLargest(nums, k) {
  const targetIndex = nums.length - k;

  function partition(left, right, pivotIndex) {
    const pivot = nums[pivotIndex];
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

    let storeIndex = left;

    for (let index = left; index < right; index += 1) {
      if (nums[index] < pivot) {
        [nums[storeIndex], nums[index]] = [nums[index], nums[storeIndex]];
        storeIndex += 1;
      }
    }

    [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];
    return storeIndex;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const pivotIndex = partition(left, right, right);

    if (pivotIndex === targetIndex) {
      return nums[pivotIndex];
    }

    if (pivotIndex < targetIndex) {
      left = pivotIndex + 1;
    } else {
      right = pivotIndex - 1;
    }
  }

  return -1;
}

const tests = [
  {
    name: 'reverse linked list',
    run: () => linkedListToArray(reverseList(buildLinkedList([1, 2, 3]))),
    expected: [3, 2, 1],
  },
  {
    name: 'max depth',
    run: () => maxDepth(buildBinaryTree([3, 9, 20, null, null, 15, 7])),
    expected: 3,
  },
  {
    name: 'course schedule',
    run: () => canFinish(2, [[1, 0], [0, 1]]),
    expected: false,
  },
  {
    name: 'coin change',
    run: () => coinChange([1, 2, 5], 11),
    expected: 3,
  },
];

if (require.main === module) {
  runTests('Intermediate Answers', tests);
}

module.exports = {
  canFinish,
  climbStairs,
  coinChange,
  findKthLargest,
  hasCycle,
  levelOrder,
  maxDepth,
  numIslands,
  reverseList,
  rob,
};
