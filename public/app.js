import { Invoice } from "./classes/Invoice.js"; // it has to be the .js file because the browser only interprets javascript
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 300);
let docs = [];
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
const form = document.querySelector(".new-item-form"); // uses the form type instead of the element type
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value !== "invoice")
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    e;
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
