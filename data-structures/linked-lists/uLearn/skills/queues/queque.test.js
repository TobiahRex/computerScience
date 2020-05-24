import Q from './queue.array';
import Q_circular from './queue.array.circular';
import Q_ll from './queue.ll';

describe('[class: Q] as double pointer array', () => {
  test('should create Q with fixed & non-defined sizes', () => {
    let q = new Q(3);
    expect(q.q).toEqual(new Array(3));
    q = new Q();
    expect(q.q).toEqual([]);
  });
  test('should enqueue some data: double pointer method', () => {
    let q = new Q();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    expect(q.print()).toEqual('1,2,3,4');
  });
  test('should dequeue some data', () => {
    let q = new Q();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    expect(q.dequeue()).toBe(1);
    expect(q.dequeue()).toBe(2);
    expect(q.dequeue()).toBe(3);
    expect(q.dequeue()).toBe(4);
    expect(q.dequeue()).toBe(-1);
  });
});

describe('[class: Q_circular] as a circular double pointer array', () => {
  test('should enqueue some data: circular array method', () => {
    let q = new Q_circular(5);
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);
    expect(q.print()).toEqual('1,2,3,4,5');
  });
  test('should deque some data: circular array method', () => {
    let q = new Q_circular(5);
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    q.enqueue(4);
    q.enqueue(5);
    q.enqueue(6);
    q.enqueue(7);
    expect(q.isFull()).toBe(true);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.dequeue();
    q.dequeue();
    expect(q.isEmpty()).toBe(true);
  });
});

describe('[class: Q_ll', () => {
  test('should enqueue some data: LL', () => {
    let q = new Q_ll();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.print()).toEqual('1,2,3');
  });
  test('should dequeue some data: LL', () => {
    let q = new Q_ll();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual(4);
    expect(q.dequeue()).toEqual(-1);
  })
});