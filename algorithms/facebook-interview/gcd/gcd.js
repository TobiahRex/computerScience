const gcd = (n1, n2) => {
  if (n2 === 0) return n1;
  // console.log('n1: ', n1, ' n2: ', n2, ' n1 % n2: ', n1 % n2);
  return gcd(n2, n1 % n2);
}

console.log(gcd(9, 6));
