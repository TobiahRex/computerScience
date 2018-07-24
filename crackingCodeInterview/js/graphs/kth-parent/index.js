const kthAncestor = (input) => {
  const graph = createGraph();
  const inputs = graph.parseInputs(input);
  graph.handleNodes(inputs.nodes);
  graph.handleQueries(inputs.handleQueries);
}

function createGraph() {
  class Graph {
    constructor(){
      this._vertices = {};
      this._root = null;
    }

    handleQueries = (queries) => {
      queries.forEach((nodeStr) => {
        const nodeList = nodeStr.split(' ');
        switch(nodeList[0]) {
          case '0': this.addNode(node_list[1], node_list[2]); break;
          case '1': this.deleteNode(node_list[1]); break;
          case '2': this.findParent(node_list[1], node_list[2]); break;
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
        console.log(child.value);
        return;
      }

      const childNode = this._vertices[child];
      if (!childNode || kParent > this._root.depth) {
        console.log(0);
        return;
      }
      const parentNode = null;

      childNode.neighbors.forEach((neighbor) => {
        const neighborNode = this._vertices[neighbor];
        if(neighborNode.depth < childNode.depth) parentNode = neighborNode;
      });

      if (parentNode) findParent(parentNode, --kParent);
      else {
        console.log(0);
        return;
      }
    }

    deleteNode = (node) => {
      this._vertices[node].neighbors.forEach((adjacent) => {
        this._vertices[adjacent].neighbors.filter((value) => value !== node);
      });

      delete this._vertices[node];
    }

    addNode = (child, parent) => {
      if (parent === '0') {
        const parentNode = this._createNode(child);
        this._root = parentNode;
        return;
      }
      const parentNode = this._vertices[parent];
      const depth = parentNode.depth + 1;
      const childNode = this._createNode(child, depth);
      this._vertices[child] = childNode;

      this._addEdge(parentNode, childNode);
    }

    _addEdge = (v1, v2) => {
      this._vertices[v1].neighbors.push(v2);
      this._vertices[v2].neighbors.push(v1);
    }

    _createNode = (value, depth = 0) => {
      return ({
        depth,
        data: value,
        neighbors: Array(1),
      });
    }

    parseInputs = (input) => {
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
        nodes,
        queries,
      });
    }
  }

  return new Graph();
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
