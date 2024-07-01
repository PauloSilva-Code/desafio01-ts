import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SavingAccount } from "./class/SavingAccount";
import {
  logDepositCompany,
  logDepositPeople,
  logDepositSaving,
  logLoanCompany,
  logWithdrawCompany,
  logWithdrawPeople,
} from "./functionAccount";

export const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nat", 10);
export const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
export const savingAccount: SavingAccount = new SavingAccount(5, "Paulo", 8);

logDepositPeople(1500);
logWithdrawPeople(500);

logDepositCompany(5000);
logWithdrawCompany(3000);
logLoanCompany(7000);

logDepositSaving(50);
