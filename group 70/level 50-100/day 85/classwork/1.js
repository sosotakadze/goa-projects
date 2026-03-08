// 1

const colors = ["red", "green", "blue", "yellow", "black"];

const [firstColor, secondColor, ...restColors] = colors;

console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);
console.log("Rest Colors:", restColors);



// 2

const user = {
  username: "gio123",
  email: "gio@gmail.com",
  address: {
    city: "Batumi",
    zip: "6000"
  }
};

const {
  username: userName,
  address: { city, zip }
} = user;

console.log("Username:", userName);
console.log("City:", city);
console.log("Zip:", zip);


// 3

function printUserInfo({
  name,
  address: {
    city = "Unknown",
    zip = "0000"
  } = {}
}) {
  console.log("Name:", name);
  console.log("City:", city);
  console.log("Zip:", zip);
}

// როცა address არსებობს
printUserInfo({
  name: "Nika",
  address: {
    city: "Tbilisi",
    zip: "0101"
  }
});

// როცა address არ არსებობს
printUserInfo({
  name: "Nika"
});


// 4

const products = [
  { name: "Book", price: 30, category: "Education" },
  { name: "Headphones", price: 80, category: "Electronics" },
  { name: "Bag", price: 50, category: "Fashion" }
];

const [
  { name: firstProductName, price: firstProductPrice },
  { category: secondProductCategory },
  { name: thirdProductName }
] = products;

console.log("First Product Name:", firstProductName);
console.log("First Product Price:", firstProductPrice);
console.log("Second Product Category:", secondProductCategory);
console.log("Third Product Name:", thirdProductName);


// 5

let x = 100;
let y = 200;

[x, y] = [y, x];

console.log("x:", x);
console.log("y:", y);

const student = {
  name: "Nika",
  age: 12,
  grade: 6,
  school: "Public School",
  city: "Tbilisi"
};

const { name, age, ...restStudentData } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Other Data:", restStudentData);
