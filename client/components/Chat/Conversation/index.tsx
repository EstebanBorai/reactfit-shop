import * as React from 'react';
import './conversation.scss';
import Message from './Message';

const Conversation = () => (
  <ol className="conversation">
    <Message text="Hello" />
    <Message text="A very long message start like this and spread to the whole screen. Breaking my CSS." />
  </ol>
);

export default Conversation;
