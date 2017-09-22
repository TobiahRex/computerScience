class ObjStack {
  constructor(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
  }
  push(data) {
    if (this._count < this._capacity) {
      this._storage[this._count] = data;
      return console.log(this._storage);
    }
    return 'Max capacity reached. "Pop" before calling this operation.';
  }
}
const stack = new ObjStack(10);
stack.push('toby');
