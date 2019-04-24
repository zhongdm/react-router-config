import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducers from './store/reducers'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
