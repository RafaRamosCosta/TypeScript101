// classes
class Invoice {
  // readonly client: string;  readonly => allows only to read client inside or outside the class
  // private details: string;  private => allows to read and change the details only inside the class
  // public amount: number;  public => allows to read and change the amount
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format(): string {
    return `${this.client} owes £${this.amount} for ${this.details}!`;
  }
}

const invOne = new Invoice("Rafael", "work on the website", 400);
const invTwo = new Invoice("Leo", "work on the API", 250);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement; // uses the form type instead of the element type

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
