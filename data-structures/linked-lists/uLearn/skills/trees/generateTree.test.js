import generateTree from './generateTree';

describe('trees', () => {
  test('should generate a tree from an array', () => {
    let treeArray = [5, 8, 6, -1, 9, 3, -1, 4, 2]
    let tree = generateTree(treeArray);

    expect(tree.left.root).toEqual(8);
    expect(tree.right.root).toEqual(6);
    expect(tree.root).toEqual(5);
  });
});
