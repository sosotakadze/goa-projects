// 1
function sayHello(word) {
  console.log("hello world");
}

sayHello();


// 2
function greet(name) {
    console.log("hello, " + name)
}

greet("Soso")


// 3
function sum(a, b) {
    return a + b
}

console.log(sum(10, 11))


// 4
const AC = (age) => age >= 18 ? "Adult" : "Child"
console.log(AC(15))


// 5
const isEven = (num) => num % 2 === 0 ? "Even" : "Odd";

console.log(isEven(4)); 
console.log(isEven(7)); 