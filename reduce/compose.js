const increment = value => value + 1;
const decrement = value => value - 1;
const double = value => value * 2;
const halve = value => value / 2;

const result = [
  increment,
  decrement,
  double,
  halve,
].reduce((acc, next) => next(acc), 10);
console.log(result);
