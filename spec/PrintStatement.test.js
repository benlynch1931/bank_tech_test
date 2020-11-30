import PrintStatement from '../src/PrintStatement';


describe('PrintStatement', () => {
  var consoleLogSpy

  beforeEach(() => {
    // let consoleArr = [];
    consoleLogSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleLogSpy.mockClear();
  })

  describe(' #printHeader', () => {

    test(' it prints statement headers', () => {
      PrintStatement.printHeader()
      expect(consoleLogSpy.mock.calls[0][0]).toEqual("date || credit || debit || balance")
    })
  })

  describe(' #printInfo', () => {

    test(' it prints each credit', () => {
      PrintStatement.printInfo({'credit': 500, 'debit': 0, 'date': '14/01/2012', 'newBalance': 500})
      expect(consoleLogSpy.mock.calls[0][0]).toEqual("14/01/2012 || 500 ||  || 500")
    })
  })

  describe(' #isZero', () => {

    test(' it returns empty string when value is zero', () => {
      expect(PrintStatement.isZero(0)).toEqual('')
    })
  })
})
