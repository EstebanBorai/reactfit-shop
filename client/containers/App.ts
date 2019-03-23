import App from 'components/App';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  logged: state.app.logged
});

export default connect(mapStateToProps)(App);
