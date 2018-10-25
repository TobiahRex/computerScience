const countingValleys = (n, steps) => {
  let count = 0, valleys = 0;

  for (let i = 0; i < n; i++) {
    if (steps[i] === 'D') {
      count -= 1;
    } else {
      if (count < 0 && (count + 1) == 0) {
        valleys += 1;
      }
      count += 1;
    }
  }
  return valleys;
}
console.log(countingValleys(8, 'UDDDUDUU'));
