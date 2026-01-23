# დავალევბა N1
number = 1
while number <= 10:
    print(number)
    number += 1

# დავალება N2
number = 10
while number >= 0: 
    print(number)
    number -= 1

# დავალება N3
# while ციკლი მხოლოდ მუშაობს სანამ ჩვენი გადაცემული პირობია უდრის true-ს

# დავალება N4
password = ""

while password != "python123":
    password = input("please enter password: ") 

print("password is correct")

# დავალება N5
n = int(input("please enter n:"))
number = 1
sum = 0
while number <= n:
    sum += number
    number += 1
print(sum)