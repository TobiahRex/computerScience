/*
  Problem Description: (133)


*/


(() => {
  const answers = [
    {
      nodes: {
        1: {
          val: 1,
          neighbors: []
        }
      }
    }
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function Node(val, neighbors) {
  this.val = val;
  this.neighbors = neighbors;
}

// DFS
// var cloneGraph = function(node, memo = {}) {
//     if (!node) return node;
//     if (Reflect.has(memo, node.val)) return memo[node.val];

//     const clone = new Node(node.val, []);
//     memo[node.val] = clone;

//     node.neighbors.forEach((neighbor) => {
//         clone.neighbors.push(cloneGraph(neighbor, memo));
//     });

//     return clone;
// };

var cloneGraph = function(node) {
    if (!node) return node;

    let map = new Map();
    map.set(node, new Node(node.val, []));
    let queue = [node];

    while (queue.length) {
        let currentNode = queue.shift();

        currentNode.neighbors.forEach((neighbor) => {
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val, []));
                queue.push(neighbor);
            }
            map.get(currentNode).neighbors.push(map.get(neighbor));
        });
    }

    return map.get(node);
};
