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
  this._length = 12;
  this._head = null;
}
LinkedList();
// console.log('LinkedList.prototype._length ', LinkedList.prototype._length);

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
  let current = this._head;
  let i = 0;
  let previous;

  if (index > -1 && index < this._length){
    if (index === 1) {
      this._head = current.next;
    } else {
      while (i++ < index) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this._length -= 1;
    return current.data;
  } else {
    return null
  }
}

LinkedList.prototype.update = (index, data) => {
  let current = this._head;
  let i = 0;
  let previous;

  if (index > -1 && index < this._length) {

    while (i++ < index) current = current.next;
    let old = current.data;
    current.data = data;
    return {  old, new: current.data }
  } else {
    return null
  }
}

console.log('global: ', global._length, global._head);
console.log('LinkedList: ', LinkedList.prototype);

////////// Github user mrkrstrndd ///////////
let list = function (e) {
  let self = this;
  let first, last, head;

  self.insert = function (value) {
    let node = new Node(value);
    if (first === null) {
      first = last = node;
    } else {
      let head = first;
      while (head.next != null) {
        head = head.next;
      }
      head.next = node;
      last = head.next;
    }
  }

  self.show = function () {
    let head = first;
    while (head != null) {
      console.log(head.value);
      head = head.next;
    }
  }

  self.remove = function (value) {
    let found = false;
    let head = first;
    while (head != null) {
      if (first.value == value) {
        prev = head = first = first.next;
        found = true;
      } else {
        if (head.value == value) {
          found = true;
          prev.next = head.next;
        }
        prev = head;
        head = head.next;
      }
    }

    if (!found) {
      console.log("#" + value + " not found");
    }
  }

  self.update = function (value, newValue) {
    let head = first;
    while (head != null) {
      if (head.value == value) {
        head.value = newValue;
      }
      head = head.next;
    }

  }

  let Node = function (value) {
    this.value = value;
    let next = {};
  }

  return self;
};

let list = new list();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

list.show();
console.log("____________________________");

list.update(2, 5);
list.show();
console.log("____________________________");

list.remove(3);
list.show();
