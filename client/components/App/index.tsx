import * as React from 'react';
import './app.styl';
import Chat from 'components/Chat';
import Authenticate from 'components/Authenticate';

const logged = null;

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        { logged ? <Chat /> : <Authenticate /> }
      </div>
    );
  }
}

export default App;
