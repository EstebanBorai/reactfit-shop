import * as React from 'react';
import './sign-in.scss';
import { Field, reduxForm } from 'redux-form';
import { InputField } from 'components/Form';
import { required, maxLength, minLength, username } from 'helpers/form-validation';

const steps = {
  'USERNAME': 1,
  'AVATAR': 2,
};

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
const minLength3 = minLength(3);

const SignIn = () => {
  const [randomUsername, setRandomUsername] = React.useState('');
  const [step, setStep] = React.useState(steps.USERNAME);
  
  React.useEffect(() => {
    setRandomUsername(randomUsernames[Math.floor(Math.random() * ((randomUsernames.length - 1) - 0)) + 0]);
  }, []);

  const handleContinue = () => setStep(steps.AVATAR);

  return (
    <section className="sign-in">
      <header>
        <h1 className="c-heading">Welcome to Chatter!</h1>
      </header>
      <main>
        <h3>
          {
            step === steps.AVATAR ?
            'Choose an avatar!':
            'Lets start by creating an username!'
          }
        </h3>
        <form className="c-form">
          {
            step === steps.AVATAR ?
            <div className="preview-avatar">
              <img src="http://s7d2.scene7.com/is/image/PetSmart/AR1501_LIST_ITEM5-Hamsters-20161205?$AR0201$" alt="Avatar"/>
            </div> :
            null
          }
          <Field
            name="username"
            type="text"
            placeholder={randomUsername}
            component={InputField}
            validate={[required, maxLength20, username, minLength3]}
          />
        </form>
        <button className="c-btn primary" onClick={handleContinue}>
          {
            step === steps.AVATAR ?
            'Chat now' :
            'Continue'
          }
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
