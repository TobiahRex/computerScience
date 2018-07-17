int main() {
  const nums = [3,5,6,7,8,4,2,9,1,0];
  quickSort(nums);
  console.log(nums);
}

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

function quickSort(arr, lo = 0, hi = arr.size() - 1) {
  if (lo > hi || lo == hi) return;

  const p = partition(arr, lo, hi);
  quickSort(arr, lo, p - 1);
  quickSort(arr, p + 1, hi);
}
