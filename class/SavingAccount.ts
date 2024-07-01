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
      value += this.increase; // 50 + 100 = 150
      this.balance += value; // 150  joga balance
    }

    return this.balance;
  }
}
