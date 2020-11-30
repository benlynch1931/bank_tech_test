import BankAccount from '../src/BankAccount';

describe('BankAccount', () => {
  var account;

  beforeEach(() => {
    account = new BankAccount;
  })

  test('is instantiated', () => {
    expect(account).toBeInstanceOf(BankAccount)
  })

  test('balance and accountActivity variables are created', () => {
    expect(account.balance).toEqual(0)
    expect(account.activity).toEqual([])
  })

  describe(' #credit', () => {

    test('activity updates with date and amount of credit', () => {
      expect(account.credit(1000, '10/01/2012')).toEqual([{'credit': 1000, 'debit': 0, 'date': '10/01/2012', 'newBalance': 1000}])
      expect(account.balance).toEqual(1000)
    })
  })
})
