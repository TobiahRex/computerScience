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

/* PROBLEMS */
//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
const recursiveWhile = (n) => {
  let result = n;
  while(--n) result *= n;
  return result;
}
// console.log(recursiveWhile(5));

//2. Next, try looping just like above except using recursion
const recursive2 = (n) => {
  if (n === 1) return 1;
  return n * recursive2(n - 1);
}
//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponent value of the base.
const exponent = (base, expo) => {
  let result = base;
  while (--expo) {
    result *= base;
  }
  return result;
}
console.log(exponent(2, 3));
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
