LinkedList.prototype = {
  access: (index) => {
    if (index === 0) return this._head;

    let current = this._head;
    let count = 0;
    while(current.next && count < index) {
      count += 1;
      current = current.next;
    }
    return current;
  }
}
