"use strict";

export default class BankAccount {

  constructor() {
    this.balance = 0;
    this.accountActivity = [];
    this.insufficientFunds = 'Error: unsufficient funds, please review your balance before debiting...'
  }

  credit(deposit, date) {
    this.accountActivity.push({'credit': deposit, 'debit': 0, 'date': date, 'newBalance': this.balance + deposit});
    this.balance += deposit;
    return this.accountActivity
  }

  debit(withdraw, date) {
    if (withdraw > this.balance) { return this.insufficientFunds }
    this.accountActivity.push({'credit': 0, 'debit': withdraw, 'date': date, 'newBalance': this.balance - withdraw});
    this.balance -= withdraw;
    return this.accountActivity
  }
}
