// explicit types
var character;
var age;
var isLoggedIn;
// age = "luigi"; Error
age = 30;
// isLoggedIn = 20; Error
isLoggedIn = true;
// arrays
var fighters = [];
fighters.push("luigi");
// union types
var mixed = [];
mixed.push("rafael");
mixed.push(30);
mixed.push(true);
console.log(mixed);
var uid;
uid = 213;
uid = "uid";
// object
var fighter; // or fighter: {}
fighter = { name: "Rafael", belt: "yellow" };
var fighter2;
fighter2 = {
    name: "Rafael",
    belt: "yellow",
    age: 18
};
