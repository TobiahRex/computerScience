function checkInternalPointer() {
  if (this.left) {
    if (this.left.parent !== this) {
      throw new Error(`Parent pointer broken @ ${this.key}`);
      this.left.checkInternalPointer();
    }
  }

  if (this.right) {
    if (this.right.parent !== this) {
      throw new Error(`Parent pointer broken @ ${this.key}`);
      this.right.checkInternalPointer();
    }
  }
}

function compareKeys(childKey, parentKey) {
  if (childKey < parentKey) return -1;
  if (childKey > parentKey) return 1;
  if (childKey === parentKey) return 0;
}

function checkAllNodesFullfillCondition() {
  if (!this.hasOwnProperty('key')) return;

  cb(this.key);

  if (this.left) this.left.compareKeys(cb);
  if (this.right) this.right.compareKeys(cb);
}

function checkNodeOrdering() {
  if (!this.hasOwnProperty('key')) return;

  if (this.left) {
    this.left.compareKeys((key) => {
      if (compareKeys(key, this.key) >= 0) {
        throw new Error(`Key's are not in order @ ${this.key}`);
      }
      this.left.checkNodeOrdering();
    });
  }

  if (this.right) {
    this.right.compareKeys((key) => {
      if (compareKeys(key, this.key)) {
        throw new Error(`Keys are not in order @ ${this.key}`);
      }
      this.right.checkNodeOrdering();
    });
  }
}
