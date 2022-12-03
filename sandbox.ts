let character: string = "luigi";
let age = 30;
let isBlackBelt = false;

// character = 20; Error: Type 'number' is not assignable to type 'string'
character = "mario";

// age = "yoshi"; Error: Type 'number' is not assignable to type 'string'
age = 20;

// isBlackBelt = "yes"; Error: Type 'boolean' is not assignable to type 'string'
isBlackBelt = true;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(3))

