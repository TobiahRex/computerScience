/* Ransom Note
  A kidnapper wrote a ransom note
  but is worried it will be traced back to him.
  He found a magazine and wants to know if
  he can cut out whole words from it
  and use them to CREATE AN UNTRACEABLE REPLICA of his ransom note.

  The words in his note are CASE-SENSITIVE
  and he must use whole words available in the magazine,
  meaning he CANNOT USE SUBSTRINGS or CONCATENATION
  to create the words he needs.

  Given the words in the magazine
  and the words in the ransom note,
  print Yes if he can replicate his ransom note
  EXACTLY using whole words from the magazine;
  otherwise, print No.

  INPUT -
  The first line contains two space-seperated integers
  describing the respective values M (the number of words in the magazine.)
  and N (the number of words in the ransom note).
  The second line contains M space-seperate strings,
  denoting the words preset in the magazine.
  The third line contains n space-seperated strings
  denoting the words present in the ransom note.

  1 <= m, n <= 30000.
  Each word consits of a-z || A-Z.
  Words are case sensitive.
*/

function main(s1, s2){
  let result = [];
  let memo = {}

  // Build memo;
  s1.split(' ').forEach((mWord) => memo.hasOwnProperty(mWord) ? memo[mWord] += 1 : memo[mWord] = 1);
  /*
  1) Check second string against memo.
  2) If word is found, return null
  3) If word is NOT found, return word.
  4) Check length after. If length > 0, return NO : return YES
  */
  result = s2.split(' ').map((rWord) => {
     if (memo.hasOwnProperty(rWord)) {
       memo[rWord] -= 1;
       if (memo[rWord] === 0) delete memo[rWord];
       return true;
     }
     return false;
   });
   console.log('memo: ', memo);
   console.log('result: ', result);
  return (result.includes(false) ? console.log('No') : console.log('Yes'));
}
// let stringOne = 'Give me one grand today night'
// let stringTwo = 'give one grand today';
let stringOne = 'Yo!! give me all your DAMN $$$'
let stringTwo = 'yo giv me all your money';

main(stringOne, stringTwo);
