// 1
let num = 1; 

if (num > 0) {
  console.log("რიცხვი მეტია ნულზე");
} else {
  console.log("რიცხვი არ არის ნულზე მეტი");
}



// 2
let num1 = 7; 

if (num1 % 2 === 0) {
  console.log("რიცხვი ლუწია");
} else {
  console.log("რიცხვი კენტია");
}



// 3
let a = 1;
let b = 2
let c = 3;

let max = a;

if (b > max) {
  max = b;
}

if (c > max) {
  max = c;
}

console.log("ყველაზე დიდი რიცხვია: " + max);



// 4
console.log(5 + 3);   // 8
console.log(10 - 6);  // 4
console.log(3 * 2);   // 6
console.log(30 / 2);  // 15



// 5
let f = 8;
let s = 5;

console.log(f > s);   // true
console.log(f < s);   // false
console.log(f === s); // false
console.log(f !== s); // true



// 6
let n = 0;

for (let i = 0; i < 3; i++) {
  n++;
}

console.log(n); 



// 7
for (let i = 1; i <= 20; i++) {
  console.log(i);
}



// 8
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}



// 9
let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum += i;
}

console.log("ჯამი: " + sum); 



// 10
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}



// 11
let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++;
}



// 12
let x = 1;
let u = 0;

while (x <= 20) {
  u += x;
  x++;
}

console.log("ჯამი: " + u); 



// 13
let item = "apple";
let result;

switch (item) {
  case "apple":
    result = "fruit";
    break;
  case "carrot":
    result = "vegetable";
    break;
  default:
    result = "unknown";
}

console.log(result); 