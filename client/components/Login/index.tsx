import * as React from 'react';
import './login.styl';
import AdContainer from './AdContainer';
import SignInForm from 'containers/Login/SignInForm';
import SignUpForm from './SignUpForm';

interface ILoginState {
  signUp: boolean
}

class Login extends React.Component<{}, ILoginState> {
  constructor(props) {
    super(props);

    this.state = {
      signUp: false
    }
  }

  toggleForm = () => this.setState({ signUp: !this.state.signUp });

  render() {
    const { signUp } = this.state;
    return (
      <section className="lobby-login">
        <AdContainer />
        {
          signUp ?
          <SignUpForm onToggleForm={this.toggleForm} /> :
          <SignInForm onToggleForm={this.toggleForm} />
        }
      </section>
    );
  }
}

export default Login;
