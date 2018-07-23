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

    }

    _createNode = (value) => {
      return ({
        data: value,
        neighbors: Array(1),
      })
    }
  }
}
