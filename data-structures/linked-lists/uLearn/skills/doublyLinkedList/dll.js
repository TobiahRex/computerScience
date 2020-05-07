import DLL_Utility from './utils';

export default class DLL extends DLL_Utility {
  search(target) {
    let [n] = [this.head];
    while (n!== null) {
      if (target === n.data) {
        return true;
      }
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
}