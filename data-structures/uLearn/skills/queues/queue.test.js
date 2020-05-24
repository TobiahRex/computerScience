import Q from './queue.array';
import Q_circular from './queue.array.circular';
import Q_ll from './queue.ll';
import DQ from './DEqueue.array';
import Q_stacks from './queue.2-stacks';

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

describe('[class: DQ]', () => {
  test('should enqueue some data: DQ', () => {
    let dq = new DQ();
    dq.enqueue(1);
    dq.enqueue(2);
    dq.enqueue(3);
    expect(dq.print()).toEqual('1,2,3');
  });
  test('should dequeue some data: DQ', () => {
    let dq = new DQ();
    dq.enqueue(1);
    dq.enqueue(2);
    dq.enqueue(3);
    expect(dq.dequeue()).toBe(1);
    expect(dq.dequeue()).toBe(2);
    expect(dq.dequeue()).toBe(3);
  });
  test('should demonstrate DE-Queue', () => {
    let dq = new DQ();
    expect(dq.insertFront(1)).toBe(-1);

    dq.insertRear(1);
    dq.insertRear(2);
    dq.insertRear(3);
    expect(dq.print()).toEqual('1,2,3');
    expect(dq.deleteFront()).toEqual(1);
    expect(dq.print()).toEqual(',2,3');

    dq.insertFront('4');
    expect(dq.print()).toEqual('4,2,3');

    dq.deleteFront();
    dq.deleteFront();
    dq.deleteRear();
    expect(dq.front).toEqual(dq.rear);
  });
});

describe('[class: Queue using stacks]', () => {
  test('should enqueue some data: Q-stacks', () => {
    let q = new Q_stacks();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    q.enqueue(4);
    expect(q.dequeue()).toEqual(3);
    q.enqueue(5);
    expect(q.dequeue()).toEqual(4);
    expect(q.dequeue()).toEqual(5);
    expect(q.dequeue()).toEqual(-1);
    expect(q.isEmpty()).toBe(true);
  })
});
