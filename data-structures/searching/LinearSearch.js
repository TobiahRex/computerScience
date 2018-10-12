/*
 Linear Search
 O(n)
*/
let targetValue = 8
function linearSearch (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) return i
  }
  return -1
}
console.time('linearSearch');
console.info(linearSearch([4,2,6,7,8,1])) // 4
console.timeEnd('linearSearch'); // linearSearch: 2.559ms
