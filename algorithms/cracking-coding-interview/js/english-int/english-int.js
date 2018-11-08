const values = require('./values');
/*
Given any integer, print an English phrase that describes the interger, (e.g. One Thousand Two Hundred Thirty Four)
*/
const englishInt = (n) => { // 135
  let i = 10, results = [], chunk = [], count = 1;

  while(n != 0) {
    let current = n % i;
    chunk.unshift(current);

    if (count % 3 === 0) {
      results.push(parseSegment(chunk, i / 10));
      chunk = [];
    }

    n -= current; // n = 130
    i *= 10;
    count += 1;
  }
  console.log('results: ', results);

  // while(results.length) {
  //
  // }
 }

 englishInt(193 232 345);

function parseSegment(segment, multiplier) { // [10000, 9000], 10000
  // cache length of the segment = 2
  // total = 19000
  // splice the total into chunks of 3 starting from the left.
  // 19 000
  console.log('chunk: ', segment, '\nmultiplier: ', multiplier);
  return multiplier;
  // let length = segment.length;
  // let total = segment.reduce((a, b) => a + b).toString();
  // let big = `${total[0]}${total[1]}`;
  // let small = total[3];
}
