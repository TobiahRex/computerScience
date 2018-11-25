const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
}

(() => {
  let a = 98, b = 56;
  console.log(
    'GCD of', a,
    'and', b,
    'is', gcd(a, b)
  )
})();
// GCD of 98 and 56 is 14
