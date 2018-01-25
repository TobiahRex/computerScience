'''
    Balanced Brackets
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


    Step 1 - Gather all the information.
    Step 2 - Choose a simple Test Case.
    Step 3 - declare your variables
    Step 4 - Mentally solve the problem
    Step 5 - Psuedo Code
    Step 6 - Code
    Step 7 - Edge Cases
    Step 8 - Optimize: Effeciency & Complex Test Cases
'''
import re

class Stack:
    top = None;
    depth = 0;

    def __init__(self):
        self.top = None;
        self.depth = 0;

    def createNode(self, kind, direction):
        if not kind or not direction:
            print('Missing required arguments.')
            return None

        node = {
                'kind': kind,
                'direction': direction,
                'next': None
                }
        return node;

    def push(self, kind, direction):
        if not kind or not direction:
            print('Missing required arguments.')
            return None

        newNode = self.createNode(kind, direction)
        print('newNode: ', newNode)

        if self.top is None:
            self.top = newNode
        else:
            print('self.top: ', self.top)
            self.top.next = newNode

    def pop(self, kind, direction):
        if not kind or not direction:
            print('Missing required arguments.')

        if self.top is None:
            return None
        else:
            oldTop = self.top
            self.top = self.top.next
            return oldTop

stack = Stack()

def popCheck(t):
    top = stack.pop()

    if top.kind != t or top.direction != 'right':
        return False
    else:
        return True

def checkString(n):
    string = n
    checks = []

    if re.search(r"['\}'|'\]'|'\)']", string[0]) or len(string) <= 0:
        checks.append(False)
    print(stack.push)
    switcher = {
        '{': stack.push('curly', 'right'),
        '[': stack.push('square', 'right'),
        '(': stack.push('parens', 'right'),
        ')': checks.append(popCheck('parens')),
        ']': checks.append(popCheck('square')),
        '}': checks.append(popCheck('curly')),
    }

    for n in string:
        switcher.get(n, checks.append(False))

    if False in checks:
        return 'NO'
    else:
        return 'YES'

result = checkString('{[(])}')
print(result)
