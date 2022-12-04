"use strict";
// classes
class Invoice {
    // readonly client: string;  readonly => allows only to read client inside or outside the class
    // private details: string;  private => allows to read and change the details only inside the class
    // public amount: number;  public => allows to read and change the amount
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}!`;
    }
}
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
