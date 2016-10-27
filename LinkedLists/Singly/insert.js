LinkedList.prototype = {
  insert: (data) => {
    let node = {
      data,
      next: null,
    };

    if (this._head === null)  {
      this._head = node
      console.log('Linked List was empty.\n New node inserted at the HEAD.');
    } else {
      let current = this._head;
      while(current.next) current = current.next;
      current.next = node;
    }

    this._length += 1;
  }
}
