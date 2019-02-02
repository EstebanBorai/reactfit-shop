import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'components/App';
import './index.styl';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers/index';
import thunk from 'redux-thunk';

declare global {
  interface Window { 
    __REDUX_DEVTOOLS_EXTENSION__: any; 
  }

  const API_URL: string;
}

const rootElement = 'app';
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
  document.getElementById(rootElement)
);
