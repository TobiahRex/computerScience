const birthdayCakes = (arr) => {
  let memo = {}, max = 0;
  arr.forEach((n) => {
    if (n > max) max = n;
    if (!(n in memo)) {
      memo[n] = 1;
    } else {
      memo[n] += 1;
    }
  });

  return memo[max];
}

console.log(birthdayCakes([4,4,3,2,1]));
