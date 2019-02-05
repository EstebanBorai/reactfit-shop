import * as React from 'react';
import './button.styl';
import { colorClasses, ColorClasses, Colors, Theme } from '../colors';

interface IButtonProps {
  text: string;
  type?: string;
  color?: string | ColorClasses;
  theme?: Theme;
  textColor?: string | ColorClasses;
  filled?: Boolean;
  onClick?: any;
}

const Button = (props: IButtonProps) => {
  const buttonStyle = {
    background: props.theme ? colorClasses[props.theme].background : 'transparent'
  }

  const buttonTextStyle = {
    color: props.theme ? colorClasses[props.theme].color : Colors.textDark
  }

  return (
    <button className="lobby-button" style={buttonStyle} type={props.type} onClick={props.onClick}>
      <span style={buttonTextStyle}>{props.text}</span>
    </button>
  );
};

export default Button;
