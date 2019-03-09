import * as React from 'react';
import './message-input.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MessageInput = () => (
  <div className="message-input">
    <form className="input-area">
      <input type="text" placeholder="Type a message" />
    </form>
    <button className="send-button">
      <FontAwesomeIcon icon={faPaperPlane} />
    </button>
  </div>
);

export default MessageInput;
