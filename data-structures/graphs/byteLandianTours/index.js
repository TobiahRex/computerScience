const byteLandian = input => {
  const { testCases, roads } = parseInputs(input);

  for (let i = 0; i < testCases; i++) {
    console.log("/----------------------------------/");
    const graph = createGraph();
    graph.handleOldRoads(roads[i]);
    graph.createNewRoads();
    // graph.findAllPaths();
    console.log("\nthis._vertices: ", JSON.stringify(graph._vertices, null, 2));
  }
};

function createGraph() {
  class Graph {
    constructor() {
      this._vertices = {};
    }

    handleOldRoads = roadList => {
      roadList.forEach(road => {
        const path = road.split(" ");
        this.addNode(path[0], path[1]);
      });
    };

    createNewRoads = () => {
      /*
        For each vertex,
        find its neighbors.
        assign the neighbors of neighbors, (2 levels deep) as the list of
          "target" nodes.

      */
      Object.keys(this._vertices).forEach(vertex => {
        let targets = [],
          neighbors = this._vertices[vertex].neighbors;

        neighbors.forEach(v => {
          const neighborN = this._vertices[v].neighbors.filter(n => {
            if (n === vertex) return false;
            return true;
          });
          targets = targets.concat(neighborN);
        });
        /*
          Now that each vertex has a list of target nodes,
          we begin the evaluation for new roads.

          a "newNeighbor" is added to a vertex list "newNeighbors" whenever,
          if it isn't already inside the array.
            The newNeighbor list is populated for both the "target" vertex,
            and the "current" vertex.
        */
        targets.forEach(target => {
          const newNeighbors = this._vertices[vertex].newNeighbors;
          const targetNewNeighbors = this._vertices[target].newNeighbors;

          if (!newNeighbors.includes(target)) {
            newNeighbors.push(target);
          }

          if (!targetNewNeighbors.includes(vertex)) {
            targetNewNeighbors.push(vertex);
          }
        });
      });

      /*
      Go to "newNeighbors" list for each vertex...
      add edge between vertex and newNeighbors[i];
      go to "newNeighbors" of newNeighbors[i] and REMOVE
      vertex from target newNeighbors list and current vertex newNeighbors list.
      */
      Object.keys(this._vertices).forEach(vertex => {
        // iterate accross each vertex.
        let targetNewNeighbors;
        let length = this._vertices[vertex].newNeighbors.length; // iterate over the original length of the newNeighbors array.

        for (let i = 0; i < length; i++) {
          if (this._vertices[vertex].newNeighbors.length) {
            // because the array is being dynamically resized between iterations, we need to verify the array still has a length.
            const v = this._vertices[vertex].newNeighbors.pop(); // remove the newNeighbor from the newNeighbors array.
            targetNewNeighbors = this._vertices[v].newNeighbors; // look up the newNeighbors from the popped vertex in the prev. step.
            targetNewNeighbors.splice(targetNewNeighbors.indexOf(vertex), 1); // remove the vertex from the targets new neighbors list.
            this._addEdge(vertex, v); // create a new edge between the current vertex and the target neighbor (2 raods away).
            this._vertices[vertex].newNeighbors.splice(
              this._vertices[vertex].newNeighbors.indexOf(v),
              1
            ); // remove the target vertex from the current vertice list.
          }
        }
        delete this._vertices[vertex].newNeighbors;
      });
    };

    findAllPaths = () => {
      const { possible } = this._calculateSolutions();
      console.log("possible: ", possible);
    };

    _calculateSolutions = () => {
      const rootNeighbors = this._vertices["0"].neighbors; // [1, 2, 3];
      const maxSolutions = Object.keys(this._vertices).length - 1;
      const possiblePaths = [];

      for (let i = 0; i < Math.max(rootNeighbors.length, maxSolutions); i++) {
        console.log("i: ", i);
        let answer = Array(Object.keys(this._vertices).length); // create empty answer array with pre-determined size.
        answer[0] = 0; // [0, , , ];   |
        answer[1] = rootNeighbors[i]; // [0, 1, , ]   | [0, 2, , ]

        const neighborCpy = [...rootNeighbors];
        neighborCpy.splice(0, 1);
        neighborCpy.forEach(n => {
          answer[answer.length - 1] = n;
          possiblePaths.push(answer);
        });

        // console.log('neighborsCpy: ', neighborCpy);
        // neighborCpy.forEach((n) => {
        //   console.log('answer: ', answer);
        //   answer[answer.length - 1] = n;
        //   possible.push(answer);
        // });  // [0, 1, , 2]  | [0, 1, , 3] | [0, 2, , ]
      }

      return {
        possible
      };
    };

    addNode = (parent, child) => {
      let parentNode = null,
        childNode = null;

      /*
        lookup parent & child in cached vertex'
        if found assign as (child || parent) node.
        if NOT found, create new Node and add to cache list.
      */
      if (parent in this._vertices) {
        parentNode = this._vertices[parent];
      } else {
        parentNode = this._createNode(parent);
        this._vertices[parent] = parentNode;
      }

      if (child in this._vertices) {
        childNode = this._vertices[child];
        this._vertices[parent] = parentNode;
      } else {
        childNode = this._createNode(child);
        this._vertices[child] = childNode;
      }

      // create an edge between the two nodes.
      this._addEdge(parentNode.data, childNode.data);
    };

    _addEdge = (city1, city2) => {
      if (!this._vertices[city1].neighbors.includes(city2)) {
        this._vertices[city1].neighbors.push(city2);
      }
      if (!this._vertices[city2].neighbors.includes(city1)) {
        this._vertices[city2].neighbors.push(city1);
      }
    };

    _createNode = data => ({
      data,
      neighbors: [],
      newNeighbors: []
    });
  }

  return new Graph();
}

const parseInputs = input => {
  const inputs = input.split("\n");
  const roads = [];
  const testCases = Number(inputs[0]);

  let line = 1;
  for (let i = 0; i < testCases; i++) {
    // iterate for each test case.
    let cityCount = Number(inputs[line]); // find number of roads.
    let newCities = []; // store all new roads list in own array.
    line += 1; // increment the line.

    for (let j = 0; j < cityCount - 1; j++) {
      // iterate across each city.
      newCities.push(inputs[line]); // push roads list in temp array.
      line += 1; // advance to next line.
    }
    roads.push(newCities); // add test case list of roads to all roads collection.
  }

  return {
    testCases,
    roads
  };
};

byteLandian(
  `2
3
0 1
1 2
5
0 1
1 2
2 3
2 4
`
);
