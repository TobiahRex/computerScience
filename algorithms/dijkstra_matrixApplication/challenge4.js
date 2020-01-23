/**
  `Problem Description:`
  Implement a shortest path algorithm if the directions from each
  vertex is all 4 directions.
*/

class Graph {
  constructor() {
    this.nodes = {};
    this.edges = {};
  }

  addNode = (node) => {
    if (!Reflect.has(this.nodes, node.id)) {
      this.nodes[node.id] = node;
      this.edges[node.id] = [];
    }
  }

  addEdge = (node1, node2, weight) => {
    this.edges[node1.id].push({ node: node2, weight });
    this.edges[node2.id].push({ node: node1, weight });
  }

  build = (matrix) => {
    let directions = [-1, 0, 1];
    let blackList = {
      '0-0': true,
      '1-1': true,
      '1--1': true,
      '-1-1': true,
      '-1--1': true,
    };

    for (let x = 0; x < directions.length; x++) {
      for (let y = 0; y < directions.length; y++) {
        const position = `${directions[x]}-${directions[y]}`;

        // NOTE: 1. Diagonals or stationary
        if (Math.abs(directions[x]) === 1 && Math.abs(directions[y]) === 1) continue;
        if (directions[x] === 0 && directions[y] === 0) continue;

        let calculator = null;

        if (directions[x] === 0 && directions[y] === 1) { // upward
          calculator = {
            row: matrix.length - 2,
            rowLimit: -1,
            rowOperator: -1,

            column: 1,
            columnLimit: matrix.length,
            columnOperator: 1,

            target: 'row',
          };
        }
        if (directions[x] === 0 && directions[y] === -1) { // downward
          calculator = {
            row: 1,
            rowLimit: matrix.length,
            rowOperator: 1,

            column: 0,
            columnLimit: matrix.length,
            columnOperator: 1,

            target: 'row',
          };
        }
        if (directions[x] === 1 && directions[y] === 0) { // rightward
          calculator = {
            row: 0,
            rowLimit: matrix.length,
            rowOperator: 1,

            column: 0,
            columnLimit: matrix.length,
            columnOperator: 1,

            target: 'column',
          };
        }
        if (directions[x] === -1 && directions[y] === 0) { // leftward
          calculator = {
            row: 0,
            rowLimit: matrix.length,
            rowOperator: 1,

            column: matrix.length - 1,
            columnLimit: -1,
            columnOperator: -1,
            target: 'column',
          };
        }

        // console.log(calculator)
        while(calculator.row !== calculator.rowLimit) {
          while(calculator.column !== calculator.columnLimit) {
            const source = {
              id: `${calculator.row}-${calculator.column}`,
              value: matrix[calculator.row][calculator.column],
            }

            // calculator
            let destination;
            if (calculator.target === 'row') {
              destination = {
                id: `${calculator.row + calculator.rowOperator}-${calculator.column}`,
                value: matrix[calculator.row + calculator.rowOperator][calculator.column],
              }
            } else {
              destination = {
                id: `${calculator.row}-${calculator.column + calculator.columnOperator}`,
                value: matrix[calculator.row][calculator.column + calculator.columnOperator],
              }
            }
            calculator
            source.id /*?*/
            destination.id /*?*/
            // destination
            // console.log('pre: ', calculator)
            calculator.column += calculator.columnOperator;
            // console.log(calculator)
            // break;

          }
          calculator.row += calculator.rowOperator;
          break;
        }
      }
    }
  }

  getAnswer = ({ matrix }) => {
    this.build(matrix);
  }
}


(() => {
  const graph = new Graph();

  const answers = [
    {
      matrix: [
        [1,1,1,1],
        [5,4,3,1],
        [4,1,9,9],
        [3,1,1,3],
      ],
    }
  ].map(graph.getAnswer)
  console.log('answers: ', answers);
})();
