import * as React from 'react';
import './header.scss';
import HeaderAvatar from './HeaderAvatar';

interface IConceptProps {
  avatar?: string;
  title: string;
  status: string;
}

const Concept = (props: IConceptProps) => (
  <div className="chat-concept">
    {props.avatar ? <HeaderAvatar source={props.avatar} status="available" /> : null}
    <div className="main-data">
      <h4>{props.title}</h4>
      <span>{props.status}</span>
    </div>
  </div>
);

export default Concept;
