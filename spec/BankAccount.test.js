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
})
