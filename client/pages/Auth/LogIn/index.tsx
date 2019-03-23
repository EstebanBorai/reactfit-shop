import * as React from 'react';
import './log-in.scss';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'components/Form';
import { required } from 'helpers/form-validation';

interface ILogInProps {
  onSubmit: Function;
  handleSubmit: Function;
  onSignUp: Function;
}

const LogIn = (props: ILogInProps) => (
    <section className="log-in">
      <h3>Welcome back to Chatter!</h3>
      <form className="c-form" onSubmit={form => props.handleSubmit(form)}>
        <Field
          placeholder="Username"
          name="username"
          type="text"
          component={InputField}
          validate={required}
        />
        <Field
          placeholder="Password"
          name="password"
          type="password"
          component={InputField}
          validate={required}
        />
        <footer className="c-item c-center">
          <a className="c-btn-anchor" onClick={() => props.onSignUp} role="button">
            Create an Account
          </a>
          <button className="c-btn primary" type="submit">
            Log In
          </button>
        </footer>
      </form>
    </section>
  );

export default reduxForm({
  form: 'login'
})(LogIn);
