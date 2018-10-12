The country of Byteland contains N cities and N - 1 bidirectional roads between them such that there is a path between any two cities. The cities are numbered (0,...,N - 1). The people were very unhappy about the time it took to commute, especially salesmen who had to go about every city selling goods. So it was decided that new roads would be built between any two "somewhat near" cities. Any two cities in Bytleland that can be reached by traveling on exactly two old roads are known as "somewhat near" each other.

Now a salesman situated in city 0, just like any other typical salesman, has to visit all cities exactly once and return back to city 0 in the end. In how many ways can he do this?

Input Format

The first line contains the number of test cases T. T test cases follow. The first line contains N, the number of cities in Byteland. The following N - 1 lines contain the description of the roads. The ith line contains two integers ai and bi, meaning that there was originally a road connecting cities with numbers ai and bi.

Constraints

1 <= T <= 20
1 <= N <= 10000
0 <= ai,bi < N  

Output Format

Output T lines, one corresponding to each test case containing the required answer for that test case. Since the answers can be huge, output them modulo 1000000007.

Sample Input

2
3
0 1
1 2
5
0 1
1 2
2 3
2 4

Sample Output

2
4

Explanation

For the first case, a new road was build between cities 0 and 2. Now, the salesman has two tour possibilities: 0-1-2-0 or 0-2-1-0.
