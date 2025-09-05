# 4
my_tuple = (1, 9, 3, 6, 9, 2, 5, 4)

score = 0

for i in my_tuple:
    if i % 2 == 0 :
        print(i)
        score += 1

print("score ", score)


# 5
words_tuple = ("hello", "world", "tuple", "world")

result = words_tuple.count("world")

print(f"სიტყვა world მეორდება {result}-ჯერ")