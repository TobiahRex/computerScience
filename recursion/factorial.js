const factorialLoop = (n) => {
  let result = 1;
  for (let i = n; i > 0; i -= 1) result *= i;

  return result;
}
factorialLoop(5) // 120
console.log(factorialLoop(5));
