import * as React from 'react';
import './nav.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface IUserHaderProps {
  avatar?: String | any;
}

const UserHeader = (props: IUserHaderProps) => (
  <header className="user-avatar">
    { 
      props.avatar ? 
      <img src={props.avatar} alt="user-avatar" className="user-avatar" /> :  
      <FontAwesomeIcon icon={faUser} size="lg" />
    }
  </header>
);

export default UserHeader;
