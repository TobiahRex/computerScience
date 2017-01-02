const utils = require('../utils');

class BinarySearchTree {
  constructor(inputOptions = {}) {
    let opts = inputOptions;
    console.log('opts: ', opts);
    this.left = opts.left || null;
    this.right = opts.right || null;
    this.parent = opts.parent ? opts.parent : null;
    this.key = opts.value || null;
    this.data = opts.data ? [...opts.data] : [];
    this.unique = opts.unique ? opts.unique : false;
    this.compareKeys = opts.compareKeys || utils.defaultCompareKeys;
    this.checkValueEquality = opts.defaultCheckValueEquality || utils.defaultCheckValueEquality;
  }
}

const testBST = new BinarySearchTree({
  parent: 'I am the parent',
  left: 'I am the left node',
  right: 'I am the right node',
  value: 'A1',
  unique: true,
  data: [1,2,3],
});
console.log('testBST: ', testBST);
