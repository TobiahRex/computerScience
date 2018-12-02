/*
Bubble SORT
*** Description
Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array
*** Exercises
- Implement bubble sort
- Identify time complexity
Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.
Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)
*/
console.time('bubbleSort');
const bubbleSort = (arr) => {
  const length = arr.length - 1;

  for (let i = length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      let current = arr[j];
      let next = arr[j + 1];

      if (current > next) {
        arr[j] = next;
        arr[j + 1] = current;
      }
    }
  }
  return arr;
}
console.timeEnd('bubbleSort');
console.log(bubbleSort([
  18, 11, 19, 12, 13, 14, 15, 16, 7, 5, 3, 17, 1, 9, 10, 8, 6, 20, 4, 2,
]));
