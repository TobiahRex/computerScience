/*
Given any integer, print an English phrase that describes the interger, (e.g. One Thousand Two Hundred Thirty Four)
*/
const englishInt = (n) => { // 135
  let i = 10;
  let results = [];
  while(n != 0) {  // n % 10
    let current = n % i; // current = 5
    results.unshift(current);  // [5]
    n -= current; // n = 130
    i *= 10;
  }
  console.log('results: ', results);
  let nextSegment = [];
  while(results.length > 3) {
    nextSegment = results.splice(x.length - 3);
  }
 }

 englishInt(19323);
