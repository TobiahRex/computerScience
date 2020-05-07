import DLL from './dll';

describe(('[class: dll]'), () => {
  test('should generate a doubly linked list', () => {
    const dll = new DLL([1,2,3]);
    expect(dll.print({ twoWay: true })).toEqual('1,2,3,3,2,1');
    expect(dll.print({ twoWay: false })).toEqual('1,2,3');
  });
  test('should swap found node with previous node', () => {
    const dll = new DLL([1,2,3,4,5]);
    dll.transpositionSearch(3);
    expect(dll.print({ twoWay: false })).toEqual('1,3,2,4,5');
    expect(dll.print({ twoWay: true })).toEqual('1,3,2,4,5,5,4,2,3,1');
  })
});


