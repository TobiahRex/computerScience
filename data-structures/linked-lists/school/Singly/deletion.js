LinkedList.prototype = {
  delete: (index) => {
    if (this._head === null) {
      return 'This Linked List is empty.'

    } else if (index === 1){
      let deletedNode = Object.assign({}, this._head);
      this._length -= 1;
      this._head === null;
      return console.log('Head has been removed: \n', deletedNode, '\n New Length: ', this._length);

    } else {
      let previous = null;
      let current = this._head;
      let next = current.next;
      let count = 1;

      while(current.next && count < index) {
        count += 1;
        previous = current;
        next = current.next.next;
        current = current.next;
      }

      previous.next = next;
      delete current;

      this._length -= 1;
    }
  }
}
