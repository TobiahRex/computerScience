# Binary Search Tree

## DESCRIPTION
  Binary search trees (BST)'s use left, right, and parent pointers in memory to connect data together.  They use "keys" to track their "index".  The class itself keeps track of a SINGLE array containing the actual data values of each array.  The order that the data appears in the array is not arbitrary however.  The order of the tree, must be in order.  For example, values right of the parent are greater than the parent, and vice versa.

### Example
  BST data array...
  [1,8,4,5,2,3,6]
  to retrieve key 0's left and right nodes data, you use the following formula.
  left-node-data = 2i + 1
  right-node-data = 2i + 2

## NOTE
  Each node, has it's OWN data array.  Which has all the data from it's child nodes including all the recursive children.  When doing a search by key, the data returned will be an array of values, that represent all the data in the that point in tree, down, to the bottom of the tree, from that specific key (node).

## DESCRIPTION (Cont'd)
  therefore, using the example array above,
  the left node data to key 0 === 8
  & the right node data to key 0 === 4

  for node at key 1, it's 5 & 2.
  for node at key 2, it's 3 & 6.
  etc...

## Utility Functions
  There are MANY Utility functions for BST's.
  * Lookup
    - maxHeight.
    - maxNodes.
    - maxDescendant.
    - minDescendant.
    - current height.
    - current Node count.
  * Verifying
    - checking all nodes for condition.
    - checking all nodes are in order.
  * CRUD
    - creating a new node at the left | right.
    - inserting a new node at the left, or right based on it's value.
    - modifying a nodes value and re-adjusting the pointers in the tree if the modification creates an imbalance.
    - delete a new node and re-adjusting the pointers in the tree to replace the missing node, and then also re-balancing the tree if it's a "self balancing" BST.
  * Optimization
    - Right Shift
    - Left shift
    - Double Right Shift
    - Double Left Shift

## Why?
  - The reason BST's are so valuable is because they have O(logN) lookup time when they're balanced, and O(n) when they are unbalanced.
  - They typically have O(logN) time complexity on all other related common methods: search, insert, delete, access.
  - When factoring in time complexity, the height of the tree is _EXTREMELY IMPORTANT_, and whether the tree is _"Perfectly"_ balanced, or _"Complete"_ is also important information.

## NOTE
  - In case you forgot "Perfectly" balanced means that all children in the BST share the same depth from the root.  "Complete" means, that all nodes are "Perfectly" balanced to a degree.
    * For example, if there are a total of 10 levels, and let's say 9 of them are "Perfectly" balanced, and the last one has a few children more than some other level 9 node, BUT (and here's the main difference), they are totally shifted to the LEFT of the BST.

## Why? (Cont'd)
  - BST's cannot have a height difference between levels of more than 1.
  - The height is calculated by
    * left node - (right node)|.
    * If it's greater than 1, then there is an "imbalance" and it must be corrected.

## Height
  - BST's have a height of -1 if it's empty.
  - The root node (if there is one) is considered height = 0.
  - Height is calculated by counting the number of nodes from the node, to the root.
