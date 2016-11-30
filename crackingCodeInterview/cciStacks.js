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
    this.createNode = this.createNode.bind(this);
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
  }

  createNode(data) {
    let node = {
      data,
      next: null
    }
    return node;
  }

  push(data) {
    let node = this.createNode(data);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = top;
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

let testCases = [1,'{[()]}'];
// let testCases = [3,'{[()]}','{[(])}','{{[[(())]]}}'];
console.log(main(testCases));
