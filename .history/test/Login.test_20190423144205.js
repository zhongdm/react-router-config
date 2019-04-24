import React from 'react'
import renderer from 'react-test-renderer'
import login from '../src/pages/Login.js'


test('should required', () => {
  expect(login()).toBe('hello')
})