var character = "luigi";
var age = 30;
var isBlackBelt = false;
// character = 20; Error: Type 'number' is not assignable to type 'string'
character = "mario";
// age = "yoshi"; Error: Type 'number' is not assignable to type 'string'
age = 20;
// isBlackBelt = "yes"; Error: Type 'boolean' is not assignable to type 'string'
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(3));
