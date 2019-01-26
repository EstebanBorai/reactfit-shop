import * as React from 'react';
import * as io from 'socket.io-client';

const socket = io.connect('http://localhost:3001')

interface IChatState {
  callback: any;
}

class Chat extends React.Component<{}, IChatState> {
  constructor(props) {
    super(props);

    this.state = {
      callback: null
    }
  }

  componentDidMount() {
    socket.emit('register');
    socket.on('registered', res => {
      this.setState({
        callback: JSON.stringify(res)
      })
    })
  }

  render() {
    return (
      <div>
        Hello from Chat
        {JSON.stringify(this.state.callback)}
      </div>
    );
  }
}

export default Chat;
