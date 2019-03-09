import * as React from 'react';
import './header.scss';

interface IHeaderAvatar {
  status: string;
  source?: string;
}

const HeaderAvatar = (props: IHeaderAvatar) => (
  <div className="header-avatar">
    <img src={props.source} alt="Concept Avatar" />
    <div className="status-dot">&nbsp;</div>
  </div>
)

export default HeaderAvatar;
