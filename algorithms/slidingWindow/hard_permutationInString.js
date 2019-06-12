(() => {
  const answers = [
    {
      str: 'oidbcaf',
      pattern: 'abc',
    },
    // {
    //   str: 'oidbcaf',
    //   pattern: 'abc',
    // },
  ]
    .map((input) => getAnswer(input));

  console.log('answers: ', answers);
})();

function getAnswer({ str, pattern }) {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) map[str[i]] += 1;
    else map[str[i]] = 1;
  }

  let end = start = matched = 0;
  let shouldBreak = answer = false;
  while(end < str.length) {
    // keep the window the size of the pattern.
    if (end - start + 1 === pattern.length) {
      if (map[str[end]]) { // if the next additional character is part of the pattern...
        map[str[end]] -= 1; // decrease the number of characters we need to match.
        if (map[str[end]] === 0) delete map[str[end]]; // when we decrease, verify we don't need to cleanup the key entirely
        match += 1; // increase the number of character we have matched.
      } else {
        let leftChart = str[start];
        if (map[leftChart]) {
          matched -= 1;
        }
      }

      if (match === pattern.length) { // if the match is exactly equal to the pattern length, we know we have a match
        answer = true;
        shouldBreak = true
      }
    }
    if (shouldBreak) break;
    end += 1;
  }
  return answer;
}
