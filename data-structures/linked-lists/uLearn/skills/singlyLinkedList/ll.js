import LL_Utils from './utils';

/**
 @function SinglyLinkedList (SLL)
*/

class SLL extends LL_Utils {
  search(target) {
    super.verifyHasList();

    let [i, found, n] = [-1, false, this.head];
    while(n !== null) {
      i += 1;
      if (n.data === target) {
        found = true;
        break;
      }
      n = n.next;
    }
    return found ? i : -1;
  }

  /**
   * @function transpositionSearch swaps the current value with the previous value,
   * moving it closer to the head, such that the next time it's searched for
   * there's less time taken to retrieve it.
   * @return {boolean} was the el found?
   */
  transPositionSearch_v1(target) {
    let [p, ix, i] = [
      this.head,
      this.search(target),
      0,
    ];
    while(i < (ix - 2)) {
      p = p.next;
      i++;
    }
    if (ix === 1) {
      let node = p.next;
      p.next = p.next.next;
      node.next = p;
      this.head = node;
    } else if (ix > 1) {
      let node = p.next;
      p.next = p.next.next;
      node.next = node.next.next;
      p.next.next = node;
    }
    return ix > -1 ? true : false;
  }

  transPositionSearch_v2(target) {
    let [p, n, i, found] = [this.head, this.head, -1];
    while (n !== null) {
      i++;
      if (n.data === target) {
        found = true;
        break;
      }
      if (i > 1) p = p.next;
      n = n.next;
    }
    if (i === 1) {
      let node = p.next;
      p.next = p.next.next;
      node.next = p;
      this.head = node;
    } else if (i > 1) {
      let node = p.next;
      p.next = p.next.next;
      node.next = node.next.next;
      p.next.next = node;
    }
    return found ? i : -1;
  }

  transpositionSearchV3(target) {
    if (target.data === this.head.data) return true;
    if (target.data === this.head.next.data) {
      let t = this.head.next.next;
      this.head.next.next = this.head;
      this.head.next = t;
      return true;
    }
    let [pp, p, n] = [this.head, this.head.next, this.head.next.next];
    while(n !== null && n.data !== target) {
      pp = p;
      p = n;
      n = n.next;
    }
    if (!n) return false;
    let t = n.next;
    n.next = p;
    pp.next = n;
    p.next = t;
    return true;
  }

  moveToHeadSearch_v1(target) {
    let [p, n, ix, found] = [this.head, this.head, -1, true];
    while (n !== null) {
      ix++;
      if (n.data === target) {
        found = true;
        break;
      }
      n = n.next;
      if (ix > 0) p = p.next;
    }
    if (ix === 1) {
      let node = this.head.next;
      this.head.next = node.next;
      node.next = this.head;
      this.head = node;
    } else if (ix > 1) {
      p.next = n.next;
      n.next = this.head;
      this.head = n;
    }

    return found ? ix : -1;
  }

  moveToHeadSearch_v2(data) {
    let [p, n] = [this.head];
    while(n !== null) {
      if (n.data === data) {
        p.next = n.next;
        n.next = this.head;
        this.head = n;
        return true;
      }
      p = n;
      n = n.next;
    }
    return false;
  }

  insertIntoSorted(data) {
    let [p, n, nn] = [this.head, this.head, this.create(data)];
    if (data < this.head.data) {
      nn.next = this.head;
      this.head = nn;
      return;
    }
    while (n !== null) {
      if (p.data < data && data < n.data) {
        nn.next = n;
        p.next = nn;
        break;
      }
      p = n;
      n = n.next;
    }
  }

  insert(data) {
    let [nn, n] = [this.create(data), this.head];
    if (this.head === null) {
      this.head = nn;
    } else {
      while(n.next !== null) n = n.next;
      n.next = nn;
    }
    return this;
  }

  insertAtEnd(data) {
    let [nn, n] = [this.create(data), this.head];
    while(n.next !== null) n = n.next;
    n.next = nn;
  }

  insertAtIx(data, ix) {
    let [nn, p, i] = [this.create(data), this.head, -1];
    if (ix === 0) {
      nn.next = p;
      this.head = nn;
    } else {
      while(p.next !== null) {
        if (i === ix) break;
        if (i++ > 0) p = p.next;
      }
      nn.next = p.next;
      p.next = nn;
    }
  }

  delete(ix) {
    if (ix === 0) {
      this.head = this.head.next;
      return;
    }
    let [i, p] = [-1, this.head];
    while(p.next !== null) {
      if (i === ix) break;
      if (i++ > 0) p = p.next;
    }
    p.next = p.next.next;
  }

  hasCycle() {
    let [n, fast] = [this.head, this.head];
    while(n && fast) {
      n = n.next;
      if (fast.next && fast.next.next) {
        fast = fast.next.next;
      } else {
        fast = null;
      }
      if (n === fast) break;
    }
    return n === fast;
  }

  isSorted() {
    let [min, n, result] = [-Infinity, this.head, true];
    while (n !== null) {
      if (min < n.data) {
        min = n.data;
        n = n.next;
      } else {
        result = false;
        break;
      }
    }
    return result;
  }

  removeDuplicates() {
    let [p, n] = [null, this.head];
    while(n !== null) {
      p = n;
      n = n.next;
      while(n && n.data === p.data) {
        n = n.next;
        p.next = n;
      }
    }
  }

  reverse() {
    let [p, c, n] = [null, null, this.head];
    while(n !== null) {
      p = c;
      c = n;
      n = n.next;
      c.next = p;
    }
    this.head = c;
  }

  reverseRecursive(p, n) {
    if (n.next !== null) this.reverseRecursive(n, n.next);
    else this.head = n;
    n.next = p;
  }

  concat(B) {
    let n = this.head;
    while(n.next !== null) n = n.next;
    n.next = B.head;
    B = null;
  }

  /**
   * @function merge
   * This is useful for merging two lists without extra space.
   */
  merge(B) {
    let [c1, c2, n] = [this.head, B.head, this.head];
    while (n !== null) {
      if (c1.data < c2.data) {
        n = c1.next;
        c1.next = c2;
        c1 = n;
      } else if (c2.data < c1.data) {
        n = c2.next;
        c2.next = c1;
        c2 = n;
      } else if (c1.data === c2.data) {
        n = c1;
        let n2 = c2;
        while (n.data === n2.data) {
          n = n.next;
          n2 = n2.next;
        }
        if (n.data < n2.data) {
          n2 = c2.next;
          c2.next = c1;
          c2 = n2;
        } else if (n2.data < n.data) {
          n = c1.next;
          c1.next = c2;
          c1 = n;
        }
        c1 = n;
        c2 = n2;
      }
    }
  }
}

export default SLL;
