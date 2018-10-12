function randomArray(n) {
  let result;

  if (n === 0) return [];
  if (n === 1) return [0];

  result = randomArray(n - 1);
  let randomIndex = Math.floor(Math.random() * n);
  result.splice(randomIndex, 0, n - 1);
  return result;
}

console.log('RESULT >>> ', randomArray(3));
