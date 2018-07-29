#include <iostream>
#include <vector>
using namespace std;

void swap(int &a, int &b) {
  int temp = a;
  a = b;
  b = temp;
}
int partition(vector<int> &nums, int lo, int hi) {
  int iPartition{hi};
  int iNext{lo};

  while(true) {
    if (nums[iNext] > nums[iPartition]) {
      swap(nums[iNext], nums[iPartition - 1]);
      swap(nums[iPartition - 1], nums[iPartition]);
      iPartition--;
    } else if (iNext == iPartition) break;
    else iNext++;
  }
  return iPartition;
}
void quickSort(vector<int> &nums, int lo = -1, int hi = -2) {
  if (lo == -1 && hi == -2) {
    lo = 0;
    hi = nums.size() - 1;
  }
  if (lo > hi || lo == hi) return;

  int p = partition(nums, lo, hi);
  quickSort(nums, lo, p - 1);
  quickSort(nums, p + 1, hi);
}

int main() {
  vector<int> nums = {3,8,2,1,5,6,0,9,4,7};
  quickSort(nums);
  for (int num : nums) cout << " " << num;
  cout << endl;

  return 0;
}
