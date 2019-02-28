import * as React from 'react';
import './chat.styl';
import * as io from 'socket.io-client';
import Management from './Management';
import Conversation from './Conversation';
import IChat from 'types/IChat';

const socket = io.connect('http://localhost:3001')

interface IChatProps {
  conversations: Array<IChat>;
}
interface IChatState {
  callback: any;
}

class Chat extends React.Component<IChatProps, IChatState> {
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
    const { conversations } = this.props;
    return (
      <section className="lobby-chat">
        <Management conversations={conversations} />
        <Conversation />
      </section>
    );
  }
}

export default Chat;
