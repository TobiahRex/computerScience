# Linked List Cycle detection

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
