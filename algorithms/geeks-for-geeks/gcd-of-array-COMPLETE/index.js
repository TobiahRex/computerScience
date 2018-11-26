const processData = (inputs) =>
  inputs.slice(1).split('\n').forEach((n, i) =>
  (i > 0 && i % 2 === 0) && console.log(gcdArray(n)));

function gcdArray(input) {
  let nums = input.split(' ').map((n) => parseInt(n));
  return nums.reduce((acc, n) => gcd(acc, n), 0);
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

processData(
`2
10
1 2 3 4 5 6 7 8 9 10
10
5 10 5 10 5 10 5 10 5 10`
)
