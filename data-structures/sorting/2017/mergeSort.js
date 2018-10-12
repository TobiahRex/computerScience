/*
  Recursively Break up the array into lengths of 1.
  Combine length 1 arrays in sorted order.
    - compare elements in each array
    - put smallest element in the left most position.
  Return sorted sub group array, back up the recursive chain.
*/

const mergeSort = (array) => {
  if (array.length === 1) return array;

  const
    midPoint = array.length / 2,
    leftArr = mergeSort(array.slice(0, Math.ceil(midPoint))),
    rightArr = mergeSort(array.slice(Math.ceil(midPoint), array.length));

  let
    iL = 0,
    iR = 0,
    resultsArray = [];

  while(leftArr[iL] && rightArr[iR]) {
    if (leftArr[iL] < rightArr[iR])
      resultsArray.push(leftArr[iL++]);

    else resultsArray.push(rightArr[iR++]);
  }

  return resultsArray
  .concat(leftArr.slice(iL))
  .concat(rightArr.slice(iR));
}
// console.log(mergeSort([
//   3, 5, 2, 4, 1
// ]));
console.log(mergeSort([
  3, 8, 5, 1, 3, 9, 66, 44, 23, 12, 14, 74, 26, 12, 2, 15, 18, 23,
]));
