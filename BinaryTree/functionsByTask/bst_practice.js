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

  compareKeys(childKey, parentKey) {
    if (childKey < parentKey) return -1;
    if (childKey === parentKey) return 0;
    if (childKey > parentkey) return 1;
  }

  checkAllNodesFullfillCondition(cb) {
    if (!this.hasOwnProperty('key')) return;

    cb(this.key);

    if (this.left) this.left.checkAllNodesFullfillCondition(cb);
    if (this.right) this.right.checkAllNodesFullfillCondition(cb);
  }

  checkNodeOrdering() {
    if (!this.hasOwnProperty('key')) return;

    if (this.left) {
      this.left.checkAllNodesFullfillCondition((key) => {
        if (compareKeys(key, this.key) >= 0) {
          throw new Error(`Wrong Order: Child = ${key}. Parent = ${this.key}`);
        }
        this.left.checkNodeOrdering();
      });
    }

    if (this.right) {
      this.right.checkAllNodesFullfillCondition((key) => {
        if (compareKeys(key, this.key) <= 0) {
          throw new Error(`Wrong order: Child = ${key}. Parent = ${this.key}`);
        }
        this.right.checkNodeOrdering();
      });
    }
  }

  checkInternalPointers() {
    if (!this.hasOwnProperty('key')) return;

    if (this.left) {
      if (this.left.parent !== this) {
        throw new Error(`Parent pointer broken @ ${this.key}`);
      }
      this.left.checkInternalPointers();
    }

    if (this.right) {
      if (this.right.parent !== this) {
        throw new Error(`Parent pointer broken @ ${this.key}`);
      }
      this.right.checkInternalPointers();
    }
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
