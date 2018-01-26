'''
    Cyclic Detection

    A linked list is said to contain a cycle
    if any node is visited more than once
    while traversing the list.

    Complete the function provided in the editor below.
    It has one parameter:
        A pointer to a Node object, that points to the head of a linked list.

    Your function must return a boolean
        denoting whether or not there is a cycle in the list.

    If there is a cycle,
        return true;
        otherwise, return false.

    Note: If the list is empty, result will be null.
'''

def cycle_detection(head):
    current = head
    runner = head

    while runner != None:
        current = current.next

        if runner.next != None
            runner = runner.next.next
        else:
            return False

        if current is runner:
            return True

    return False

# OR

def cycle_detection(head):
    current = head
    runner = head

    while current.next != None
        current = current.next
        runner = current.next.next

        if current is runner
            return true

    return False
