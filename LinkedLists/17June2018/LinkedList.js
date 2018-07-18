class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  boundsCheck = (index) => {
    if (index > -1 && index < this._length) return true;
    return false;
  }

  search = (index) => {
    let current = this._head;
    let i = 0;
    if (index == 0) return current.data;
    else if (this.boundsCheck(index)) {
      while(i++ < index) {
        current = current.next;
      }
      return current.data;
    } else {
      return null;
    }
  }

  createNew = (data) => {
    const newNode = {
      data,
      next: null,
    };

    if (!this._head) {
      this._head = newNode;
    }
    return data;
  }

  insert = (data) => {
    let current = this._head;
    let i = 0;
    while(i++ < this._length) current = current.next;
    this._length++;

    const newNode = this.createNode(data);
    current.next = newNode;

    return current.data;
  }

  peek = () => {
    let i = 0,
      current = this.head;

    while (i++ < this._length) current = current.next;
    return current.data;
  }
}

const sll = new LinkedList();
sll.createNew("toby");
console.log(sll.search(0));
