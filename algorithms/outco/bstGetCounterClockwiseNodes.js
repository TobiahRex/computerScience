/**
 1. Understanding the problem
    - Input
    - Output
 2. Diagramming
    - Most time
    - Slip the problem
  3. Pseudo Code

  4. Code

  constraints:
  - edge of the tree
  - perfect binary tree

  Input:

*/
const tree = {
  value: 'a',
  left: {
    value: 'b',
    left: {
      value: 'c',
      left: {
        value: 'd',
        left: null,
        right: null,
      },
      right: {
        value: 'e',
        left: null,
        right: null,
      },
    },
    right: {
      value: 'f',
      left: {
        value: 'g',
        left: null,
        right: null,
      },
      right: {
        value: 'h',
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 'i',
    left: {
      value: 'j',
      left: {
        value: 'k',
        left: null,
        right: null,
      },
      right: {
        value: 'l',
        left: null,
        right: null,
      },
    },
    right: {
      value: 'm',
      left: {
        value: 'n',
        left: null,
        right: null,
      },
      right: {
        value: 'o',
        left: null,
        right: null,
      },
    },
  },
}

function getAnswer(tree, answer = [], root = true) {
  leftFirst(tree.left, answer, false, [false]);
  answer.push(tree.value);
  rightFirst(tree.right, answer, false, [false]);
  return answer;
}

function leftFirst(tree, answer, root, bottom) {
  if (isLeaf(tree, answer)) {
    bottom[0] = true;
    return;
  }
  if (tree.left) {
    if (!bottom[0]) answer.push(tree.value);
    leftFirst(tree.left, answer, root, bottom);
  }
  if (tree.right) {
    leftFirst(tree.right, answer, root, bottom);
  }
  return;
}

function rightFirst(tree, answer, root, bottom) {
  if (isLeaf(tree, answer)) {
    bottom[0] = true;
    return;
  };
  if (tree.right) {
    if (!bottom[0]) answer.push(tree.value);
    rightFirst(tree.right, answer, root, bottom);
  }
  if (tree.left) {
    rightFirst(tree.left, answer, root, bottom);
  }
  return;
}

function isLeaf(tree, answer) {
  if (!tree.left && !tree.right) {
    answer.push(tree.value);
    return true;
  }
  return false;
}

console.log(getAnswer(tree))

