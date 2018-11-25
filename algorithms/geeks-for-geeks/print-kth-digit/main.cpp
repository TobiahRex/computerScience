#include <iostream>
#include <string>
#include <vector>
#include <cmath>
using namespace std;

vector<string> split(string, string);
void printKth(string);

int main() {
  // int a{0}, b{0}, k{0};
  vector<string> inputs;
  inputs = split("3\n2 8 1\n5 2 2\n2 12 4", "\n");
  for (int i = 0; i < (int)inputs.size(); i++) {
    if (i > 0) printKth(inputs[i]);
  }

  return 0;
}

vector<string> split(string str, string sep) {
  char* cstr = const_cast<char*>(str.c_str());
  char* current = nullptr;

  current = strtok(cstr, sep.c_str());
  vector<string> result;

  while(current != NULL) {
    result.push_back(current);
    current = strtok(NULL, sep.c_str());
  }
  return result;
}

void printKth(string input) {
  vector<string> nums;
  nums = split(input, " ");

  int result = pow(stoi(nums[0]), stoi(nums[1]));
  string resultStr = to_string(result);
  cout << (resultStr[(resultStr.size()) - stoi(nums[2])]) << endl;
}
