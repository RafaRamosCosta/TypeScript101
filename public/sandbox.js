"use strict";
// Function signatures
// let greet: Function;
// ex1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// ex2
let calc;
calc = (n1, n2, action) => {
    if (action !== "add")
        return n1 - n2;
    return n1 + n2;
};
// ex3
let logDetails;
logDetails = (fighter) => {
    console.log(`${fighter.name} is ${fighter.age} years old`);
};
