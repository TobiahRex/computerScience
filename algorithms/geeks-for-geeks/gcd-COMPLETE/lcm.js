const processData = (inputs) => inputs.split('\n').forEach((n, i) =>{
  if (i > 0) {
    let nums = n.split(' ');
    let numerator = parseInt(nums[0]) * parseInt(nums[1]);
    let LCM = numerator / gcd(parseInt(nums[0]), parseInt(nums[1]));
    console.log('LCM: ', LCM);
  }
});

const gcd = (a, b) => {
  // console.log('a: ', a, 'b: ', b);
  if (b === 0) return a;
  return gcd(b, a % b);
}
/*
Example process of gcd
[ '98', '56' ] (input)
a:  98 b:  56
a:  56 b:  42
a:  42 b:  14
a:  14 b:  0
[ '48', '18' ] (input)
a:  48 b:  18
a:  18 b:  12
a:  12 b:  6
a:  6 b:  0
*/


processData(
`2
10 20
5 7`
)
