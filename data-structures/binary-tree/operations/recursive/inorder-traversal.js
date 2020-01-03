/*
  NOTE: left, root, right (LrootR)
*/
function inOrder(node, func = (_) => (_) {
  if (node.left) {
    node.left.inOrder(func);
  }

  func(node);

  if (node.right) {
    node.right.inOrder(func);
  }
}
