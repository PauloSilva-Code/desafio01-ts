import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SavingAccount } from "./class/SavingAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nat", 10);

export function logDepositPeople(value: number): void {
  peopleAccount.deposit(value);
  peopleAccount.getBalance();
  console.log(peopleAccount);
}

export function logWithdrawPeople(value: number): void {
  peopleAccount.withdraw(value);
  peopleAccount.getBalance();
  console.log(peopleAccount);
}

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);

export function logDepositCompany(value: number): void {
  companyAccount.deposit(value);
  companyAccount.getBalance();
  console.log(companyAccount);
}

export function logWithdrawCompany(value: number): void {
  companyAccount.withdraw(value);
  companyAccount.getBalance();
  console.log(companyAccount);
}

export function logLoanCompany(value: number): void {
  companyAccount.getLoan(value);
  companyAccount.getBalance();
  companyAccount.showLoan();
  console.log(companyAccount);
}

const savingAccount: SavingAccount = new SavingAccount(5, "Paulo", 8);

export function logDepositSaving(value: number): void {
  savingAccount.getDepositSaving(value);
  savingAccount.getBalance();
  console.log(savingAccount);
}

logDepositSaving(50);
