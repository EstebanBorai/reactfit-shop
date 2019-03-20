import * as React from 'react';
import './app.scss';
import Header from 'components/Header';
import Auth from 'pages/Auth';

class App extends React.Component {
  render() {
    return (
      <div className="app-main">
        <Header />
        <Auth />
      </div>
    );
  }
}

export default App;
