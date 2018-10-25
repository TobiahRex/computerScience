const minMax = (arr) => {
  const sum = arr.reduce((a, b) => a + b);
  let min = Infinity, max = 0;

  for (let i = 0; i < arr.length; i++) {
    let difference = sum - arr[i];
    if (difference > max) max = difference;
    if (difference < min) min = difference;
  }
  console.log(min, max);
}

minMax([1, 3, 5, 7, 9]);
