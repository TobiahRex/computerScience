function printTable(arr) {
  let lastProduct = '';
  for (let i = 0; i < arr[0]; i++) {
    for (let j = 1; j <= 10; j++) {
      lastProduct += ' ' + String(arr[1] * j);
    }
    lastProduct += '\n';
  }
  return lastProduct;
}

function main() {
  let testCases = [
    [1, 68],
    // [2, 3],
    // [2, 5],
    // [2, 2]
  ];
  testCases.forEach((n) => {
    console.log(printTable(n));
  });
}
main();
