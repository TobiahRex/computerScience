const increment = value => (value + 1);
const decrement = value => (value - 1);
const double = value => (value * 2);
const halve = value => (value / 2);

const result = [
  increment,
  increment,
  increment,
  decrement,
  double,
  double,
  double,
  halve,
].reduce((acc, next) => next(acc), 1);

console.log(result);
