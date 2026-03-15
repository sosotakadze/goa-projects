// 1
const date1 = new Date();
console.log("მიმდინარე წუთი:", date1.getMinutes());


// 2
const date2 = new Date();
console.log("მიმდინარე წამი:", date2.getSeconds());


// 3
setInterval(function () {
    const now = new Date();
    console.log("წამი:", now.getSeconds());
}, 1000);


// 4
const p = document.createElement("p");
document.body.appendChild(p);

setInterval(function () {
    const now = new Date();
    p.textContent = "მიმდინარე დრო: " + now.toLocaleTimeString();
}, 1000);


// 5
setInterval(function () {
    const now = new Date();
    console.log("წუთი და წამი:", now.getMinutes() + ":" + now.getSeconds());
}, 2000);
