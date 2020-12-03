export default class PrintStatement {
  static printHeader() {
    console.log("date || credit || debit || balance");
  }

  static printInfo(activity) {
    const credit = PrintStatement.checkZero(activity.credit);
    const debit = PrintStatement.checkZero(activity.debit);
    // object destructuring to access two properties of the object
    const { date, newBalance } = activity;
    console.log(`${date} || ${credit} || ${debit} || ${newBalance.toFixed(2)}`);
  }

  static checkZero(value) {
    return value ? value.toFixed(2) : ""
  }

  static printAll(accountActivity) {
    const accountActivityRev = accountActivity.reverse();
    PrintStatement.printHeader();
    accountActivityRev.forEach(function(activity) {
      PrintStatement.printInfo(activity);
    })
  }
}
