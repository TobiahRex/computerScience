(() => {
  const answers = [
    5,
    6,
    27
  ].map((size) => getDiamond(size))
  console.log('answers: ', answers);
})();

function getDiamond(size) {
  let allStars = new Array(size).fill('*');
  let result = [allStars.join('')];

  let count = 0;
  while(count < allStars.length) {
    count += 2;
    const stars = allStars.slice(count);
    if (stars.length) {
      const strSpaces = new Array(count / 2).fill(' ').join('');
      stars.unshift(spaces);

      const strStars = stars.join('');
      result.unshift(strStars);
      result.push(strStars);
    }
  }
  result.unshift('');
  return result.join('\n');
}

/*
    *   // (size - 2).unshift(' ' * i)    i = 2
   ***  // (size - 2).unshift(' ' * i)    i = 1
  ***** // size - 0).unshift(' ' * i)     i = 0 stars = ['\n', '*****']
   ***  // (size - (i * 2)).unshift('  ')        i = 1 stars = ['\n', '*****', '\n', ' ', '***']
    *   // (size - (i * 2)).unshift(' ' x i)        i = 2 stars = ['\n', '*****', '\n', ' ', '***', '\n', '  ', '*', '\n']
*/
