import findDupes from './findDupes';

test('[function: findDupes] should find dupes', () => {
  const A = [3, 6, 8, 8, 10, 12, 15, 15, 15, 20];
  const result = findDupes({ A });
  expect(result).toEqual([8, 15]);
});
