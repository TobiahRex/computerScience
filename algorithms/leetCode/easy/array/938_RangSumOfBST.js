/*
  Problem Description:
  Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

  The binary search tree is guaranteed to have unique values.



  Example 1:

  Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
  Output: 32
  Example 2:

  Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
  Output: 23
*/

const generateTree = require('../../../../data-structures/binary-tree/operations/crud/binaryTreeFromSortedArray');

(() => {
    const answers = [
        {
          root: [10, 5, 15, 3, 7, null, 18],
          l: 7,
          r: 15
        },
        {
          root: [10, 5, 15, 3, 7, 13, 18, 1, null, 6],
          l: 6,
          r: 10
        }
    ].map(({ root, l, r }) => {
      const tree = generateTree(root);
      return getAnswer(tree, l, r);
    })
    console.log('answers: ', answers);
})();

function getAnswer(rt = {}, l, r) {
  let sum = 0;
  let value = rt.value || 0;
  if (rt.left && value > l) sum += getAnswer(rt.left, l, r);
  if (rt.right && value < r) sum += getAnswer(rt.right, l, r)
  if (l <= value && value <= r) sum += value;
  return sum;
}
