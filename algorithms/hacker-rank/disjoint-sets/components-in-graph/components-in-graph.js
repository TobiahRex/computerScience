const fs = require('fs');
const processData = (input) => {
  let result = input.reduce(disjointSet, {
    setActions: createSet(),
    largest: {},
    smallest: {},
  });
  // console.log(result.smallest, result.largest);
  return `${result.smallest} ${result.largest}`;
};

function createSet() {
  let u = {};
  let sets = [];

  return ({
    createSet(a, b) {
      let newSet = { [a]: true, [b]: true };
      sets.push(newSet);
    },
    addToSet(child, parent) {
      if (parent === null) {
        u[child] = true;
      } else if (parent > -1) {
        // locate parent set in sets | "parent" = index of the set.
        sets[parent] = { ...sets[parent], [child]: true };
      }
    },
    getSets(g, b){
      let gSet = -1, bSet = -1;
      // console.log("sets: ", sets)
      sets.forEach((set, i) => {
        // set
        if (g in set) gSet = i;
        if (b in set) bSet = i;
      });
      // gSet
      // bSet
      return { gSet, bSet };
    },
    union(gSet, bSet) {
      let oldG = sets[gSet],
        oldB = sets[bSet],
        newSet = {};

      sets = sets.filter((n, i) => {
        if (i === gSet || i === bSet) return false;
        return true;
      });
      newSet = { ...oldG, ...oldB };
      sets.push(newSet);

    },
    updateAnswer() {
      return sets.reduce((acc, n) => {
        let length = Object.entries(n).length;
        if (length > acc.largest) {
          acc.largest = length;
        }
        if (length < acc.smallest) {
          acc.smallest = length;
        };
        return acc;
      }, { largest: 0, smallest: Infinity });
    }
  });
}

function disjointSet(acc, input, i) {
  [g, b] = input.split(' ');
  // g
  // b
  let { gSet, bSet } = acc.setActions.getSets(g, b);
  // gSet
  // bSet
  if (gSet > -1) {
    // both g & b are already assigned to a set
    if (bSet > -1) {
      // if their sets are not the same, perform union.
      if (gSet !== bSet) acc.setActions.union(gSet, bSet);
      // else // do nothing, its a repeat (probably will never happen.)
    } else {
      // add B to universal set.
      acc.setActions.addToSet(b, null);
      // add B to G (the parent of B).
      acc.setActions.addToSet(b, gSet);
    }
  } else if (gSet === -1) {
    // g is not in the universal set.
    acc.setActions.addToSet(g, null);
    // g does not already have a set.
    if (bSet === -1) {
      // b is not in the universal set.
      acc.setActions.addToSet(b, null);
      // create a new set with g & b.
      acc.setActions.createSet(g, b);
    } else {
      acc.setActions.addToSet(g, null);
      // g is not in the u set, but be is.
      // so add g to b.
      acc.setActions.addToSet(g, bSet);
    }
  }
  let result = acc.setActions.updateAnswer();
  acc = { ...acc, ...result };
  return acc;
}

// look to see if g and b are already in a set.

fs.readFile(
  '/Users/BICKLEY/code/computerScience/algorithms/hacker-rank/disjoint-sets/components-in-graph/inputs_1000.txt',
  'utf8', (err, data) => {
  data = data.split('\n');
  let answer = processData(data.slice(1));
  answer
});
