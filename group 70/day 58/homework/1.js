// 1
let num = 120;

if (num > 100) {
  console.log("Greater than 100");
} else {
  console.log("Not greater");
}



// 2
let user = "kocho";

if (user === "kocho") {
  console.log("Welcome back");
} else {
  console.log("Hello");
}



// 3
let age = 15;

if (age < 13) {
  console.log("child");
} else if (age >= 13 && age <= 17) {
  console.log("teen");
} else {
  console.log("adult");
}



// 4
let x = 0;

if (x === 0) {
  console.log("Zero");
} else {
  console.log("Not zero");
}



// 5
let password = "mypassword123";

if (password.length > 8) {
  console.log("strong");
} else {
  console.log("weak");
}



// 6
console.log(12 % 5);



// 7
let a = 5;
let b = 7;

console.log(a !== b);



// 8
let num2 = 10;

num2 += 3;
num2 += 3;
num2 += 3;

console.log(num2);



// 9
console.log(15 * 4 / 2);



// 10
let isSunny = true;
let isWarm = false;

console.log(isSunny && isWarm);



// 11
for (let i = 10; i >= 1; i--) {
  console.log(i);
}



// 12
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}



// 13
for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}



// 14
let arr = [3, 6, 9, 12];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);



// 15
let langs = ["js", "html", "css"];

for (let i = 0; i < langs.length; i++) {
  console.log(i, langs[i]);
}



// 16
let i = 2;

while (i <= 20) {
  console.log(i);
  i += 2;
}



// 17
let counter = 5;

while (counter < 20) {
  counter++;
  console.log(counter);
}



// 18
let sumOdd = 0;
let j = 1;

while (j <= 30) {
  if (j % 2 !== 0) {
    sumOdd += j;
  }
  j++;
}

console.log(sumOdd);



// 19
let k = 1;

while (true) {
  if (k % 9 === 0) {
    console.log(k);
    break;
  }
  k++;
}



// 20
let count = 0;
let t = 1;

while (t <= 40) {
  if (t % 3 === 0) {
    count++;
  }
  t++;
}

console.log(count);



// 21
let weather = "sunny";

switch (weather) {
  case "sunny":
    console.log("It's sunny");
    break;
  case "rainy":
    console.log("It's rainy");
    break;
  case "cloudy":
    console.log("It's cloudy");
    break;
  default:
    console.log("Unknown");
}



// 22
let num3 = 3;

switch (num3) {
  case 1: console.log("spring"); break;
  case 2: console.log("summer"); break;
  case 3: console.log("autumn"); break;
  case 4: console.log("winter"); break;
  default: console.log("invalid");
}



// 23
let transport = "bus";

switch (transport) {
  case "car": console.log("You chose car"); break;
  case "bus": console.log("You chose bus"); break;
  case "bike": console.log("You chose bike"); break;
  default: console.log("Unknown transport");
}



// 24
let month = 7;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("winter");
    break;

  case 3:
  case 4:
  case 5:
    console.log("spring");
    break;

  case 6:
  case 7:
  case 8:
    console.log("summer");
    break;

  case 9:
  case 10:
  case 11:
    console.log("autumn");
    break;

  default:
    console.log("invalid");
}



// 25
let score = "B";

switch (score) {
  case "A": console.log("Excellent"); break;
  case "B": console.log("Good"); break;
  case "C": console.log("Average"); break;
  case "D": console.log("Below average"); break;
  case "F": console.log("Fail"); break;
  default: console.log("Invalid");
}
