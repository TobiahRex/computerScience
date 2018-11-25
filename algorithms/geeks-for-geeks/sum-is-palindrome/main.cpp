#include <iostream>
#include <string>
using namespace std;

string isPalindrome(int);
int sumDigits(int);

int main() {
  int nums[] = {
    111,
    121,
    9999991,
    89,
  };
  for (int n : nums) {
    int sum = sumDigits(n);
    cout << isPalindrome(sum) << endl;
  }

  return 0;
}

int sumDigits(int n) {
  string numStr = to_string(n);
  int total{0};
  for (char s : numStr) total += s - '0';
  return total;
}

string isPalindrome(int sum) {
  string numStr = to_string(sum);
  string answer("YES");

  if (numStr.length() == 1) return answer;

  for (int i = 0, j = numStr.length() - 1; i < j; i++, j--) {
    if (numStr[i] != numStr[j]) {
      answer = "NO";
      break;
    }
  }
  return answer;
}
