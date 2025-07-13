# input - არის ინფორმაცია რომელიც შედის მოწყობილობასი , შემავალი ინფორმაცია
# output - გამომავალი იფნორმაცია , რომელიც გამოდის მოწყობილებიდან

# input - პითონში გამოიყენება იმისთვის რომ მომხმარებელმა შემოვატანინოთ ინფორმაცია
# output - პითონში გამოიყენება იმისთვის რომ მომხმარებელმა გამოვატანინოთ ინფორმაცია

# input: კლავიატურა, მიკროფონი, მაუსი, კამერა, ჯოისტიკი.
# output: მონიტორი, პრინტერი, ყურსასმენი, დინამიკი, პროექტორი.

# input - მოწყობილებებს შეაქვთ ინფორმაცია მაგალითად : მიკროფონს ხმა.
# output - მოწყობილებებს გამოაქვთ ინფორმაცია მაგალითად : დინამიკს ხმა.



name = input("enter your name: ")
surname = input("enter your surname: ")
age = input("enter your age: ")
addres = input("enter your addres: ")
hobby = input("enter your hobby: ")
fav_movie = input("enter your fav_movie: ") 

print("მე ვარ " + name + surname + " " + age + " წლის" + " " + "მე ვცხოვრობ " + addres + " " + "ჩემი ჰობია " + hobby + " " + "ჩემი საყვარელი ფილია " + fav_movie )



number1 = int(input("number 1: "))
number2 = int(input("number 2: "))
number3 = int(input("enter number 3: "))
number4 = int(input("enter number 4: "))
number5 = int(input("enter number 5: "))

average = (number1 + number2 + number3 + number4 + number5) / 5
print(average)



number1 = int(input("enter nuber 1: "))
number2 = int(input("enter number 2: "))

print(number1 + number2)
print(number1 - number2)
print(number1 * number2)
print(number1 / number2)
print(number1 // number2)