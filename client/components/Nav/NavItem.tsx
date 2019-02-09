import * as React from 'react';
import './nav.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

interface INavItemProps {
  icon: any;
  to: string;
  notify?: boolean;
}

const NavItem = (props: INavItemProps) => {
  return (
    <NavLink exact to={props.to}>
      <li className="nav-item">
        { 
          props.notify ? 
          <FontAwesomeIcon icon={faCircle} size="sm" className="nav-item-notification" /> : 
          null 
        }
        <FontAwesomeIcon icon={props.icon} size="lg" />
      </li>
    </NavLink>
  );
};

export default NavItem;
