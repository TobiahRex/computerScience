const processData = (inputs) =>
  inputs.split('\n').forEach((n, i) =>
  i > 0 && console.log(binomialCoefficient(n)));

function binomialCoefficient(input) {
  const { n, k } = input.split(' ').reduce((acc, n, i) => {
    i === 0 ? acc['n'] = Number(n) : acc['k'] = Number(n);
    return acc;
  }, {});

  let memo = {};
  // find a way to dynamically add values to array.

  for (let i = 0; i <= n; i++) {
    memo[i] = [];
    for (let j = 0; j <= Math.min(i, k); j++) {
      if (j === 0 || j === i) memo[i][j] = 1;
      else {
        memo[i][j] = memo[i - 1][j - 1] + memo[i - 1][j];
      }
    }

  }
  console.log(memo);
  return memo[n][k];
}

processData(
`1
5 3`
);
