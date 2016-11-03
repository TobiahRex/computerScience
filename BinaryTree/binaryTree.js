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
    // check to see if all nodes (including leaves) fullfill the function "test" passed in as an input.  If the test does not pass, the test function will throw an Error by design.

    if(! this.hasOwnProperty('key')) return;
    // if the parent node doesn't have a key, then there's no point calling this function.

    test(this.key, this.data);
    // test acts as a callback.  You would look at where this call back was written to know exactly what will happen with this callback "test" is invoked.  this.key is the "key" value of the parent node. and it has some data, then start calling the condition recursively for each of it's children recursively.


    if (this.left) this.left.checkAllNodesFullfillCondition(test);
    if (this.right) this.right.checkAllNodesFullfillCondition(test);
    // these simply recursively call the test function on each node in the tree.
  }
// ----------------------------------------------------------------------
  checkNodeOrdering() {
    // Check to make sure the tree is in order by node properties in the Binary Search Tree.  Throw an error if they are not.


    const self = this;
    // makes the syntax a little less confusing.

    if (!this.hasOwnProperty('key')) return;
    // if there are no keys to iterate over, don't bother checking.


    if (this.left) {
      // as long as there are nodes left to check on the left...
      this.left.checkAllNodesFullfillCondition((key) => {
        // check the
        if (self.compareKeys(key, self.key) >= 0) {
          throw new Error(`Tree with root ${self.key} is not a binary tree.`);
        }
      });
      this.left.checkNodeOrdering();
    }

    if (this.right) {
      this.right.checkAllNodesFullfillCondition((key) => {
        if (self.compareKeys(key, self.key) <= 0) {
          // compareKeys returns 1 when the first arg, is greater than the second arg.  Since we're checking the right half, then we want this condition to return a number greater than 0.  If not, throw an error.
          throw new Error(`Tree with root ${self.key} is not a binary tree.`);
        }
      });
      this.right.checkNodeOrdering();
    }

    this.right.checkNOdeOrdering();
  }
// ----------------------------------------------------------------------

}
