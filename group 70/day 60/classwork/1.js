// 1
const person = {
    name: "Soso",
    age: 16,
    city: "Tbilisi"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);


console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);


// 2
const car = {
    brand: "BMW",
    model: "M3",
    year: 2020
};

console.log(car.brand);
console.log(car.year);
console.log(car.model);


console.log(car["brand"]);
console.log(car["year"]); 
console.log(car["model"]); 




// 3
const user = {
    name: "Soso",
    sayHello: function() {
        console.log("Hello");
    }
};

user.sayHello();



// 4
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};

console.log(calculator.add(5, 3));
console.log(calculator.divide(10, 2));



// 5
const me = {
    name: "Soso",
    age: 15,
    info: function() {
        console.log(`ჩემი სახელია ${this.name} და ვარ ${this.age} წლის`);
    }
};

me.info();