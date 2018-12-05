const jumpingClouds = (input) => {
  let i = 0, jumps = 0;
  while(i < input.length - 1) {
    if (input[i + 2] === 0) i += 2;
    else i += 1;
    jumps += 1;
  }
  return jumps;
}
console.log(jumpingClouds([0, 0, 1, 0, 0, 1, 0]));
