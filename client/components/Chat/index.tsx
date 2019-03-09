import * as React from 'react';
import './chat.scss';
import Header from './Header';
import MessageInput from './MessageInput';
import Conversation from './Conversation';

const Chat = () => (
  <section className="chat">
    <Header />
    <Conversation />
    <MessageInput />
  </section>
);

export default Chat;
