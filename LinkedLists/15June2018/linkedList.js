let firstNode = {
  data: "hi toby",
  next: {
    data: "im inside you.",
    next: null
  }
};

function LinkedList(length, headNode) {
  this._length = length;
  this._head = headNode;
}

LinkeList(1, firstNode);


LinkedList.prototype.insert = (data) => {
  /*
    1. detect for a head node.
      a. if exists, iterate to the end of the list to
      find the first instance where [node.next === null].
      b. if not, assign the head as the new node.
  */
  if (this._head === null) {
    this._head = LinkedList.create(data);
  } else {
    let current = this._head;
    while(current.next) current = current.next;
    current.next = LinkedList.create(data);
  }
  this._length += 1;
}

LinkeList.prototype.search = (index) => {
  /*
    1. Check to make sure that the index value that is being searched,
    is within the bounds of the current list.

    2. Create a counter that iterates with each traversal.

    3. Once the iterator matches the index,
    return the current node.
  */
  if (LinkedList.boundsCheck(index)) {
    let i,
      current = this._head;
    while(i++ < index) current = current.next;
    return current.data;
  } else {
    return null;
  }
}

LinkedList.prototype.delete = (index) => {
  /*
    1. Check for out of bounds.

    2. If the index is 1, return head.
    3. If not, iterate until index node is found.
    4. Have "previous" pointer for re-assigning
    next value to next.next value.
    5. return the deleted data.
  */
  if (LinkedList.boundsCheck(index)) {
    let current = this._head;
    if (index === 0) {
      this._head = this._head.next;
    }
    else {
      let i = 1,
        previous;
      while(i++ < index) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this._length -= 1;
    return current.data;
  }
  else return null;
}

LinkedList.prototype.boundsCheck = (index) => {
  if (index > -1 && index < this._length) {
    return true;
  } else {
    return false;
  }
}

LinkedList.prototype.create = (data) => {
  return {
    data,
    next: null,
  };
}
