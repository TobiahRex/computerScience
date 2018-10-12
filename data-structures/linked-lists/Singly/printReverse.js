function LinkedList() { return; }
LinkedList.prototype.create = function (node, length) {
  this._head = node;
  this._length = length;
}
LinkedList.prototype.printReverseNode = function (node) {
  /*
  if there is a node.next,
  call the function again,
  handing off the printing responsibilities to the next function call.
  once that's not true,
  return a console.log of the current node's data value.
  */
  if(node.next) {
    this.printReverseNode(node.next);
    return console.log('node: ', node.data);
  }
  return console.log('node: ', node.data);
};

LinkedList.prototype.printReverse= function() {
  this.printReverseNode(this._head);
}

let ll = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null
    }
  }
}
LinkedList()
LinkedList.prototype.create(ll, 3);
LinkedList.prototype.printReverse();
// console.log('LinkedList: ', LinkedList;
// console.log('>>> ANSWER: ', LinkedList.printReverse());
