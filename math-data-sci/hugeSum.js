/*
  JavaScript limits a numeric variable to (2^53 - 1);  Therefore, attempting to
  add any two values that exceed this value as a result will throw an error.
  Therefore, this algorithm adds two numbers who sum would exceed this limitation,
  by adding "manually" just as someone would add two giant numbers on pen &
  paper (carrying the result continuously until a final solution is found).
*/

// My Answer - Peer answer below (Cade's answer).
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
  return total.split('').reverse().join('');
}

/*
  Cades (fellow developer) Answer
*/
function hugeSum(a, b) {
  let result = [];
  let carry = 0;
  let aDigits = a.split('').reverse();
  let bDigitis = b.split('').reverse();
  let maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    let aVal = parseInt(aDigits[i]);
    let bVal = parseInt(bDigits[i]);
    let sum = aVal + bVal + carry;

    carry = sum >= 10 ? 1 : 0;
    result.unshift(sum % 10);
  }

  if (carry) result.unshift(1);
  return result.join('');
}


console.log(hugeSum('9999999999', '1'));
