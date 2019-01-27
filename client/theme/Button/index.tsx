import * as React from 'react';
import './button.styl';
import { colorClasses, ColorClasses } from '../colors';

interface IButtonProps {
  text: string;
  color?: string | ColorClasses;
  textColor?: string | ColorClasses;
  filled?: Boolean;
}

const Button = (props: IButtonProps) => {
  const buttonStyle = {
    background: colorClasses['primary'].background || colorClasses.primary.background
  }

  const buttonTextStyle = {
    color: colorClasses['primary'].color
  }

  return (
    <button className="lobby-button" style={buttonStyle}>
      <span style={buttonTextStyle}>{props.text}</span>
    </button>
  );
};

export default Button;
