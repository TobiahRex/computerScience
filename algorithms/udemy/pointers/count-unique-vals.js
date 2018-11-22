// Array is given sorted.
const countUnique = (array) => {
  let result = 0;
  for (let i = 0, j; i < array.length; i++) {
    if (array[j] !== array[i]) {
      result += 1;
      j = i;
    }
  }
  return result;
}
console.log(
  countUnique(
    // [0, 1, 1, 1, 1, 1, 2, 2, 4, 4, 5]
    [0]
  )
);
