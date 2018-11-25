#include <iostream>
#include <string>
#include <cmath>
using namespace std;

string armStrongNumbers(int);

int main() {
  int nums[] = {
    153,
    370,
    371,
    407,
  };

  for (int num : nums) {
    cout << armStrongNumbers(num) << endl;
  }

  return 0;
};

string armStrongNumbers(int n) {
  string num = to_string(n);
  int sum{0};
  for (char n : num) sum += pow(n - '0', 3);
  return to_string(sum);
};
