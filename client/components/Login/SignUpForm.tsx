import * as React from 'react';
import './login.styl';
import { reduxForm } from 'redux-form'
import { Input, Button, Colors, ButtonContainer } from 'theme/index';
import Footer from './Footer';

interface IFormProps {
  handleSubmit?: any;
  onToggleForm: Function
}

const SignUpForm = (props: IFormProps) => (
  <div className="login-form">
    <h1>Lobby</h1>
    <form onSubmit={props.handleSubmit}>
      <Input name="firstName" placeholder="First Name" />
      <Input name="lastName" placeholder="Last Name" />
      <Input name="email" placeholder="Email" type="email" />
      <Input name="username" placeholder="Username" />
      <ButtonContainer>
        <Button text="Sign Up" />
        <Button text="Sign In" color={Colors.secondary} onClick={props.onToggleForm} />
      </ButtonContainer>
    </form>
    <Footer />
  </div>
);

export default reduxForm({
  form: 'signup'
})(SignUpForm)
