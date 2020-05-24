export default class Q {
  front = -1;
  rear = -1;
  q = null;

  constructor(size = -1) {
    if (size < 0) {
      this.q = [];
    } else {
      this.q = new Array(size);
    }
  }

  enqueue(data) {
    if (this.isFull()) {
      return -1;
    }
    this.q[++this.rear] = data;
  }

  dequeue() {
    let data;
    if (this.isEmpty()) {
      return -1;
    }
    data = this.q[++this.front];
    this.q[this.front] = undefined;
    return data;
  }

  isFull() {
    return this.rear === this.q.size - 1;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  print() {
    return this.q.join(',');
  }
}