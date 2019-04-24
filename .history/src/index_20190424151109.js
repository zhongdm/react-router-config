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
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'http://a8a010e4d80143d19509fab9e2899df7:e6c9edc95dc94d2c9f0ad8fc7b88ac0a@127.0.0.1:9000/5',
  debug: true
})

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
