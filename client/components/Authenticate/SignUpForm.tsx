import * as React from 'react';
import './login.styl';
import { reduxForm } from 'redux-form'
import { Input, Select, Button, Colors, ButtonContainer } from 'theme/index';
import Footer from './Footer';

interface IFormProps {
  handleSubmit?: any;
  onToggleForm: Function
}

const genreOptions = [
  { label: 'Female', value: 'f' }, 
  { label: 'Male', value: 'm' },
  { label: 'Rather no specify', value: '0' }
];

const SignUpForm = (props: IFormProps) => (
  <div className="login-form">
    <h1>Lobby</h1>
    <form onSubmit={props.handleSubmit}>
      <Input name="firstName" placeholder="First Name" />
      <Input name="lastName" placeholder="Last Name" />
      <Input name="email" placeholder="Email" type="email" />
      <Input name="country" placeholder="Country" />
      <Input name="username" placeholder="Username" />
      <Input name="password" placeholder="Password" type="password" />
      <Input name="passwordCheck" placeholder="Retype Password" type="password" />
      <Select name="genre" options={genreOptions} placeholder="Genre" />
      <ButtonContainer>
        <Button text="Sign Up" theme="primary" />
        <Button text="Sign In" color={Colors.secondary} onClick={props.onToggleForm} />
      </ButtonContainer>
    </form>
    <Footer />
  </div>
);

export default reduxForm({
  form: 'signup'
})(SignUpForm)
