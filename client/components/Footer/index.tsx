import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import './footer.scss';

const Footer = () => (
  <footer className="site-footer">
    <small>エステバン ボライ | <FontAwesomeIcon icon={faGithub} />&nbsp;gitpullsh | {new Date().getFullYear()}</small>
  </footer>
);

export default Footer;
