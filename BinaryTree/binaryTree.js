const customUtil = require('./utils');

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
    this.checkInternalPointers();
    if (this.parent) {
      throw new Error(`The root shouldn't have a prent`);
    }
  }

}
