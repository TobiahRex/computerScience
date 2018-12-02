(() => {
  let arr = [20,14,18,15,11,17,16,12,13,19,3,5,8,1,9,7,6,0,2,4];
  quickSort(arr);
  console.log(arr);
})();

function quickSort(arr, lo = 0, hi = arr.length - 1) {
  if (lo > hi || lo === hi) return;

  let p = partition(arr, lo, hi);
  quickSort(arr, lo, p - 1);
  quickSort(arr, p, hi);
}

function partition(arr, lo, hi) {
  let iNext = lo,
    iPartition = hi,
    sort = true;

  while(sort) {
    if (arr[iNext] > arr[iPartition]) {
      swap(arr, iNext, iPartition - 1);
      swap(arr, iPartition - 1, iPartition);
      iPartition--;
    } else if (iNext === iPartition) sort = false;
    else iNext++
  }
  return iPartition;
}

function swap(arr, iA, iB) {
  let temp = arr[iA];
  arr[iA] = arr[iB];
  arr[iB] = temp;
}
