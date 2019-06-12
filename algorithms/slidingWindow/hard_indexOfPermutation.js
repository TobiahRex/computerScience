(() => {
  const answers = [
    {
      str: 'ppqp',
      pattern: 'pq'
    },
    {
      str: 'tobiah',
      pattern: 'tobiah',
    },
  ].map(getAnswer)
  console.log('answers: ', answers);
})();

function getAnswer({ str, pattern }) {
  const map = {};
  for(let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (char in map) map[char] += 1;
    else map[char] = 1;
  }

  let answers = [];
  let end = start = matches = 0;

  while(end < str.length) {
    const rightChar = str[end];
    if (rightChar in map) {
      map[rightChar] -= 1;
      if (map[rightChar] === 0) matches += 1;
    }

    if (matches === Object.keys(map).length) {
      answers.push(start);
    }

    if ((end - start + 1) === pattern.length) {
      const leftChar = str[start++];
      if (leftChar in map) {
        if (map[leftChar] === 0) matches -= 1;
        map[leftChar] += 1;
      }
    }
    end += 1;
  }

  return answers;
 }

/*
  Problem Description:

*/
