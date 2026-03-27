'use strict';

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function buildLinkedList(values) {
  const dummy = new ListNode();
  let current = dummy;

  for (const value of values) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummy.next;
}

function linkedListToArray(head) {
  const result = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildBinaryTree(values) {
  if (!values.length || values[0] == null) {
    return null;
  }

  const root = new TreeNode(values[0]);
  const queue = [root];
  let index = 1;

  while (queue.length && index < values.length) {
    const node = queue.shift();

    if (!node) {
      continue;
    }

    const leftValue = values[index++];
    if (leftValue != null) {
      node.left = new TreeNode(leftValue);
      queue.push(node.left);
    }

    if (index >= values.length) {
      break;
    }

    const rightValue = values[index++];
    if (rightValue != null) {
      node.right = new TreeNode(rightValue);
      queue.push(node.right);
    }
  }

  return root;
}

module.exports = {
  ListNode,
  TreeNode,
  buildBinaryTree,
  buildLinkedList,
  linkedListToArray,
};
