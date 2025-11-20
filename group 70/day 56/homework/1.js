// 1
function sayHello(name) {
  console.log("Hello, " + name + "!");
}

sayHello("Soso");



// 2
function sumFour(a, b, c, d) {
  return a + b + c + d;
}

console.log(sumFour(2, 3, 4, 5));



// 3
const evenOrOdd = (num) => {
  if (num % 2 === 0) return "Even";
  return "Odd";
};

console.log(evenOrOdd(5));



// 4
const countLetters = (str) => {
  return str.length;
};

console.log(countLetters("Hello"));