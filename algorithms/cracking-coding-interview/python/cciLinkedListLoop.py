'''
    Cyclic Detection

    A linked list is said to contain a cycle
    if any node is visited more than once
    while traversing the list.

    Complete the function provided in the editor below.
    It has one parameter:
    a pointer to a Node object named  that points to the head of a linked list.
    Your function must return a boolean
    denoting whether or not there is a cycle in the list.
    If there is a cycle,
    return true;
    otherwise, return false.

    Note: If the list is empty, result will be null.
'''

linkedList = {
    'data': 1,
    'next': {
        'data': 2,
        'next': {
            'data': 3,
            'next': {
                'data': 4,
                'next': {
                    'data': 5,
                    'next': None
                }
            }
        }
    }
}

head = linkedList
head['next']['next']['next']['next'] = head['next']['next']
head = 0

def hasCycle(node):
    if not node or node['next'] is None:
        return False;

    slow = node
    fast = node
    result

    while fast is not None and fast['next'] is not None:
        if fast['next']['next']:
            fast = fast['next']['next']
        else:
            fast = None

        if slow['next']:
            slow = slow['next']
        else:
            slow = None

        if fast == slow:
            result = True
            break

    return result

print(hasCycle(head));
