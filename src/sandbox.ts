// const anchor = document.querySelector("a")!; // the ! tells typescript that it should return some value

// console.log(anchor.href);

// // console.log(anchor?.href);

// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form") as HTMLFormElement; // uses the form type instead of the element type
//console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;

const tofrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
                                                            // method to return value as a number
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
