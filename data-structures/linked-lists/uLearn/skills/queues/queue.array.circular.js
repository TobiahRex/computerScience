export default class Q_circular {
  front = -1;
  rear = -1;
  q;
  size;

  constructor(size = -1) {
    if (size > 0) {
      this.q = new Array(size);
    } else {
      this.q = [];
    }
  }
  enqueue(data) {
    if (this.isFull()) return -1;
    this.rear = (this.rear + 1) % this.q.length;
    this.q[this.rear] = data;
  }

  dequeue() {
    if (this.isEmpty()) return -1;
    this.front = (this.front + 1) % this.q.length;
    const data = this.q[this.front];
    delete this.q[this.front];
    return data;
  }

  isEmpty() {
    return (this.front + 1) % this.q.length === this.rear;
  }

  isFull() {
    return (this.rear + 1) % this.q.length === this.front;
  }

  print() {
    return this.q.join(',');
  }
}