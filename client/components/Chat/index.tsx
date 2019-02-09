import * as React from 'react';
import './chat.styl';
import * as io from 'socket.io-client';
import Management from './Management';
import Conversation from './Conversation';

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
      <section className="lobby-chat">
        <Management />
        <Conversation />
      </section>
    );
  }
}

export default Chat;
