class Node {
  data = null
  next = null;

  constructor(datum) {
    if (datum !== undefined) {
      this.data = datum;
    }
  }
}

export default class LL_Utils {
  constructor(array) {
    if (Array.isArray(array)) {
      this.head = this.generate(array);
    } else {
      this.head = null;
    }
  }
  generate(arr) {
    let h = new Node(arr[0]), l = h;
    for (let i = 1; i < arr.length; i++) {
      let n = new Node(arr[i]);
      l.next = n;
      l = l.next;
    }
    return h;
  }

  print() {
    if (!this.head) return;
    let vals = [], n = this.head;
    while (n && typeof n.data !== undefined) {
      vals.push(n.data);
      n = n.next;
    }
    return vals.join(',');
  }

  verifyHasList() {
    if (!this.head) {
      throw new Error('list is empty');
    }
  }

  create(data) {
    let newNode = new Node(data);
    return newNode;
  }

  generateCycle(targetIx) {
    let [t, n, i] = [this.head, this.head, -1];
    while(t.next !== null) t = t.next;
    while (n !== null) {
      i++;
      if (i === targetIx) break;
      n = n.next;
    }
    t.next = n;
  }
}
