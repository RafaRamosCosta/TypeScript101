import { Invoice } from "./classes/Invoice.js"; // it has to be the .js file because the browser only interprets javascript
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form"); // uses the form type instead of the element type
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value !== "invoice")
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    list.render(doc, type.value, "end");
});
// Generics
// generic can capture the type of what's being passed
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: "yoshi",
    data: { name: "rafa", age: 18 },
};
const docFour = {
    uid: 1,
    resourceName: "yoshi",
    data: ["gloves", "belt", "helmet"],
};
