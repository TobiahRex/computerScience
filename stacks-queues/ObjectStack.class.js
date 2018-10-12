class ObjStack {
  constructor(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = -1;
  }

  show() {
    return console.log(this._storage);
  }

  push(data) {
    if (this._count < this._capacity) {
      this._count += 1;
      this._storage[this._count] = data;
      return this._storage;
    }
    return 'Max capacity reached. "Pop" before calling this operation.';
  }

  pop() {
    if (this._count >= 0) {
      let result = '';

      this._storage = Object
      .keys(this._storage)
      .reduce((a, n, i, arr) => {
        if (i !== (arr.length - 1)) {
          a[n] = this._storage[n];
          return a;
        }
        result = this._storage[n];
        return a;
      }, {});
      this._count -= 1;
      return result;
    }
    return 'The stack is empty.';
  }

  popV2() {
    if (this._count < 0) return 'The stack is empty';
    let result = this._storage[this._count];
    delete this._storage[this._count];
    this._count -= 1;
    return result;
  }

  peek() {
    return this._storage[this._count];
  }

  count() {
    return ++this._count;
  }

  contains(value) {
    if (!value) return 'You must provide a valid input.';

    return Object
    .keys(this._storage)
    .reduce((a, n) => {
      if (this._storage[n] !== value) return a;
      a = true;
      return a;
    }, false);
  }

  until(value) {
    if (!value) return 'You must provide a valid input.';
    if (this._count < 0) return 'The stack is empty';

    let count = ++this._count;
    let result = 1;

    while(--count) {
      if (value === this._storage[count]) return result;
      result += 1;
    }
    return result;
  }
}
const stack = new ObjStack(10);
stack.push('toby');
stack.push('barry');
stack.push('bob');
stack.push('bob');
stack.push('bob');
stack.push('bob');
stack.push('chuck');
console.log(stack.until('toby'));
