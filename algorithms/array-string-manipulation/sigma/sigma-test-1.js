// let answer = counts(
//   [
//     2,
//     10,
//     5,
//     4,
//     8,
//   ],
//   [
//     3,
//     1,
//     7,
//     8,
//   ]
// );
// let answer2 = counts(
//   [
//     23,
//     4,
//     2,
//     12,
//     18,
//     20,
//     16
//   ],
//   [
//     13,
//     22,
//     29,
//     1
//   ]
// );
let answer3 = counts(
  [
    3, 3, 3, 3, 3, 8, 8, 8, 8
  ],
  [
    5, 2, 5, 1, 5, 9
  ]
);
// console.log('answer: ', answer);   // 1 0 3 4
// console.log('answer: ', answer2);  // 3 6 7 0
console.log('answer: ', answer3);  // 3 6 7 0
function counts(nums, maxes) {
  let numsSorted = nums.length > 15 ? mergeSort(nums.slice(0)) : quickSort(nums.slice(0)),
  maxesSorted = maxes.length > 15 ? mergeSort(maxes.slice(0)) : quickSort(maxes.slice(0));

  let results = new Array(maxes.length).fill(0),
  j = 0;

  let i = 0;
  while (true) {
    if (numsSorted[i] <= maxesSorted[j]) {
      results[j] += 1;
      i++;
    } else {
      if ((j + 1) < results.length) {
        results[j + 1] = results[j++];
      } else {
        break;
      }
    }
  }

  let maxDictionary = maxes.reduce((acc, n, i) => {
    Array.isArray(acc[n]) ? acc[n].push(i) : acc[n] = [i];
    return acc;
  }, {}),
  answer = new Array(maxes.length).fill(0);

  for (let i = 0; i < results.length; i++) {
    let maxIndexes = maxDictionary[maxesSorted[i]];
    maxIndexes.forEach((index) => {
      answer[index] = results[i];
    });
  }
  return answer;
}

function quickSort(arr, lo = 0, hi = arr.length - 1) {
  if (lo >= hi) return;
  let p = partition(arr, lo, hi);
  quickSort(arr, lo, p - 1);
  quickSort(arr, p + 1, hi);
  return arr;
}

function partition(arr, lo, hi) {
  let iNext = lo, iPartition = hi;
  while (iNext < iPartition) {
    if (arr[iNext] > arr[iPartition]) {
      swap(arr, iNext, iPartition - 1);
      swap(arr, iPartition - 1, iPartition);
      iPartition--;
    } else iNext++;
  }
  return iPartition;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function mergeSort(arr, lo, hi) {
  if (lo >= hi) return arr;
  let mid = Math.ceil(arr.length / 2),
  leftArray = arr.slice(0, mid),
  rightArray = arr.slice(mid);

  let leftSorted = mergeSort(leftArray, lo, mid),
  rightSorted = mergeSort(rightArray, mid + 1, hi);

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let results = [],
  i = 0,
  j = 0,
  k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) results[k++] = left[i++];
    else results[k++] = right[j++];
  }
  for (; i < left.length; i++) results[k++] = left[i];
  for (; j < right.length; j++) results[k++] = right[j];
  return results;
}
