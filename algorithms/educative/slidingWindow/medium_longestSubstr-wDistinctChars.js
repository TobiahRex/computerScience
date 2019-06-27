let BigOh = 0;
(() => {
  const answers = [
    {
      str: "araaci",
      size: 2,
    },
    {
      str: "araaci",
      size: 1,
    }, {
      str: "cbbebi",
      size: 3,
    },
  ].map((input) => distinctCharsFromStr(input.str, input.size));

  console.log('answers: ', answers);
})();

function distinctCharsFromStr(str, k) {
  let memo = {},
    maxLength = 0,
    count = 0,
    windowStart = 0,
    windowEnd = 0;

  while(windowEnd < str.length) {
    count += 1;

    if (!(memo[str[windowEnd]])) {
      memo[str[windowEnd]] = 1;
    } else {
      memo[str[windowEnd]] += 1;
    }

    while(Object.keys(memo).length > k) {
      memo[str[windowStart]] -= 1;
      if (!memo[str[windowStart]]) delete memo[str[windowStart]];
      windowStart += 1;
      count -= 1;
    }
    maxLength = Math.max(maxLength, count);
    windowEnd += 1;
  }
  return maxLength;
}
/*
Problem Statement
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

"araaci"
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

/*
Control Flow

k = 2
{
a: 3
r: 1
}
count = 4


{
a: 3
r: 1
c: 1
}
count = 5

while memo.keys > k

{
a: 2
r: 1
c: 1
}
count - 1 = 4;
{
a: 2
c: 1
}
count - 1 = 3

Math.max(count, maxLength);
// next

{
a: 2
c: 1
i: 1
}
count + 1 = 4

while memo.keys > k

{
a: 1
c: 1
i: 1
}
count - 1 = 3;
{
c: 1
i: 1
}
count - 1 = 2

// end
*/
