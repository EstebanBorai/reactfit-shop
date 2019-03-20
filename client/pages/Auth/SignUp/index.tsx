import * as React from 'react';
import './sign-up.scss';
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

interface ISignUpProps {
  onLogIn: Function;
  handleSubmit: Function;
}

const SignUp = (props: ISignUpProps) => {
  const [randomUsername, setRandomUsername] = React.useState('');
  
  React.useEffect(() => {
    setRandomUsername(randomUsernames[Math.floor(Math.random() * ((randomUsernames.length - 1) - 0)) + 0]);
  }, []);

  const handleSubmit = formData => {
    props.handleSubmit(formData);
  }

  return (
    <section className="sign-up">
      <h3>Create an Account</h3>
      <form className="c-form" onSubmit={handleSubmit}>
        <fieldset className="c-fieldset c-two-fields">
          <Field
            label="First Name"
            name="firstName"
            type="text"
            placeholder="John"
            component={InputField}
            validate={required}
          />
          <Field
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Gates"
            component={InputField}
            validate={required}
          />
        </fieldset>
        <fieldset className="c-fieldset c-two-fields">
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="somehting@yourmail.com"
            component={InputField}
            validate={required}
          />
          <Field
            name="username"
            label="Username"
            type="text"
            placeholder={randomUsername}
            component={InputField}
            validate={[required, maxLength20, username, minLength3]}
          />
        </fieldset>
        <Field
          label="Country"
          name="country"
          type="text"
          placeholder="Somewhere in the ocean.."
          component={InputField}
          validate={required}
        />
        <footer className="c-item c-center">
          <a className="c-btn-anchor" onClick={() => props.onLogIn()} role="button">
            I already have an account
          </a>
          <button className="c-btn primary" type="submit">
            Continue
          </button>
        </footer>
      </form>
    </section>
  )
};

export default reduxForm({
  form: 'signup'
})(SignUp);
