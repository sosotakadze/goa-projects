// 1
alert("hello world")


// 2
let num = prompt("შეიყვანე პირველი რიცხვი:");
let num7 = prompt("შეიყვანე მეორე რიცხვი:");

num = Number(num);
num7 = Number(num7);

let m = num + num7;
let n = num - num7;
let s = num * num7;
let t = num / num7;
let a = num % num7;


// 3
let age = prompt("enter your age")

if (age >= 18) {
  alert("you are adult");
} else {
  alert("you are not adult");
}


// 4
let num1 = prompt("enter first number")
let num2 = prompt("enter second number")

num1 = Number(num1);
num2 = Number(num2);

if (num1 > 0){
    console.log("number is +");
} else if (num1 < 0){
    console.log("number is -");
} else{
    console.log("number is 0");
}

if (num2 > 0){
    console.log("number is +");
} else if (num2 < 0){
    console.log("number is -");
} else{
    console.log("number is 0");
}


// 5
let symbol = prompt("შეიყვანე მათემატიკური სიმბოლო (+, -, *, /, %):");
let num3 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
let num4 = Number(prompt("შეიყვანე მეორე რიცხვი:"));

if (symbol === "+") {
  console.log("შედეგი:", num3 + num4);
} else if (symbol === "-") {
  console.log("შედეგი:", num3 - num4);
} else if (symbol === "*") {
  console.log("შედეგი:", num3 * num4);
} else if (symbol === "/") {
  console.log("შედეგი:", num3 / num4);
} else if (symbol === "%") {
  console.log("შედეგი:", num3 % num4);
} else {
  console.log("შეყვანილი სიმბოლო არასწორია!");
}