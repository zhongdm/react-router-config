import React from 'react'
import renderer from 'react-test-renderer'
import login from '../src/pages/Login.js'

function Input () {
  return (
    <input />
  )
}
test('should required', () => {
  const component = renderer.create(<Login/>)
  const cInstance = component.root
  expect(cInstance.findAllByType(Input)[0].value).toBe('hello')
})