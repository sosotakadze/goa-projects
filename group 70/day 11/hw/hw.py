# დავალება N1
n = int(input("enter random number: "))
for x in range(0, n+1, 1):
    print(x)

# # დავალება N2
age = int(input("enter your age: "))
student_card = input("do you have student card? yes/no: ")

if age > 18 or student_card == "yes":
    print("დანაზოგი გაქვს")
elif age >= 60 and student_card == "no":
    print("პენსიონერის ფასდაკლება გაქვს") 
else:
    print("ფასდაკლება არ გეკუთვნის")

# # დავალება N3
num1 = int(input("enter random number: "))
num2 = int(input("enter random number: "))

if num1 > 0 and num2 > 0:
    print("ორივე დადებითია")
elif num1 > 0 or num2 > 0:
    print("ერთია დადებითი")
elif num1 < 0 and num2 < 0:
    print("არცერთი არ არის დადებითი")

# დავალება N4   
num1 = input("Enter Number: ")
num2 = input("Enter Number: ")
operation = input("Enter Operation: ")

if num1.isalpha() or num2.isalpha() or num2 == "0" or operation.isalpha() or operation.isdigit():
    print("არასწორი ოპერაცია!")
elif operation == "+":
    print(int(num1) + int(num2))
elif operation == "-":
    print(int(num1) - int(num2))
elif operation == "*":
    print(int(num1) * int(num2))
elif operation == "/":
    print(int(num1) / int(num2))

# დავალება N5 
a = 1
b = 0
c = 0
result_0 = (a and not b) or (b and not a)
#              True      or      False ---> True
result_1 = (b and c) and (a or b)
#            False   and   True ---> False
result_2 = (a and not c) or (b and not a) or (b and not c)
#              True      or      False    or     False
#                       True    or  False ---> True
print(result_0)
print(result_1)
print(result_2)