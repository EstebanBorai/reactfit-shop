import App from 'components/App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './d.ts';

import './assets/theme.scss';
import './index.scss';

import { Provider } from 'react-redux';
import reducers from 'reducers/index';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

declare global {
  interface Window { // tslint:disable-line
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }

  const API_URL: string;
}

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
