const gcd = (n1, n2) => {
  if (n2 === 0) return n1;
  // console.log('n1: ', n1, ' n2: ', n2, ' n1 % n2: ', n1 % n2);
  return gcd(n2, n1 % n2);
}

const main = (input) => {
  console.log(gcd(input[0], input[1]));
  console.log(gcd(input[2], input[3]));

  if (gcd(input[0], input[1]) == gcd(input[2], input[3])) {
    return 'YES';
  } else return 'NO';
}

console.log(
  main([2, 8, 18, 20])
)
