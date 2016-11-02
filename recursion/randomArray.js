function randomArray(n) {
  let result, next;

  if (n === 0) return [];
  if (n === 1) return [0];

  result = randomArray(n - 1);
  let iRandom = Math.floor(Math.random() * n);
  result.splice(iRandom, 0, n - 1);
}
