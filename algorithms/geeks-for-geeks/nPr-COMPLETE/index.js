const processData = (inputs) =>
  inputs.split('\n').forEach((n, i) =>
  i > 0 && console.log(nPr(n)));

function nPr(input) {
  let nums = input.split(' ').map((n) => parseInt(n));
  return (factorial(nums[0])/(factorial(nums[0]-nums[1])));
}

function factorial(seed) {
  let memo = [seed];

  return (n) => {
    if (n <= memo.length) return memo[n - 1];
    else {
      while(memo.length !== n) {
        memo[memo.length] = memo.length * memo[memo.length - 1];
      }
      return ({ value: memo[n - 1], cb: () => });
    }
  }
}

processData(
`2
2 1
10 4`
)


const processData = (inputs) =>
  inputs.split('\n').forEach((n, i) =>
  i > 0 && console.log(factorial(Number(n))));

function factorial(n) {
  // 1 * 2 = 2
  // 2 * 3 = 6
  // 6 * 4 = 24

  // 0   1  2   3  4
  // [1, 2, 6, 24, ]
  // [1]
  // (i + 1) * [i-1] ------ 2 * 1 // 2
  //                 ------ 3 * 2 // 6
  //                ------- 4 * 6

  let memo = [];
  if (memo[n - 1]) return memo[n - 1];
  else {
    let i =
  }
}

processData(`2
4
6`);
