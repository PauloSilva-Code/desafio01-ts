import { companyAccount, peopleAccount, savingAccount } from "./app";

// People
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

// Company
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

// Saving
export function logDepositSaving(value: number): void {
  savingAccount.getDepositSaving(value);
  savingAccount.getBalance();
  console.log(savingAccount);
}
