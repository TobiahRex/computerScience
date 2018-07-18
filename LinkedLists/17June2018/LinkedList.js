class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  boundsCheck = (index) => {
    if (index > -1 && index < this._length) return true;
    return false;
  }

  search = () => {
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
}

const sll = new LinkedList();
sll.createNew("toby");
console.log(sll.search(0));
