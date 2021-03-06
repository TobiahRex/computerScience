// Merge Sort is a divide and conqueor algorithm.
let OrderTime_mergeSort = 0;
let OrderTime_merge = 0;
(() => {
  let arr = [35,65,69,28,12,69,37,80,80,50,80,50,15,57,79,69,57,65,15,69,57,50,65,2,14,64,15,65,65,5,15,64,57,37,50,12,64,37,28,20,80,80,50];
  // let arr = [20,14,18,15,11,17,16,12,13,19,3,5,8,1,9,7,6,0,2,4];
  console.time('mergeSort');
  arr = mergeSort(arr);
  console.timeEnd('mergeSort');
  console.log(arr);
  console.log(OrderTime_mergeSort);
  console.log(OrderTime_merge);
})();

function mergeSort(arr) {
  OrderTime_mergeSort += 1;
  OrderTime_merge += 1;

  if (arr.length <= 1) return arr;

  let mid       = Math.floor(arr.length / 2),
    leftArray   = arr.slice(0, mid),
    rightArray  = arr.slice(mid);

  let leftSorted = mergeSort(leftArray),
    rightSorted = mergeSort(rightArray);

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
