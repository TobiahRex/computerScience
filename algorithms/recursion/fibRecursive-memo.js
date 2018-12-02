function fib(memo, n){
  if (n < 1) return 0;
  if (n === 1) return 1;

  if (n in memo) return memo[n];
  memo[n] = fib(memo, n - 1) + fib(memo, n - 2);
  return memo[n];
}
let memo = {};
console.log(fib(memo, 8));
