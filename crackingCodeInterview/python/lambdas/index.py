def printX(x):
    print(x);

dictionary = {
        'a': printX('a'),
        'b': print('b')
    }

listA = ['a', 'b']
for x in listA:
    dictionary.get(x);
