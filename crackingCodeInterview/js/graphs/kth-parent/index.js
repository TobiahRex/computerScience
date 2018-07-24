const kthAncestor = (input) => {
  const { testCases, nodes, queries } = parseInputs(input);

  for (let i = 0; i < testCases; i++) {
    const graph = createGraph();
    graph.handleNodes(nodes[i]);
    // console.log('verts: ', graph._vertices);
    graph.handleQueries(queries[i]);
  }
}

function createGraph() {
  class Graph {
    constructor(){
      this._vertices = {};
      this._root = null;
    }

    handleQueries = (queries) => {
      queries.forEach((queryStr) => {
        const nodeList = queryStr.split(' ');
        switch(nodeList[0]) {
          case '0': this.addNode(nodeList[2], nodeList[1]); break;
          case '1': this.deleteNode(nodeList[1]); break;
          case '2': this.findParent(nodeList[1], Number(nodeList[2])); break;
          default: throw new Error('Problem handling queries.'); break;
        }
      });
    }

    handleNodes = (nodes) => {
      nodes.forEach((nodeStr) => {
        const nodeList = nodeStr.split(' ');
        this.addNode(nodeList[0], nodeList[1]);
      });
    }

    findParent = (child, kParent) => {
      if (kParent === 0) {
        console.log(child);
        return;
      }

      const childNode = this._vertices[child];
      if (!childNode) {
        console.log(0);
        return;
      }
      let parentNode = null;

      childNode.neighbors.forEach((neighbor) => {
        // console.log('neighbor: ', neighbor);
        const neighborNode = this._vertices[neighbor];
        // console.log('neighborNode: ', neighborNode);
        if(neighborNode.depth < childNode.depth) parentNode = neighborNode;
      });
      // console.log('parentNode: ', parentNode);
      if (parentNode) this.findParent(parentNode.data, --kParent);
      else {
        console.log(0);
        return;
      }
    }

    deleteNode = (node) => {
      const to_delete = this._vertices[node];

      to_delete.neighbors.forEach((adjacent) => {
        const current = this._vertices[adjacent];

        current.neighbors = current.neighbors.filter((value) => value !== node);
      });

      delete this._vertices[node];
    }

    addNode = (child, parent) => {
      if (parent === '0') {
        this._root = this._createNode(child);
        this._vertices[child] = this._root;
        return;
      }
      let parentNode = null;
      if (parent === this._root.data) {
        parentNode = this._root;
      } else {
        parentNode = this._vertices[parent];
        if (!parentNode) {
          parentNode = this._createNode(parent, 1);
          this._vertices[parent] = parentNode;
        };
      }
      const depth = parentNode.depth + 1;
      const childNode = this._createNode(child, depth);
      this._vertices[child] = childNode;

      this._addEdge(parentNode.data, childNode.data);
    }

    _addEdge = (v1, v2) => {
      this._vertices[v1].neighbors.push(v2);
      this._vertices[v2].neighbors.push(v1);
    }

    _createNode = (data, depth = 0) => {
      return ({
        data,
        depth,
        neighbors: [],
      });
    }
  }

  return new Graph();
}

function parseInputs(input) {
  const inputs = input.split('\n');
  const testCases = Number(inputs[0]);
  const nodes = [];
  const queries = [];

  let history = 1;
  for (let i = 0; i < testCases; i++) {
    let newNodesLength = Number(inputs[history]);
    let newNodes = [];
    for (let j = 0; j < newNodesLength; j++) {
      history += 1;

      newNodes.push(inputs[history]);
    }
    nodes.push(newNodes);
    history += 1;

    let newQueriesLength = Number(inputs[history]);
    let newQueries = [];
    for (let k = 0; k < newQueriesLength; k++) {
      history += 1;

      newQueries.push(inputs[history]);
    }
    queries.push(newQueries);
    history += 1;
  }

  return ({
    testCases,
    nodes,
    queries,
  });
}

kthAncestor(
  `2
7
2 0
5 2
3 5
7 5
9 8
8 2
6 8
10
0 5 15
2 15 2
1 3
0 15 20
0 20 13
2 13 4
2 13 3
2 6 10
2 11 1
2 9 1
1
10000 0
3
0 10000 4
1 4
2 4 1`
);
