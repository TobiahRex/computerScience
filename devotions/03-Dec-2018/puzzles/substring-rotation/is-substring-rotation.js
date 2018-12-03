/*
String Rotation: Assume you have a method isSubstring which
checks if one word is a substring of another.
Given two strings, sl and s2,
write code to check if s2 is a rotation of sl
using only one call to isSubstring

(e.g., "waterbottle" is a rotation of"erbottlewat").
*/
const stringRotation = (base, find) => {
  let answer = true;
  for (let i = base.indexOf(find[0]), j = 0; j < find.length; i++, j++) {
    // if i reaches end of string, reset back to the beginning.
    if (i === base.length) i = 0;
    // if the character doesn't match expected value.
    if (base[i] !== find[j]) answer = false;
  }
  return answer;
}
console.log(stringRotation('waterbottle', 'erbottlewat'));
