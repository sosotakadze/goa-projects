// 0) getElementsByClassName გამოყენება
let texts = document.getElementsByClassName("text");

for (let i = 0; i < texts.length; i++) {
    texts[i].innerHTML = "შევცვალე class ელემენტი";
}

// getElementsByTagName გამოყენება
let divs = document.getElementsByTagName("div");

for (let i = 0; i < divs.length; i++) {
    divs[i].innerHTML = "შევცვალე tag ელემენტი";
}


// 1) მთლიანი საიტის შეცვლა
document.body.innerHTML = "გამარჯობა, მე ვარ soso";