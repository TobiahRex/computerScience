/*
Given any integer, print an English phrase that describes the interger, (e.g. One Thousand Two Hundred Thirty Four)
*/
const englishInt = (n) => { // 135
  const values = {
    10: 'Ten',
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million',
    1000000000: 'Billion',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
  };
  let i = 10, results = [];

  while(n != 0) {
    let current = n % i;
    let multiplier = values[current.toString()[0]];
    console.log('multiplier: ', multiplier);

    results.unshift(current);  // [5]
    n -= current; // n = 130
    i *= 10;
  }

 }

 englishInt(19323);
