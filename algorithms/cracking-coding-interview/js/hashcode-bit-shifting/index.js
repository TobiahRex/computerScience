/*
"2's compliment":
  WHY?  2's compliment is used to create negative binary numbers.  With those numbers,
  one could "subtract" (add a positive number to a negative number) in binary.

  - Given binary number X, what would be the complimentary binary number, such that
  the resulting number is 2^8?

  Given a Base 10 number, convert that number into Base 2 (binary).  From there
  Invert each bit.  After that, add 1 to the inverted bit number.  The result will be
  "2s compliment".
*/

/*
Logical Shifting & Arithmetic Shifting
- The intuition for Logical and Arithmetic shifting is most obvious when talking about negative binary numbers.

If the negative binary number "-23" => "11101 001" is...
  - Logically right shifted, then the result is "0111 0100" => 116 (base 10)
  - Arithmetically right shifted, then the result  is "1011 11 00" => -12 (base 10)
*/

/*
Bit Masks
- AND | OR | XOR
- Review: XOR => Exactly only 1 is true.
*/

// Get the mth bit of n (from low to high)
// (n >> (m-1)) & 1;

// Set the mth bit of n to 0 (from low to high)
// n & ~(1 << (m-1));

// n = 7 => 0000 0111

// console.log(7 & (1 << 5) !== 0)
const mask = 1110 << 0;
console.log(7 | mask);
