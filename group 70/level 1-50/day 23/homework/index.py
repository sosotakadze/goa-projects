# დავალება N1
vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
word = input("Enter Word: ")
while word[0] in vowels or word[len(word) - 1] in vowels:
    word = input("Enter Word: ")
if word[0] not in vowels and word[len(word) - 1] not in vowels:
    print("It is Correct!")
       

# დავალება N2
vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
correct_words = []
for i in range(5):
    word = input(f"Enter word {i + 1}: ")
    if word[0] not in vowels and word[len(word) - 1] not in vowels:
        correct_words.append(word)
print(correct_words)


# დავალება N3
vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'] # ხმოვანი ასოების სია
correct_words = [] # სწორი სიტყვები სია
correct_word_count = 0 # სწორი სიტყვების რაოდენობა
for i in range(5):
    word = input(f"Enter word {i + 1}: ")
    if word[0] not in vowels and word[len(word) - 1] not in vowels:
        correct_words.append(word)
        correct_word_count += 1
    print(f"Correct Words: {correct_word_count}/5")
print(correct_words)


# დავალება N4
vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
correct_words = []
for i in range(10):
    word = input(f"Enter word {i + 1}: ")
    if word[0] not in vowels and word[len(word) - 1] not in vowels:
        correct_words.append(word)
print(correct_words)


# დავალება N5
vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
word = input("Enter Word: ")
while word[0] in vowels or word[len(word) - 1] in vowels:
    vowels_count = 0
    consonants_count = 0
    for i in range(len(word)):
        if word[i] in vowels:
            vowels_count += 1
        elif word[i] not in vowels:
            consonants_count += 1
    print(f"In this Word There is {vowels_count} Vowels and {consonants_count} Consonants")
    word = input("Enter Word: ")
print(f"It is Correct! {word}")