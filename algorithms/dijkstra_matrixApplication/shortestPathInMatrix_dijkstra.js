import DAG_v1 from './directedAcyclicGraph';
import PriorityQueue from './priorityQueue';

class DAG_v2 extends DAG_v1  {
  initialize(startId) {
    const times = {};
    const parents = {};
    Object.entries(this.adjMatrix).forEach(([sourceId, neighbors]) => {
      neighbors.forEach((neighbor) => {
        const newNode = {
          parent: sourceId,
          value: Infinity,
        };
        if (times[neighbor.id]) {
          times[neighbor.id].push(newNode);
        } else {
          times[neighbor.id] = [newNode];
        }
      });

      if (!Reflect.has(parents, sourceId)) {
        parents[sourceId] = {};
      }
    });

    times[startId] = [{ parent: null, value: 0 }];
    return { times, parents };
  }

  generateSolution(startId, endId, parents) {
    let solutions = [];
    let solutionsToFind = 1;

    while(solutionsToFind > 0) {
      let stepNode = endId;
      let solution = [endId];

      while(stepNode !== startId) {
        const parentObj = parents[stepNode];
        const parentKeys = Object.keys(parentObj);
        const [singleParentId] = parentKeys;

        solution.push(singleParentId);
        stepNode = singleParentId;

        if (parentKeys.length > 1) {
          solutionsToFind += parentKeys.length - 1;
          delete parentObj[singleParentId];
        }
      }
      solutions.push(solution.reverse());
      solutionsToFind -= 1;
    }

    return solutions;
  }

  dijkstra_multipleSolutions(startId, endId) {
    const { parents, times } = this.initialize(startId);
    const pq = new PriorityQueue();
    pq.enqueue(this.nodes[startId]);

    while(!pq.isEmpty()) {
      const currentNode = pq.dequeue();

      this.adjMatrix[currentNode.id].forEach((neighbor) => {
        const [lastNeighborTime] = times[neighbor.id];
        const [lastCurrentTime] = times[currentNode.id];
        const newTime = {
          parent: currentNode.id,
          value: lastCurrentTime.value + neighbor.value,
        }

        if (newTime.value === lastNeighborTime.value) {
          times[neighbor.id].push(newTime);
          parents[neighbor.id][currentNode.id] = true;
          pq.enqueue(neighbor);
        } else if (newTime.value < lastNeighborTime.value) {
          times[neighbor.id] = [newTime];
          parents[neighbor.id] = { [currentNode.id]: true };
          pq.enqueue(neighbor);
        }
      });
    }

    return this.generateSolution(startId, endId, parents);
  }
}


/**
NOTE: Implement an easy Dijkstra algorithm to find the shortest path,
inside a matrix of numbers.
*/
(() => {
  const answers = [
    {
      matrix: [ // answer = 10
        [1,3,2],
        [2,5,2],
        [4,1,3],
      ]
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ matrix }) {
  const graph = new DAG_v2();

  const directions = [-1, 0, 1];
  for (let i = 0; i < directions.length; i++) {
    for (let j = 0; j < directions.length; j++) {

      if (directions[i] === 1 && directions[j] === 0) { // rightward
        let rows = 0;
        while(rows < matrix.length) {
          let columns = 0;

          while(columns < matrix.length - 1) {
            const currentValue = matrix[rows][columns];
            const rightValue = matrix[rows][columns + 1];

            const id1 = `${rows}-${columns}`;
            const id2 = `${rows}-${columns + 1}`;

            graph.addNode(id1, currentValue);
            graph.addNode(id2, rightValue);
            graph.addEdge(id1, id2, rightValue);

            columns += 1;
          }
          rows += 1;
        }
      }


      if (directions[i] === 0 && directions[j] === -1) { // downward
        let rows = 0;
        while(rows < matrix.length - 1) {
          let columns = 0;

          while(columns < matrix.length) {
            const currentValue = matrix[rows][columns];
            const lowerValue = matrix[rows + 1][columns];

            const id1 = `${rows}-${columns}`;
            const id2 = `${rows + 1}-${columns}`;

            graph.addNode(id1, currentValue);
            graph.addNode(id2, lowerValue);
            graph.addEdge(id1, id2, lowerValue);

            columns += 1;
          }
          rows += 1;
        }
      }
    }
  }
  const toCheckpoint = graph.dijkstra('0-0', '0-1').reverse();
  const toFinish = graph.dijkstra('0-1', '2-2').reverse().slice(1);
  const answer = toCheckpoint.concat(toFinish);
  return answer;

  // const solution = graph.dijkstra_multipleSolutions('0-0', '2-2');
}
