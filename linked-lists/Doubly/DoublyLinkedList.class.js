class DoublyLL {
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
