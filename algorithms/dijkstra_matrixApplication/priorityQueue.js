export default class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    let added = false;
    for (let i = 1; i < this.queue.length; i += 1) {
      if (value < this.queue[i - 1]) {
        this.queue.splice(i - 1, 0, value);
        added = true;
        break;
      }
    }

    if (!added) this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
