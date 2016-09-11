/*
 Linear Search
 O(1)
*/

let targetValue
function linearSearch (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) i
  }
  return -1
}
