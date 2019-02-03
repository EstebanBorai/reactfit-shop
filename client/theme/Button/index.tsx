import * as React from 'react';
import './button.styl';
import { colorClasses, ColorClasses } from '../colors';

interface IButtonProps {
  text: string;
  type?: string;
  color?: string | ColorClasses;
  textColor?: string | ColorClasses;
  filled?: Boolean;
  onClick?: any;
}

const Button = (props: IButtonProps) => {
  const buttonStyle = {
    background: colorClasses['primary'].background || colorClasses.primary.background
  }

  const buttonTextStyle = {
    color: colorClasses['primary'].color
  }

  return (
    <button className="lobby-button" style={buttonStyle} type={props.type} onClick={props.onClick}>
      <span style={buttonTextStyle}>{props.text}</span>
    </button>
  );
};

export default Button;
