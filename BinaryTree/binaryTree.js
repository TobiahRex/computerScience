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

  getMaxKey() {
    return this.getMaxKeyDescendant().key;
    // return the last leaf key info.
  }

  getMinKeyDescendant() {
    if(this.left) {
      return getMinKeyDescendant();
    } else {
      return this;
    }
  }

  getMinKey() {
    return this.getMinKeyDescendant().key;
  }

  checkAllNodesFullfillCondition(test) {
    // check to see if all nodes (including leaves) fullfill the function "test" passed in as an input.  If the test does not pass, the test function will throw an Error by design.

    if(! this.hasOwnProperty('key')) {
      // if the parent node doesn't have a key, then there's no point calling this function.
      return;
    }

    test(this.key, this.data);
    // if the parent has a key, and it has some data, then start calling the condition recursively for each of it's children recursively.


    if (this.left) this.left.checkAllNodesFullfillCondition(test);
    if (this.right) this.right.checkAllNodesFullfillCondition(test);
    // these simply recursively call the test function on each node in the tree.

  }



}
