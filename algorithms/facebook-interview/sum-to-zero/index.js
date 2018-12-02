
const main = (seq) => {
  let memo = {}, answer = false, sequence = quickSort(seq);
  for (
    let i = 0; i < seq.length; i++) {
      let left = i + 1;
      let right = seq.length - 1;
      let current = seq[i];
      memo[current * -1] = true;        // compliment of current singleton
      memo[(current * 2) * -1] = true;  // compliement of current double multiple

      while (left < right) {
        let sum = current + seq[left] + seq[right];
        current
        console.log(seq[left])
        console.log(seq[right])
        if (
          sum === 0 ||
          memo[current * -1] ||
          memo[left * -1] ||
          memo[right * -1] ||
          memo[(left + right) * -1] ||
          memo[(current + right) * -1] ||
          memo[(current + left) * -1]
        ) {
          answer = true;
          break;
        }
        memo[left] = true;
        memo[right] = true;
        if (sum < 0) left += 1;
        if (sum > 0) right -= 1;
      }
    }
    answer
    return answer;
}

// main([-5, 1, 10]);
// main([4, 2, -1, 1, -5, 6, -4]);

function swap(arr, iA, iB) {
  let temp = arr[iA];
  arr[iA] = arr[iB];
  arr[iB] = temp;
}

function partition(arr, lo, hi) {
  let iNext = lo;
  let iPartition = hi;
  while(true) {
    if (arr[iNext] > arr[iPartition]) {
      swap(arr, iNext, iPartition - 1);
      swap(arr, iPartition - 1, iPartition);
      iPartition--;
    } else if (iNext === iPartition) break;
    else iNext++
  }
  return iPartition;
}

function quickSort(arr, lo = 0, hi = (arr.length - 1)) {
  if (lo === hi || lo > hi) return;
  let p = partition(arr, lo, hi);
  quickSort(arr, lo, p - 1);
  quickSort(arr, p, hi);
}
