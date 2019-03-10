import * as React from 'react';
import './sign-in.scss';

const randomUsernames = [
  'intelligent_zombie',
  'google_was_my_idea',
  'image_not_uploaded',
  'google_me_now',
  'i_love_my_mommy',
  'cereal_killer',
  'not_james_bond',
  'anonymouse'
];

const SignIn = () => {
  const [randomUsername, setRandomUsername] = React.useState('');
  
  React.useEffect(() => {
    setRandomUsername(randomUsernames[Math.floor(Math.random() * ((randomUsernames.length - 1) - 0)) + 0]);
  });

  return (
    <section className="sign-in">
      <header>
        <h2>Welcome to Chatter</h2>
      </header>
      <main>
        <h3>Enter your username</h3>
        <form className="c-form">
          <input type="text" placeholder={randomUsername} />
        </form>
        <button className="c-btn primary">
          Chat now
        </button>
        <p className="c-info">
          Give yourself a username so people can recognize you in the chat!
        </p>
        <p className="copyright-terms">
          <p>
            By clicking Chat now, you agree to our Terms, Data Policy and Cookies Policy.
          </p>
          <em>Chatter, Inc &copy; {new Date().getFullYear()}</em>
        </p>
      </main>
    </section>
  )
};

export default SignIn;
