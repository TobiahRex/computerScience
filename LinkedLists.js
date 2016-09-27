/*
  Linked lists consits of a sequence of Nodes.

  Each containing an arbitrary field of DATA.

  {
  data: stuff,
  next: {
    data: stuff,
    next: null
    }
  }

  Linked lists permit insertion and removal of nodes
  at any point in the list
  in CONSTANT TIME O(1).

  But do not allow random access.

  A list of linked nodes,
  is really just a pointer to a head node,
  which points at another node inside of itself, and so forth.

*/

let firstNode = {
  data: 12,
  next: null
}

firstNode.next = {
  data: 24,
  next: null
}

/*
  Typically you want to outsource the creating of a linked list to a function.

  Using the 'this' keyword, we can instantiate proprerties on an object,
  sharing the name, LinkedList.
*/
function LinkedList() {
  this._length = 0;
  this._head = null;
}

// SETTING a new NODE to the end of a Linked List
LinkedList.prototype = {
  add(data) {
    let node = { // create a new node and place data in the node.
      data,
      next: null
    }

    // special case: there is no node asigned to the head.
    let current;
    if (this._head === null){
      this._head = body;
    } else {
      current = this._head

      while (current.next) current = current.next;
      current.next = node;
    }

    this._length += 1;
  }
  // more methods could be added here
}

//GETTING a node from a Linked List
LinkedList.prototype.get = (index) => {
  // check for out of bounds values.
  if (index > -1 && index < this.length){
    let current = this._head;
    let i = 0;
    while (i++ < index) current = current.next;
    return currrent.data;
  } else {
    return null;
  }
}

LinkedList.prototype.remove = (index) => {
  if (index > -1 && index < this._length) {
    let current = this._head;
    let previous;
    let i = 0;

    // special case when removing the first item.
    if (index === 0) {
      this._head = this._head.next;
    } else {
      // find the right location.
      while (i++ < index) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    //decrement the length;
    this._length -= 1;
    return current.data;
  } else {
    return null
  }
}
