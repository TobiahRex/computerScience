import postFix from './postFix';
import postFixV2 from './postFixV2';

test('should create postfix string', () => {
  let str = 'a+b*c-d/e';
  expect(postFix(str)).toEqual('abc*+de/-');
})
test('should create postfix string (v2)', () => {
  let str = '((a+b)*c)-(d^e^f)';
  expect(postFixV2(str)).toEqual('ab+c*def^^-');
});
