import { DioAccount } from "./DioAccount";

export class SavingAccount extends DioAccount {
  private doc_id: number;
  private increase = 100;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  getDepositSaving(value: number): number {
    console.log(`🏦 Voce depositou $${value}\n`);

    if (value) {
      value += this.increase;
      this.balance += value;
    }

    return this.balance;
  }
}
