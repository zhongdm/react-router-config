import React from 'react'
import renderer from 'react-test-renderer'
import Login from '../src/pages/Login.js'


test('should required', () => {
  const component = renderer.create(<Login />)
  const cInstance = component.root
  expect(cInstance.findByProps({type:"text"}).props.value).toBe('hello')
})