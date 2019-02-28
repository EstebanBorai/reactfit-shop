import * as React from 'react';
import '../chat.styl';
import Search from './Search';
import ConversationItem from './ConversationItem';
import IChat from 'types/IChat';

interface IManagementProps {
  conversations: Array<IChat>;
}

class Management extends React.Component<IManagementProps> {
  render() {
    const { conversations } = this.props;
    return (
      <aside className="management">
        <Search placeholder="Search conversations..." />
        <ul className="conversations-list">
          {
            conversations && conversations.map((chatItem, index) => (
              <ConversationItem name={chatItem.name} lastMessage="missing" key={index} />
            ))
          }
        </ul>
      </aside>
    );
  }
}

export default Management;
