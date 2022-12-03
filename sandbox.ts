// Arrays:
let names = ["luigi", "mario", "yoshi"];

names.push("toad");

// names.push(3); Error: Argument of type 'number' is not assignable to parameter of type 'string';
// names[0] = 3;

let numbers = [10, 20, 30, 40];

numbers.push(10);
// numbers.push("Rafa"); Error: Argument of type 'string' is not assignable to parameter of type 'number';

let mixed = ["rafa", 18, "ramos", 13, 222];

mixed.push(10);
mixed.push("costa");
// ----------------------------------------------------------------

// Objects:
let fighter = {
  name: "Rafa",
  belt: "yellow",
  age: 18,
};

fighter.age = 19;
fighter.name = "Rafael Ramos Costa";
// fighter.age = "30"; Error: Argument of type 'string' is not assignable to parameter of type 'number';
// fighter.skills = ["striking", "gedan mawashi geri"];  Error: Cannot create a new key after the variable declaration
// fighter = []; Error: Argument of type 'Object' is not assignable to parameter of type 'Array';

fighter = {
    name: "Leo",
    belt: "yellow",
    age: 18,
}
