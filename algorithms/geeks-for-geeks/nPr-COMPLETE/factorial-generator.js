function* factorialGenerator(seed) {
  let factorials = [1], let i = 1;

  while(i < seed) {
    factorials[i] = (i + 1) * factorials[i - 1];
    i += 1;
  }
}
