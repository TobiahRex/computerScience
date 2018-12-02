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

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0,
    k = 0;

  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) result[k++] = left[i++];
    else result[k++] = right[j++];
  }
  for(; i < left.length; i++) result[k++] = left[i];
}
