products = {
    "apple": 3,
    "banana": 2,
    "milk": 5
}
for product, price in products.items():
    print(product, ":", price)

search = input("შეიყვანე პროდუქტის სახელი: ")

if search in products:
    print(f"{search}-ის ფასი არის {products[search]}")
else:
    print("ასეთი პროდუქტი არ არსებობს!")

products.update({"bread": 4})
print(products)

products.clear()
print(products)