const processData = (input) => {
  input.split('\n').slice(1).reduce(disjointSet, { setActions: universalSet() });
};

function universalSet() {
  let u = {};
  let sets = [];

  return ({
    addToSet(a, b) {
      if (b === null) {
        u[a] = true;
        return;
      }


    }
    add(value){
      if (!(value in u)){
        u[value] = true;

      }
    },
    getSets(g, b){
      let gSet, bSet;

      sets.forEach((set, i) => {
        if (g in set) gSet = i
        else if(!getSet) gSet = -1;

        if (b in set) bSet = i
        else if (!bSet) bSet = -1;
      });

      return {
        gSet: u[g] || -1,
        bSet: u[b] || -1
      };
    },
  });
}

function disjointSet(acc, input) {
  let [g, b] = input.split(' ');
  let setActions = universalSet(),
  { gSet, bSet } = setActions.getSets(g, b);

  if (gSet) {
    if (bSet) {
      if (gSet !== bSet) setActions.union(gSet, bSet);
      else // do nothing, its a repeat (probably will never happen.)
    } else {
      // add B to universal set.
      setActions.addToSet(bSet, null);
      // add B to G set.
      setActions.addToSet(bSet, aSet);
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
