import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'containers/App';
import './index.css';
import './assets/chatter-ui.scss';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import reducers from 'reducers/index';
import thunk from 'redux-thunk';

declare global {
  interface Window { 
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
