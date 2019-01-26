import * as React from 'react';
import './login.styl';
import LoginForm from './LoginForm';

class Login extends React.Component {
  render() {
    return (
      <section className="lobby-login">
        <LoginForm />
      </section>
    );
  }
}

export default Login;
