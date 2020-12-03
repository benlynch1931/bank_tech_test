import PrintStatement from "../src/PrintStatement";

describe("PrintStatement", () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    logSpy.mockClear();
  });

  describe(" #printHeader", () => {
    test(" it prints PrintStatement headers", () => {
      PrintStatement.printHeader();
      const consoleLogSpy = logSpy.mock.calls;
      expect(consoleLogSpy[0][0]).toEqual("date || credit || debit || balance");
    });
  });

  describe(" #printInfo", () => {
    test(" it prints each credit", () => {
      PrintStatement.printInfo({
        credit: 500, debit: 0, date: "14/01/2012", newBalance: 500,
      });
      expect(logSpy.mock.calls[0][0]).toEqual("14/01/2012 || 500.00 ||  || 500.00");
    });

    test(" is prints each debit", () => {
      PrintStatement.printInfo({
        credit: 0, debit: 100, date: "14/11/2012", newBalance: -100,
      });
      expect(logSpy.mock.calls[0][0]).toEqual("14/11/2012 ||  || 100.00 || -100.00");
    });
  });

  describe(" #isZero", () => {
    test(" it returns empty string when value is zero", () => {
      expect(PrintStatement.checkZero(0)).toEqual("");
    });

    test(" it returns same value when value isn't zero", () => {
      expect(PrintStatement.checkZero(100)).toEqual((100).toFixed(2));
    });
  });

  describe(" #printAll", () => {
    test(" it iterates the activity array and prints each credit/debit", () => {
      PrintStatement.printAll([{
        date: "10/01/2012", credit: 1000, debit: 0, newBalance: 1000,
      }, {
        date: "14/01/2012", credit: 0, debit: 300, newBalance: 700,
      }]);
      const consoleLogSpy = logSpy.mock.calls;
      expect(consoleLogSpy[0][0]).toEqual("date || credit || debit || balance");
      expect(consoleLogSpy[2][0]).toEqual("10/01/2012 || 1000.00 ||  || 1000.00");
      expect(consoleLogSpy[1][0]).toEqual("14/01/2012 ||  || 300.00 || 700.00");
    });
  });
});
