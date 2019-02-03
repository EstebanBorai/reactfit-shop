import * as React from 'react';
import { Field } from 'redux-form';
import './form.styl';

type selectFieldOption = {
  label: any;
  value: any;
}

interface ISelectProps {
  name: string;
  placeholder?: string;
  label?: string;
  options: Array<selectFieldOption>,
  input?: object
}

const CustomSelect = (props: ISelectProps) => (
  <div className="lobby-form-input-default lobby-input-select">
    { props.label ? <label>{props.label}</label> : null }
      <select {...props.input}>
        <option className="lobby-select-placeholder">{props.placeholder || '' }</option>
        {
          props.options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))
        }
      </select>
  </div>
);

const Select = (props: ISelectProps) => (
  <Field
    component={CustomSelect}
    {...props}
  />
)

export default Select;
