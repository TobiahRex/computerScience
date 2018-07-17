/*
Linked lists consits of a sequence of Nodes.

Each containing an arbitrary field of DATA.

let node = {
data: stuff,
next: {
  data: stuff,
  next: null
  }
}

Linked lists (Singly or Doubly) permit INSERTION and DELETION of nodes
at any point in the list in CONSTANT TIME O(1). ACCESS & SEARCH of nodes in O(n) time.

Arrays are fastest with ACCESS = O(1);

B-TREE,
Red-Black-Tree,
Splay Tree,
AVL Tree, are all O(log(n)) for, ACCESS, SEARCH, INSERTION, DELETION.

But do not allow random access.

A list of linked nodes,
is really just a pointer to a head node,
which points at another node inside of itself, and so forth.

*/

let firstNode = {
  data: 12,
  next:  {
    data: 24,
    next: null
  }
}

/*
Typically you want to outsource the creating of a linked list to a function.

Using the 'this' keyword, we can instantiate proprerties on an object,
sharing the name, LinkedList.
*/
function LinkedList(length, headNode) {
  this._length = length;
  this._head = headNode;
}
LinkedList(1, firstNode);

// SETTING a new NODE to the end of a Linked List
LinkedList.prototype.insert = (data) => {
  let node = { // create a new node and place data in the node.
    data,
    next: null
  }
  // special case: there is no node asigned to the head.
  if (this._head === null){
    this._head = node;
  } else {
    let current = this._head
    while (current.next) current = current.next;
    current.next = node;
  }

  this._length += 1;
}
// more methods could be added here

//Searching for a node from a Linked List
LinkedList.prototype.search = (index) => {
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

LinkedList.prototype.delete = (index) => {
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

LinkedList.prototype.size = () => this._length;

LinkedList.prototype.show = () => {
  let current = this._head;
  let count = 0;
  while(current !== null) {
    count += 1;
    console.log('node: ', count, '\n data: ', current.data);
    current = current.next;
  }
}

console.log('global: ', global._length, global._head);
console.log('LinkedList: ', LinkedList.prototype);
