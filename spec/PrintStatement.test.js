import PrintStatement from '../src/PrintStatement';


describe('PrintStatement', () => {
  var consoleLogSpy

  beforeEach(() => {
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

    test(' is prints each debit', () => {
      PrintStatement.printInfo({'credit': 0, 'debit': 100, 'date': '14/11/2012', 'newBalance': -100})
      expect(consoleLogSpy.mock.calls[0][0]).toEqual("14/11/2012 ||  || 100 || -100")
    })
  })

  describe(' #isZero', () => {

    test(' it returns empty string when value is zero', () => {
      expect(PrintStatement.isZero(0)).toEqual('')
    })

    test(" it returns same value when value isn't zero", () => {
      expect(PrintStatement.isZero(100)).toEqual(100)
    })
  })

  describe(' #printAll', () => {

    test(' it prints the header', () => {
      PrintStatement.printAll()
      expect(consoleLogSpy.mock.calls[0][0]).toEqual("date || credit || debit || balance")
    })
  })
})
