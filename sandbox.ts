// Dynamic type
let age: any = 25;

age = true;
console.log(age);

age = "hello";
console.log(age);

age = { name: "Rafa" };
console.log(age);

let mixed: any[] = [];

mixed.push(1);
mixed.push('mario')
mixed.push(false)
console.log(mixed)

let fighter: { name: any, age: any };

fighter = { name: 'Rafa', age: 25 };
console.log(fighter);
