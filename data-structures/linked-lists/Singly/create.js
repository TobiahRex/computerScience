function LinkedList = (data) => {
  this._head = {
    data,
    next: null,
  };
  this._length = 1;
}
