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

test('error', () => {
  expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
})

// test('should required', () => {
//   const component = renderer.create(<Login />)
//   const cInstance = component.root
//   expect(cInstance.findByProps({type:"text"}).props.value).toBe('hello')
// })