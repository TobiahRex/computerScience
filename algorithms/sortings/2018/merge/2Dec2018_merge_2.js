(() => {
  let arr = [20,14,18,15,11,17,16,12,13,19,3,5,8,1,9,7,6,0,2,4];
  arr = mergeSort(arr);
  console.log(arr);
})();

function mergeSort(arr, lo, hi) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2),
    leftArray = arr.slice(0, mid),
    rightArray = arr.slice(mid);

  let leftSorted = mergeSort(leftArray, lo, mid),
    rightSorted = mergeSort(rightArray, mid + 1, hi);
}
