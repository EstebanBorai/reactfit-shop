import * as React from 'react';
import './button.styl';

interface IButtonContainerProps {
  children: JSX.Element[] | JSX.Element ;
}

const ButtonContainer = (props: IButtonContainerProps) => (
    <div className="lobby-button-container">
      {props.children}
    </div>
);

export default ButtonContainer;
