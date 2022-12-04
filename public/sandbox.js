"use strict";
let greet; // typing a variable as a function
// greet = "hello"; Error
greet = () => {
    console.log("Hello, world!");
};
const add = (n1, n2, n3) => {
    console.log(n1 + n2);
    console.log(n3);
};
add(5, 10);
const minus = (n1, n2) => {
    return n1 - n2;
};
let result = minus(10, 5);
