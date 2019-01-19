import * as React from 'react';
import Aside from './Aside';
import { connect } from 'socket.io-client';

class App extends React.Component {
  componentDidMount() {
    connect('http://localhost:3000');
  }

  render() {
    return (
      <div>
        <Aside />
      </div>
    );
  }
}

export default App;
