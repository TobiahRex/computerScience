const processData = (inputs) =>
  inputs.split('\n').forEach((n, i) =>
  i > 0 && console.log(binomialCoefficient(n)));

function binomialCoefficient(input) {
  const { n, k } = input.split(' ').reduce((acc, n, i) => {
    i === 0 ? acc['n'] = Number(n) : acc['k'] = Number(n);
    return acc;
  }, {});

  let grid = new Array(n).fill(new Array(k).fill(0));
  console.log(grid);
}

processData(
`1
5 3`
);
