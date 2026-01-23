// 1
const user = {
    name: "Soso",
    age: 17,

    isAdult: function () {
        if (this.age >= 18) {
            return "You are an adult";
        } else {
            return "You are not an adult";
        }
    }
};

console.log(user.isAdult());



// 2
const car = {
    brand: "BMW",
    speed: 130,

    checkSpeed: function () {
        if (this.speed > 120) {
            return "Too fast!";
        } else {
            return "Speed is okay";
        }
    }
};

console.log(car.checkSpeed());



// 3
const student = {
    name: "Ana",
    score: 45,

    passOrFail: function () {
        if (this.score >= 50) {
            return "Passed";
        } else {
            return "Failed";
        }
    }
};

console.log(student.passOrFail());



// 4
const calculator = {
    n: 5,

    sumToN: function () {
        let sum = 0;
        let i = 1;

        while (i <= this.n) {
            sum += i;
            i++;
        }

        return sum;
    }
};

console.log(calculator.sumToN());



// 5
const multiplier = {
    number: 3,
    times: 4,

    multiply: function () {
        let result = 1;
        let counter = 1;

        while (counter <= this.times) {
            result *= this.number;
            counter++;
        }

        return result;
    }
};

console.log(multiplier.multiply());



// 6
const calculator2 = {
    n: 6,

    sumToN: function () {
        let sum = 0;

        for (let i = 1; i <= this.n; i++) {
            sum += i;
        }

        return sum;
    }
};

console.log(calculator2.sumToN());



// 7
const multiplier2 = {
    number: 2,
    times: 5,

    multiply: function () {
        let result = 1;

        for (let i = 1; i <= this.times; i++) {
            result *= this.number;
        }

        return result;
    }
};

console.log(multiplier2.multiply());