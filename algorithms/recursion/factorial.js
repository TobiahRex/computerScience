// FACTORIALS
const loop = (n) => {
  let result = 1;
  for (let i = n; i > 0; i -= 1 ) result *= i;
  return result;
}
// console.log(loop(5)) // 120

const recursive = (n) => {
  if (n === 1) return 1;
  return n * recursive(n - 1);
}
// console.log(recursive(5)) // 120

const recursiveTernary = n => (n === 1) ? 1 : n * recursiveTernary(n - 1);
// console.log(recursiveTernary(5)) // 120
