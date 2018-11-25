#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> nums = {1, 1};
  int iterations = 10;

  int magnitude = nums[1] - nums[0],
    count = nums.size(),
    sum = nums[1];
  while(count++ < iterations) sum += magnitude;

  cout << sum << endl;

  return 0;
}
