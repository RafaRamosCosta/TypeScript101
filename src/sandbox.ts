let greet: Function; // typing a variable as a function

// greet = "hello"; Error

greet = (): void => {
  console.log("Hello, world!");
};

const add = (n1: number, n2: number, n3?: number): void => {
  console.log(n1 + n2);
  console.log(n3);
};

add(5, 10);

const minus = (n1: number, n2: number): number => {
    return n1 - n2;
}

let result = minus(10, 5);
