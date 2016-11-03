function hugeSum(a, b) {
  let top = a.split('').reverse();
  let bottom = b.split('').reverse();
  let total = '';

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let topAddend = Number(top[i]) || 0;
    let bottomAddend = Number(bottom[i]) || 0;
    let sum = (topAddend + bottomAddend).toString() || 0;

    if (sum > 9 && top[i + 1]) {
      total += sum[1];
      top[i + 1] = (Number(top[i + 1]) + Number(sum[0])).toString(); // 6
    } else {
      if (sum > 9) {
        sum = sum.split('').reverse('').join('');
      }
      total += sum
    }
  }
  // reverse the string to normal direction.
  // join it.
  // return sum as string.
  return total.split('').reverse().join('');
}

console.log(hugeSum('9999999999', '1'));
