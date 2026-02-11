// 1

const categories = ["ტექნიკა", "ტანსაცმელი", "ტექნიკა", "საკვები", "ტანსაცმელი"];

const categoryResult = categories.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log("1)", categoryResult);


// 2

const attendance = [45, 60, 80, 30, 75, 90];

let low = 0;
let medium = 0;
let high = 0;

attendance.forEach(percent => {
  if (percent < 50) {
    low++;
  } else if (percent <= 79) {
    medium++;
  } else {
    high++;
  }
});

console.log("2) დაბალი:", low, "საშუალო:", medium, "მაღალი:", high);


// 3

const movies = [
  { name: "Film A", rating: 7.5 },
  { name: "Film B", rating: 9.1 },
  { name: "Film C", rating: 8.3 }
];

const bestMovie = movies.reduce((max, movie) => {
  return movie.rating > max.rating ? movie : max;
});

console.log("3)", bestMovie);


// 4

const athletes = [120, 80, 150, 60, 100];

const stats = athletes.reduce((acc, points) => {
  if (points >= 100) acc.over++;
  else acc.under++;

  acc.sum += points;
  return acc;
}, { over: 0, under: 0, sum: 0 });

stats.average = stats.sum / athletes.length;

console.log("4)", stats);


// 5

const text = "Hello 123 World!";

const chars = text
  .toLowerCase()
  .replace(/[^a-z0-9]/g, "")
  .split("")
  .reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

console.log("5)", chars);


// 6

const orders = [
  { price: 10, quantity: 2 },
  { price: 5, quantity: 4 },
  { price: 20, quantity: 1 }
];

orders.forEach(order => {
  order.total = order.price * order.quantity;
});

const income = orders.reduce((sum, order) => sum + order.total, 0);

console.log("6) შეკვეთები:", orders);
console.log("6) საერთო შემოსავალი:", income);


// 7

const numbers = [3, 5, 15, 7, 9, 10, 8];

let div3 = 0;
let div5 = 0;
let none = 0;

numbers.forEach(num => {
  if (num % 3 === 0) div3++;
  else if (num % 5 === 0) div5++;
  else none++;
});

console.log("7) 3-ზე:", div3, "5-ზე:", div5, "არც ერთზე:", none);