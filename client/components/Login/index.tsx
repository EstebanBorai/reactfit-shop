import * as React from 'react';
import './login.styl';
import AdContainer from './AdContainer';
import LoginForm from './LoginForm';

class Login extends React.Component {
  render() {
    return (
      <section className="lobby-login">
        <AdContainer />
        <LoginForm />
      </section>
    );
  }
}

export default Login;
