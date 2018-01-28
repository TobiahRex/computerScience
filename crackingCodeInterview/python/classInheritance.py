class A:
    def __init__(self):
        self.var1=5

class B(A):
    def __init__(self):
        self.var2=10
        super().__init__()

class C(B):
    def __init__(self):
        self.var3=20
        super().__init__() ## Line 1


a = A()
b = B()
# c=C(b)
# print(a.var1)
print(b.var2)
