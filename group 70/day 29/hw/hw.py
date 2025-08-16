# დავალება N1
def sentence_function(sentence):
    sentence = sentence.split(' ')
    return ", ".join(sentence)

sentence = "Hello my name is Soso!"
print(sentence_function(sentence))


# დავალება N2
def symbol_count(sentence):
    result = []
    sentence = sentence.split(" ")
    for i in sentence:
        result.append(len(i))
    return result

sentence = "Hello, my name is Soso!"
print(symbol_count(sentence))


# დავალება N3
def space_between(sentence):
    sentence = sentence.split(" ")
    space_count = sentence.count("")
    for i in range(space_count):
        sentence.remove("")
    return " ".join(sentence)

sentence = "Hello   my    name       is       Soso!"
print(space_between(sentence))


# დავალება N4
def change_space(sentence):
    sentence = sentence.split(" ")
    return "-".join(sentence)

sentence = "Hello my name is Soso!"
print(change_space(sentence))


# დავალება N5
def reverse_words(sentence):
    result = []
    sentence = sentence.split(" ")
    for i in sentence:
        result.append(i[::-1])
    return " ".join(result)

sentence = "Hello my name is Soso!"
print(reverse_words(sentence))