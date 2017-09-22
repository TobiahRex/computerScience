class ObjStack {
  constructor(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
  }
  show() {
    return console.log(this._storage);
  }
  push(data) {
    if (this._count < this._capacity) {
      this._storage[this._count] = data;
      this._count += 1;
      return this._storage;
    }
    return 'Max capacity reached. "Pop" before calling this operation.';
  }
  pop() {
    if (this._count !== 0) {
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
      return result;
    }
    return 'The stack is empty.';
  }
}
const stack = new ObjStack(10);
stack.push('toby');
stack.push('bob');
stack.show();
stack.pop();
stack.show();
