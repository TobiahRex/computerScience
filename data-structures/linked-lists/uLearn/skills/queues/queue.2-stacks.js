import Stack from '../stacks/stack.ll';

export default class Q_Stacks {
  s1;
  s2;

  constructor() {
    this.s1 = new Stack([]);
    this.s2 = new Stack([]);
  }

  enqueue(data) {
    this.s1.push(data);
  }

  dequeue() {
    if (this.s2.isEmpty()) {
      if (this.s1.isEmpty()) {
        return -1;
      }
      else {
        while(!this.s1.isEmpty()) this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }

  isEmpty() {
    return this.s1.isEmpty() && this.s2.isEmpty();
  }
}