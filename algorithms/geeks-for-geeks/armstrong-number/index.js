const armStrongNumbers = (n) => (String(n).split('').reduce((acc, next) => acc += Math.pow(Number(next), 3), 0) === n);

console.log(
  [
    153,
    370,
    371,
    407,
  ].map((n) => armStrongNumbers(n))
)
