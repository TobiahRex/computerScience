let node = {
  value: 0,
  left: null,
  right: null,
}

function createTree(array, i = 0) {
  const tree = { value: array[i], left: null, right: null };
  const queue = [[null, tree]];

  while (queue.length > 0) {
    const [value, parent] = queue.shift();
    const left = array[2 * i + 1];
    const right = array[2 * i + 2];

    if (left) {
      if (!parent.left) parent.left = {...node};
      parent.left.value = left;
      queue.push([left, parent.left])
    };
    if (right) {
      if (!parent.right) parent.right = {...node};
      parent.right.value = right;
      queue.push([right, parent.right]);
    }

    i += 1;
  }
  return tree;
}

// const array = [5, null, null];
const array = [10, 8, 12, 7, 9, 11, 13];
// const array = [10, 8, 12, 7, 9, 11, 13];
const tree = createTree(array);
console.log(JSON.stringify(tree, null, 2));

module.exports = createTree;
