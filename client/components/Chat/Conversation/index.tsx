import * as React from 'react';
import './conversation.styl';
import ChatHeader from './ChatHeader';

import InputField from './InputField';

class Conversation extends React.Component {
  render() {
    return (
      <div className="conversation">
        <ChatHeader subject="Hardcoded Subject" />
        <footer className="controls">
          <InputField />
        </footer>
      </div>
    );
  }
}

export default Conversation;
