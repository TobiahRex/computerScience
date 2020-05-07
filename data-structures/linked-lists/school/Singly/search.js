LinkedList.prototype = {
  search: (data) => {
    let current = this._head;

    if (current.data === data) return current;

    while(current.data !== data) current = current.next;
    return current;
  }
}
