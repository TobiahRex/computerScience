import DLL from './dll';

describe(('[class: dll]'), () => {
  test('should generate a doubly linked list', () => {
    const dll = new DLL([1,2,3]);
    expect(dll.print({ twoWay: true })).toEqual('1,2,3,3,2,1');
    expect(dll.print({ twoWay: false })).toEqual('1,2,3');
  });
  test('should find target element', () => {
    const dll = new DLL([7,8,9,0]);
    expect(dll.search(8)).toBe(true);
  });
  test('should swap found node with previous node', () => {
    const dll = new DLL([1,2,3,4,5]);
    dll.transpositionSearch(3);
    expect(dll.print({ twoWay: false })).toEqual('1,3,2,4,5');
    expect(dll.print({ twoWay: true })).toEqual('1,3,2,4,5,5,4,2,3,1');
  });
  test('should move target node to the head of a DLL', () => {
    const dll = new DLL([1,1,1,1,2]);
    dll.moveToHeadSearch(2);
    expect(dll.print({ twoWay: false })).toEqual('2,1,1,1,1');
  });
  test('should insert node at target index', () => {
    let dll = new DLL([2,2,2,2,]);
    dll.insert(3, 2);
    expect(dll.print({ twoWay: false })).toEqual('2,2,3,2,2');
    dll.insert(0, 0);
    expect(dll.print({ twoWay: false })).toEqual('0,2,2,3,2,2');
    dll.insert(9, 6);
    expect(dll.print({ twoWay: false })).toEqual('0,2,2,3,2,2,9');
  });
  test('should remove node at target index', () => {
    let dll = new DLL([1, 2, 3, 2,]);
    dll.delete(2);
    expect(dll.print({ twoWay: false })).toEqual('1,2,2');
    dll.delete(0);
    expect(dll.print({ twoWay: false })).toEqual('2,2');
  });
  test('should create a cycle in a DLL', () => {
    let dll = new DLL([2,4,6,8.10]);
    expect(dll.hasCycle()).toBe(false);
    dll.createCycle();
    expect(dll.hasCycle()).toBe(true);
  });
  test('should insert node at head of circular-DLL', () => {
    const dll = new DLL([2,4,6,8,10]);
    dll.createCycle();
    expect(dll.hasCycle()).toBe(true);
    dll.insertV2(0, 1);
    expect(dll.hasCycle()).toBe(true);
    expect(dll.head.prev.data).toEqual(10);
  });
  test('should find the middle element of a DLL', () => {
    let dll = new DLL([1,2,3,4,5]);
    expect(dll.findMiddle()).toBe(3);
    dll = new DLL([1,2,3,4,5,6]);
    expect(dll.findMiddle()).toBe(3);
    dll = new DLL([1,2,3,4,5]);
    dll.createCycle();
    expect(dll.hasCycle()).toBe(true);
    expect(dll.findMiddleDllCycle()).toBe(3);
  });
  test('should concatenate 2 DLLs: Host list should have a cycle', () => {
    let A = new DLL([1,2,3]);
    let B = new DLL([4,5,6]);
    A.createCycle();
    expect(A.hasCycle()).toBe(true);
    A.concatenateWithCycle(B);
    expect(A.print({ twoWay: false })).toEqual('1,2,3,4,5,6');
  });
  test('should find middle element of a DLL (w/ or w/o a cycle)', () => {
    let dll = new DLL([1,2,3,4,5]);
    dll.createCycle();
    expect(dll.hasCycle()).toBe(true);
    expect(dll.findMiddle_TwoPointers()).toBe(3);
  });
});
