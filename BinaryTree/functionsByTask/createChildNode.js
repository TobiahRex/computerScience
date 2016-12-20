/* NOTE
  Create Similair Node per an options object using the BST.prototype.constructor function.

  

  Assign the parent to the node calling the function.
  Assign the paren'ts left child as the newly created node.
*/

const customUtil = require('./utils');

class BST {
  constructor(inputOptions = {}) {
    let options = inputOptions;

    this.left = null;
    this.right = null;

    if (options.parent !== undefined) {
      this.parent = options.parent;
    }

    if (options.hasOwnProperty('key')) {
      this.key = options.key;
    }

    if (options.hasOwnProperty('value')) {
      this.data = [options.value];
    } else {
      this.data = [];
    }

    this.unique = options.unique || false;

    this.compareKeys = options.compareKeys || customUtil.defaultCompareKeys;

    this.checkValueEquality = options.checkValueEquality || customUtil.defaultCheckValueEquality;
  }
}
