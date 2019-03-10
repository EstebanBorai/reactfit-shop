import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'components/App';
import './index.css';
import './assets/chatter-ui.scss';
declare global {
  interface Window { 
    __REDUX_DEVTOOLS_EXTENSION__: any; 
  }

  const API_URL: string;
}

ReactDOM.render(
    <App />,
  document.getElementById('app')
);
