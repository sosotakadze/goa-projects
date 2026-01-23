# 1
# Dictionary არის მონაცემთა სტრუქტურა, სადაც ინფორმაცია ინახება წყვილებად: key და  value.


# 2
aboutme = {
    "name" : "soso",
    "surname" : "takadze",
    "age" : "15"
}
print(aboutme)


# 3
aboutme = {
    "name" : "soso",
    "surname" : "takadze",
    "age" : "15"
}
print(aboutme.keys())
print(aboutme.values()) 


# 4
aboutme = {
    "name" : "soso",
    "surname" : "takadze",
    "age" : "15"
}
aboutme["favorite_color"] = "blue"
print(aboutme)


# 5
aboutme = {
    "name" : "soso",
    "surname" : "takadze",
    "age" : "15"
}
aboutme["iosebi"] = aboutme.pop("name")
print(aboutme)

