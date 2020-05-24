class Node {
  data;
  next;

  constructor(data) {
    this.data = data;
    this.next = null;
  };
}

export default class Q {
  front = null;
  rear = null;

  enqueue(data) {
    const n = new Node(data);
    if (n === null) return "Heap is full";
    if (this.rear === null) {
      this.rear = n;
      this.front = n;
    } else {
      this.rear.next = n;
      this.rear = n;
    }
  }

  dequeue() {
    if (this.rear === null) return -1;
    if (this.isEmpty()) return -1;
    let d = this.front;
    this.front = this.front.next;
    d.next = null;
    return d.data;
  }

  isEmpty() {
    return this.front === null;
  }

  print() {
    let [vals, n] = [[], this.front];
    while(n) {
      vals.push(n.data);
      n = n.next;
    }
    return vals.join(',');
  }
}
