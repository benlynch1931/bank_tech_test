import BankAccount from "../src/BankAccount";
import PrintStatement from "../src/PrintStatement";

describe("BankAccount", () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

  describe(" #credit", () => {
    test("accountActivity updates with date and amount of credit", () => {
      expect(account.credit(1000, "10/01/2012")).toEqual([{
        credit: 1000, debit: 0, date: "10/01/2012", newBalance: 1000,
      }]);
    });
  });

  describe(" #debit", () => {
    test("accountActivity updates with date and amount of debit", () => {
      account.credit(500, "14/01/2012");
      expect(account.debit(500, "14/01/2012")).toEqual([{
        credit: 500, debit: 0, date: "14/01/2012", newBalance: 500,
      }, {
        credit: 0, debit: 500, date: "14/01/2012", newBalance: 0,
      }]);
    });

    test("owner cannot debit more than current balance", () => {
      expect(account.debit(500, "14/01/2012")).toEqual("Error: insufficient funds, please review your balance.");
    });
  });

  describe(" #print", () => {
    test("method calls PrintStatement methods", () => {
      const printing = jest.spyOn(PrintStatement, "printAll");
      account.print();
      expect(printing).toHaveBeenCalled();
    });
  });
});
