// 1
let p = document.getElementById("myParagraph");
p.innerTEXT = "ახალი ტექსტი"


// 2
function changeColor(){
    let title = document.getElementById("myTitle");
    title.style.color = "red";
}


// 3
function changeBackground() {
    let div = document.getElementById("myDiv");
    div.style.backgroundColor = "blue";
}
    
       
// 4
function increaseFont() {
    let text = document.getElementById("resizeText");
    text.style.fontSize = "30px";
}


// 5
function changeClassText() {
    let elements = document.getElementsByClassName("myClass");
    elements[1].innerText = "შეცვლილი ტექსტი";
}