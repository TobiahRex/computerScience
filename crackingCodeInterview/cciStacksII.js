function checkString(str) {
    if ((str[0] === '}') || (str[0] === ']') || (str[0] === ')') || (!str.length) || (str.length === 1)) return 'NO'
  const stack = [];
  const pairs = { '(': ')', '{': '}', '[': ']' };
  for (let i = 0; i < str.length; i++) {
    if (pairs.hasOwnProperty(str[i])) {
      stack.push(pairs[str[i]]);
    } else {
      if (stack.length && (str[i] !== stack[stack.length - 1])) {
        return 'NO'
      } else {
        stack.pop()
      }
    }
  }
  if (stack.length === 0) return 'YES'
  else return 'NO'
}

// const testCases = '{[()]}'; // YES
// const testCases = '{{[[(())]]}}'; // YES
// const testCases = '{[(])}'; // NO
// const testCases = '}{'; // NO
const testCases = "))"; // NO
console.log(checkString(testCases));
