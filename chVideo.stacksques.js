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
    if(this.head === node){
      this.head = node.next;
    }
    if(this.tail === node){
      this.tail = node.prev;
    }
    if(node.prev){
      node.prev.next = node.next;
    }
    if(node.next){
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
  hasLoopMarkNodes(){
    //TODO
  }
  hasLoopFloyds(){
    //TODO
  }
}


class Stack extends DoublyLinkedList{
  push(data) {
    //TODO
    let node = new Node(data);
    
  }
  pop() {
    //TODO
  }
}

class Queue extends DoublyLinkedList{
  enqueue(data){
     //TODO
  }
  dequeue(){
    //TODO
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
