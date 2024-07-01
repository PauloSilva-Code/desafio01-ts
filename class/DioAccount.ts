export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): number => {
    if (this.validateStatus()) {
      console.log(`🏦 Voce depositou $${value}\n`);
    }

    return (this.balance += value);
  };

  withdraw = (value: number): number => {
    if (this.validateStatus() && value < this.balance) {
      console.log(`🏦 Voce sacou $${value}\n`);
    } else {
      throw new Error(
        `Desculpa, mas você não pode solicitar uma retirada maior que seu saldo!`
      );
    }

    return (this.balance -= value);
  };

  getBalance = (): void => {
    console.log(`🏦 Seu saldo atual é $${this.balance}\n`);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
