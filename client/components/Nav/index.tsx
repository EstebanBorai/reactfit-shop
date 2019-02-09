import * as React from 'react';
import './nav.styl';
import UserHeader from './UserHeader';
import NavItem from './NavItem';
import { faComments, faAddressBook, faUsers, faUser } from '@fortawesome/free-solid-svg-icons'

const Nav = () => (
  <nav className="lobby-nav">
    <UserHeader />
    <ul>
      <NavItem icon={faComments} active notify />
      <NavItem icon={faAddressBook} />
      <NavItem icon={faUsers} />
    </ul>
  </nav>
);

export default Nav;
