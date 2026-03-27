'use strict';

const { runTests } = require('../node-tasks/_lib/testRunner');

function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counts = new Map();

  for (const char of s) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    const next = (counts.get(char) ?? 0) - 1;
    if (next < 0) {
      return false;
    }
    counts.set(char, next);
  }

  return true;
}

function twoSum(nums, target) {
  const seen = new Map();

  for (let index = 0; index < nums.length; index += 1) {
    const value = nums[index];
    const complement = target - value;

    if (seen.has(complement)) {
      return [seen.get(complement), index];
    }

    seen.set(value, index);
  }

  throw new Error('No valid pair found');
}

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-z0-9]/i.test(s[left])) {
      left += 1;
    }

    while (left < right && !/[a-z0-9]/i.test(s[right])) {
      right -= 1;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
}

function lengthOfLongestSubstring(s) {
  const lastSeen = new Map();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right += 1) {
    const char = s[right];

    if (lastSeen.has(char) && lastSeen.get(char) >= left) {
      left = lastSeen.get(char) + 1;
    }

    lastSeen.set(char, right);
    best = Math.max(best, right - left + 1);
  }

  return best;
}

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function isValid(s) {
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];

  for (const char of s) {
    if (!(char in pairs)) {
      stack.push(char);
      continue;
    }

    if (stack.pop() !== pairs[char]) {
      return false;
    }
  }

  return stack.length === 0;
}

function merge(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const result = [sorted[0].slice()];

  for (let index = 1; index < sorted.length; index += 1) {
    const [start, end] = sorted[index];
    const last = result[result.length - 1];

    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      result.push([start, end]);
    }
  }

  return result;
}

function groupAnagrams(strs) {
  const groups = new Map();

  for (const word of strs) {
    const key = [...word].sort().join('');

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(word);
  }

  return [...groups.values()];
}

function productExceptSelf(nums) {
  const result = Array(nums.length).fill(1);
  let prefix = 1;

  for (let index = 0; index < nums.length; index += 1) {
    result[index] = prefix;
    prefix *= nums[index];
  }

  let suffix = 1;

  for (let index = nums.length - 1; index >= 0; index -= 1) {
    result[index] *= suffix;
    suffix *= nums[index];
  }

  return result;
}

function searchRotated(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < target && target <= nums[right]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function dailyTemperatures(temperatures) {
  const result = Array(temperatures.length).fill(0);
  const stack = [];

  for (let index = 0; index < temperatures.length; index += 1) {
    while (
      stack.length &&
      temperatures[index] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      result[prevIndex] = index - prevIndex;
    }

    stack.push(index);
  }

  return result;
}

function topKFrequent(nums, k) {
  const counts = new Map();

  for (const num of nums) {
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  const buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const [num, count] of counts) {
    buckets[count].push(num);
  }

  const result = [];

  for (let index = buckets.length - 1; index >= 0 && result.length < k; index -= 1) {
    for (const num of buckets[index]) {
      result.push(num);
      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
}

function threeSum(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const result = [];

  for (let index = 0; index < sorted.length - 2; index += 1) {
    if (index > 0 && sorted[index] === sorted[index - 1]) {
      continue;
    }

    let left = index + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const sum = sorted[index] + sorted[left] + sorted[right];

      if (sum === 0) {
        result.push([sorted[index], sorted[left], sorted[right]]);
        left += 1;
        right -= 1;

        while (left < right && sorted[left] === sorted[left - 1]) {
          left += 1;
        }

        while (left < right && sorted[right] === sorted[right + 1]) {
          right -= 1;
        }
      } else if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return result;
}

const tests = [
  {
    name: 'contains duplicate',
    run: () => containsDuplicate([1, 2, 3, 1]),
    expected: true,
  },
  {
    name: 'longest substring',
    run: () => lengthOfLongestSubstring('abcabcbb'),
    expected: 3,
  },
  {
    name: 'merge intervals',
    run: () => merge([[1, 3], [2, 6], [8, 10], [15, 18]]),
    expected: [[1, 6], [8, 10], [15, 18]],
  },
  {
    name: 'three sum',
    run: () => threeSum([-1, 0, 1, 2, -1, -4]).sort(),
    expected: [[-1, -1, 2], [-1, 0, 1]].sort(),
  },
];

if (require.main === module) {
  runTests('Core Answers', tests);
}

module.exports = {
  containsDuplicate,
  dailyTemperatures,
  groupAnagrams,
  isAnagram,
  isPalindrome,
  isValid,
  lengthOfLongestSubstring,
  merge,
  productExceptSelf,
  search,
  searchRotated,
  threeSum,
  topKFrequent,
  twoSum,
};
