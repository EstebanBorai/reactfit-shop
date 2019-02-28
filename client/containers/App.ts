import App from 'components/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { me as onMount } from 'actions/auth';

const mapStateToProps = state => ({
  logged: state.app.logged,
  loading: state.app.loading
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    onMount
  }, 
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
