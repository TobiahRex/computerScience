/*
  Problem Description:
  If the depth of a tree is smaller than 5, then this tree can be represented by a list of three-digits integers.

  For each integer in this list:

  The hundreds digit represents the depth D of this node, 1 <= D <= 4.
  The tens digit represents the position P of this node in the level it belongs to, 1 <= P <= 8. The position is the same as that in a full binary tree.
  The units digit represents the value V of this node, 0 <= V <= 9.


  Given a list of ascending three-digits integers representing a binary tree with the depth smaller than 5, you need to return the sum of all paths from the root towards the leaves.

  Example 1:

  Input: [113, 215, 221]
  Output: 12
  Explanation:
  The tree that the list represents is:
      3
     / \
    5   1

  The path sum is (3 + 5) + (3 + 1) = 12.


  Example 2:

  Input: [113, 221]
  Output: 4
  Explanation:
  The tree that the list represents is:
      3
       \
        1

  The path sum is (3 + 1) = 4.
*/


const generateTree = require('../../../data-structures/binary-tree/operations/crud/binaryTreeFromSortedArray');

(() => {
  const answers = [
    // {
    //   input: [],
    //   target: 1,
    // },
    // {
    //   input: [1,-2,-3,1,3,-2,null,-1],
    //   target: -1, // 4
    // },
    // {
    //   input: [1,-2,-3,1,3,-2,null,-1],
    //   target: -2, // 4
    // },
    // {
    //   input: [-2, 1],
    //   target: -1,
    // },
    // {
    //   input: [5, null, null],
    //   target: 1,
    // },
    // {
    //   input: [5,4,8,11,null,13,4,7,2,null,null,5,1],
    //   target: 22, // 3
    // },
    // {
    //   input: [2, 2, 5, 2, 1],
    //   target: 5, // 2
    // },
    // {
    //   input: [2, 3, 1, 4],
    //   target: 3, // 3
    // },
    {
      input: [2, 1, 1, 2, 2, 2, 2],
      target: 3, // 6
    },
    // {
    //   input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //   target: 10,
    // },
  ].map(({ input, target }) => pathSumIII(generateTree(input), target));
  console.log('answers: ', answers);
})();

function pathSumIII(tree, target) {
  if (!tree) return 0;
  let answers = 0;
  const queue = [tree];

  while(queue.length > 0) {
    const tree = queue.shift();

    if (tree) {
      const totals = dfsTotal(tree);
      answers = totals.reduce((a, b) => b === target ? a + 1 : a, answers);
    }

    if (tree.left) queue.push(tree.left);
    if (tree.right) queue.push(tree.right);
  }

  function dfsTotal(tree, sum = 0, sums = []) {
    if (!tree) return sum;

    const nextSum = sum + tree.value;
    sums.push(nextSum);

    dfsTotal(tree.left, nextSum, sums);
    dfsTotal(tree.right, nextSum, sums);

    return sums;
  }
  return answers;
}
