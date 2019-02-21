import * as React from 'react';
import '../chat.styl';

interface IConversationItemProps {
  name: string;
  lastMessage: string;
}

const ConversationItem = (props: IConversationItemProps) => (
  <li className="conversation-item active">
    <h4>{props.name}</h4>
    <em>{props.lastMessage}</em>
  </li>
);

export default ConversationItem;
