import Stack from './stack.ll';

describe('[class: Stack <LL>]', () => {
  test('should push new data into list & demonstrate peek', () => {
    const s = new Stack([1,2,3]);
    expect(s.peek()).toEqual(1);
    s.push(4);
    expect(s.peek()).toEqual(4);
  });
  test('should pop data from the head and return data', () => {
    const s = new Stack([1, 2, 3]);
    expect(s.pop()).toEqual(1);
  });
  test('should indicate if Stack is empty', () => {
    const s = new Stack([]);
    expect(s.isEmpty()).toBe(true);
    s.push('something');
    expect(s.isEmpty()).toBe(false);
  });
});
