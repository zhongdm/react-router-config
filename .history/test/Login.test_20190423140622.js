let login = require('../src/pages/Login.js')

test('should required', () => {
  expect(login()).toBe('hello')
})