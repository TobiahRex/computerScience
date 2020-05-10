import DLL_Utility, { Node } from './utils';

export default class DLL extends DLL_Utility {
  search(target) {
    let [n] = [this.head];
    while (n!== null) {
      if (target === n.data) {
        return true;
      }
      n = n.next;
    }
    return false;
  }

  transpositionSearch(target) {
    let [p, n, nn] = [null, this.head, null];
    if (n.next === null) return this.head.data === target;
    while(n !== null && n.data !== target) {
      p = n;
      n = n.next;
      nn = n.next;
    }
    n.next = p;
    n.prev = p.prev;
    p.next = nn;
    nn.prev = p;
    p.prev = n;
    n.prev.next = n;
  }

  insert(data, ix) {
    let node = new Node(data);
    if (ix === 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      return;
    }

    let [n, i] = [this.head, 1];
    while(n.next !== null && i !== ix) {
      n = n.next;
      i++;
    }
    node.next = n.next;
    node.prev = n;
    n.next = node;
    if (node.next) {
      node.next.prev = node;
    }
  }

  delete(ix) {
    if (ix === 0) {
      this.head = this.head.next;
      this.head.prev.next = null;
      this.head.prev = null;
      return;
    }

    let [n, i] = [this.head, 0];
    while(n !== null && i !== ix) {
      n = n.next;
      i++;
    }
    n.prev.next = n.next;
    if (n.next) {
      n.next.prev = n.prev;
    } else {
      n.prev = null;
    }
  }

  insertV2(ix, data) {
    const node = new Node(data);

    if (ix === 0) {
      node.next = this.head;
      node.prev = this.head.prev;
      this.head.prev = node;
      node.prev.next = node;
      this.head = node;
    }
  }

  hasCycle() {
    let [f, s] = [this.head, this.head];
    do {
      if (f.next) f = f.next;
      if (f.next) f = f.next;
      else break;
      s = s.next;
    } while (f !== s);
    return f === s;
  }

  findMiddle() {
    let [i, n] = [1, this.head];
    while (n !== null) {
      i++;
      n = n.next;
    }
    let j = 1;
    n = this.head;
    while (j !== Math.floor(i / 2)) {
      j++;
      n = n.next;
    }
    return n.data;
  }

  findMiddleDllCycle() {
    let [i, n] = [1, this.head];
    do {
      i++;
      n = n.next;
    } while (n !== this.head);
    let j = 1;
    n = this.head;
    do {
      j++;
      n = n.next;
    } while(j !== Math.floor(i / 2));
    return n.data;
  }

  findMiddle_TwoPointers() {
    let [p, n] = [this.head, this.head];

    if (this.hasCycle()) {
      do {
        n = n.next;
        if (n !== this.head) n = n.next;
        else break;
        p = p.next;
      } while (n !== this.head);
    } else {
      while (n) {
        n = n.next;
        if (n) n = n.next;
        else break;
        p = p.next;
      }
    }
    return p.data;
  }

  moveToHeadSearch(target) {
    if (target === this.head.data) return this.head;

    let n = this.head;
    while (n.data !== target && n.next !== null) {
      n = n.next;
    }
    let [p, nn] = [n.prev, n.next];
    n.prev = null;
    n.next = this.head;
    this.head.prev = n;
    this.head = n;
    p.next = nn;
    if (nn) nn.prev = p;
    return;
  }

  concatenateWithCycle(B) {
    let n = B.head;
    while(n.next !== null) n = n.next;
    B.head.prev = this.head.prev;
    this.head.prev.next = B.head;
    this.head.prev = n;
    n.next = this.head;
    B.head = this.head;
  }
}
