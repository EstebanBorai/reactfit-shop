import * as React from 'react';
import { Field } from 'redux-form';
import './input.styl';

interface IInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
}

const Input = (props: IInputProps) => (
  <div className="lobby-input">
    { props.label ? <label>{props.label}</label> : null }
    <Field
      name={props.name}
      component="input" 
      type={props.type || 'text'}
      placeholder={props.placeholder || null}
    />
  </div>
);

export default Input;
