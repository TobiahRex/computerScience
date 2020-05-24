/*
  NOTE: left, right, root  (LRroot)
*/
function postOrder(node, func = (_) => (_)) {
  if (node.left) {
    node.left.preOrder(func);
  }
  if (node.right) {
    node.right.preOrder(func);
  }
  func(node);
}
