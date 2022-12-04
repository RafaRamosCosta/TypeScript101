const me = {
    name: "John",
    age: 30,
    speak(phrase) {
        console.log(phrase);
    },
    spend(value) {
        console.log("I spent ", value);
        return value;
    },
};
console.log(me);
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson(me);
import { Invoice } from "./classes/Invoice.js"; // it has to be the .js file because the browser only interprets javascript
const invOne = new Invoice("Rafael", "work on the website", 400);
const invTwo = new Invoice("Leo", "work on the API", 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form"); // uses the form type instead of the element type
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // method to return value as a number
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
