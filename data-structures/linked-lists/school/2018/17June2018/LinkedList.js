class LinkedList {
  constructor(data = null) {
    this._head = null;
    this._length = 0;

    if (data === null) this._head = "This linked list is empty";
  }

  boundsCheck = (index) => {
    if (index > -1 && index < this._length) return true;
    return false;
  }

  search = (index) => {
    let current = this._head;
    let i = 0;
    if (this.boundsCheck(index)) {
      while(i++ < index) {
        if (current.next) {
          current = current.next;
        } else {
          break;
        }
      }
      return current.data;
    } else {
      return null;
    }
  }

  createNew = (data) => {
    return {
      data,
      next: null,
    };
  }

  insert = (data) => {
    const newNode = this.createNew(data);

    if (!this._length) {
      this._head = newNode;
      this._length++;
      return;
    }

    let current = this._head;
    let i = 0;

    while(i++ < this._length) {
      current = current.next;
      // if (current.next) {
      // } else {
      //   break;
      // }
    }
    current.next = newNode;
    this._length++;
    console.log('added new node: ', current);
  }

  peek = () => {
    let i = 0,
      current = this._head;

    while (i++ < this._length) {
      if (current.next) {
        current = current.next;
      } else break;
    }
    return current.data;
  }
}

const sll = new LinkedList();
sll.insert("toby");
sll.insert("i am the second node.");
console.log(
  sll.search(1)
);
console.log(
  sll.peek()
);
console.log(
  sll._length
);
