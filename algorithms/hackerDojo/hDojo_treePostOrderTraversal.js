let BigOh = 0;
(() => {
  const answers = [
    {
      data: 4,
      left: {
        data: 2,
        left: {
          data: 1,
          left: null,
          right: null,
        },
        right: {
          data: 3,
          left: null,
          right: null,
        },
      },
      right: {
        data: 6,
        left: {
          data: 5,
          left: null,
          right: null
        },
        right: {
          data: 7,
          right: null,
          left: null,
        },
      },
    },
  ].map((tree) => postOrderTraversal(tree));

  console.log('answers: ', answers);
})();

function postOrderTraversal(tree) {
  const stack = [tree];
  const results = [];

  let currentNode = stack.pop();
  while(currentNode) {
    if (currentNode.right) {
      stack.push(currentNode.right);
    }

    if (currentNode.left) {
      stack.push(currentNode.left);
    }
    currentNode = stack.pop();
    console.log(currentNode.data)
  }
}


// {
//   data: 4
//   left: {
//     data: 2,
//     left: {
//       data: 1
//       left: null,
//       right: null,
//     },
//     right: {
//       data: 3,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     data: 6,
//     left: {
//       data: 5,
//       left: null,
//       right: null
//     },
//     right: {
//       data: 7,
//       right: null,
//       left: null,
//     },
//   },
// }
