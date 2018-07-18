function LinkedList() {
  this._head = null
  this._length = 0;
}

LinkedList.prototype.boundsCheck = (index) => {
  if (index > -1 && index < this._length) return true;
  return false;
}

LinkedList.prototype.search = (index) => {
  let current = this._head;
  let i = 0;
  if (index == 0) return current.data;
  else if (LinkedList.prototype.boundsCheck(index)) {
    while(i++ < index) {
      current = current.next;
    }
    return current.data;
  } else {
    return null;
  }
}

LinkedList.prototype.insert = (data) => {
  
}

LinkedList.prototype.createNew = (data) => {
  const newNode = {
    data,
    next: null,
  };

  if (!this._head) {
    this._head = newNode;
  }
  return data;
}

LinkedList()
LinkedList.prototype.createNew("toby");
console.log(LinkedList.prototype.search(0));
