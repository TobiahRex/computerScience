const bst = {
  key: 4,
  left: {
    key: 9,
    left: {
      key: 1,
      right: null,
      left: null,
    },
    right: {
      key: 3,
      left: null,
      right: null,
    },
  },
  right: {
    key: 6,
    left: {
      key: 5,
      right: null,
      left: null,
    },
    right: {
      key: 7,
      right: null,
      left: null,
    }
  }
};

const checkBst = (bst) => {
  if (bst.left) {
    if (bst.left.key < bst.key) {
      checkBst(bst.left);
    } else {
      return false;
    }
  } else {
    return true;
  }

  if (bst.right) {
    if (bst.right.key > bst.key) {
      return checkBst(bst.right);
    } else {
      return false;
    }
  } else {
    return true;
  }
}

console.log(checkBst(bst));
