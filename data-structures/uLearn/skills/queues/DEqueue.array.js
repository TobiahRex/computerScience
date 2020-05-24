export default class DEQueue {
  front;
  rear;
  q;

  constructor() {
    this.q = [];
    this.front = -1;
    this.rear = -1;
  }

  enqueue(data) {
    if (this.front === -1) {
      this.q[++this.rear] = data;
    } else {
      this.q[this.front] = data;
      if (this.front === 0) {
        this.front = -1;
      } else {
        this.front -= 1;
      }
    }
  }

  dequeue(data) {
    if (this.isEmpty()) return -1;
    let d = this.q[++this.front];
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return d;
  }

  insertFront(d) {
    if (this.front === -1) return -1;
    this.q[this.front--] = d;
  }

  deleteFront() {
    let d = this.q[++this.front];
    delete this.q[this.front];
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return d;
  }

  insertRear(d) {
    this.q[++this.rear] = d;
  }

  deleteRear() {
    let d = this.q[this.rear--];
    delete this.q[this.rear + 1];
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return d;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  print() {
    return this.q.join(',');
  }
}