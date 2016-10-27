LinkedList.prototype.insert = (data) => {
  if (this._head === null)  {
    this._head = {
      data,
      next: null;
    };
    this._length = 1;
    return console.log('Linked List was empty.\n New node inserted at the HEAD.');
  }

  let current = this._head;
  let newNode = {
    data,
    next: null,
  };

  while(current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
  this._length += 1;
}
