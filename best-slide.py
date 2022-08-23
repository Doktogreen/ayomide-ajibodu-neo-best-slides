def bestSlide(n):
    result = 0
    counter = 1
    for i in range(1, n+1):
        result += counter
        for j in range(1, i+1):
            print(counter, end=" ")
            counter += 1
        print("")
    
    print("")
    return result

print("Answer: ", bestSlide(4))
print("Answer2: ", bestSlide(10))