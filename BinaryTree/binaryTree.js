const customUtil = require('./utils');

/* DESCRIPTION
  Skip to line 230ish for "do-work" methods.

  Binary search trees (BST)'s use left, right, and parent pointers in memory to connect data together.  They use "keys" to track their "index".  The class itself keeps track of a SINGLE array containg the actual data values of each array.  The order that the data appears in the array is not arbitrary however.  The order of the tree, must be in order.  For example, values right of the parent are greater than the parent, and vice versa.

  BST data array...
  [1,8,4,5,2,3,6]
  to retrieve key 0's left and right nodes data, you use the following formula.
  left-node-data = 2i + 1
  right-node-data = 2i + 2

  therefore the left node data to key 0 === 8
  & the right node data to key 0 === 4

  for node at key 1, it's 5 & 2.
  for ndoe at key 2, it's 3 & 6.
  etc...

  There are MANY utitlity functions for BST's.
  - maxHeight.
  - maxNodes.
  - current height.
  - current Node count.
  - checking all nodes for condition
  - checking all nodes are in order
  - creating a new node at the left
  - creating a new node at the right
  - inserting a new node at the left, or right based on it's value.
  - delete a new node and re-adjusting the pointers in the tree to replace the missing node, and then also re-balancing the tree if it's a "self balancing" BST.

  The reason BST's are so valuable is because they have O(logn) lookup time when they're balanced, and O(n) when they are unbalanced.  They typically have O(logn) time complexity on all other related common methods: search, insert, delete, access.  When factoring in time complexity, the height of the tree is extremely relevant, and whether the tree is "Perfectly" balanced, or "Complete" is also important information.

  BST's cannot have a height difference between levels of more than 1.  The height is calculated by | left node - (right node)|.  If it's greater than 1, then there is an imbalance and it must be corrected.

  BST's have a height of -1 if it's empty.  The root node (if there is one) is considered height = 0. Height is calculated by counting the number of nodes from the node to the root.
*/

