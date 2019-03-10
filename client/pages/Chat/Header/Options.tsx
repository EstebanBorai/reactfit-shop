import * as React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPaperclip, faSearch } from '@fortawesome/free-solid-svg-icons';

const Options = () => (
  <ol className="chat-options">
    <li>
      <FontAwesomeIcon icon={faCamera} />
    </li>
    <li>
      <FontAwesomeIcon icon={faPaperclip} />
    </li>
    <li>
      <FontAwesomeIcon icon={faSearch} />
    </li>
  </ol>
);

export default Options;
