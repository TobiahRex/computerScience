const closestNumber = (n, m) => {
  // detect if n is negative, and set a flag if so.
  // cache all multiples of m up until the first value greater than n.
  // take the last two multiples and compare them.
      // if they're equal in magnitude from m, then find the largest absolute value.
      // if n was originally negative, return the negative value of that number.
      //
      // if they're NOT equal in magnitude from m, then find the largest value.
      // if n was originally negative, return the negative value of that number.
  let isNegative = n > 0 ? false : true;
    multiples = [],
    current = m,
    count = 0;

  while(current < Math.abs(n)) {
    current = m * count;
    multiples.push(current);
    count += 1;
  }

  let last = multiples.length - 1, answer;

  if ((multiples[last] - Math.abs(n)) == (Math.abs(n) - multiples[last - 1])) {
    answer = multiples[last];
  } else {
    let closestDiff = Math.min((multiples[last] - Math.abs(n)), (Math.abs(n) - multiples[last - 1]));
    if ((multiples[last] - closestDiff) == n) {
      answer = multiples[last];
    } else {
      answer = multiples[last - 1];
    }
  }
  return isNegative ? (answer * -1) : answer;
}

console.log(
  closestNumber(
    -15,
    6 // 12
  )
);
