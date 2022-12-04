import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes
export class Payment implements HasFormatter {
  constructor(
    readonly recepient: string,
    private details: string,
    public amount: number
  ) {}

  format(): string {
    return `${this.recepient} is owed £${this.amount} for ${this.details}!`;
  }
}
