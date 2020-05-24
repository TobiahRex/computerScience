export class Node {
  data = null
  next = null
  prev = null

  constructor(data) {
    this.data = data;
  }
}

export default class DLL_Utility {
  constructor(data) {
    if (Array.isArray(data)) {
      this.head = this.generate(data);
    } else if(data) {
      this.head = new Node(data);
    }
  }

  generate(list) {
    let n = new Node(list[0]);
    let h = n;
    for (let i = 1; i < list.length; i++) {
      let node = new Node(list[i]);
      n.next = node;
      node.prev = n;
      n = n.next;
    }
    return h;
  }

  print({ twoWay }) {
    if (!this.head) return;
    let [vals, n] = [[], this.head];
    if (this.hasCycle()) {
      while (n.next !== this.head) {
        vals.push(n.data);
        n = n.next;
      }
      vals.push(n.data);
    } else {
      while (n.next !== null) {
        vals.push(n.data);
        n = n.next;
      }
      vals.push(n.data);
      if (twoWay) {
        while (n !== null) {
          vals.push(n.data);
          n = n.prev;
        }
      }
    }

    return vals.join(',');
  }

  createCycle(ix) {
    let n = this.head;
    while(n.next !== null) n = n.next;
    n.next = this.head;
    this.head.prev = n;
    if (ix) {
      let [i, n] = [0, this.head];
      while (i !== ix && n !== null) {
        i++;
        n = n.next;
        if (i === ix) {
          this.head.prev.next = n;
          this.head = null;
        }
      }
    }
  }
}
