array = [1, 2, 3, 4, 5]

def shiftArray(size, shifts, arr):
    f = arr[0 : shifts]
    del arr[0 : shifts]
    arr.append(f)
    

shiftArray(5, 3, array)
