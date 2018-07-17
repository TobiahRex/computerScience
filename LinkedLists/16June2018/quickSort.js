function swap(arr, i, j) {
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, lo, hi) {
  let iPartition = lo,
    iNext = hi;

  while(true) {
    if (arr[iNext] > arr[iPartition]) {
      swap(arr, iNext, iPartition - 1);
      swap(arr, iPartition - 1, iPartition);
      iPartition--;
    } else if (iNext == iPartition) break;
    else iNext++;
  }
  return iPartition;
}

function quickSort(arr, lo = 0, hi = )
