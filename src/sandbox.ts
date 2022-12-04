// classes
class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format(): string {
    return `${this.client} owes £${this.amount} for ${this.details}!`;
  }
}

const invOne = new Invoice("Rafael", "work on the website", 400);
const invTwo = new Invoice("Leo", "work on the API", 250);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invOne.client = "Mario";
invTwo.amount = 400;

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
