import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Paulo", 10);
peopleAccount.deposit(500);
peopleAccount.withdraw(300);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(5000);
companyAccount.withdraw(1000);
console.log(companyAccount);
