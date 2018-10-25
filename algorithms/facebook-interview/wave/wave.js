const solution  = {
  //param A : array of integers
  //return a array of integers
  swap : function(array, ixA, ixB) {
    var temp = array[ixA];
    array[ixA] = array[ixB];
    array[ixB] = temp;
  },
  partition : function(arr, lo, hi) {
    var iPartition = hi;
    var iNext = lo;
    var keepSwapping = true;
    while(keepSwapping) {
      if (arr[iNext] > arr[iPartition]) {
        solution.swap(arr, iNext, iPartition - 1);
        solution.swap(arr, iPartition - 1, iPartition);
        iPartition -= 1;
      } else if (iPartition == iNext){
        keepSwapping = false;
      } else {
        iNext += 1;
      }
    }
    return iPartition;
  },
  quickSort : function(A, lo, hi) {
    if (hi === lo || lo > hi) return;

    var p = solution.partition(A, lo, hi);

    solution.quickSort(A, lo, p - 1);
    solution.quickSort(A, p + 1, hi);
    return A;
  },
  wave : function(A){
    solution.quickSort(A, 0, A.length - 1);
    var answer = [];
    // console.log('A: ', A);
    for (var i = 0, addOne = true; i < A.length; i++, addOne = !addOne) {
      if (i == (A.length - 1) && A.length % 2 !== 0) {
        answer[i] = A[i];
      } else if (addOne) {
        answer.push(A[i + 1]);
      } else if (!addOne) {
        answer.push(A[i - 1])
      };

    }
    return answer;
  }
};

console.log(solution.wave([ 31, 88, 89, 73, 77, 4, 58, 0, 54, 60, 15, 47, 80, 30, 55, 46, 7, 38, 0, 26, 35, 57, 13, 14, 93, 60, 54, 18, 57, 85, 29, 15, 63, 2, 17, 43, 19, 67, 47, 69, 95, 3, 73, 3, 48, 85, 58, 59 ]
));
// console.log(solution.wave([ 6, 17, 15, 13 ]));
// console.log(solution.wave([1,3,6,7,4,13,14,10,8]));


/*
SUGGESTED SOLUTION

array = {5, 1, 3, 4, 2}

Sort the above array.

array = {1, 2, 3, 4, 5}

Now swap adjacent elemets in pairs.

swap(1, 2)
swap(3, 4)

Now, our array = {2, 1, 4, 3, 5}

and voila!, the array is in the wave form.

*/
