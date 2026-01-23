// 1
let user = {
  age: 20,
  checkAge: function () {
    if (this.age >= 18) {
      return "Adult";
    } else {
      return "Minor";
    }
  }
};

console.log(user.checkAge());


// 2
let car = {
  speed: 130,
  checkSpeed: function () {
    if (this.speed > 120) {
      return "Too fast";
    } else {
      return "Speed okay";
    }
  }
};

console.log(car.checkSpeed());


// 3
let student = {
  score: 45,
  checkResult: function () {
    if (this.score >= 50) {
      return "Passed";
    } else {
      return "Failed";
    }
  }
};

console.log(student.checkResult());


// 4
let numbers = {
  arr: [3, -1, 5, 0, -7, 10],
  getPositive: function () {
    let result = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] > 0) {
        result.push(this.arr[i]);
      }
    }
    return result;
  }
};

console.log(numbers.getPositive());


// 5
let repeater = {
  text: "Hello",
  count: 3,
  repeatText: function () {
    let i = 0;
    while (i < this.count) {
      console.log(this.text);
      i++;
    }
  }
};

repeater.repeatText();


// 6
let calculator = {
  n: 5,
  sumUpToN: function () {
    let sum = 0;
    for (let i = 1; i <= this.n; i++) {
      sum += i;
    }
    return sum;
  }
};

console.log(calculator.sumUpToN());
