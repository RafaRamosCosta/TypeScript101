// Function signatures
// let greet: Function;

// ex1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string): void => {
  console.log(`${name} says ${greeting}`);
};

// ex2
let calc: (a: number, b: number, c: string) => number;

calc = (n1: number, n2: number, action: string) => {
  if (action !== "add") return n1 - n2;
  return n1 + n2;
};

// ex3
let logDetails: (obj: { name: string; age: number }) => void;
type Fighter = { name: string; age: number };

logDetails = (fighter: Fighter) => {
  console.log(`${fighter.name} is ${fighter.age} years old`);
};
