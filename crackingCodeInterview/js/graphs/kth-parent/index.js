const kthAncestor(input) {

}

function createGraph() {
  return class Graph {
    constructor(){
      this._vertices = {};
    }

    _addNode = (parent, child) => {
      const parentNode = this._createNode(parent);
      const childNode = this._createNode(child);

      if (!this._vertices[parent]) {
        this._vertices[parent] = parentNode;
      }

      if (!this._vertices[child]) {
        this._vertices[child] = childNode;
      }
      this._addEdge(parentNode, childNode);
    }

    _addEdge = (v1, v2) => {
      this._vertices[v1].neighbors.push(v2);
      this._vertices[v2].neighbors.push(v1);
    }

    _createNode = (value) => {
      return ({
        data: value,
        neighbors: Array(1),
      });
    }

    this.parseInputs(input) {
      const inputs = input.split('\n');
      const testCases = Number(inputs[0]);
      const nodes = [];
      const queries = [];

      let history = 1;
      for (let i = 0; i < testCases; i++) {
        let newNodes = Number(inputs[history]);
        for (let j = 0; j < newNodes; j++) {
          history += 1;

          nodes[i].push(inputs[history]);
        }
        history += 1;

        let newQueries = Number(inputs[history]);
        for (let k = 0; k < newQueries; k++) {
          history += 1;

          queries[i].push(inputs[history]);
        }
        history += 1;
      }

      return ({
        nodes,
        queries,
      });
    }
  }
}
