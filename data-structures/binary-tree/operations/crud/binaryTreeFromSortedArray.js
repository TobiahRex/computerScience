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
console.log("Test: \n", JSON.stringify(tree, null, 2));

module.exports = createTree;

/**
 NOTE: Mnemonic (Psuedo Code)
 Location: Navy Barracks, Yokosuka picnic tables.
 Characters:
  - Input: A line of parents & children are in a single file line through the volleyball courts and down the street toward the NEX.
  - Program:
    1. While loop: Walter White

  A line of parents and children are sent to a sorting function.
  the process begins by

  A line of Parents (Q) that each have a family.

  go through a ticket gate.

  each person is asked to present their first son and first daughter.
    to start, the father's daughter is assigned a number of 2 * i + 1.
    next, the father's son is assigned a number of 2 * i + 2.
    if that child is married, then they're asked to re-enter the queue.
*/