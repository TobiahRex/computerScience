#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
  string input = "10001000";
  int sum{0};
  for (int i = input.size() - 1, j{0}; i >= 0; i--, j++) {
    if (input[i] == '1') sum += pow(2, j);
  }
  cout << sum << endl;

  return 0;
}
