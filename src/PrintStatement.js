export default class PrintStatement {
  static printHeader() {
    console.log("date || credit || debit || balance");
  }

  static printInfo(activity) {
    console.log(`${activity.date} || ${PrintStatement.isZero(activity.credit)} || ${PrintStatement.isZero(activity.debit)} || ${activity.newBalance}`);
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
