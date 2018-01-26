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
    if no node or no node['next']:
        return False;

    slow = node
    fast = node

hasCycle(head);
