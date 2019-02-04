import SignUpForm from 'components/Authenticate/SignUpForm';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux'; 
import { signUp } from 'actions/auth';

const mapStateToProps = state => ({
  loading: state.sections.auth.loading,
  error: state.sections.auth.error
});

const mapDispatchToProps = dispatch =>  bindActionCreators(
  {
    onSubmit: signUp
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
