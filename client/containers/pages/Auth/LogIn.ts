import LogIn from 'pages/Auth/LogIn';
import { signUp as onSubmit } from 'actions/user';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit
}, dispatch);

export default connect(null, mapDispatchToProps)(LogIn);
