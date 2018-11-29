const processData = (input) => {
  input.split('\n').slice(1).reduce(disjointSet, { setActions: universalSet() });
};

function universalSet() {
  let u = {};
  let sets = [];

  return ({
    add(value){
      if (!(value in u)){
        u[value] = true;

      }
    },
    getSet(g, b){
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
  { gSet, bSet } = setActions.getSet(g);
}

// look to see if g and b are already in a set.

processData(
  `5
  1 6
  2 7
  3 8
  4 9
  2 6`);
