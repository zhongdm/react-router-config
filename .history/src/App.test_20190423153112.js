// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


import React from 'react'
import TestRenderer from 'react-test-renderer'
import Login from './pages/Login.js'
import Home from './pages/Home.js'

it('should be equal', () => {
  const component = TestRenderer.create(<Home ctx="1231" />)
  const cInstance = component.root
  expect(cInstance.findByProps().props.ctx).toBe('1231')
})

it('should required', () => {
  const component = TestRenderer.create(<Login />)
  // const cInstance = component.root
  // expect(cInstance.findByProps().props.ctx).toBe('1231')
})