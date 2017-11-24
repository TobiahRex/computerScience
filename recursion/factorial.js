const factorialLoop = (n) => {
  let result = 1;
  for (
    let i = n;
    i > 0;
    i -= 1
  ) result *= i;

  return result;
}
// factorialLoop(5) // 120

const factorialRecursive = (n) => {
  if (n === 1) return 1;
  return n * factorialRecursive(n - 1);
}
console.log(factorialRecursive(5));
