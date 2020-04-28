function sum(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log('num: ', nums[i]);
        sum += nums[i];
    }

    return sum;
}

console.log('total: ', sum(1, 2, 3, 4, 5));