import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import routes from './router'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

ReactDOM.render((
  <BrowserRouter>
    {/* kick it all off with the root route */}
    {renderRoutes(routes)}
  </BrowserRouter>
), document.getElementById('root'))
// ReactDOM.render(
//   Router,
//   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
