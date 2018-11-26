const processData = (inputs) =>
  inputs.split('\n').forEach((n, i) =>
  i > 0 && console.log(nPr(n)));

function nPr(input) {
  let nums = input.split(' ').map((n) => parseInt(n));
  return (factorial(nums[0])/(factorial(nums[0]-nums[1])));
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return (n * factorial(n - 1));
}

processData(
`2
2 1
10 4`
)
