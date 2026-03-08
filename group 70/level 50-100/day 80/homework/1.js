// 1
const ages = [18, 20, 18, 25, 20, 30, 25, 18];

const ageCount = ages.reduce((acc, age) => {
  acc[age] = (acc[age] || 0) + 1;
  return acc;
}, {});

console.log("1)", ageCount);


// 2
const scores = [35, 50, 72, 90, 40, 68, 25, 80];

let categories = { low: 0, medium: 0, high: 0 };

scores.forEach(score => {
  if (score < 40) categories.low++;
  else if (score <= 69) categories.medium++;
  else categories.high++;
});

console.log("2)", categories);


// 3
const students1 = [
  { name: "გიორგი", score: 85 },
  { name: "ანა", score: 92 },
  { name: "ლუკა", score: 78 }
];

const topStudent = students1.reduce((max, student) =>
  student.score > max.score ? student : max
);

console.log("3)", topStudent);


// 4
const students2 = [
  { name: "გიორგი", score: 60 },
  { name: "ანა", score: 45 },
  { name: "ლუკა", score: 80 },
  { name: "ნიკა", score: 30 }
];

const result = students2.reduce((acc, student) => {
  student.score >= 50 ? acc.passed++ : acc.failed++;
  acc.total += student.score;
  return acc;
}, { passed: 0, failed: 0, total: 0 });

result.average = result.total / students2.length;

console.log("4)", result);


// 5
const text = "javascript is fun and javascript is powerful";

const wordCount = text.split(" ").reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log("5)", wordCount);


// 6
const products = [
  { name: "Laptop", price: 1000, quantity: 2 },
  { name: "Phone", price: 500, quantity: 3 },
  { name: "Tablet", price: 300, quantity: 1 }
];

products.forEach(product => {
  product.totalPrice = product.price * product.quantity;
});

const totalSum = products.reduce((sum, product) =>
  sum + product.totalPrice, 0
);

console.log("6)", products);
console.log("6) ჯამი:", totalSum);


// 7
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let count = { even: 0, odd: 0 };

numbers.forEach(num => {
  num % 2 === 0 ? count.even++ : count.odd++;
});

console.log("7)", count);
