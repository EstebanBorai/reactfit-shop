import * as React from 'react';
import './login.styl';
import { reduxForm } from 'redux-form'
import { Input, Button, Colors, ButtonContainer } from 'theme/index';
import Footer from './Footer';

interface IFormProps {
  handleSubmit?: any;
  loading: boolean,
  error?: object,
  onToggleForm: Function
}

const SignInForm = (props: IFormProps) => (
  <div className="login-form">
    <h1>Lobby</h1>
    <form onSubmit={props.handleSubmit}>
      <Input name="username" placeholder="Username" />
      <Input name="password" type="password" placeholder="Password" />
      <ButtonContainer>
        <Button text="Sign In" type="submit" />
        <Button text="Register" color={Colors.secondary} onClick={props.onToggleForm} />
      </ButtonContainer>
    </form>
    <Footer />
  </div>
);

export default reduxForm({
  form: 'signin'
})(SignInForm)
