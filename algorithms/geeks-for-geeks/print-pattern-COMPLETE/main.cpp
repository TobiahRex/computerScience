#include <iostream>
using namespace std;

void printPattern(int n) {
  string answer("");
  int nCopy = n;

  for (int i = nCopy; i > 0; i--) {
    string subStr("");
    for (int j = nCopy; j > 0; j--) {
      int num = i;
      string numStr = to_string(j) + " ";
      while (num) {
        subStr += numStr;
        num--;
      }
    }
    answer += subStr + "$";
  }
  cout << answer << endl;
}

int main() {
  int testCases = 3;
  while(testCases) {
    printPattern(testCases--);
  }

  return 0;
}
