## Create Child node
Starting with the constructor there are x steps.
  1. Assign left and right nodes of node to "null".
  2. Assign the parent pointer to the parent given from the input options argument, otherwise assign to null.
  3. Assign the "key" property from the options obj, otherwise assign to null.
  4. Assign the "value" property from the options obj, otherwise assign to an empty array.
  5. Assign the "unique" property from the options obj, otherwise assign to false.
  6. Finally assign the "compareKeys" function and the "checkValueEquality" methods to those given by the options obj, or from the customUtil object methods, respectively.

## isBST.
A Binary Tree (BT) is a Binary Search Tree (BST) if all the left child nodes are less than the parent node, and all the right nodes are greater than the parent node.  All the key values should be also be in sequential order from least to greatest with respect to left and right.
  1. Create a compareKeys function that will evaluate a child node's key with it's parent's key.  In case of a left child to parent comparison, return -1.  In case of a right child to parent comparison, return 1.  In case of either child being equal to the parent key, return 0.
  2. Create a function "checkAllNodesFullfillCondition" whose purpose it is to call a cb function, passing in some property of itself recursively; for it's left & right node, including itself.
  3. Create a function "checkNodeOrdering" whose purpose it is to verify all child nodes are in order.

  NOTE: You can think of this process in 3 parts.  Part 1, check that all child nodes are less than its ancestor parent on the left, and all nodes are greater than the ancestor parent on the right.  Then, verifying that all nodes left are less than it's immediate parent, and all nodes right are greater than it's immediate parent.
