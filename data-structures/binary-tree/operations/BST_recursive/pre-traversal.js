/*
  NOTE: root, left, right (rootLR)
*/
function preOrder(node, func = (_) => (_)) {
  func(node);

  if (node.left) {
    node.left.preOrder(func);
  }
  if (node.right) {
    node.right.preOrder(func);
  }
}
