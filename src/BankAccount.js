"use strict";

export default class BankAccount {

  constructor() {
    this.balance = 0;
    this.activity = [];
  }

  credit(deposit, date) {
    this.activity.push({'credit': deposit, 'debit': 0, 'date': date, 'newBalance': this.balance + deposit});
    this.balance += deposit;
    return this.activity
  }
}
