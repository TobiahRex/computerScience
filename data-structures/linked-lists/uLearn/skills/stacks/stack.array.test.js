import StackA from './stack.array';

describe('[class: Stack] using array', () => {
  test('should push element into a stack', () => {
    const S = new StackA(3);
    S.push(1)
    S.push(2)
    S.push(3)
    expect(S.print()).toEqual('1,2,3');
    expect(S.push(1)).toEqual(undefined);
    expect(S.print()).toEqual('1,2,3');
  });
  test('should pop element off the stack', () => {
    const S = new StackA(3);
    S.push(1)
    S.push(2)
    S.push(3)
    expect(S.print()).toEqual('1,2,3');
    S.pop()
    S.pop()
    expect(S.print()).toEqual('1');
    expect(S.pop()).toEqual(1);
    expect(S.pop()).toEqual(undefined);
  });
  test('should peek element at given index', () => {
    const S = new StackA(3);
    S.push(2)
    S.push(4)
    S.push(6)
    expect(S.print()).toEqual('2,4,6');
    expect(S.peek(4)).toEqual(undefined);
    expect(S.peek(3)).toEqual(2);
    expect(S.peek(2)).toEqual(4);
    expect(S.peek(1)).toEqual(6);
  });
  test('should show the top of the stack', () => {
    const S = new StackA(3);
    expect(S.stackTop()).toEqual(-1);
    S.push(3);
    S.push(6);
    S.push(9);
    expect(S.stackTop()).toEqual(9);
  });
  test('should show if the stack is empty', () => {
    const S = new StackA(3);
    S.push(3);
    S.push(5);
    S.push(8);
    expect(S.isEmpty()).toEqual(false);
    S.pop();
    S.pop();
    S.pop();
    expect(S.isEmpty()).toEqual(true);
  });
  test('should show if the stack is full', () => {
    const S = new StackA(3);
    S.push(3);
    S.push(5);
    S.push(8);
    expect(S.isFull()).toEqual(true);
    S.pop();
    S.pop();
    expect(S.isFull()).toEqual(false);
  });
});