// skip to line 160 to see work methods
class BinarySearchTree {
  constructor(options) {
    // re-assign options as empty object if passed nothing.
    options = options || {};
    // declare first childs as null;
    this.left = null;
    this.right = null;
    // declare parent as such or null
    this.parent = options.parent !== undefined ? options.parent : null;

    // re-assign this.key from the options object input
    if (options.hasOwnProperty('key')) {
      this.key = options.key;
    }


    // re-assign this.data from the options object value or as an empty array
    this.data = options.hasOwnProperty('value') ? [options.value] : [];


    // re-assign this.unique from the options obj or as "false"
    this.unique = options.unique || false;


    // compare keys and return -1 if a < b, 0 if equal, and 1 if a is greater than b.
    this.compareKeys = options.compareKeys || customUtil.defaultCompareKeysFunction;

    this.checkValueEquality = options.checkValueEquality || customUtil.defaultCompareKeysFunction;

  }
// ----------------------------------------------------------------------
  getMaxKeyDescendant() {
    // MAX infers the right side of the tree since tree's are designed to be sorted.
    if (this.right) {
      // as long as there is another branch on the right, call it again.
      return this.right.getMaxKeyDescendant();
      // for each function call, when it's time to return, return nothing.
    } else {
      return this;
      // this will return the last leaf node.
    }
  }
// ----------------------------------------------------------------------
  getMaxKey() {
    return this.getMaxKeyDescendant().key;
    // return the last leaf key info.
  }
// ----------------------------------------------------------------------
  getMinKeyDescendant() {
    if(this.left) {
      return getMinKeyDescendant();
    } else {
      return this;
    }
  }
// ----------------------------------------------------------------------
  getMinKey() {
    return this.getMinKeyDescendant().key;
  }
// ----------------------------------------------------------------------
  checkAllNodesFullfillCondition(test) {
    // check to see if all nodes (including leaves) fullfill the function "test" passed in as an input.  If the test does not pass, the test function will throw an Error by design.  Typically this function will be called on the "left" or "right" property of this class as a method.  Therefore the "this.key" will typically be that nodes value.

    if(! this.hasOwnProperty('key')) return;
    // if the parent node doesn't have a key, then there's no point calling this function.

    test(this.key, this.data);
    // test acts as a callback.  You would look at where this call back was written to know exactly what will happen with this callback "test" is invoked.  this.key is the "key" value of the parent node. and it has some data, then start calling the condition recursively for each of it's children recursively.


    if (this.left) this.left.checkAllNodesFullfillCondition(test);
    if (this.right) this.right.checkAllNodesFullfillCondition(test);
    // these simply recursively call the test function on each node in the tree.
  }
// ----------------------------------------------------------------------
  /*
    Fundamentally this function simply makes sure that the left most values are less than the middle value, and the right most are great than the middle value...recursively down the tree.
  */
  checkNodeOrdering() {
    // Check to make sure the tree is in order by node properties in the Binary Search Tree.  Throw an error if they are not.


    const self = this;
    // we capture the original "this" as "self" because it refers to the class' "this".  As we iterate throughout the tree, the "this" will be re-assigned to "this.right", or "this.left" so we lose the ability to call class specific methods with the "this" keyword.

    if (!this.hasOwnProperty('key')) return;
    // if there is no key value to check for this root node (which is actually a leaf node of a higher root node), don't bother checking.

    if (this.left) {
      // as long as there are nodes on the left remaining to check...
      this.left.checkAllNodesFullfillCondition((key) => {
        // the key passed in will be respective to "this.left".
        if (self.compareKeys(key, self.key) >= 0) {
          throw new Error(`Tree with root ${self.key} is not a binary tree.`);
        }
      });
      this.left.checkNodeOrdering();
      // call the function recursively to ensure all child nodes are also checked.
    }

    if (this.right) {
      this.right.checkAllNodesFullfillCondition((key) => {
        if (self.compareKeys(key, self.key) <= 0) {
          throw new Error(`Tree with root ${self.key} is not a binary tree.`);
        }
      });
      this.right.checkNodeOrdering();
    }

    this.right.checkNOdeOrdering();
  }
// ----------------------------------------------------------------------
/*
  Fundamentally determines if the nodes at different heights, are pointing in the right direction, or pointing at all.
*/
  checkInternalPointers() {
    if (this.left) {
      if (this.left.parent !== this) {
        throw new Error(`Parent pointer broken for key ${this.key}`);
        this.left.checkInternalPointers();
      }
    }

    if (this.right) {
      if (this.right.parent !== this) {
        throw new Error(`Parent broken for key ${this.key}`);
        this.right.checkInternalPointers();
      }
    }
  }

// ----------------------------------------------------------------------
  checkIsBst() {
    this.checkNodeOrdering();
    // first make sure the values are correct.
    this.checkInternalPointers();
    // then make sure the height pointers are correct.

    if (this.parent) throw new Error(`The root shouldn't have a parent`);

  }
// ----------------------------------------------------------------------
  /*
    Otherwise known as getting the overal size of the tree.
  */
  getNumberOfKeys () {
    let res;

    if (!this.hasOwnProperty('key')) return 0;

    res = 1;

    if (this.left) res += this.left.getNumberOfKeys();
    if (this.right) res += this.right.getNumberOfKeys();

    return res;
  }
/* ----------------------------------------------------------------------

               Methods used to actually work on the tree

 ---------------------------------------------------------------------- */
  /*
    Essentially just creates a copy (new instance) of a node from a option object input.
  */
  createSimilar(options) {
    options = options || {};
    options.unique = this.unique;
    options.compareKeys = this.compareKeys;
    options.checkValueEquality = this.checkValueEquality;

    return new this.constructor(options);
  }
// ----------------------------------------------------------------------
  /*
    Create a copy of the BST node and attach it as a left child to the function caller, and return the left child to that function caller.
  */
  createLeftLeftChild(options) {
    let leftChild = this.createSimilar(options);
    leftChild.parent = this;
    this.left = leftChild;

    return leftChild;
  }

  createRightChild(options) {
    let rightChild = this.createSimilar(options);
    rightChild.parent = this;
    this.right = rightChild;

    return rightChild;
  }
// ----------------------------------------------------------------------

  insert(key, value) {
    if (!this.hasOwnProperty('key')) {
      // if there is no root node...insert at the root.
      this.key = key;
      this.data.push(value);
      return;
    }

    if (this.compareKeys(key, this.key) === 0) {
      // if the new node has the same key as the root, (all keys must be unique [optionally])
      if (this.unique) {
        let err = new Error(`Can't insert key ${key}, it violates the unique constraint.`);
        err.key = key;
        err.errorType = 'uniqueViolated';
        throw err;
      } else {
        // otherwise if we don't care if there are duplicate key's, then...
        this.data.push(value); // push data values into the BST single data array.
      }
    }

    // Otherwise insert at left subtree if condition matches
    if (this.compareKeys(key, this.key) < 0) {
      if (this.left) {
        this.left.insert(key, value);
        // call it recursively because we need to iterate to the bottom of the tree and insert the new node whenever the left or right child is "null".
      } else {
        this.createLeftChild({ key: key, value: value });
      }
    } else {
      if (this.right) {
        this.right.insert(key, value);
      } else {
        this.createRightChild({ key: key, value: value });
      }
    }
  }
}
