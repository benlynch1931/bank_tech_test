export default class PrintStatement {
  static printHeader() {
    console.log("date || credit || debit || balance");
  }

  static printInfo(activity) {
    const credit = PrintStatement.isZero(activity.credit);
    const debit = PrintStatement.isZero(activity.debit);
    // object destructuring to access two properties of the object
    const [date,,, balance] = activity;
    console.log(`${date} || ${credit} || ${debit} || ${balance}`);
  }

  static isZero(value) {
    if (value === 0) { return ""; }
    return value;
  }

  static printAll(accountActivity) {
    const accountActivityRev = accountActivity.reverse();
    PrintStatement.printHeader();
    for (let i = 0; i < accountActivityRev.length; i += 1) {
      PrintStatement.printInfo(accountActivityRev[i]);
    }
  }
}
