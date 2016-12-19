function compareKeys(childKey, parentKey) {
  if (childkey < parentKey) return -1;
  if (childKey === parentKey) return 0;
  if (childKey > parentKey) return 1;
}

function checkAllNodesFullfillCondition(cb) {
  if (!this.key) return;

  cb(this.key);

  if (this.left) cb(this.left.key);
  if (this.right) cb(this.right.key);
}

function checkNodeOrdering() {
  const self = this;

  if (!self.key) return;

  if (self.left) {
    self.left.checkAllNodesFullfillCondition((key) => {
      if (compareKeys(key, this.key) >= 0) {
        throw Error('This is not a Binary Search Tree.');
      } else {
        self.left.checkNodeOrdering();
      }
    });
  }

  if (self.right) {
    self.right.checkAllNodesFullfillCondition((key) => {
      if (compareKeys(key, this.key) <= 0) {
        throw Error('This is not a Binary Search Tree');
      } else {
        this.right.checkNodeOrdering();
      }
    });
  }
}
