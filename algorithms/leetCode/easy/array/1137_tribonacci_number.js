/*
  Problem Description:

*/


(() => {
    const answers = [
        {
            n: 25,
            expect: 1389537,
        },
        {
            n: 6,
            expect: 13,
        },
        {
            n: 4,
            expect: 4,
        }
    ].map(({ n }) => tribonacci(n));
    console.log('answers: ', answers);
})();

function tribonacci(n, memo = new Map()) {
    if (!n || n <= 0) return 0;
    if (n === 1) return 1;

    const n3 = memo.get(n - 3) || tribonacci(n - 3, memo);
    const n2 = memo.get(n - 2) || tribonacci(n - 2, memo);
    const n1 = memo.get(n - 1) || tribonacci(n - 1, memo);

    const nResult = n1 + n2 + n3;
    memo.set(n, nResult);
    return nResult;
}
