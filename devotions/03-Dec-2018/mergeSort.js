// Merge Sort is a divide and conqueor algorithm.
let OrderTime_mergeSort = 0;
let OrderTime_merge = 0;
(() => {
  let arr = [20,14,18,15,11,17,16,12,13,19,3,5,8,1,9,7,6,0,2,4];
  console.time('mergeSort');
  arr = mergeSort(arr);
  console.timeEnd('mergeSort');
  console.log(arr);
  console.log(OrderTime_mergeSort);
  console.log(OrderTime_merge);
})();

function mergeSort(arr, lo, hi) {
  OrderTime_mergeSort += 1;
  OrderTime_merge += 1;

  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
    leftArray = arr.slice(0, mid),
    rightArray = arr.slice(mid);

  let leftSorted = mergeSort(leftArray, lo, mid),
    rightSorted = mergeSort(rightArray, mid + 1, hi);

  return merge(leftSorted, rightSorted);
}

function merge(leftArr, rightArr) {
  let result = [],
    i = 0,
    j = 0,
    k = 0;

  while(i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) result[k++] = leftArr[i++];
    else result[k++] = rightArr[j++];
  }
  for (; i < leftArr.length; i++) result[k++] = leftArr[i];
  for (; j < rightArr.length; j++) result[k++] = rightArr[j];
  return result;
}
