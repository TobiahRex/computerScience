(() => {
  // let input = [1];
  let input = [35,65,69,28,12,69,37,80,80,50,80,50,15,57,79,69,57,65,15,69,57,50,65,2,14,64,15,65,65,5,15,64,57,37,50,12,64,37,28,20,80,80,50];
  let answer = equalizeArray(input);
  answer
})();

function equalizeArray(arr) {
  let maxStack = [], max = 0, memo = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in memo) {
      memo[arr[i]].count += 1;
      memo[arr[i]].index.push(i);
      if (memo[arr[i]].count == max) {
        maxStack.push(memo[arr[i]]);
      } else if (memo[arr[i]].count > max) {
        max = memo[arr[i]].count;
        maxStack = [memo[arr[i]]];
      }
    } else {
      memo[arr[i]] = {
        count: 1,
        index: [i]
      };
    }
  }
  console.log(maxStack)
  let saveLength = 0;
  maxStack.forEach((obj) => {
    saveLength += obj.index.length;
  });
  return arr.length - saveLength;
}

const mergeSort(arr, lo, hi) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
    leftArray = arr.slice(0, mid),
    rightArray = arr.slice(mid);

  let leftSorted = mergeSort(leftArray, mid),
    rightSorted = mergeSort(rightArray, mid + 1);

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0,
    k = 0;

  while(i < left.length && j < right.length) {
    if(left[i] < right[i]) result[k++] = left[i++];
    else result[k++] = right[j++];
  }
  for(; i < left.length; i++) result[k++] = left[i];
  for(; j < right.length; j++) result[k++] = right[j];
  return result;
}
