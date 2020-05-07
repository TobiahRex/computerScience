function LinkedList() {
  this._head = null;
  this._length = 0;
}

LinkedList.prototype.createNode(data) {
  return {
    data,
    next: null,
  };
}

LinkedList.prototype.add(data) {
  let current = this._head;
  let newNode = createNode(data);

  if (!current) current = newNode;
  else {
    while(current.next) {
      curent = current.next;
    }
    current.next = newNode;
  }
  this._length += 1;
  return
}

LinkedList.prototype.search(index) {
  let i = 0,
    current = this._head;

  if (LinkedList.boundsCheck(index)) {
    while(i++ < index) {
      current = current.next;
    }
    return current.data;
  }
  else return null;
}

LinkedList.prototype.boundsCheck(index) {
  if (index > -1 && index < this._length) return true;
  return false;
}
