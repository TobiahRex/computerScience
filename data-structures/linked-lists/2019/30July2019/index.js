export default class LinkedList {
  constructor(length, headNode) {
    this._length = length;
    this._head = headNode;
  }

  append = (data) => {
    const node = this.create(data);
    if (this._head) {
      let pointer = this._head;
      while(pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer = node;
    } else {
      this._head = node;
    }
    this._length += 1;
  }

  search = (target) => {
    if (this._head !== null) {
      let pointer = this._head;

      while(pointer.next !== null && pointer.data !== target) {
        pointer = pointer.next;
      }

      return pointer.data === target ? pointer : null;
    } else {
      return null;
    }
  }

  create = (data) => {
    return ({
      data,
      next: null,
    });
  }
}
