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
