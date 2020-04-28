/*
  Problem Description:
  A full binary tree is a binary tree where each node has exactly 0 or 2 children.

  Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.

  Each node of each tree in the answer must have node.val = 0.

  You may return the final list of trees in any order.



  Example 1:

  Input: 7
  Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
*/
/*
  Problem Description:

*/


(() => {
  const answers = [
    {
      size: 9,
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function getAnswer({ size }) {
  if (size <= 2 || size % 2 === 0) return [];

  let i = 1;
  const trees = [];
  while ((2 * i + 1) <= size) {
    const root = new TreeNode(0);
    root.left = new TreeNode(0);
    root.right = new TreeNode(0);
    trees.push(root);
    i += 1;
  }

  let rotations = [-1, 0, 1];

  [
    [-1]
  ]
}
