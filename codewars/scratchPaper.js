const arr = ['9', '91', '95', '96', '99'];
function factorial(n) {
  const memo = [];
  const findFactorial = (x) => {
    if (!(x > 1)) return 1;
    if (memo[x]) return memo[x];
    return memo[x] = findFactorial(x - 1) * x;
  }
  return findFactorial(n);
}
function findAllCombinations(arr) {
  const frontPosition = arr[0];
  const currentPosition = 0;


}

console.log(factorial(4));

// move last to second place
//f d
  '1 2 3 4 5'
//f d
  '1 2 4 3 5'

  '1 4 2 3 5'
//f
  '1 4 3 2 5'

  '1 4 3 5 2'

  '1 4 5 3 2'

  '1 4 5 2 3'

  '1 4 2 5 3'

  '1 2 4 5 3'

  '1 2 5 4 3'

  ''


  '2 1 4 3 5'

  '2 4 1 3 5'

  '2 4 3 1 5'

  '2 4 3 5 1'

  '2 3 4 5 1'

  '2 3 5 4 1'

  '2 5 3 1 4'

  '2 3 5 1 4'

  '2 3 1 5 4'

  '2 3 1 4 5'

  '2 1 3 4 5'

  '2 1 4 3 5'

  '2 1 4 5 3'

  '2 4 1 5 3'

  '2 4 5 1 3'

  '2 4 5 3 1'
