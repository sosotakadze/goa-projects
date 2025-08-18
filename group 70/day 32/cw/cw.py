# 1
# set-ების +
# 1) მარტივად პოულობს მონაცემებს.
# 2) აქვს გაერთიანება და სიმეტრიული სხვაობი დათვლა.

# set-ების -
# 1) არ აქვს ბევრი ჩაშენებული ფუნქცია.
# 2) ელემენტზე ინდექსით მიწვდომა, არასწორად გამოაქვს ელემენტი



# 2
a = {1,2,3}
b = {3,4,5}

# union
print(a.union(b))
print(a | b)
# # აერთიანებს ორივე სეტის ყველა ელემენტს დუბლიკატების გარდა.

# intersection
print(a.intersection(b))
print(a & b)
# ტოვებს მხოლოდ იმ ელემენტებს რომელიც ერთნაირია

# difference
print(a.difference(b))
print(a - b)
# ტოვებს მხოლოდ იმ ელემენტს რომლებიც არის a-ში მაგრამ არა b-ში.(ამ შემთხვევაში)

# symmetric_difference
print(a.symmetric_difference(b))
print(a ^ b)
# ტოვებს მხოლოდ იმ ელემენტებს რომლებიც არის მხოლოდ ერთ-ერთში და არა ორივეში

# clear
a.clear()
print(a)
# ასუფთავებს მთლიან სეტს

# add
print(a.add)
print(a)
# ამატებს ერთ კონკრეტულ ელემენტს

# remove
print(a.remove)
print(a)
# შლის კონკრეტულ ელემენტს



# 3
fruit1 = {"banana, apple, orange"}
fruit2 = {"strawbery , apple, grapes"}

# union
print(fruit1 | fruit2)
# აერთიანებს ორივე სეტის ყველა ელემენტს დუბლიკატების გარდა.

# intersection
print(fruit1 & fruit2)
# ტოვებს მხოლოდ იმ ელემენტებს რომელიც ერთნაირია

# difference
print(fruit1 - fruit2)
# ტოვებს მხოლოდ იმ ელემენტს რომლებიც არის fruit1-ში მაგრამ არა fruit2-ში.

# symmetric_difference
print(fruit1 ^ fruit2)
# ტოვებს მხოლოდ იმ ელემენტებს რომლებიც არის მხოლოდ ერთ-ერთში და არა ორივეში.

# clear
fruit1.clear
print(fruit1)
# ასუფთავებს მთლიან სეტს

# add
print(fruit1.add)
print(fruit1)
# ამატებს ერთ კონკრეტულ ელემენტს

# # remove
print(fruit1.remove)
print(fruit1)
# შლის კონკრეტულ ელემენტს