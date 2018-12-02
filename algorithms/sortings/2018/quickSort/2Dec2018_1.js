let BigOh = 0;
(() => {
  let arr = [20,14,18,15,11,17,16,12,13,19,3,5,8,1,9,7,6,0,2,4];
  quickSort(arr);
  console.log(arr);
})();
function quickSort(arr, lo = 0, hi = arr.length - 1) {
  BigOh += 1;
  if (lo >= hi) return;

  let p = partition(arr, lo, hi);
  quickSort(arr, lo, p - 1);
  quickSort(arr, p + 1, hi);
}

function partition(arr, lo, hi) {
  let iNext = lo, iPartition = hi;

  while(iNext < iPartition) {
    if (arr[iNext] > arr[iPartition]) {
      swap(arr, iNext, iPartition - 1);
      swap(arr, iPartition - 1, iPartition);
      iPartition--;
    } else iNext++
  }
  return iPartition;
}

function swap(arr, iA, iB) {
  let temp = arr[iA];
  arr[iA] = arr[iB];
  arr[iB] = temp;
}

BigOh
