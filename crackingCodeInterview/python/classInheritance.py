'''
    Python uses non-parameterized constructors.
    So even tho we articulate an argument for B & C classes,
    [B(A), C(B)] respectively; we do not pass an argument here when creating a new class instance.
    Calling "super()" maps the invocation to that expected Argument - the class A & B - for classes B & C, respectively.
'''

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
c=C()
# print(a.var1)
print(c.var1)
