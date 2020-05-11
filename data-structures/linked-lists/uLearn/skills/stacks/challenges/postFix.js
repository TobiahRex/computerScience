import Stack from '../stack.ll';

export default function postFix(str) {
  let [s, i, j, results] = [new Stack([]), 0, 0, []];
  while (i !== str.length) {
    if (isOperand(str[i])) {
      results[j++] = str[i++];
    }
    else if (priority(str[i]) > priority(s.peek())) {
      s.push(str[i++]);
    }
    else {
      results[j++] = s.pop();
    }
  }
  while(s.peek()) results[j++] = s.pop();

  return results.join('');
}

function isOperand(c) {
  return !['*', '-', '/', '+'].includes(c);
}

function priority(c) {
  if (['*', '/'].includes(c)) return 2;
  if (['+', '-'].includes(c)) return 1;
  return 0;
}
/**

|  i  |  str  |  S  |   j   | str[i] > s.peek() |  result
----------------------------------------------------------
|  0  |  a    |     |   0   |                   | a
|  1  |  +    |  +  |   0++ |      1 > 0        | a
|  2  |  b    |  +  |   1++ |                   | ab
|  3  |  *    |  +  |   2   |      2 > 1        | ab
|  4  |  c    |  +* |   2   |                   | abc
|  5  |  -    |  +* |   j   |                   |
|  i  |  str  |  S  |   j   |                   |


*/
