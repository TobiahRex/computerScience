export default class Stack {
  s = undefined;
  top = -1;
  size = 0;

  constructor(size) {
    this.s = new Array(size);
    this.size = size;
  }

  /**
   * @function push
   * Pushes element onto a stack.
   * Stacks can have a size.
   * We must check if stack is full (top === size - 1)
   * We must also check if S is empty (-1)
   * Otherwise insert.
   * @param
   * @return
   */
  push(data) {
    if (this.top === this.size - 1) return;
    this.top += 1;
    this.s[this.top] = data;
    return this.s.length;
  }

  /**
   * @function pop
   * Check if stack is empty
   * Check if stack has item to pop
   *
   * @param
   * @return item that was popped off || -1
   */
  pop() {
    if (this.top === -1) return;
    let x = this.s[this.top];
    delete this.s[this.top--];
    return x;
  }

  /**
   * @function peek
   * Finds element at given position
   * @param
   * @return
   */
  peek(ix) {
    if (this.top - ix + 1 < 0) return;
    let x = this.s[this.top - ix + 1];
    return x;
  }

  /**
   * @function stackTop
   * Reveals the value at the top of the stack
   * @param
   * @return -1 || the data at the top
   */
  stackTop() {
    if (this.top === -1) return this.top;
    return this.s[this.top];
  }

  /**
   * @function isEmpty
   * Returns if the stack is empty
   * @param
   * @return true || false
   */
  isEmpty() {
    return this.top === -1;
  }

  /**
   * @function isFull
   * Returns if the stack is full
   * @param
   * @return
   */
  isFull() {
    return this.top === this.size - 1;
  }

  print() {
    return this.s.filter(Boolean).join(',');
  }
}