import SignIn from 'pages/SignIn';
import { signUp as onSubmit } from 'actions/user';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit
}, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);
