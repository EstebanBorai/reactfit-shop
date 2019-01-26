import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'components/App';
import './index.styl';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from 'reducers/index';

declare global {
  interface Window { 
    __REDUX_DEVTOOLS_EXTENSION__: any; 
  }
}

const rootElement = 'app';
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(rootElement)
);
