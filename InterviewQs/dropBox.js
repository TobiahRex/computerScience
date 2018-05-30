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

function divideInput({ pattern, sections, input }) { // sections = 4 input = 'redbluebluered'
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
//   'redbluebluered',
// ));
console.log('answer: ', main(
  'aaa',
  'redredred',
));
// console.log(findSections('abba'));
// console.log(verifyPattern({ pattern: { 'a': [0, 3], 'b': [1, 2] } }, ['red', 'blue', 'blue', 'red']));
