import PrintStatement from '../src/PrintStatement';


describe('PrintStatement', () => {
  var consoleLogSpy

  beforeEach(() => {
    // let consoleArr = [];
    consoleLogSpy = jest.spyOn(console, 'log')
  })

  describe(' #printHeader', () => {

    test(' it prints statement headers', () => {
      PrintStatement.printHeader()
      expect(consoleLogSpy.mock.calls[0][0]).toEqual("date || credit || debit || balance")
    })
  })

  
})
