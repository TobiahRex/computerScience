// The string starts with a (, has a comma after X and ends with a ).
// There is no space between the opening parenthesis and the first character of X.
// There is no space between the comma and the last character of X.
// There is one space between the comma and the first character of Y.
// There is no space between Y and the closing parenthesis.
// X and Y are decimal numbers and may be preceded by a sign.
// There are no leading zeros.
// No other characters are allowed in X or Y.
// -90 ≤ X ≤ 90 and -180 ≤ Y ≤ 180

console.log('0'.charCodeAt(0));
console.log('1'.charCodeAt(0));
console.log('9'.charCodeAt(0));
console.log('+'.charCodeAt(0));
console.log('-'.charCodeAt(0));
console.log('.'.charCodeAt(0));
console.log(')'.charCodeAt(0));
console.log(' '.charCodeAt(0));

(() => {
  let arr = [
    '(+90.0, -147.45)',
    // '(75, 180)',
    // '(90, 180)',
    // '(+90, +180)',
    // '(+90.00, 180)',
    // '(90.0, 180.1)',
    // '(85S, 95W) ',
    // '(77.11112223331, 149.99999999)',
    // '(+90, +180)',
    // '(90, 180)',
    // '(-90.00000, -180.0000)',
    // '(75, 280)',
    // '(+190.0, -147.45)',
    // '(77.11112223331, 249.99999999)',
    // '(+90, +180.2)',
    // '(90., 180.)',
    // '(-090.00000, -180.0000)',
  ]
  console.log(parse(arr));
})();

function parse(coordinates) {
  let results = [];
  coordinates.forEach((str) => {
    let rule1 = str.split(''),
    rule2 = str.split(', '),
    rule3 = str.split(','),
    x = str.slice(1, str.indexOf(',')),
    y = str.slice(str.indexOf(',') + 2, str.length - 1);

    let checkCleanNum = (answer, char) => {
      char
      let ascii = char.charCodeAt(0);
      if (ascii < 48) {
        if ([46, 43, 45].indexOf(ascii) === -1) answer = false;
      }
      if (ascii > 57) answer = false;

      return answer;
    },
    cleanX = x.split('').reduce(checkCleanNum, true),
    cleanY = y.split('').reduce(checkCleanNum, true),
    verifiedNums = rule2.map((numChunk) => {
      let num = '';
      for(let i = 0; i < numChunk.length; i++) {
        if (57 >= numChunk.charCodeAt(i) && numChunk.charCodeAt(i) >= 48) num += numChunk[i];
        if (i > 1 && numChunk.charCodeAt(i) === 46) num += numChunk[i];
      }
      return num;
    })
    .reduce((acc, num, i) => {
      num
      if (Number(num[0]) === 0) acc = false;
      if (!acc) return acc;

      let temp = Number(num);
      if (i === 0) {
        if (temp > 90) acc = false;
      } else if (i === 1) {
        if (temp > 180) acc = false;
      }
      if (!acc) return acc;

      if (num.includes('.')) {
        let decimal = num.split('.');
        if(!(decimal[1].length >= 1)) acc = false;
      }
      return acc;
    }, true);

    if (
      cleanX &&
      cleanY &&
      verifiedNums &&
      str[1] !== ' ' &&
      rule1[0] === '(' &&
      rule2.length > 1 &&
      rule3.length > 1 &&
      rule1.length > 1 &&
      rule3[1][0] === ' ' &&
      rule1[str.length - 1] === ')' &&
      rule1[str.length - 2] !== ' ' &&
      Number(rule2[0][rule2[0].length - 1]) < Infinity
    ) {
      results.push('Valid');
    } else {
      results.push('Invalid');
    }
  });
  console.log(results.join('\n'));
  return results;
}
