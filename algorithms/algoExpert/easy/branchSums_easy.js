const generateTree = require('../../../data-structures/binary-tree/traversal/crud/binaryTreeFromSortedArray');

(() => {
  const answers = [
    {
      input: [5, null, null],
      target: 1,
    },
    {
      input: [5,4,8,11,null,13,4,7,2,null,null,null,1],
      target: 22,
    },
    {
      input: [2, 2, 5, 2, 1],
      target: 5,
    },
    {
      input: [2, 2, 1, 2],
      target: 2,
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      target: 10,
    },
  ].map(({ input, target }) => branchSum(generateTree(input), target))
  console.log('answers: ', JSON.stringify(answers, null, 2));
})();

function branchSum(tree, target, sum = 0, sums = []) {
  if (!tree) return false;
  const newSum = tree.value + sum;

  if (!tree.left && !tree.right) sums.push(newSum)
  if (tree.left) branchSum(tree.left, target, newSum, sums);
  if (tree.right) branchSum(tree.right, target, newSum, sums);

  return sums.includes(target);
}

/*
  Problem Description:
  Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

  Note: A leaf is a node with no children.

  Example:

  Given the below binary tree and sum = 22,

        5
       / \
      4   8
     /   / \
    11  13  4
   /  \      \
  7    2      1
  return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/


/**
  Leet Code Solution:

  var hasPathSum = function(root, sum) {
    if(!root) return false
    sum -= root.val
    if(sum === 0 && !root.left && !root.right) return true

    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
  };
*/
