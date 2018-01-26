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

def hasCycle(node):
    if not node or not node['next']:
        return False;

    slow = node
    fast = node
    result = false

    while is fast and fast['next']:
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

hasCycle(head);
