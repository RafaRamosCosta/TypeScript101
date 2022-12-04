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
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value !== "invoice")
        doc = new Invoice(...values);
    doc = new Payment(...values);
    list.render(doc, type.value, "end");
});
// tuples
let arr = ["ryu", 24, true];
arr[0] = false;
arr[1] = "ryu";
arr = [30, false, "yoshi"];
let tup = ["ryu", 30, true];
tup[0] = "yoshi";
tup[1] = 10;
let student;
student = ["chun-li", 94281];
