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
