# დავალება N1
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers)
print()

def slicing_list(list):
    return list[1:-1]

print(slicing_list(numbers))


# დავალება N2
def sum_of_lists(list_1, list_2):
    list_1_result = 0
    list_2_result = 0
    for i in range(len(list_1)):
        list_1_result += list_1[i]
    for x in range(len(list_2)):
        list_2_result += list_2[x]
    return list_1_result * list_2_result


list1 = [2, 6, 8, 4, 9]
list2 = [7, 1, 55, 34, 99, 10]
print(sum_of_lists(list1, list2))


# დავალება N3
def double_list(list):
    result = 0
    i = 0
    while len(list) != i:
        result += list[i] * 2
        i += 1
    return result

list1 = [2, 6, 8, 4, 9]
print(double_list(list1))

# დავალება N4
def even_numbers(list):
    result = []
    for x in list:
        if x % 2 == 0:
            result.append(x)
    return result

list1 = [2, 6, 8, 4, 9, 45, 23, 90, 100, 56]
print(even_numbers(list1))

# დავალება N5
def names(list_of_names):
    result = []
    for x in list_of_names:
        if x[0].lower() == 'n':
            result.append(x)
    return result

names_list = ["Luka", "Soso", "Nika", "Giorgi", "Levani", "Andria", "Nugzari", "Nodari", "Nana", "Nino"]
print(names(names_list))