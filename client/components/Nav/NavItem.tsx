import * as React from 'react';
import './nav.styl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons';

interface INavItemProps {
  icon: any;
  active?: boolean;
  notify?: boolean;
}

const NavItem = (props: INavItemProps) => {
  const className = props.active ? 'nav-item active' : 'nav-item';
  return (
    <li className={className}>
      { 
        props.notify ? 
        <FontAwesomeIcon icon={faCircle} size="sm" className="nav-item-notification" /> : 
        null 
      }
      <FontAwesomeIcon icon={props.icon} size="lg" />
    </li>
  );
};

export default NavItem;
