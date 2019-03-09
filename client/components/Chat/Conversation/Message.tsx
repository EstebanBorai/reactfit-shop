import * as React from 'react';
import './conversation.scss';

interface IMessageProps {
  text: string;
}

const Message = (props: IMessageProps) => (
  <li className="message-item">
    <div className="body">
      <p>{props.text}</p>
    </div>
  </li>
);

export default Message;
