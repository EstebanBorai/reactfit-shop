import * as React from 'react';
import { Field, reduxForm } from 'redux-form'

interface IFormProps {
  handleSubmit?: any;
}

const LoginForm = (props: IFormProps) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      name="firstName" 
      component="input" 
      type="text"
    />
  </form>
);

export default reduxForm({
  form: 'login'
})(LoginForm)
