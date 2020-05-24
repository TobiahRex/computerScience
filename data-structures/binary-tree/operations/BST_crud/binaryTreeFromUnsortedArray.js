const node = {
  value: 0,
  left: null,
  right: null,
};

function generateTree(array) {
  // array /*?*/
  if (array.length === 0) return null;

  const iMiddle = Math.floor(array.length / 2);
  const newNode = {...node, value: array[iMiddle]};
  // newNode.value /*?*/
  // newNode.value = array[iMiddle];

  newNode.left = generateTree(array.slice(0, iMiddle));
  newNode.right = generateTree(array.slice(iMiddle + 1));

  return newNode;
}

// // const nodes = [7, 8, 9, 10, 11, 12, 13].sort((a, b) => a - b);
// const nodes = [8, 4, 2, 9, 6, 1, 3, 7, 0, 5].sort((a, b) => a - b);
// console.log(
//   JSON.stringify(
//     generateTree(nodes),
//     null,
//     2,
//   ),
// );

module.exports = generateTree;
