import BankAccount from '../src/BankAccount';

describe('BankAccount', () => {
  var account;

  beforeEach(() => {
    account = new BankAccount;
  })

  test('is instantiated', () => {
    expect(account).toBeInstanceOf(BankAccount)
  })
})
