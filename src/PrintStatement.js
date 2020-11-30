"use strict";

export default class PrintStatement {

  static printHeader() {
    console.log("date || credit || debit || balance")
  }

  static printInfo(activity) {
    console.log(`${activity["date"]} || ${activity['credit']} ||  || ${activity["newBalance"]}`)
  }

  static isZero(value) {
    if (value === 0) { return "" } else { return value }
  }
}
