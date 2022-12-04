import { Invoice } from "./classes/Invoice.js"; // it has to be the .js file because the browser only interprets javascript
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement; // uses the form type instead of the element type

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;

const tofrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value !== "invoice")
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);

  doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);

  list.render(doc, type.value, "end");
});

// Generics
// generic can capture the type of what's being passed
const addUID = <T extends { name: string; age: number }>(obj: T) => {
  let uid: number = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });

console.log(docOne);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "yoshi",
  data: { name: "rafa", age: 18 },
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: "yoshi",
  data: ["gloves", "belt", "helmet"],
};
