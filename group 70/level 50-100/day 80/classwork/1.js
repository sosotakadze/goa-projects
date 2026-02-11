// 1
let numbers = [3, 7, 10, 5];

numbers.forEach(function(num) {
  console.log(num);
});


// 2
numbers.forEach(function(num) {
  console.log(num * 2);
});


// 3]
let names = ["mariam", "nika", "soso"];

names.forEach(function(name) {
  console.log("hello, " + name);
});


// 4
let products = ["sugar", "milk", "bread"];

products.forEach(function(item, index) {
  console.log((index + 1) + ". " + item);
});


// 5
let nums = [5, 10, 15, 20];

let sum = nums.reduce(function(total, current) {
  return total + current;
}, 0);

console.log("sum is:", sum);S