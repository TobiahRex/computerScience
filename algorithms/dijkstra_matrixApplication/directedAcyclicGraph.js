import PriorityQueue from './priorityQueue';

export default class DAG {
  constructor() {
    this.nodes = {};
    this.adjMatrix = {};
  }

  addNode(id, value) {
    if (!Reflect.has(this.nodes, id)) {
      this.nodes[id] = { id, value };
      this.adjMatrix[id] = [];
    }
  }

  addEdge(id1, id2, weight) {
    this.adjMatrix[this.nodes[id1].id].push({ id: id2, value: weight });
  }

  /**
   * @function dijkstra
   * META:
   * The classic path finding algo from a target to an ending node.
   * Uses a priority queue | least weighted values at the top of the queue.
   * Tracks the times taken to reach a neighbor node.
   * Tracks the parents of the shortest path.
   * HOW:
   * Enqueue the first node into the PQ.
   * Initialize all times for every node as Infinity
   * While the PQ is not empty, pop off the current node, and look at each neighbor.
   * Compare the time needed to travel to each neighbor from the current node, and save any
   * new times that are shorter than the last recorded time.
   * Once finished, iterate across the parent collection starting from the last node.
   * Push into a solutions array, the path from the end, to the beginning via each node's saved
   * parent node.
   * Viola!
   * @param
   * @return
   */
  dijkstra(startId, endId) {
    let parents = {};
    let times = { [startId]: 0 };
    let pq = new PriorityQueue();

    pq.enqueue(this.nodes[startId]);
    Object.keys(this.nodes).forEach((nodeId) => {
      if (nodeId !== startId) {
        times[nodeId] = Infinity;
      }
    });

    while(!pq.isEmpty()) {
      const currentNode = pq.dequeue();

      this.adjMatrix[currentNode.id].forEach((neighbor) => {
        const currentTime = times[currentNode.id] + neighbor.value;

        if (currentTime < times[neighbor.id]) {
          times[neighbor.id] = currentTime;
          parents[neighbor.id] = currentNode;
          pq.enqueue(neighbor);
        }
      });
    }

    let stepNode = this.nodes[endId];
    let solution = [stepNode.id];

    while(stepNode !== this.nodes[startId]) {
      const parentNode = parents[stepNode.id];
      solution.push(parentNode.id);
      stepNode = parentNode;
    }

    return solution;
  }
}
