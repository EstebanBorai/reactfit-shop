import * as React from 'react';
import './app.scss';
import SignIn from 'containers/pages/SignIn';

class App extends React.Component {
  render() {
    return (
      <div className="app-main">
        <SignIn />
      </div>
    );
  }
}

export default App;
