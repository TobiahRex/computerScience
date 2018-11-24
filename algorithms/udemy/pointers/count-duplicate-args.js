function countDuplicateArgs() {
  const memo = {};
  let areDuplicates = false;
  Object.values(arguments).forEach((n) => {
    if (!(n in memo)) memo[n] = 1;
    else areDuplicates = true;
  });
  return areDuplicates;
}
countDuplicateArgs(1, 2, 3);
