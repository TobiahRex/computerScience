/*
String Rotation: Assume you have a method isSubstring which
checks if one word is a substring of another.
Given two strings, sl and s2,
write code to check if s2 is a rotation of sl
using only one call to isSubstring

(e.g., "waterbottle" is a rotation of"erbottlewat").
*/

const stringRotation = (s1, s2) => {
  // match first char in s2 to first occurence in s1.
  let i = 0;
  while(s1[i] !== s2[0]) i++;
  // loop over s2 up to every character
  for (let j = 0; j < s2.length; j++) {
    // if char in s2 !== s1, then its not a rotation.
    if (s2[j] !== s1[i]) return false;
    else i += 1;
    // if i, is at the end of the s1, move i back to the front of s1.
    if (i % s1.length == 0) i = 0;
  }
  // if loop finished, then we know the strings are rotations.
  return true;
}

console.log(
  stringRotation(
    'waterbottle',
    'erbottlewat'
  )
)
