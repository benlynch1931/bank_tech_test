"use strict";

export default class PrintStatement {

  static printHeader() {
    console.log("date || credit || debit || balance")
  }

  static printInfo(activity) {
    console.log(`${activity["date"]} || ${PrintStatement.isZero(activity["credit"])} || ${PrintStatement.isZero(activity["debit"])} || ${activity["newBalance"]}`)
  }

  static isZero(value) {
    if (value === 0) { return "" } else { return value }
  }

  static printAll(accountActivity) {
    accountActivity = accountActivity.reverse()
    PrintStatement.printHeader()
    for(var i = 0; i < accountActivity.length; i++) {
      PrintStatement.printInfo(accountActivity[i])
    }
  }
}
