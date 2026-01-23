// 1
const nums1 = [4, 9, 2, 15, 6, 11];

const squared = nums1.map(function (num) {
  return num * num;
});

// const filtered = squared.filter(function (num) {
  return num < 50;
// });

const sum = filtered.reduce(function (acc, num) {
  return acc + num;
}, 0);

let max = filtered[0];
filtered.forEach(function (num) {
  if (num > max) {
    max = num;
  }
});

console.log(filtered);
console.log(sum);
console.log(max);





// 2
const nums2 = [10, 3, 18, 7, 14, 1];

const filtered = nums2.filter(function (num) {
  return num > 5;
});

const mapped = filtered.map(function (num) {
  return num / 2;
});

mapped.sort(function (a, b) {
  return b - a;
});

mapped.forEach(function (num) {
  console.log(num);
});



// 3
const nums3 = [1, 2, 3, 4, 5, 6];

const mapped3 = nums3.map(function (num, index) {
  return num + index;
});

const filtered3 = mapped3.filter(function (num) {
  return num % 2 === 0;
});

const product = filtered3.reduce(function (acc, num) {
  return acc * num;
}, 1);

console.log("ნამრავლი:", product);



// 4
const nums4 = [-10, -3, 0, 4, 7, 12];

const positive = nums4.filter(function (num) {
  return num >= 0;
});

const minusOne = positive.map(function (num) {
  return num - 1;
});

const odd = minusOne.filter(function (num) {
  return num % 2 !== 0;
});

odd.forEach(function (num) {
  console.log(num);
});



// 5
const nums5 = [6, 9, 12, 15, 18];


const multiplied = nums5.map(function (num) {
  return num * 4;
});

const sum5 = multiplied.reduce(function (acc, num) {
  return acc + num;
}, 0);

const average = sum5 / multiplied.length;

const rounded = Math.round(average);

console.log("საბოლოო პასუხი:", rounded);
