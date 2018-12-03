let BigOh = 0;
(() => {
  let arr = [20,14,18,15,11,17,16,12,13,19,3,5,8,1,9,7,6,0,2,4];
  arr = mergeSort(arr);
  console.log(arr);
})();

function mergeSort(arr, lo, hi) {
  BigOh += 1;
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2),
    leftArr = arr.slice(0, mid),
    rightArr = arr.slice(mid);

  let leftSorted = mergeSort(leftArr, lo, mid),
    rightSorted = mergeSort(rightArr, mid + 1, hi);

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
  for(; j < right.length; j++) result[k++] = right[j];
  return result;
}
BigOh
