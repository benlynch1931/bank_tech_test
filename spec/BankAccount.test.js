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
    expect(account.accountActivity).toEqual([])
  })

  describe(' #credit', () => {

    test('accountActivity updates with date and amount of credit', () => {
      expect(account.credit(1000, '10/01/2012')).toEqual([{'credit': 1000, 'debit': 0, 'date': '10/01/2012', 'newBalance': 1000}])
      expect(account.balance).toEqual(1000)
    })
  })

  describe(' #debit', () => {

    test('accountActivity updates with date and amount of debit', () => {
      expect(account.debit(500, '14/01/2012')).toEqual([{'credit': 0, 'debit': 500, 'date': '14/01/2012', 'newBalance': 0}])
    })

    test('owner cannot debit more than current balance', () => {
      expect(account.debit(500, '14/01/2012')).toEqual('Error: unsufficient funds, please review your balance before debiting...')
    })
  })
})
