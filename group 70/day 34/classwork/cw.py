# 1 
fruits = ("bannana", "cherry", "apple", "orange", "strawbery")
print(fruits[0])
print(fruits[2])
print(fruits[4])

# 2
t = (1, 2, 3)
temp = list(t)
temp[1] = 20
t = tuple(temp)
print(t)

# 3
t = (1, 2, 3)
t1 = (4, 5, 6)
print(t + t1)
print(t * 5)

# 4
nums = (1,2,3,4,5,6,6,6,67,8)
print(nums.index(67)) 

nums = (1,2,3,4,5,6,6,6,67,8)
print(nums.count(6))