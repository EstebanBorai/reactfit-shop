import * as React from 'react';
import './sign-in.scss';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'components/Form';
import { required, maxLength, username } from 'helpers/form-validation';

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

const maxLength20 = maxLength(20);

const SignIn = () => {
  const [randomUsername, setRandomUsername] = React.useState('');
  
  React.useEffect(() => {
    setRandomUsername(randomUsernames[Math.floor(Math.random() * ((randomUsernames.length - 1) - 0)) + 0]);
  });

  return (
    <section className="sign-in">
      <header>
        <h1 className="c-heading">Welcome to Chatter!</h1>
      </header>
      <main>
        <h3>Lets start by creating an username!</h3>
        <form className="c-form">
          <Field
            label="Username"
            name="username"
            type="text"
            placeholder={randomUsername}
            component={InputField}
            validate={[required, maxLength20, username]}
          />
        </form>
        <button className="c-btn primary">
          Chat now
        </button>
        <p className="copyright-terms">
          <span>
            By clicking Chat now, you agree to our Terms, Data Policy and Cookies Policy.
          </span>
          <em>Chatter, Inc &copy; {new Date().getFullYear()}</em>
        </p>
      </main>
    </section>
  )
};

export default reduxForm({
  form: 'signin'
})(SignIn);
