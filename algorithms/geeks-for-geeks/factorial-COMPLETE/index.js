const processData = (inputs) =>
  inputs.split('\n').forEach((n, i) =>
  i > 0 && console.log(factorial(n)));

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

processData(
`2
4
6`
);
