// 1) ტექსტის შეცვლა
document.getElementById("text1").innerText = "ახალი ტექსტი";

// 2) h1 ფერის შეცვლა
function changeColor() {
    document.getElementById("title").style.color = "red";
}

// 3) div background შეცვლა
document.getElementById("box").style.backgroundColor = "blue";

// 4) სურათის შეცვლა
function changeImage() {
    document.getElementById("image").src = "https://via.placeholder.com/300";
}

// 5) font-size გაზრდა
let size = 16;

function increaseFont() {
    size += 2;
    document.getElementById("text2").style.fontSize = size + "px";
}