import * as React from "react";
import Header from "./Header";
import { connect as io } from 'socket.io-client';

class App extends React.Component {
  componentDidMount() {
    io('http://localhost:3000');
  }
  render() {
    return (
      <div>
        <Header title="Lobby" />
      </div>
    );
  }
}

export default App;
