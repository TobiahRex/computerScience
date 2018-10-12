'use strict';

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
    this.seen = false;
  }
}

class DoublyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  add(data){
    this.addNode(new Node(data));
  }
  addNode(node){
    if(this.head === null){
      this.head = node;
    }
    if(this.tail){
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    ++this.length;
  }
  getNode(position) {
    if(position < 0 || position > this.length - 1){
      return null;
    }
    let count = 0;
    let curNode = this.head;
    while(count < position){
      curNode = curNode.next;
      ++count;
    }
    return curNode;
  }
  removeNode(node){
    if (this.head === node){
      this.head = node.next;
    }
    if (this.tail === node){
      this.tail = node.prev;
    }
    if (node.prev){
      node.prev.next = node.next;
    }
    if (node.next){
      node.next.prev = node.prev;
    }
    --this.length;
  }
  print(){
    let curNode = this.head;
    while(curNode){
      console.log(curNode.data);
      curNode = curNode.next;
    }
  }
  printReverse(){
    let curNode = this.tail;
    while(curNode){
      console.log(curNode.data);
      curNode = curNode.prev;
    }
  }
  hasLoopMarkNodes() {  // expensive and generic loop detection.
    let curNode = this.head;

    while(curNode) {
      if (curNode.seen) {
        return true;
      }
      curNode.seen = true;
      curNode = curNode.next;
    }
    return false;
  }
  hasLoopFloyds() {  // Floyds loop detector using runners.
    if (!this.head || !this.head.next || !this.head.next.next) return false;
    // we check for 3 valid nodes, because we need to create two runners.
    let slowRunner = this.head;
    let fastRunner = this.head.next.next;
    
    while (slowRunner !== fastRunner) {
      if (!hare.next || !hare.next.next) return false; // end of list

      slowRunner = slowerRunner.next;
      fastRunner = fastRunner.next.next;
    }
    return true;
    // if the code breaks out of the while loop WITHOUT a false condition then that means we do have a loop so return true.
  }
}


class Stack extends DoublyLinkedList{
  push(data) {
    this.add(data);
  }
  pop() {
    if (this.length === 0) return null;

    let oldTail = this.tail;
    this.removeNode(oldTail);
    return oldTail.data;
  }
}

class Queue extends DoublyLinkedList{
  enqueue(data){
     this.add(data);
  }
  dequeue(){
    if (this.length === 0) return null;

    let oldHead = this.head;
    this.removeNode(oldHead);
    return oldHead.data;
  }
}

function EXPECT_EQUAL(a, b){
  if(a !== b){
    console.log('TEST FAILED: EXPECTED: ' + a.toString() + ' ACTUAL: ' + b.toString());
    return false;
  }
  return true;
}

function testList(){
  let ll = new DoublyLinkedList();
  for(let i = 0; i < 10; ++i){
    ll.add(i);
  }
  return ll;
}

function testListWithLoop(){
  let ll = testList();
  ll.getNode(9).next = ll.getNode(5);
  return ll;
}

function testStack(){
  let s = new Stack();
  for(let i = 0; i < 10; ++i){
    s.push(i);
  }
  for(let i = 0; i < 10; ++i){
    EXPECT_EQUAL(9 - i, s.pop());
  }
  EXPECT_EQUAL(null, s.pop());
}

function testQueue(){
  let q = new Queue();
  for(let i = 0; i < 10; ++i){
    q.enqueue(i);
  }
  for(let i = 0; i < 10; ++i){
    q.dequeue(i);
  }
  EXPECT_EQUAL(null, q.dequeue());
}

function testLoopsMarking(){
  let ll = testList();
  EXPECT_EQUAL(false, ll.hasLoopMarkNodes());
  let loopy = testListWithLoop();
  EXPECT_EQUAL(true, loopy.hasLoopMarkNodes());
}

function testLoopsFloyd(){
  let ll = testList();
  EXPECT_EQUAL(false, ll.hasLoopFloyds());
  let loopy = testListWithLoop();
  EXPECT_EQUAL(true, loopy.hasLoopFloyds());
}
testQueue();
