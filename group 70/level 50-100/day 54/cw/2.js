// 2
let point = prompt("Enter a letter point (A, B, C, D, F):");

switch (point) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
}