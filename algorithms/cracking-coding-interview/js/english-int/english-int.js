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
    parseInputs(nextSegment);
  }
  parseInputs(results);
 }

 englishInt(19323);

function parseSegments(seq) {
  const values = {
    100: 'One Hundred',
    1000: 'One Thousand',
    1000000: 'One Million',
    1000000000: 'One Billion',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  }
  seq.forEach((s) => {

  })
}
