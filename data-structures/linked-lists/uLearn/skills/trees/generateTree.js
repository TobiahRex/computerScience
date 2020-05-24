import Queue from '../queues/queue.array';

class Node {
  root;
  left;
  right;

  constructor(data) {
    this.left = null;
    this.right = null;
    this.root = data;
  }
}


export default function generateTree(tree) {
  let [
    i, t, root,
  ] = [
      0, undefined, undefined,
  ];
  let Q = new Queue()
  let p = new Node(tree[i]);
  root = p;
  Q.enqueue(p);

  while(!Q.isEmpty()) {
    p = Q.dequeue();
    let [left, right] = [tree[(2 * i) + 1], tree[(2 * i++) + 2]];
    if (left > -1) {
      let t = new Node(left);
      p.left = t;
      Q.enqueue(t);
    }
    if (right > -1) {
      let t = new Node(right);
      p.right = t;
      Q.enqueue(t);
    }
  }
  return root;
}
