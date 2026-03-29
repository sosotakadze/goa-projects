// 1
const body = document.body;

const textNode = document.createTextNode("ეს არის text node");

body.appendChild(textNode);


// 2
const body1 = document.body;

const div = document.createElement("div");

const text = document.createTextNode("ეს ტექსტი ჩასმულია div-ში");

div.appendChild(text);

body.appendChild(div);




const task = document.getElementById("input");
const button = document.getElementById("add");
const tasks = document.getElementById("tasks");

button.addEventListener("click", addTask);

function addTask() {
    if (task.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = task.value;

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    tasks.appendChild(li);

    task.value = "";
}
