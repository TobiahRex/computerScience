#include <iostream>
#include <string>
#include <vector>
using namespace std;

vector<string> split(string str, string sep){
    char* cstr = const_cast<char*>(str.c_str());
    char* current = nullptr;

    vector<string> arr;
    current = strtok(cstr, sep.c_str());

    while(current != NULL){
        arr.push_back(current);
        current = strtok(NULL, sep.c_str());
    }
    return arr;
}
int main(){
    vector<string> arr;
    arr = split("This--is--split","--");

    // for (string s : arr) cout << s << endl;

    return 0;
}
