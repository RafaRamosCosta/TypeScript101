import { Invoice } from "./classes/Invoice.js"; // it has to be the .js file because the browser only interprets javascript
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 300);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

console.log(docs);

// const invOne = new Invoice("Rafael", "work on the website", 400);
// const invTwo = new Invoice("Leo", "work on the API", 250);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement; // uses the form type instead of the element type

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;

const tofrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value !== "invoice")
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
e
  doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);

  console.log(doc);

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
