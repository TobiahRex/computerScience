const generateTree = require('../../../data-structures/binary-tree/traversal/crud/binaryTreeFromSortedArray');

(() => {
  const answers = [
    // {
    //   input: [],
    //   target: 1,
    // },
    {
      input: [1,-2,-3,1,3,-2,null,-1],
      target: -1, // 4
    },
    {
      input: [1,-2,-3,1,3,-2,null,-1],
      target: -2, // 4
    },
    {
      input: [-2, 1],
      target: -1,
    },
    // {
    //   input: [5, null, null],
    //   target: 1,
    // },
    {
      input: [5,4,8,11,null,13,4,7,2,null,null,5,1],
      target: 22, // 3
    },
    {
      input: [2, 2, 5, 2, 1],
      target: 5, // 2
    },
    {
      input: [2, 2, 1, 2],
      target: 2, // 3
    },
    {
      input: [2, 1, 1, 2, 2, 2, 2],
      target: 3, // 6
    },
    // {
    //   input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //   target: 10,
    // },
  ].map(({ input, target }) => {
    const tree = generateTree(input);
    // console.log(JSON.stringify(tree, null, 2))
    return pathSumII(tree, target);
  })
  console.log('answers: ', JSON.stringify(answers, null, 2));
})();

function pathSumII(tree, target, path = [], sums = []) {
  if (!tree) return [];
  path.push(tree.value);

  if (!tree.left && !tree.right) {
    path.reduce((a, b) => a + b) === target && sums.push(path);
  }
  if (tree.left) pathSumII(tree.left, target, [...path], sums);
  if (tree.right) pathSumII(tree.right, target, [...path], sums);

  return sums;
}

/**
  `Problem Description`:
  Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

  Note: A leaf is a node with no children.

  Example:

  Given the below binary tree and sum = 22,

        5
       / \
      4   8
     /   / \
    11  13  4
   /  \    / \
  7    2  5   1

  Return:
  [
     [5,4,11,2],
     [5,8,4,5]
  ]

  Accepted 274,656
  Submissions 634,927
*/


/**
  `Someone's Leet Code Solution:`

*/
