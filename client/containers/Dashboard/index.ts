import Dashboard from 'components/Dashboard';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux'; 
import { getUserConversations } from 'actions/chat';

const mapStateToProps = state => ({
  userId: state.app.logged._id
});

const mapDispatchToProps = dispatch =>  bindActionCreators(
  {
    onGetConversations: getUserConversations
  },
  dispatch
);

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onGetConversations: () => dispatchProps.onGetConversations(stateProps.userId)
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Dashboard);
