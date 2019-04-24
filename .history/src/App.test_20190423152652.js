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

function MyComponent() {
  return (
    <div>
      <SubComponent foo="bar" />
      <p className="my">Hello</p>
    </div>
  )
}

function SubComponent() {
  return (
    <p className="sub">Sub</p>
  );
}

const testRenderer = TestRenderer.create(<MyComponent />);
const testInstance = testRenderer.root;

// test('error', () => {
//   expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
// })

it('should required', () => {
  let Clj = (
  <Home ctx="1231" />
  )
  const component = TestRenderer.create(Clj)
  const cInstance = component.root
  // expect(cInstance.findByProps({ctx: '1231'}).props.ctx).toBe('123')
  expect(cInstance.findByType(Clj.props.ctx).toBe('123')
})