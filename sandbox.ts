// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "luigi"; Error
age = 30;

// isLoggedIn = 20; Error
isLoggedIn = true;

// arrays
let fighters: string[] = [];

fighters.push("luigi");

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("rafael");
mixed.push(30);
mixed.push(true);

console.log(mixed);

let uid: string | number;
uid = 213;
uid = "uid";

// object
let fighter: object; // or fighter: {}
fighter = { name: "Rafael", belt: "yellow" };

let fighter2: {
  name: string;
  belt: string;
  age: number;
};

fighter2 = {
  name: "Rafael",
  belt: "yellow",
  age: 18,
};
