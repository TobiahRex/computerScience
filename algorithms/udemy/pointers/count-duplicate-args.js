function countDuplicateArgs() {
  const memo = {};
  let areDuplicates = true;
  Object.values(arguments).forEach((n) => {
    if (!(n in memo)) memo[n] = 1;
    else
    memo[n] = ++memo[n] || 1;
  });
}
countDuplicateArgs(1, 2, 3)
