class Node {
  next = null;

  constructor(data) {
    this.data = data;
  }
}

export default class Stack {
  head = null;
  constructor(list) {
    this.generate(list);
  }

  push(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  pop() {
    if (!this.head) return null;
    let t = this.head.data;
    this.head = this.head.next;
    return t;
  }
  peek() {
    return this.head ? this.head.data : null;
  }
  isEmpty() {
    return this.head.data ? false : true;
  }

  generate(list) {
    let h = new Node(list[0]);
    let l = h;
    for (let i = 1; i < list.length; i++) {
      let node = new Node(list[i]);
      l.next = node;
      l = l.next;
    }
    this.head = h;
  }
}