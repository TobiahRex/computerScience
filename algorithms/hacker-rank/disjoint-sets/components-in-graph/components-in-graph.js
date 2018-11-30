const processData = (input) => {
  input.split('\n').slice(1).reduce(disjointSet, { setActions: createSet() });
};

function createSet() {
  let u = {};
  let sets = [];

  return ({
    createSet(a, b) {
      sets.push({ [a]: true, [b]: true });
    },
    addToSet(child, parent) {
      if (parent === null) u[child] = true;
      else {
        // locate parent set in sets | "parent" = index of the set.
        sets[parent][child] = true;
      }
    },
    getSets(g, b){
      let gSet = -1, bSet = -1;

      sets.forEach((set, i) => {
        if (g in set) gSet = i
        if (b in set) bSet = i
      });
      return { gSet, bSet };
    },
  });
}

function disjointSet(acc, input, i) {
  [g, b] = input.split(' ');
  let { gSet, bSet } = acc.setActions.getSets(g, b);

  if (gSet) {
    // both g & b are already assigned to a set
    if (bSet) {
      // if their sets are not the same, perform union.
      if (gSet !== bSet) setActions.union(gSet, bSet);
      // else // do nothing, its a repeat (probably will never happen.)
    } else {
      // add B to universal set.
      setActions.addToSet(bSet, null);
      // add B to G (the parent of B).
      setActions.addToSet(bSet, gSet);
    }
  } else {
    // g is not in the universal set.
    setActions.addToSet(g, null);
    // g does not already have a set.
    if (!bSet) {
      // b also does not already have a set.

      // a & b are not in the universal set already so add them.
      setActions.addToSet(b, null);
      setActions.createSet(g, b);
    } else {
      // g is not in the u set, but be is.
      // so add g to b.
      setActions.addToSet(g, b);
    }
  }
}

// look to see if g and b are already in a set.

processData(
`5
1 6
2 7
3 8
4 9
2 6`);
