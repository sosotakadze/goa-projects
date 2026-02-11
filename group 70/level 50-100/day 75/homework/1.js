// 1) mouseleave
document.getElementById("box").addEventListener("mouseleave", function () {
  document.getElementById("box").style.backgroundColor = "red";
});

// 2) keydown 
document.getElementById("keydownInput").addEventListener("keydown", function (e) {
  if (e.key == "a" || e.key == "b" || e.key == "c") {
    e.preventDefault();
  }
});

// 3) keyup
document.getElementById("keyupInput").addEventListener("keyup", function () {
  document.getElementById("text").innerHTML =
    "You typed " + document.getElementById("keyupInput").value.length + " characters";
});

// 4) change
document.getElementById("changeInput").addEventListener("change", function () {
  alert("Name changed!");
});

// 5) focus
document.getElementById("focusBlurInput").addEventListener("focus", function () {
  document.getElementById("focusBlurInput").style.backgroundColor = "lightgreen";
});

// 6) blur
document.getElementById("focusBlurInput").addEventListener("blur", function () {
  document.getElementById("focusBlurInput").style.backgroundColor = "pink";
});
