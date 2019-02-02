import SignInForm from 'components/Login/SignInForm';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux'; 
import { signIn } from 'actions/auth';

const mapStateToProps = state => ({
  loading: state.sections.auth.loading,
  error: state.sections.auth.error
});

const mapDispatchToProps = dispatch =>  bindActionCreators(
  {
    onSubmit: signIn
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
