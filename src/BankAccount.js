import PrintStatement from './PrintStatement';

export default class BankAccount {
  #balance;

  #accountActivity;

  constructor() {
    this.#balance = 0;
    this.#accountActivity = [];
    this.fundsError = "Error: insufficient funds, please review your balance.";
  }

  credit(deposit, date) {
    this.#accountActivity.push({
      credit: deposit, debit: 0, date, newBalance: this.#balance + deposit,
    });
    this.#balance += deposit;
    return this.#accountActivity;
  }

  debit(withdraw, date) {
    if (withdraw > this.#balance) {
      return this.fundsError;
    }
    this.#accountActivity.push({
      credit: 0, debit: withdraw, date, newBalance: this.#balance - withdraw,
    });
    this.#balance -= withdraw;
    return this.#accountActivity;
  }

  print() {
    PrintStatement.printAll(this.#accountActivity)
  }
}
