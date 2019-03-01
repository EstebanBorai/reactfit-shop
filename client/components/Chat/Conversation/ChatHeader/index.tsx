import * as React from 'react';
import './chat-header.styl';

interface IChatHeaderProps {
  subject: string;
  avatar?: string;
}

const ChatHeader = (props: IChatHeaderProps) => (
  <header className="chat-header">
    {
      props.avatar ?
      <img className="chat-avatar-preview" src={props.avatar} alt="Chat Avatar" /> :
      null
    }
    <h2>{props.subject}</h2>
  </header>
);

export default ChatHeader;
