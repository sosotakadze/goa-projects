// 1
let sports = ["football", "basketball"]

sports.unshift("MMA")

console.log(sports)


// 2
let food = ["mwvadi", "xinkali", "xashlama", "chaqafuli", "ghomi"]

food.shift(1, 1)

console.log(food)


// 3
let numbers1 = [1, 5, 10, 20];

let plusFive = numbers1.map(function(num) {
  return num + 5;
});

console.log(plusFive);


// 4
let numbers2 = [3, 7, 12, 18, 5, 20];

let greaterThanTen = numbers2.filter(function(num) {
  return num > 10;
});

console.log(greaterThanTen);


// 5
let numbers3 = [2, 3, 4];

let product = numbers3.reduce(function(total, num) {
  return total * num;
}, 1);

console.log(product);


// 6
let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"];

cities.forEach(function(city) {
  console.log(city);
});


// 7
let numbers4 = [1, 2, 3, 4, 5];

let result1 = numbers4
  .map(function(num) {
    return num * 2;
  })
  .filter(function(num) {
    return num % 2 === 0;
  });

console.log(result1);


// 8
let numbers5 = [-5, 10, -3, 7, 2];

let sum = numbers5
  .filter(function(num) {
    return num > 0;
  })
  .reduce(function(total, num) {
    return total + num;
  }, 0);

console.log(sum);