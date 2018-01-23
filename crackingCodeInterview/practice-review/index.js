class Stack {
  constructor() {
    this.top = null;
  }

  createNode(type, direction) {
    const node = {
      type,
      direction,
      next: null,
    };
    return node;
  }

  push(type, direction) {
    const node = this.createNode(type, direction);

    if (this.top === null) this.top = node;
    else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top === null) return this.top;
    else {
      const oldTop = this.top;
      this.top = this.top.next;
      return oldTop;
    }
  }
}
