import SLL from './ll';

describe('[class: SLL]', () => {
  test('should generate LL from an array', () => {
    const ll = new SLL([1,2,3,4,5]);
    expect(ll.print()).toEqual('1,2,3,4,5');
  });
  test('should return -1 if item is not found in LL', () => {
    const ll = new SLL([2,4,6,8]);
    expect(ll.search(3)).toEqual(-1);
    expect(ll.search(2)).toEqual(0);
  });
  test('should move target node to one node before its old node location', () => {
    const ll = new SLL([3,6,9,12]);
    expect(ll.transPositionSearch_v1(9)).toBe(true);
    expect(ll.print()).toEqual('3,9,6,12');
    expect(ll.transPositionSearch_v1(9)).toBe(true);
    expect(ll.print()).toEqual('9,3,6,12');
    expect(ll.transPositionSearch_v1(12)).toBe(true);
    expect(ll.print()).toEqual('9,3,12,6');
  });
  test('should move target node to one node before its old node location [v2]', () => {
    const ll = new SLL([3,6,9,12]);
    expect(ll.transPositionSearch_v2(9)).toBe(2);
    expect(ll.print()).toEqual('3,9,6,12');
    expect(ll.transPositionSearch_v2(9)).toBe(1);
    expect(ll.print()).toEqual('9,3,6,12');
    expect(ll.transPositionSearch_v2(12)).toBe(3);
    expect(ll.print()).toEqual('9,3,12,6');
  });
  test('should move target node to head', () => {
    const ll = new SLL([2,4,6,8]);
    expect(ll.moveToHeadSearch_v1(6)).toBe(2);
    expect(ll.print()).toEqual('6,2,4,8');
    expect(ll.moveToHeadSearch_v1(8)).toBe(3);
    expect(ll.print()).toEqual('8,6,2,4');
  });
  test('should insert node at the ned of LL', () => {
    const ll = new SLL([1,2,3,4]);
    ll.insertAtEnd(10);
    expect(ll.print()).toEqual('1,2,3,4,10');
    ll.insertAtIx(5, 2);
    expect(ll.print()).toEqual('1,2,5,3,4,10');
    ll.insertAtIx(0, 0);
    expect(ll.print()).toEqual('0,1,2,5,3,4,10');
  });
  test('should delete node at target ix', () => {
    const ll = new SLL([0,1,2,1,1,7,]);
    ll.delete(2);
    expect(ll.print()).toEqual('0,1,1,1,7');
    ll.delete(0);
    expect(ll.print()).toEqual('1,1,1,7');
    ll.delete(3);
    expect(ll.print()).toEqual('1,1,1');
  });
  test('should detect a cycle', () => {
    let ll = new SLL([1,2,3,4,5,6,7,8]);
    expect(ll.hasCycle()).toBe(false);
    ll.generateCycle(2);
    expect(ll.hasCycle()).toBe(true);
    ll = new SLL([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(ll.hasCycle()).toBe(false);
    ll.generateCycle(6);
    expect(ll.hasCycle()).toBe(true);
  });
  test('should insert node using chained methods', () => {
    const ll = new SLL();
    ll
    .insert(1)
    .insert(2)
    .insert(3)
    .insert(4)
    .insert(5)
    expect(ll.print()).toEqual('1,2,3,4,5');
  })
  test('should insert into sorted LL', () => {
    const ll = new SLL([2,4,6, 8]);
    ll.insertIntoSorted(5);
    expect(ll.print()).toEqual('2,4,5,6,8');
    ll.insertIntoSorted(1);
    expect(ll.print()).toEqual('1,2,4,5,6,8');
  });
  it('should detect if list is sorted', () => {
    const ll = new SLL([1,2,3,4,5,6,3]);
    expect(ll.isSorted()).toBe(false);
    ll.delete(6);
    expect(ll.isSorted()).toBe(true);
  });
  it('should remove duplicates from LL', () => {
    let ll = new SLL([3,3,3,6,8,8]);
    ll.removeDuplicates();
    expect(ll.print()).toEqual('3,6,8');
    ll = new SLL([1,1]);
    ll.removeDuplicates();
    expect(ll.print()).toEqual('1');
  });
  it('should reverse a LL', () => {
    let ll = new SLL([1,2,3,4,5]);
    ll.reverse();
    expect(ll.print()).toEqual('5,4,3,2,1');
    ll = new SLL([1]);
    ll.reverse();
    expect(ll.print()).toEqual('1');
    ll = new SLL([1,2]);
    ll.reverse();
    expect(ll.print()).toEqual('2,1');
  })
  it('should reverse a LL using recursion', () => {
    let ll = new SLL([1,2,3]);
    ll.reverseRecursive(null, ll.head);
    expect(ll.print()).toEqual('3,2,1');
  });
  it('should concatenate 2 LLs', () => {
    let ll1 = new SLL([2,2,2]);
    let ll2 = new SLL([3,3,3]);
    ll1.concat(ll2);
    expect(ll1.print()).toEqual('2,2,2,3,3,3');
  });
  it('should merge 2 LL\'s together', () => {
    let A = new SLL([2,4,6,8]);
    let B = new SLL([3,6,9,12]);
    A.merge(B);
    expect(A.print()).toEqual('2,3,4,6,6,8,9,12');
  });
});