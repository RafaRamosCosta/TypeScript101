// classes
export class Invoice {
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
