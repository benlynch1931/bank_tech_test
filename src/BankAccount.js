"use strict";

export default class BankAccount {

  constructor() {
    this.balance = 0;
    this.accountActivity = [];
  }

  credit(deposit, date) {
    this.accountActivity.push({'credit': deposit, 'debit': 0, 'date': date, 'newBalance': this.balance + deposit});
    this.balance += deposit;
    return this.accountActivity
  }

  debit(withdraw, date) {
    this.accountActivity.push({'credit': 0, 'debit': withdraw, 'date': date, 'newBalance': this.balance - withdraw});
    this.balance -= withdraw;
    return this.accountActivity
  }
}
