import Stack from "../stack.ll";


export default function postFixV2(str) {
  let [i, j, s, r] = [0, 0, new Stack([]), []];
  while(i !== str.length) {
    if (isOperand(str[i])) {
      r[j++] = str[i++];
    }
    else if (oP(str[i]) > iP(s.peek())) {
      s.push(str[i++]);
    }
    else if (oP(str[i]) === iP(s.peek())) {
      s.pop();
      i++;
    }
    else {
      r[j++] = s.pop();
    }
  }
  while(s.peek()) {
    const next = s.pop();
    if (next !== '(') {
      r[j++] = next;
    }
  }
  return r.join('');
}

function isOperand(n) {
  const code = n.charCodeAt(0);
  return 97 <= code && code <= 122;
}
/**
 * @function oP
 * gives priority for items out of the stack (lower priority)
 * @param {string} operator
 * @return {number}
 */
function oP(n) {
  if (['+', '-'].includes(n)) return 1
  if (['*', '/'].includes(n)) return 3
  if (n === '^') return 6;
  if (n === '(') return 7;
  return 0
}
/**
 * @function iP
 * gives priority for items inside the stack (larger priority)
 * @param {string} operator
 * @return {number}
 */
 function iP(n) {
  if (['+', '-'].includes(n)) return 2
  if (['*', '/'].includes(n)) return 4
  if (n === '^') return 5;
  return 0
}
