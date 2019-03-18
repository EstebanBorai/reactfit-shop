import * as React from 'react';
import './app.scss';
import Header from 'components/Header';
import SignUp from 'containers/pages/SignUp';

class App extends React.Component {
  render() {
    return (
      <div className="app-main">
        <Header />
        <SignUp />
      </div>
    );
  }
}

export default App;
