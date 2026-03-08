// 1
const authors = ["Rowling", "Tolkien", "Rowling", "Martin", "Tolkien", "Rowling"];

const authorCount = authors.reduce((acc, author) => {
  acc[author] = (acc[author] || 0) + 1;
  return acc;
}, {});

console.log("1)", authorCount);


// 2
const expenses = [50, 120, 600, 300, 80, 1000, 450];

let spendingCategories = { low: 0, medium: 0, high: 0 };

expenses.forEach(amount => {
  if (amount < 100) spendingCategories.low++;
  else if (amount <= 499) spendingCategories.medium++;
  else spendingCategories.high++;
});

console.log("2)", spendingCategories);


// 3
const players = [
  { name: "Nika", points: 120 },
  { name: "Luka", points: 80 },
  { name: "Gio", points: 150 }
];

const lowestPlayer = players.reduce((min, player) =>
  player.points < min.points ? player : min
);

console.log("3)", lowestPlayer);


// 4
const employees = [
  { name: "Ana", hours: 42 },
  { name: "Gio", hours: 38 },
  { name: "Luka", hours: 45 },
  { name: "Nika", hours: 30 }
];

const workResult = employees.reduce((acc, emp) => {
  emp.hours >= 40 ? acc.fullTime++ : acc.partTime++;
  acc.totalHours += emp.hours;
  return acc;
}, { fullTime: 0, partTime: 0, totalHours: 0 });

workResult.average = workResult.totalHours / employees.length;

console.log("4)", workResult);


// 5
const text = "apple orange banana egg igloo umbrella ანა ელი ომარა ულა";

const vowels = ["a","e","i","o","u","ა","ე","ი","ო","უ"];

const vowelWordCount = text.split(" ").reduce((count, word) => {
  return vowels.includes(word[0].toLowerCase()) ? count + 1 : count;
}, 0);

console.log("5)", vowelWordCount);


// 6
const warehouse = [
  { name: "TV", price: 800, quantity: 5 },
  { name: "Laptop", price: 1200, quantity: 3 },
  { name: "Phone", price: 600, quantity: 10 }
];

warehouse.forEach(product => {
  product.totalValue = product.price * product.quantity;
});

const warehouseTotal = warehouse.reduce((sum, product) =>
  sum + product.totalValue, 0
);

console.log("6)", warehouse);
console.log("6) სრული მარაგის ფასი:", warehouseTotal);


// 7
const numbers = [10, 55, 120, 45, 75, 200, 5, 99];

let rangeCount = { range1: 0, range2: 0, range3: 0 };

numbers.forEach(num => {
  if (num >= 0 && num <= 50) rangeCount.range1++;
  else if (num <= 100) rangeCount.range2++;
  else rangeCount.range3++;
});

console.log("7)", rangeCount);
