import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  private CNPJ: boolean = true;
  private loan: number = 10000;

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): number => {
    if (value < this.loan && this.validateCnpj()) {
      console.log(`🏦 Voce pegou um empréstimo de $${value}\n`);
    } else {
      throw new Error(
        `Desculpa, mas você não pode solicitar um empréstimo maior que o valor disponível!`
      );
    }

    this.loan -= value;
    this.balance += value;

    return this.loan && this.balance;
  };

  showLoan = (): void => {
    console.log(`🏦 empréstimo disponível $${this.loan}\n`);
  };

  private validateCnpj = (): boolean => {
    if (this.CNPJ) {
      return this.CNPJ;
    }

    throw new Error("Empréstimo não disponível");
  };
}
