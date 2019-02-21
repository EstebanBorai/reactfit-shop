import * as React from 'react';
import '../chat.styl';
import Search from './Search';
import ConversationItem from './ConversationItem';

class Management extends React.Component {
  render() {
    return (
      <aside className="management">
        <Search placeholder="Search conversations..." />
        <ul className="conversations-list">
          <ConversationItem name="Harcoded Test" lastMessage="Lorem Ipsum..." />
        </ul>
      </aside>
    );
  }
}

export default Management;
