import BankAccount from '../src/BankAccount.js';

describe("feature testing", () => {
  let account = new BankAccount();
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    logSpy.mockClear();
  });

  test("I can add money to my account", () => {
    expect(account.credit(1000, '10/01/2012')).toEqual([{
      credit: 1000, debit: 0, date: "10/01/2012", newBalance: 1000
    }])
  });

  test('I can view my statement with one transaction', () => {
    account.print()
    expect(logSpy.mock.calls[0][0]).toEqual("date || credit || debit || balance")
    expect(logSpy.mock.calls[1][0]).toEqual("10/01/2012 || 1000.00 ||  || 1000.00")
  })

  test("I can't debit more than my balance", () => {
    account.credit(2000, '13/01/2012')
    expect(account.debit(8000, '20/01/2012')).toEqual("Error: insufficient funds, please review your balance.")
  })

  test("I can debit my account", () => {
    expect(account.debit(500, '14/01/2012')).toEqual([
      { credit: 1000, debit: 0, date: "10/01/2012", newBalance: 1000},
      { credit: 2000, debit:  0, date: "13/01/2012", newBalance: 3000},
      { credit: 0, debit:  500, date: "14/01/2012", newBalance: 2500}
    ])
  })
  test("I can view my transactions", () => {
    account.print()
    expect(logSpy.mock.calls[0][0]).toEqual("date || credit || debit || balance")
    expect(logSpy.mock.calls[1][0]).toEqual("14/01/2012 ||  || 500.00 || 2500.00")
    expect(logSpy.mock.calls[2][0]).toEqual("13/01/2012 || 2000.00 ||  || 3000.00")
    expect(logSpy.mock.calls[3][0]).toEqual("10/01/2012 || 1000.00 ||  || 1000.00")
  })
})
