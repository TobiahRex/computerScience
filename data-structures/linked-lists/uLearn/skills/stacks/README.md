## Stack: Challenges

---------------------
 Challenge 1 (easy)
 - Postfix problem demonstrates how we can implement a "Priority Stack"
   to compose a postfix math expression given a normal math expression.
 - The problem has hard-coded priority values given a string character.
 - Letters are given highest priority.
---------------------
 Challenge 2 (hard)
 - Postfix problem again, only this time the stack has 2 priorities
 for the same character. The variance is meant to prioritize items
 of the same type inside the stack.
 - There's a special trick involved: Since the power operator "^"
 requires right to left associativity, then the priority of the outter
 element is given higher priority.