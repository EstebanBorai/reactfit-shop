import * as React from 'react';
import LogIn from 'containers/pages/Auth/LogIn';
import SignUp from 'containers/pages/Auth/SignUp';

const Auth = () => {
  const [isNewUser, setNewUser] = React.useState(false);

  const toggleSignUp = () => setNewUser(!isNewUser);

  return (
    <section>
      { isNewUser ? <SignUp onLogIn={toggleSignUp} /> : <LogIn onSignUp={toggleSignUp} /> }
    </section>
  );
};

export default Auth;
