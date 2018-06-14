function main(p, input) {
  const composeSolution = [
    findSections,
    divideInput,
    verifyPattern,
  ];

  return composeSolution.reduce((value, nextFunc) => nextFunc(value), { p, input });
}

function findSections({ p, input }) {
  const patternMemo = p
  .slice(0)
  .split('')
  .reduce((memo, char) => {
    memo[char] ? memo[char] += 1 : memo[char] = 1;
    return memo;
  }, {});

  const sections = Object
  .keys(patternMemo)
  .reduce((total, key) => {
    total += patternMemo[key];
    return total;
  }, 0);

  const pattern = p
  .split('')
  .reduce((memo, letter, i) => {
    const arr = [];

    if (letter in memo) memo[letter].push(i);
    else {
      arr.push(i);
      memo[letter] = arr;
    }

    return memo;
  }, {});

  return ({
    pattern,
    sections,
    input,
  });
}

function divideInput({ pattern, sections, input }) {
  const totalLength = input.length, // 14
        inputWords = [],
        dividend = totalLength / sections;
        inputChars = input.split('')
  let flag = 0,
      currentEnd = 0;

  while(flag < sections) {
    if (flag === 0 && dividend % 2 !== 0 ) {
      currentEnd = Math.floor(dividend);
    } else {
      currentEnd = Math.ceil(dividend);
    }
    inputWords.push(inputChars.splice(0, currentEnd).join(''));
    flag += 1;
  }
  return ({
    pattern,
    inputWords
  });
}

function verifyPattern({ pattern, inputWords }) {
  const wordsLoc = inputWords
  .slice(0)
  .reduce((words, word, i) => {
    const arr = [];

    if (word in words) words[word].push(i);
    else {
      arr.push(i);
      words[word] = arr;
    }

    return words;
  }, {}),
  patternArr = Object.keys(pattern).map((key) => pattern[key]),
  wordsArr = Object.keys(wordsLoc).map((key) => wordsLoc[key]);

  if (patternArr.length !== wordsArr.length) return 0;

  return wordsArr
  .map((wrdSection, i) => {
    const pattIndex = patternArr[i],
          result = wrdSection
                  .map((index, i2) => {
                    return (index === pattIndex[i2] ? true : false);
                  });
  })
  .reduce((answer, next) => {
    if (next === false) return 0;
    return 1;
  }, 0);
}

// console.log('answer: ', main(
//   'abba',
//   'tobiahrexbobbobtobiahrex',
// ));
// console.log('tobiahrexbobbobtobiahrex'.split('').sort().join(''));


function wordPattern(pattern, str) {
  var map = {},
  reverseMap = {};
  var words = str.split(' ');

  for (var c = 0; c < pattern.length; c++){
    var code = pattern[c],
    word = words[c];

    if ( (map[code]  && map[code] !== word ) ||
          (reverseMap[word] && reverseMap[word] !== code)
        ){
      return false;
    }
    map[code] = word;
    reverseMap[word]= code;
  }
  return true;
}

// function wordPattern(pattern, str) {
//     const p = pattern.split('').map((v, i, a) => a.indexOf(v))
//     console.log('p: ', p);
//     const s = str.split('').map((v, i, a) => {
//       console.log('a.indexOf(v): ', a.indexOf(v));
//       return a.indexOf(v)
//     })
//     console.log('s: ', s);
//     return p.every((v, i) => v === s[i])
// }

// console.log(wordPattern('aba', 'tobiahrexxyzxyztobiahrex'));
// console.log('bobbylooksbobbybobby'.split('').map((v, i, a) => a.indexOf(v)));
// console.log('bobbylooksbobbybobby'.split('').map((v, i, a) => a.indexOf(v)));
// console.log('bobbylooksbobbybobby'.split('').map((v, i, a) => a.indexOf(v)).sort().reduce((a, n) => {
//   (n in a) ? a[n] += 1 : a[n] = 1;
//   return a;
// }, {}));
// // console.log([ 0, 1, 0, 0, 4, 5, 1, 1, 8, 9, 0, 1, 0, 0, 4 ].sort())
// console.log('abaa'.split('').map((v, i, a) => a.indexOf(v)).sort()
// .reduce((a, n) => {
//   (n in a) ? a[n] += 1 : a[n] = 1;
//   return a;
// }, {}));

const dropBox = (p, s) => {
  const patternIndex = p.split('').map((v, i) => p.indexOf(v)),
    strIndex = s.split('').map((v, i) => s.indexOf(v));

  const patternMemo = patternIndex.reduce((memo, ix, i, a) => {
    if (p[ix] in memo) {
      memo[p[ix]].locations.push(ix);
    } else {
       memo[p[ix]] = {
         locations: [ix],
       }
    }

    if (i === a.length - 1) {      // last iteration
      let i2 = ix;
      while(i2 > -1) {
        memo[p[i2]] = {
          ...memo[p[i2]],
          reqCopies: memo[p[i2]].locations.length
        }
        i2 -= 1;
      }
    }

    return memo;
  }, {});

  const strMemo = strIndex.reduce((memo, ix) => {
    if (s[ix] in memo) {
      memo[s[ix]].locations.push(ix);
      memo[s[ix]].counts += 1;
    } else {
      memo[s[ix]] = {
        locations: [ix],
        counts: 1,
      };
    }

    return memo;
  }, {});

  const oddsEvens = Object.keys(strMemo).reduce((a, l) => {
    if (strMemo[l].locations.length % 2 === 0) {
      a.evens[l] = strMemo[l].locations;
    } else {
      a.odds[l] = strMemo[l].locations;
    }
    return a;
  }, {
    evens: {},
    odds: {},
  });

  let evenLength = Object.keys(oddsEvens.evens).length;
  let oddLength = Object.keys(oddsEvens.odds).length;
  let reqCopies = Object.values(patternMemo);
  console.log(reqCopies);

  return Object.keys(patternMemo).forEach((v, i, a) => {
    if (patternMemo[v].reqCopies % 2 === 0) {
      let hi = Math.ceil(evenLength / patternMemo[v].reqCopies);
      let lo = Math.floor(evenLength / patternMemo[v].reqCopies);
      console.log('hi: ', hi, '\nlo: ', lo);
    }
  });

  // console.log(patternMemo);
  // console.log(JSON.stringify(strMemo));
}
console.log(
  dropBox(
    'abbac',
    'tobyrexrextobyhi',
  )
);
/*
{
  a: [0, 0],
  b: [1, 1],
  c: [4]
}

{
  't': {
    location: [0, 0]
  }
}

*/

//
// let counts = 0;
// let string = 'tobyrexrextobyhi';
// let subStr = 'yrex';
//
// while (true) {
//   let index = string.lastIndexOf(subStr);
//   if (index > -1){
//     counts += 1;
//     string = string.split('');
//     string.splice(index, subStr.length);
//     string = string.join('');
//   }
//   else break;
// }
// console.log('count: ', counts);
