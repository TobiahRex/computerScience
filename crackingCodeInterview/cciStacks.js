/* Balanced Brackets
A matching pair of brackets is not balanced if
the set of brackets it encloses are not matched.
For example, {[(])} is not balanced because
the contents in between { and } are not balanced.
The pair of square brackets encloses a single,
unbalanced opening bracket,
(, and the pair of parentheses encloses a single,
unbalanced closing square bracket, ].

By this logic,
we say a sequence of brackets is considered to be balanced
if the following conditions are met:

It contains no unmatched brackets.
The subset of brackets enclosed
within the confines of a matched pair of brackets
is also a matched pair of brackets.

Given  strings of brackets,
determine whether each sequence of brackets is balanced.
If a string is balanced,
print YES on a new line;
otherwise,
print NO on a new line.

Sample Input:
3
{[()]}
{[(])}
{{[[(())]]}}

Smaple Output:
YES
NO
YES
*/

// Step 1 - Gather all the information.
// Step 2 - Choose a simple Test Case.
class Stack {
  constructor() {
    this.top = null;
  }

  createNode(direction, type) {
    let node = {
      direction,
      type,
      next: null
    }
    return node;
  }

  push(direction, type) {
    let node = this.createNode(direction, type);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top === null) {
      return this.top;
    } else {
      let oldTop = this.top;
      this.top = this.top.next;
      return oldTop;
    }
  }
}
const stack = new Stack;

function popCheck(t) {
  let { direction, type } = stack.pop();

  if ((direction !== 'right') && (type !== t)) return true
  return false;
}

function main(n) {
  let str = n[1]
  let results = '';
  if ((str[0] === '}') || (str[0] === ')') || (str[0] === ']')) {
    results += 'NO\n';
  }
  for (let i = 0; i < str.length; i++) {
    console.log('str[i]', str[i]);
    switch(str[i]) {
      case '{': { stack.push('right', 'curly') } break;
      case '[': { stack.push('right', 'square') } break;
      case '(': { stack.push('right', 'parens') } break;
      case ')': { popCheck('parens') } break;
    }
  }
  console.log('stack.top \n',  stack.top);
  return results;
}

let testCases = [1,'{[()]}'];
// let testCases = [3,'{[()]}','{[(])}','{{[[(())]]}}'];
console.log(main(testCases));
