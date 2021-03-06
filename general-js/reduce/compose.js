const increment = val => (val + 1);
const decrement = val => (val - 1);
const double = val => (val * 2);
const halve = val => (val / 2);

const result = [
  increment,
  increment,
  increment,
  decrement,
  double,
  double,
  double,
  halve,
].reduceRight((prevValue, nextFunc) => nextFunc(prevValue), 1);

console.log(result);
