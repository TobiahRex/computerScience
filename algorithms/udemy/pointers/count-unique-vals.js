const countUnique = (array) => {
  let result = 0;
  for (let i = 1, j = 0; j < array.length; i++) {
    if (array[j] !== array[i]) {
      result += 1;
      j = i;
    }
  }
  return result;
}
console.log(
  countUnique(
    [0, 1, 1, 1, 1, 1, 2, 2, 3, 4, 4]
  )
);
