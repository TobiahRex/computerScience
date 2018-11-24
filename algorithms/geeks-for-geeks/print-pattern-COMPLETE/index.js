function printPattern(n) {
  let result = [], nCopy = n, tempStr = '';
  for (let i = nCopy; i > 0; i--) {
    for (let j = nCopy; j > 0; j--) {
      tempStr += String(j).repeat(i);
    }
    result.push(tempStr);
    tempStr = '';
  }
  return result.join('$');
}

console.log(
  printPattern(3)
);
