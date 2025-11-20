// 1
let age = 18;

switch (true) {
    case age >= 18:
        console.log("სრულწლოვანი");
        break;
    default:
        console.log("არასრულწლოვანი");
}



// 2
let length = 5;
let width = 5;

switch (true) {
    case length === width:
        console.log("კვადრატია");
        break;
    default:
        console.log("არ არის კვადრატი");
}



// 3
let num = Number(prompt("შეიყვანე რიცხვი:"));

switch (true) {
    case num === 0:
        console.log("რიცხვი არის 0");
        break;
    case num > 0:
        console.log("რიცხვი არის დადებითი");
        break;
    default:
        console.log("რიცხვი არის უარყოფითი");
}



// 4
let day = Number(prompt("შეიყვანე 1-7 რიცხვი:"));

switch (day) {
    case 1:
        console.log("ორშაბათი");
        break;
    case 2:
        console.log("სამშაბათი");
        break;
    case 3:
        console.log("ოთხშაბათი");
        break;
    case 4:
        console.log("ხუთშაბათი");
        break;
    case 5:
        console.log("პარასკევი");
        break;
    case 6:
        console.log("შაბათი");
        break;
    case 7:
        console.log("კვირა");
        break;
    default:
        console.log("არასწორი რიცხვი");
}



// 5
for (let i = 0; i < 5; i++) {
    console.log(i);
}



// 6
for (let i = 0; i <= 10; i++) {
    console.log(i);
}



// 7
let n = 7;

for (let i = 1; i <= n; i++) {
    console.log(i);
}



// 8
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}



// 9
let num2 = 1;

while (num2 <= 20) {
    if (num2 % 2 === 0) {
        console.log(num2);
    }
    num2++;
}



// 10
let answer;

do {
    answer = prompt("Do you like JavaScript?");
} while (answer !== "yes");

console.log("Good!");