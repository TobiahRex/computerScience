class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class SearchTree {
  constructor(value) {
    this.root = value ? new Node(value) : null;
  }

  add(value) {
    let currentNode = this.root;
    if (!currentNode && typeof value !== undefined) {
      this.root = new Node(value);
      return this.root;
    }

    let parentNode = null; // NOTE: Need parent because we have no reference to the eventual "null" node's parent, to use, to insert the arg value into.
    while(currentNode) {
      parentNode = currentNode;
      if (value < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    const newNode = new Node(value);
    if (value < parentNode.val) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
    return newNode;
  }
}

class BinarySearchTree extends SearchTree {
  constructor(value) {
    super(value);
  }

  print() {
    const currentNode = this.root;
    let q = [currentNode];
    const results = [];
    while(q.length) {
      let node = q.shift();
      results.push(node.val);
      q = q.concat([node.left, node.right].filter(Boolean));
    }
    return results;
  }

  find(value) {
    let currentNode = this.root;
    while(currentNode && (currentNode.val !== value)) {
      if (value < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }
}

class BinarySearchTreeWithRotate extends BinarySearchTree {
  constructor(value) {
    super(value);
  }
}

const bst = new BinarySearchTreeWithRotate();
bst.add(3);
bst.add(6);
bst.add(1);
bst.add(1);
console.log(bst.print());
// console.log(bst.find(3));
