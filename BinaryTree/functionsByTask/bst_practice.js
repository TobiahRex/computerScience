const utils = require('../utils');

class BinarySearchTree {
  constructor(givenProps = {}){
    const props = givenProps;

    this.left = null;
    this.right = null;
    this.parent = props.parent || null;
    this.data = [...props.data] || [];
    this.key = props.key || undefined;
    this.unique = props.unique || false;

    this.compareKeys = props.defaultCompareKeys || utils.compareKeys;
    this.checkValueEquality = props.defaultCheckValueEquality || utils.checkValueEquality;
  }

  checkNodeOrdering() {
    if (!this.hasOwnProperty('key')) return;

    if (this.left) {
      this.left.checkAllNodesFullfillCondition((childKey) => {
        if (compareKeys(childKey, this.key) >= 0) {
          throw new Error(`Root node broken @ ${this.key}`);
        } else {
          this.left.checkNodeOrdering();
        }
      });
    }

    if (this.right) {
      this.right.checkAllNodesFullfillCondition((childKey) => {
        if (compareKeys(childKey, this.key) <= 0) {
          throw new Error(`Parent Node broken @ ${this.key}`);
        } else {
          this.right.checkNodeOrdering();
        }
      });
    }
  }

  compareKeys(childKey, parentKey) {
    if (childKey < parentKey) return -1;
    if (childKey > parentKey) return 1;
    if (childKey === parentKey) return 0;
  }

  checkAllNodesFullfillCondition(cb) {
    if (!this.hasOwnProperty('key')) return;

    cb(this.key);

    if (this.left) this.left.checkNodeOrdering(cb);
    if (this.right) this.right.checkNodeOrdering(cb);
  }

  checkInternalPointer() {
    if (this.left) {
      if (this.left.parent !== this) {
        throw new Error(`Parent pointer broken @ ${this.key}`);
      } else {
        this.left.checkInternalPointer();
      }
    }

    if (this.right) {
      if (this.right.parent !== this) {
        throw new Error(`Parent pointer broken @ ${this.key}`);
      } else {
        this.right.checkInternalPointer();
      }
    }
  }

  isBst() {
    this.checkNodeOrdering();
    this.checkInternalPointer();
  }
}
