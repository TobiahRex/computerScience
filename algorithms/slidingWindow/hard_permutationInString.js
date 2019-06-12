(() => {
  const answers = [
    {
      str: 'oidbcaf',
      pattern: 'abc',
    },
    {
      str: 'odicf',
      pattern: 'dc',
    },
    {
      str: 'bcdxabcdy',
      pattern: 'bcdxabcdy',
    },
    {
      str: 'aaacb',
      pattern: 'abc',
    },
  ]
    .map((input) => getAnswer(input));

  console.log('answers: ', answers);
})();

function getAnswer({ str, pattern }) {
  let map = {};
  for (let i = 0; i < pattern.length; i++) {
    if (map[pattern[i]]) map[pattern[i]] += 1;
    else map[pattern[i]] = 1;
  }

  let end = start = match = 0;
  let shouldBreak = answer = false;
  while(end < str.length) {
    // keep the window the size of the pattern.
    if (str[end] in map) { // if the next additional character is part of the pattern...
      map[str[end]] -= 1; // decrease the number of characters we need to match.
      match += 1; // increase the number of character we have match.
    }

    if (end - start + 1 === pattern.length) {

        // the current letter is not in the pattern, which means that we're about to add a character to our window,
        // but this also means that our window will be too large to be the exact size of the pattern.
        // so we shrink the window
       if (match === pattern.length) { // if the match is exactly equal to the pattern length, we know we have a match
         answer = true;
         shouldBreak = true
       }

       const leftChar = str[start++];
       if (leftChar in map) {
         map[leftChar] += 1;
         match -= 1;
       }
    }
    if (shouldBreak) break;
    end += 1;
  }
  return answer;
}
