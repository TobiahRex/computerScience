def gcd(a, b):
    if(b == 0):
        return a
    return gcd(b, a%b)

t=input() # 1, 4, 5, 9
for i in range(t):
    a = map(int, raw_input().split())
    if(gcd(a[0],a[1]) == gcd(a[2],a[3])):
        print "YES"
    else:
        print "NO"
