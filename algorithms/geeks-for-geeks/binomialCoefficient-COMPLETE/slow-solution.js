const processData = (inputs) =>
  inputs.split('\n').forEach((n, i) =>
  i > 0 && console.log(binomialCoefficient(n)));

function binomialCoefficient(input) {
  let { n, k } = input.split(' ').reduce((acc, n, i) => {
    if (i === 0) acc['n'] = Number(n);
    else acc['k'] = Number(n);
    return acc;
  }, {});

  return (factorial(n) / (factorial(k) * (factorial(n - k))));
}

function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}

processData(
`1
5 3`);
