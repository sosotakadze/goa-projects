# დავალება N1
systolic = int(input("enter your systolic number: "))
diastolic = int(input("enter your systolic number: ")) 

if systolic > 140 or diastolic > 90:
    print("წნევა მაღალია")
elif systolic < 90 or diastolic < 60:
    print("წნევა დაბალია")
else :
    print("წნევა ნორმარულია")

# დავალება N2  
age = int(input("enter your age: "))
weight = int(input("enter your weight: "))

if age >= 10: 
    if weight <= 20:
        print("წონა დაბალია")
    elif weight <= 40:
        print("წონა ნორმალურია")
    else:
        print("წონა მაღალია")

if age <= 17:
    if weight <= 40:
        print("წონა დაბალია")
    elif weight <= 65:
        print("წონა ნორმალურია")
    else:
        print("წონა მარალია")

if age >= 18:
    if weight <= 50:
        print("წონა დაბალია")
    elif weight <= 65:
        print("წონა ნორმალურია")
    else:
        print("წონა მაღალია") 

# დავალება N3
age =int(input("enter your age: "))
hour = int(input("enter your hour: "))

if age <= 18 and hour >= 22:
    print("დროა დაძინების")
elif age >= 60 and hour >= 21:
    print("დასვენება რეკომენდირებულია")
else:
    print("შეგიზლია გააგრზელო აქტივობა")        

# დავალება N4
age =int(input("enter your age: ")) 
pulse =int(input("enter your pulse: "))

if age <= 30 and pulse <= 140: 
    print("შეგიძლია მეტი ივარჯიშო")
elif age >= 30 and pulse >= 170:
    print("დასვენება გჭირდება")
else:
    print("აქტივობის დონე ნორმალურია")

# დავალება N5
age = int(input("enter your age "))

if age <= 12:
    print("ბევრი ვიტამინიანი საკვები")
elif age <= 25:
    print("ენერგიის მომცემი საკვები")
elif age <= 59:
    print("ბალანსირებული რაციონი")
else:
    print("დაბალ კალოლიური საკვები და მსუბუქი საკვები")