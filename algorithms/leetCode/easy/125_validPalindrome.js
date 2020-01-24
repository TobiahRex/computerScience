/**
  Problem Description:

  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

  Note: For the purpose of this problem, we define empty string as valid palindrome.

  Example 1:

  Input: "A man, a plan, a canal: Panama"
  Output: true
  Example 2:

  Input: "race a car"
  Output: false

  Accepted 472,651 |  Submissions 1,400,415
*/


(() => {
  const answers = [
    {
      s: 'A man, a plan, a canal: Panama',
      expected: true,
    },
    {
      s: 'race a car',
      expected: false,
    },
    {
      s: '0P',
      expected: false,
    },
  ].map(isPalindrome)
  console.log('answers: ', answers);
})();
function isPalindrome({ s }) {
  const result = false;
  let forward = '';
  let backward = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const charAscii = char.charCodeAt(0);

    const isAlphaNum = checkChar(char);

    if (isAlphaNum) {
        forward += char.toLowerCase()
        backward = (char.toLowerCase() + backward);
    }
  }
  return forward === backward;
};

function checkChar(c) {
    const ascii_a = 'a'.charCodeAt(0);
    const ascii_z = 'z'.charCodeAt(0);
    const ascii_A = 'A'.charCodeAt(0);
    const ascii_Z = 'Z'.charCodeAt(0);
    const ascii_0 = '0'.charCodeAt(0);
    const ascii_9 = '9'.charCodeAt(0);

    const target_ascii = c.charCodeAt(0);
    const isLetter = [
        (ascii_A <= target_ascii) && (target_ascii <= ascii_Z)
        || (ascii_a <= target_ascii) && (target_ascii <= ascii_z)
    ].some(Boolean);

    const isNumber = (ascii_0 <= target_ascii) && (target_ascii <= ascii_9);

    return isLetter || isNumber;
}
